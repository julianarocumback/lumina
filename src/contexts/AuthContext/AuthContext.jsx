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
        const { data } = await supabase
          .from('clientes')
          .select('*, pedidos!cliente_id(*)')
          .eq('id', user.id)
          .single();

        if (data) {
          setDadosCliente(data);
        }
      }
    }


    buscarDados();
  }, [user])

  
    async function adicionarFavorito(produto) {
      if (user?.id) {
        const favoritoAtualizado = [...dadosCliente.favoritos, produto]
        // A Cozinha: Consulta na tabela personalizada
        const { data } = await supabase
          .from('clientes')
          .update({favoritos: favoritoAtualizado}) // Peça aqui todas as colunas que adicionou
          .eq('id', user.id)
          .select('*')
          .single(); // Como é um usuário, trazemos apenas um registro

        if (data) {
          setDadosCliente(data);
        }
      }
    }

    async function removerFavorito(produto) {
      if (user?.id) {
        const favoritoAtualizado = dadosCliente?.favoritos.filter(item => item.id !== produto.id)
        // A Cozinha: Consulta na tabela personalizada
        const { data } = await supabase
          .from('clientes')
          .update({favoritos: favoritoAtualizado}) // Peça aqui todas as colunas que adicionou
          .eq('id', user.id)
          .select('*')
          .single(); // Como é um usuário, trazemos apenas um registro

        if (data) {
          setDadosCliente(data);
        }
      }
    }

    async function adicionarCartao(produto) {
      if (user?.id) {
        const cartaoAtualizado = [...dadosCliente.cartoes, produto]
        // A Cozinha: Consulta na tabela personalizada
        const { data } = await supabase
          .from('clientes')
          .update({cartoes: cartaoAtualizado}) // Peça aqui todas as colunas que adicionou
          .eq('id', user.id)
          .select('*')
          .single(); // Como é um usuário, trazemos apenas um registro

        if (data) {
          setDadosCliente(data);
        }
      }
    }

    async function removerCartao(produto) {
      if (user?.id) {
        const cartaoAtualizado = dadosCliente?.cartoes.filter(item => item.id !== produto.id)
        // A Cozinha: Consulta na tabela personalizada
        const { data } = await supabase
          .from('clientes')
          .update({favoritos: cartaoAtualizado}) // Peça aqui todas as colunas que adicionou
          .eq('id', user.id)
          .select('*')
          .single(); // Como é um usuário, trazemos apenas um registro

        if (data) {
          setDadosCliente(data);
        }
      }
    }

    // Atualizar nome
    async function atualizarNome(novoNome) {
      if (user?.id) {
        // A Cozinha: Consulta na tabela personalizada
        const { data } = await supabase
          .from('clientes')
          .update({nome: novoNome}) // Peça aqui todas as colunas que adicionou
          .eq('id', user.id)
          .select('*')
          .single(); // Como é um usuário, trazemos apenas um registro

        if (data) {
          setDadosCliente(data);
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
    <AuthContext.Provider value={{ authenticated: !!user, user, loading, login, logout, dadosCliente, adicionarFavorito, removerFavorito, adicionarCartao, atualizarNome, atualizarEmail, atualizarWhatsApp, atualizarSenha, adicionarPedido}}>
      {children}
    </AuthContext.Provider>
  );
}