import { useState,  } from 'react'
import { useNavigate } from 'react-router-dom';

export default function ModalLogin({login, setOpen, cadastrar}){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const [newEmail, setNewEmail] = useState('')
    const [newPassword, setNewPassword] = useState('')

    const navigate = useNavigate()
    const [novaConta, setNovaConta] = useState(false)

    

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setError('')
            await login(email, password)
            setOpen(false)
        } catch(err) {
            setError('E-mail ou senha incorretos')
        }
    }

    const cadastro = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Chama a função do contexto passando os dados recolhidos pelo formulário
      await cadastrar(newEmail, newPassword);
      
      alert('Usuário cadastrado com sucesso! Verifique seu e-mail.');
      setEmail('');
      setPassword('');
    } catch (error) {
      alert('Erro ao enviar dados para o Supabase: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

    

    return (
        <div className="absolute bottom-14 left-0 lg:left-auto lg:right-0 lg:top-14 shadow-lg border-gray-700 w-full lg:w-70 bg-white h-50 p-8 z-50">
            <div className="flex flex-col gap-4 text-center">
                {!novaConta ? 
                <div>
                    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-2">
                        <input value={email} onChange={(e)=>setEmail(e.target.value)} className="border border-gray-400 w-full rounded-lg px-2" type="email"/>
                        <input value={password} onChange={(e)=> setPassword(e.target.value)} className="border border-gray-400 w-full rounded-lg px-2" type="password"/>
                        <button type='submit' className=" w-full bg-black/70 text-white py-1 rounded-lg cursor-pointer">Entrar</button>
                        <p className="text-md text-gray-700 cursor-pointer">Esqueci a senha</p>
                    </form>
                    <button onClick={()=>setNovaConta(true)}>Criar conta</button>
                </div>
                :
                <div>
                    <form onSubmit={cadastro} className="w-full flex flex-col gap-2">
                        <input value={newEmail} onChange={(e)=>setNewEmail(e.target.value)} className="border border-gray-400 w-full rounded-lg px-2" type="email"/>
                        <input value={newPassword} onChange={(e)=> setNewPassword(e.target.value)} className="border border-gray-400 w-full rounded-lg px-2" type="password"/>
                        <button className=" w-full bg-black/70 text-white py-1 rounded-lg cursor-pointer" type='submit' disabled={loading} className="w-full bg-black/70 text-white py-1 rounded-lg cursor-pointer disabled:bg-gray-400">
                            {loading ? 'Cadastrando...' : 'Cadastrar'}
                        </button>
                    </form>
                    <button onClick={()=>setNovaConta(false)}>Voltar para login</button>
                </div>
                }
               

                

            </div>
        </div>
    )
}