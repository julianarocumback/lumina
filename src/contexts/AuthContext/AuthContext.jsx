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
    }, [user])

  // ----------  ORDERS ----------
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
      console.log('Adicionou com sucesso:', data[0]);

      // Adiciona o pedido retornado pelo banco (que já possui o 'id' válido)
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
        .update({nome: name})
        .eq('id', user.id)
        .select('*')
        .single()

      if (data) {
        setDadosCliente(prev => ({...prev, nome: name}))
      }
    }
  }

  // Add user CPF
  const cpfAdd = async (cpf) => {
    if(user?.id) {
      const { data, error} = await supabase
      .from('clientes')
      .update({cpf: cpf})
      .eq('id', user.id)
      .select('*')
      .single()


      if(data){
        setDadosCliente(prev => ({...prev, cpf: cpf}))
      }

      if(error) {
        console.error(error.message)
      }

    }

  }

  // update user email
  async function atualizarEmail(novoEmail){
    const { data, error } = await supabase.auth.updateUser({
        email: novoEmail
    })

    if(error) {
      console.error('Erro ao atualizar o email', error.message)
      return
    }

    console.log('E-mail atualizada com sucesso!', data)
      if (data?.user) {
    setUser(data.user)
    }
  }

  // Cancel email update
  const cancelEmailUpdate = async () => {
    if(!user?.email) return
    const { data, error } = await supabase.auth.updateUser({
      email: user.email
    })

    if(error) {
      console.error('Erro ao cancelar o email', error.message)
      return
    }

    console.log('Cancelado!', data)
    if (data?.user) {
    setUser(data.user);
  }

  }

  // Update user whatsapp
  async function atualizarWhatsApp(whatsapp) {
    if (user?.id) {
      // A Cozinha: Consulta na tabela personalizada
      const { data } = await supabase
        .from('clientes')
        .update({whatsapp: whatsapp}) // Peça aqui todas as colunas que adicionou
        .eq('id', user.id)
        .select('*')
        .single(); // Como é um usuário, trazemos apenas um registro

      if (data) {
        setDadosCliente(prev => ({...prev, whatsapp: whatsapp}))
      }
    }
  }

  // Add user birthdate 
  const birthdateAdd = async (birthdate) => {
    if(user?.id) {
      const { data, error} = await supabase
      .from('clientes')
      .update({birthdate: birthdate})
      .eq('id', user.id)
      .select('*')
      .single()

      if(data){
        setDadosCliente(prev => ({...prev, birthdate: birthdate}))
      }

      if(error) {
        console.error(error.message)
      }

    }
  }

  // Update user password
    const updatePassword = async (password) => {
    const { error } = await supabase.auth.updateUser({
        password: password
      })
  }

  // Purge user account
  const purgeAccount = async () => {
    const {error} = await supabase.rpc('purge_account')

    if(!error){
      await supabase.auth.signOut()
      window.location.href = '/'
    }
  }


// ---------- ADDRESS ----------

  // Add user address
  async function addAddress(address) {
    if (user?.id) {
      if(address.isDefault === true) {
        const { data } = await supabase
        .from('address')
        .update({is_default: false})
        .eq('user_id', user.id)
        .select('*')

        if(data){
          const address = dadosCliente?.address?.map(address => ({...address, is_default: false}))

          setDadosCliente(prev => ({...prev, address: address}))
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
        .single() 


        if (data) {
          setDadosCliente(prev => ({...prev, address: [...prev.address, data]}))           
        }
      }
  } 

  // Delete user address
  async function deleteAddress(addressId) {
    if (user?.id) {
      const { error } = await supabase
        .from('address')
        .delete() 
        .eq('id', addressId)

      if (!error) {
        const removedAddress = dadosCliente?.address.filter(item => item.id !== addressId)
        setDadosCliente(prev => ({...prev, address: removedAddress}))
      } else {
        console.error('Erro ao remover endereço', error.message)
      }
    }
  }




  // ---------- PAYMENT ----------

  // Add credit card
  async function addPayment(payment) {

    if(user?.id) {
      if(payment.isDefault === true){
        const { data } = await supabase
        .from('payment')
        .update({is_default: false})
        .eq('user_id', user.id)
        .select('*')

        if(data){
          const cards = dadosCliente?.payment?.map(card => ({...card, is_default: false}))
          
          setDadosCliente(prev => ({...prev, payment:cards}))
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
      .single()

      if(newCard){
        const OldersCards = dadosCliente?.payment?.map(card => ({
          ...card,
          is_default: payment.isDefault ? false : card.is_default
        })) || []

        const allCards = [...OldersCards, newCard]

        setDadosCliente({...dadosCliente, payment: allCards})

      }
    
  }

  // Default card
  

  // Delete credit card
  async function deleteCard(cardId) {
    if (user?.id) {
      const { error } = await supabase
        .from('payment')
        .delete()
        .eq('id', cardId)
        
      if(!error) {
        const deletedCard = dadosCliente?.payment?.filter(item => item.id !== cardId)
        setDadosCliente(prev => ({...prev, payment: deletedCard}))
      } else {
        console.error('Erro ao deletar cartão', error.message)
      }
    }
  }


  // ---------- FAVORITES ----------

    // Add favorite
    async function adicionarFavorito(produto) {
      if (user?.id) {
        const favoritoAtualizado = [...dadosCliente.favoritos, produto]
        const { data } = await supabase
          .from('clientes')
          .update({favoritos: favoritoAtualizado}) 
          .eq('id', user.id)
          .select('*')
          .single()

        if (data) {
          setDadosCliente(prev => ({...prev, favoritos: favoritoAtualizado}))
        }
      }
    }

    // Delete favorite
    async function removerFavorito(produto) {
      if (user?.id) {
        const favoritoAtualizado = dadosCliente?.favoritos.filter(item => item.id !== produto.id)
        const { data } = await supabase
          .from('clientes')
          .update({favoritos: favoritoAtualizado})
          .eq('id', user.id)
          .select('*')
          .single()

        if (data) {
          setDadosCliente(prev => ({...prev, favoritos: favoritoAtualizado}))
        }
      }
    }


    


  useEffect(() => {
    // 1. Checa se já existe uma sessão ativa quando a página carrega
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // 2. Escuta mudanças no estado de login (Login, Logout, Troca de senha)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Sign up
  const signUp = async (email, password) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    
    if (error) throw error; 
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
    <AuthContext.Provider value={{ authenticated: !!user, user, loading, signIn, signOut, signUp, dadosCliente, adicionarFavorito, removerFavorito, submitName, atualizarEmail, cancelEmailUpdate, atualizarWhatsApp, adicionarPedido, addAddress, deleteAddress, addPayment, onDeleteCard: deleteCard, cpfAdd, birthdateAdd, purgeAccount, updatePassword}}>
      {children}
    </AuthContext.Provider>
  );
}