import { useState } from 'react';
import { supabase } from '../../../supabaseClient'; // Ajuste o caminho para seu supabaseClient

export default function SignUp({ setIsSignUp }) {
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const [contajacriada, setcontajacriada] = useState(false);
  const [confirmacao, setconfirmacao] = useState(false);
  const [erroMsg, setErroMsg] = useState('');

  const cadastro = async (e) => {
    e.preventDefault();
    setLoading(true);

    setcontajacriada(false);
    setconfirmacao(false);
    setErroMsg('');

    try {
      const { data, error } = await supabase.auth.signUp({
        email: newEmail,
        password: newPassword,
      });

      if (error) {
        setErroMsg(error.message);
        return;
      }

      // Se o e-mail já existir cadastrado no Auth
      if (data?.user?.identities && data.user.identities.length === 0) {
        setcontajacriada(true);
      } 
      // Se criou a conta com sucesso e enviou o e-mail
      else if (data?.user) {
        setconfirmacao(true);
      }
    } catch (err) {
      setErroMsg('Erro ao tentar cadastrar.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='absolute bottom-14 left-0 lg:left-auto lg:right-0 lg:top-14 shadow-lg border border-gray-300 w-full lg:w-72 bg-white min-h-fit p-6 z-50 rounded-xl flex flex-col gap-3'>
      
      {confirmacao ? (
        <div className="flex flex-col gap-3">
          <p className='text-xs font-semibold text-green-700 bg-green-50 p-3 rounded-lg border border-green-200 text-center'>
            Verifique seu e-mail para confirmar o cadastro!
          </p>
          <button 
            type="button" 
            onClick={() => setIsSignUp(false)}
            className="text-xs text-gray-600 underline text-center hover:text-black cursor-pointer"
          >
            Voltar para login
          </button>
        </div>
      ) : (
        <>
          <form onSubmit={cadastro} className="w-full flex flex-col gap-2">
            <input 
              value={newEmail} 
              placeholder='E-mail' 
              onChange={(e) => setNewEmail(e.target.value)} 
              className="border border-gray-400 w-full rounded-lg px-2 py-1 text-sm" 
              type="email"
              required
            />
            <input 
              value={newPassword} 
              placeholder='Senha' 
              onChange={(e) => setNewPassword(e.target.value)} 
              className="border border-gray-400 w-full rounded-lg px-2 py-1 text-sm" 
              type="password"
              required
            />
            <button 
              type='submit' 
              disabled={loading} 
              className="w-full bg-black/70 text-white py-1 rounded-lg cursor-pointer disabled:bg-gray-400 mt-1 text-sm"
            >
              {loading ? 'Cadastrando...' : 'Cadastrar'}
            </button>
          </form>

          <button 
            type="button" 
            onClick={() => setIsSignUp(false)}
            className="text-xs text-gray-600 underline text-left hover:text-black cursor-pointer"
          >
            Voltar para login
          </button>

          {contajacriada && (
            <p className='text-xs font-semibold text-red-700 bg-red-50 p-2 rounded border border-red-200'>
              E-mail já cadastrado.
            </p>
          )}

          {erroMsg && (
            <p className='text-xs font-semibold text-red-700 bg-red-50 p-2 rounded border border-red-200'>
              {erroMsg}
            </p>
          )}
        </>
      )}
    </div>
  );
}