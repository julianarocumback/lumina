import { createContext, useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

// Substitua pelas suas credenciais que estão no painel do Supabase
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
  // Isso vai te mostrar a mensagem real do banco (ex: "invalid input syntax for type boolean")
  console.error("Erro detalhado do Supabase:", error.message); 
  console.error("Código do erro:", error.code);
}
      }
    }


    buscarDados();
  }, [user])

  
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
          setDadosCliente(data)
        }
      }
    }

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
          setDadosCliente(data)
        }
      }
    }

    async function adicionarCartao(produto) {
      if (user?.id) {
        const cartaoAtualizado = [...dadosCliente.cartoes, produto]
        const { data } = await supabase
          .from('clientes')
          .update({cartoes: cartaoAtualizado})
          .eq('id', user.id)
          .select('*')
          .single()

        if (data) {
          setDadosCliente(data);
        }
      }
    }

    async function removerCartao(produto) {
      if (user?.id) {
        const cartaoAtualizado = dadosCliente?.cartoes.filter(item => item.id !== produto.id)
        const { data } = await supabase
          .from('clientes')
          .update({favoritos: cartaoAtualizado})
          .eq('id', user.id)
          .select('*')
          .single()

        if (data) {
          setDadosCliente(data)
        }
      }
    }

    async function adicionarEndereco(address) {
      if (user?.id) {
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
              is_main: address.isMain
          }])
          .select('*')
          .single() 


        if (data) {
          setDadosCliente(data);
        }
      }
    } 

    async function addPayment(payment) {
      if(user?.id){
        const { data } = await supabase
        .from('payment')
        .insert([{
          user_id: payment.userId,
          holder_name: payment.holderName,
          last_four: payment.lastFour,
          expiration_date: payment.expirationDate,
          brand: payment.brand,
          is_main: payment.isMain
        }])
        .select('*')
        .single()

        if(data){
          setDadosCliente(data)
        }
      }
    }

    async function removerEndereco(endereco) {
      if (user?.id) {
        const enderecoRemovido = dadosCliente?.enderecos.filter(item => item.id !== endereco.id)
        const { data } = await supabase
          .from('clientes')
          .update({enderecos: enderecoRemovido}) 
          .eq('id', user.id)
          .select('*')
          .single()

        if (data) {
          setDadosCliente(data)
        }
      }
    }

   

    // Atualizar nome
    async function atualizarNome(novoNome) {
      if (user?.id) {
        const { data } = await supabase
          .from('clientes')
          .update({nome: novoNome})
          .eq('id', user.id)
          .select('*')
          .single()

        if (data) {
          setDadosCliente(data)
        }
      }
    }

    // Atualizar email
    async function atualizarEmail(novoEmail){
      const { data, error } = await supabase.auth.updateUser({
          email: novoEmail
      })

      if(error) {
        console.error("Erro ao atualizar o email", error.message)
      }

      console.log('E-mail atualizada com sucesso!', data)

    }

    // Atualizar email
    async function atualizarSenha(novoSenha){
      const { data, error } = await supabase.auth.updateUser({
          password: novoSenha
      })

      if(error) {
        console.error("Erro ao atualizar a senha", error.message)
      }

      console.log('Senha atualizada com sucesso!', data)

    }

    // Atualizar WhatsApp
    async function atualizarWhatsApp(novoWhatsApp) {
      if (user?.id) {
        // A Cozinha: Consulta na tabela personalizada
        const { data } = await supabase
          .from('clientes')
          .update({whatsapp: novoWhatsApp}) // Peça aqui todas as colunas que adicionou
          .eq('id', user.id)
          .select('*')
          .single(); // Como é um usuário, trazemos apenas um registro

        if (data) {
          setDadosCliente(data);
        }
      }
    }

    async function adicionarPedido(pedido) {
      if (user?.id) {
        const { data, error } = await supabase
          .from('pedidos')
          .insert([pedido]) 
          .select('*')
   

        if (data) {
          console.log('adicionou');
        }

        if (error) {
          console.log("Erro exato do Supabase:", error.message, error.details, error.hint)
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

  // Função para fazer Login
  const login = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    return data;
  };

  // Função para fazer Logout
  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  };

  return (
    <AuthContext.Provider value={{ authenticated: !!user, user, loading, login, logout, dadosCliente, adicionarFavorito, removerFavorito, adicionarCartao, atualizarNome, atualizarEmail, atualizarWhatsApp, atualizarSenha, adicionarPedido, adicionarEndereco, removerEndereco, addPayment}}>
      {children}
    </AuthContext.Provider>
  );
}