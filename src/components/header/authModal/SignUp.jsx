import {useState } from 'react'

export default function SignUp({onSignUp, setIsSignUp}) {
    const [newEmail, setNewEmail] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [loading, setLoading] = useState(false)
    
    const cadastro = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Chama a função do contexto passando os dados recolhidos pelo formulário
      await onSignUp(newEmail, newPassword);
      
      alert('Usuário cadastrado com sucesso! Verifique seu e-mail.');
      setNewEmail('');
      setNewPassword('');
    } catch (error) {
      alert('Erro ao enviar dados para o Supabase: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

    
    
    return (
        <div className='absolute bottom-14 left-0 lg:left-auto lg:right-0 lg:top-14 shadow-lg border-gray-700 w-full lg:w-70 bg-white h-50 p-8 z-50'>
                    <form onSubmit={cadastro} className="w-full flex flex-col gap-2">
                        <input value={newEmail} placeholder='E-mail' onChange={(e)=>setNewEmail(e.target.value)} className="border border-gray-400 w-full rounded-lg px-2" type="email"/>
                        <input value={newPassword} placeholder='Senha' onChange={(e)=> setNewPassword(e.target.value)} className="border border-gray-400 w-full rounded-lg px-2" type="password"/>
                        <button type='submit' disabled={loading} className="w-full bg-black/70 text-white py-1 rounded-lg cursor-pointer disabled:bg-gray-400">
                            {loading ? 'Cadastrando...' : 'Cadastrar'}
                        </button>
                    </form>
                    <button onClick={()=>setIsSignUp(false)}>Voltar para login</button>
                </div>
    )
}