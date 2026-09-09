import { createContext, useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dadosCliente, setDadosCliente] = useState(null);

  useEffect(() => {
    async function buscarDados() {
      if (user?.id) {
        const { data, error } = await supabase
          .from('clientes')
          .select('*, pedidos!cliente_id(*), address(*), payment(*)')
          .eq('id', user.id)
          .single();
        
        if (data) {
          setDadosCliente(data);
        }
        
        if (error) {
          console.error('Erro detalhado do Supabase:', error.message); 
          console.error('Código do erro:', error.code);
        }
      }
    }
    
    buscarDados();
  }, [user]);

  // Sincronização e limpeza automática após o usuário confirmar a troca via link do e-mail
  useEffect(() => {
    async function limparPendenciaAposConfirmacao() {
      const pendingEmail = dadosCliente?.pending_email || user?.user_metadata?.pending_email;

      if (user?.email && pendingEmail && user.email === pendingEmail) {
        // 1. Limpa na tabela clientes
        await supabase
          .from('clientes')
          .update({ pending_email: null })
          .eq('id', user.id);

        // 2. Limpa no metadata do Auth
        const { data: authData } = await supabase.auth.updateUser({
          data: { pending_email: null }
        });

        // 3. Atualiza os estados para remover a badge imediatamente
        if (authData?.user) {
          setUser(authData.user);
        }
        setDadosCliente((prev) => (prev ? { ...prev, pending_email: null } : null));
      }
    }

    limparPendenciaAposConfirmacao();
  }, [user?.email, dadosCliente?.pending_email, user?.user_metadata?.pending_email]);

  // ---------- ORDERS ----------
  async function adicionarPedido(pedido) {
    if (user?.id) {
      const { data, error } = await supabase
        .from('pedidos')
        .insert([pedido])
        .select('*');

      if (error) {
        console.error('Erro exato do Supabase:', error.message, error.details, error.hint);
        return;
      }

      if (data && data.length > 0) {
        setDadosCliente(prev => ({
          ...prev,
          pedidos: [...(prev?.pedidos || []), data[0]]
        }));
      }
    }
  }

  // ---------- PROFILE ----------

  // Update user name
  async function submitName(name) {
    if (user?.id) {
      const { data } = await supabase
        .from('clientes')
        .update({ nome: name })
        .eq('id', user.id)
        .select('*')
        .single();

      if (data) {
        setDadosCliente(prev => ({ ...prev, nome: name }));
      }
    }
  }

  // Add user CPF
  const cpfAdd = async (cpf) => {
    if (user?.id) {
      const { data, error } = await supabase
        .from('clientes')
        .update({ cpf: cpf })
        .eq('id', user.id)
        .select('*')
        .single();

      if (data) {
        setDadosCliente(prev => ({ ...prev, cpf: cpf }));
      }

      if (error) {
        console.error(error.message);
      }
    }
  };

  // Atualizar e-mail
  async function atualizarEmail(novoEmail) {
    if (!novoEmail || !user?.id) return;

    // 1. Solicita a troca no Auth e salva no metadata
    const { data, error } = await supabase.auth.updateUser({
      email: novoEmail,
      data: { pending_email: novoEmail }
    });

    if (error) {
      console.error('Erro ao atualizar o email:', error.message);
      alert(`Erro no Auth: ${error.message}`);
      return;
    }

    // 2. Grava o e-mail pendente na tabela clientes
    const { error: errorClientes } = await supabase
      .from('clientes')
      .update({ pending_email: novoEmail })
      .eq('id', user.id);

    if (errorClientes) {
      console.error('Erro ao salvar na tabela clientes:', errorClientes.message);
    }

    // 3. Atualiza os estados locais
    if (data?.user) {
      setUser(data.user);
    }
    setDadosCliente(prev => (prev ? { ...prev, pending_email: novoEmail } : null));
  }

  // Carregamento inicial com validação de inconsistência do F5
  useEffect(() => {
    const loadUserData = async () => {
      const { data: { user: currentUser } } = await supabase.auth.getUser()

      if (currentUser) {
        // Busca os dados da tabela clientes
        const { data: cliente } = await supabase
          .from('clientes')
          .select('*')
          .eq('id', currentUser.id)
          .single()

        setDadosCliente(cliente)

        // Trava de segurança: se no banco de dados o pending_email for nulo,
        // força a remoção do new_email que o Auth do Supabase tenta reidratar no F5
        const hasPendingInDb = Boolean(cliente?.pending_email)

        setUser({
          ...currentUser,
          new_email: hasPendingInDb ? (currentUser.new_email || cliente.pending_email) : null,
          user_metadata: {
            ...currentUser.user_metadata,
            pending_email: hasPendingInDb ? cliente.pending_email : null
          }
        })
      }
    }

    loadUserData()
  }, [])

  // Função para cancelar alteração de e-mail
  const cancelEmailUpdate = async () => {
    const userId = user?.id || dadosCliente?.id
    if (!userId) return

    try {
      // 1. Força o cancelamento da troca no Auth reafirmando o e-mail atual
      const { error: authError } = await supabase.auth.updateUser({
        email: user?.email || dadosCliente?.email,
        data: { pending_email: null }
      })

      if (authError) {
        console.error('Erro ao limpar Auth:', authError.message)
      }

      // 2. Limpa a coluna na tabela clientes
      const { error: dbError } = await supabase
        .from('clientes')
        .update({ pending_email: null })
        .eq('id', userId)

      if (dbError) {
        console.error('Erro ao limpar Banco:', dbError.message)
        return
      }

      // 3. Zera os estados locais imediatamente para remover a badge da tela
      setUser(prev => {
        if (!prev) return null
        return {
          ...prev,
          new_email: null,
          email_change: null,
          user_metadata: {
            ...prev.user_metadata,
            pending_email: null
          }
        }
      })

      setDadosCliente(prev => {
        if (!prev) return null
        return {
          ...prev,
          pending_email: null
        }
      })

    } catch (err) {
      console.error('Erro inesperado ao cancelar alteração de e-mail:', err)
    }
  }

  // Update user whatsapp
  async function atualizarWhatsApp(whatsapp) {
    if (user?.id) {
      const { data } = await supabase
        .from('clientes')
        .update({ whatsapp: whatsapp })
        .eq('id', user.id)
        .select('*')
        .single();

      if (data) {
        setDadosCliente(prev => ({ ...prev, whatsapp: whatsapp }));
      }
    }
  }

  // Add user birthdate 
  const birthdateAdd = async (birthdate) => {
    if (user?.id) {
      const { data, error } = await supabase
        .from('clientes')
        .update({ birthdate: birthdate })
        .eq('id', user.id)
        .select('*')
        .single();

      if (data) {
        setDadosCliente(prev => ({ ...prev, birthdate: birthdate }));
      }

      if (error) {
        console.error(error.message);
      }
    }
  };

  // Update user password
  const updatePassword = async (password) => {
    const { error } = await supabase.auth.updateUser({
      password: password
    });
  };

  // Purge user account
  const purgeAccount = async () => {
    const { error } = await supabase.rpc('purge_account');

    if (!error) {
      await supabase.auth.signOut();
      window.location.href = '/';
    }
  };

  // ---------- ADDRESS ----------

  // Add user address
  async function addAddress(address) {
    if (user?.id) {
      if (address.isDefault === true) {
        const { data } = await supabase
          .from('address')
          .update({ is_default: false })
          .eq('user_id', user.id)
          .select('*');

        if (data) {
          const addressList = dadosCliente?.address?.map(item => ({ ...item, is_default: false }));
          setDadosCliente(prev => ({ ...prev, address: addressList }));
        }
      }
      const { data } = await supabase
        .from('address')
        .insert([{
          user_id: address.userId,
          zip_code: address.zipCode,
          street: address.street,
          street_number: address.streetNumber,
          complement: address.complement,
          neighborhood: address.neighborhood,
          city: address.city,
          state: address.state,
          type: address.type,
          is_default: address.isDefault
        }])
        .select('*')
        .single();

      if (data) {
        setDadosCliente(prev => ({ ...prev, address: [...(prev?.address || []), data] }));
      }
    }
  } 

  // Delete user address
  async function deleteAddress(addressId) {
    if (user?.id) {
      const { error } = await supabase
        .from('address')
        .delete()
        .eq('id', addressId);

      if (!error) {
        const removedAddress = dadosCliente?.address.filter(item => item.id !== addressId);
        setDadosCliente(prev => ({ ...prev, address: removedAddress }));
      } else {
        console.error('Erro ao remover endereço', error.message);
      }
    }
  }

  // ---------- PAYMENT ----------

  // Add credit card
  async function addPayment(payment) {
    if (user?.id) {
      if (payment.isDefault === true) {
        const { data } = await supabase
          .from('payment')
          .update({ is_default: false })
          .eq('user_id', user.id)
          .select('*');

        if (data) {
          const cards = dadosCliente?.payment?.map(card => ({ ...card, is_default: false }));
          setDadosCliente(prev => ({ ...prev, payment: cards }));
        }
      }
    }

    const { data: newCard } = await supabase
      .from('payment')
      .insert([{
        user_id: payment.userId,
        holder_name: payment.holderName,
        card_number: payment.cardNumber,
        expiration_date: payment.expirationDate,
        cvv: payment.cvv,
        brand: payment.brand,
        is_default: payment.isDefault
      }])
      .select('*')
      .single();

    if (newCard) {
      const OldersCards = dadosCliente?.payment?.map(card => ({
        ...card,
        is_default: payment.isDefault ? false : card.is_default
      })) || [];

      const allCards = [...OldersCards, newCard];
      setDadosCliente({ ...dadosCliente, payment: allCards });
    }
  }

  // Delete credit card
  async function deleteCard(cardId) {
    if (user?.id) {
      const { error } = await supabase
        .from('payment')
        .delete()
        .eq('id', cardId);
        
      if (!error) {
        const deletedCard = dadosCliente?.payment?.filter(item => item.id !== cardId);
        setDadosCliente(prev => ({ ...prev, payment: deletedCard }));
      } else {
        console.error('Erro ao deletar cartão', error.message);
      }
    }
  }

  // ---------- FAVORITES ----------

  // Add favorite
  async function addToFavorites(produto) {
    if (user?.id) {
      const favoritoAtualizado = [...(dadosCliente?.favoritos || []), produto];
      const { data } = await supabase
        .from('clientes')
        .update({ favoritos: favoritoAtualizado }) 
        .eq('id', user.id)
        .select('*')
        .single();

      if (data) {
        setDadosCliente(prev => ({ ...prev, favoritos: favoritoAtualizado }));
      }
    }
  }

  // Delete favorite
  async function removeFromFavorites(produto) {
    if (user?.id) {
      const favoritoAtualizado = dadosCliente?.favoritos.filter(item => item.id !== produto.id);
      const { data } = await supabase
        .from('clientes')
        .update({ favoritos: favoritoAtualizado })
        .eq('id', user.id)
        .select('*')
        .single();

      if (data) {
        setDadosCliente(prev => ({ ...prev, favoritos: favoritoAtualizado }));
      }
    }
  }

  // Authentication
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

// Sign up (Versão simplificada sem quebrar o banco)
const signUp = async (email, password, setcontajacriada, setconfirmacao) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    console.error("Erro Supabase:", error.message);
    return;
  }

  // Se o e-mail já existe
  if (data?.user?.identities?.length === 0) {
    setcontajacriada(true);
    setconfirmacao(false);
  } 
  // Se a conta foi criada e enviou o e-mail
  else if (data?.user) {
    setconfirmacao(true);
    setcontajacriada(false);
  }

  return data;
};

  // Login
  const signIn = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    return data;
  };

  // Logout
  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  };

  return (
    <AuthContext.Provider value={{ 
      authenticated: !!user, 
      user, 
      loading, 
      signIn, 
      signOut, 
      signUp, 
      dadosCliente, 
      addToFavorites, 
      removeFromFavorites, 
      submitName, 
      atualizarEmail, 
      cancelEmailUpdate, 
      atualizarWhatsApp, 
      adicionarPedido, 
      addAddress, 
      deleteAddress, 
      addPayment, 
      onDeleteCard: deleteCard, 
      cpfAdd, 
      birthdateAdd, 
      purgeAccount, 
      updatePassword
    }}>
      {children}
    </AuthContext.Provider>
  );
}