import { useState,  } from 'react'
import { useNavigate } from 'react-router-dom';

export default function ModalLogin({login}){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const navigate = useNavigate()

    

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setError('')
            await login(email, password)
            navigate('/user')
        } catch(err) {
            setError('E-mail ou senha incorretos')
        }
    }

    

    return (
        <div className="absolute top-14 right-0 shadow-lg border-gray-700 w-70 bg-white h-50 p-8 z-50">
            <div className="flex flex-col gap-4 text-center">
                <form onSubmit={handleSubmit} className="w-full flex flex-col gap-2">
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} className="border border-gray-400 w-full rounded-lg px-2" type="email"/>
                    <input value={password} onChange={(e)=> setPassword(e.target.value)} className="border border-gray-400 w-full rounded-lg px-2" type="password"/>
                    <button type='submit' className=" w-full bg-black/70 text-white py-1 rounded-lg cursor-pointer">Entrar</button>
                    <p className="text-md text-gray-700 cursor-pointer">Esqueci a senha</p>
                </form>
                

                

            </div>
        </div>
    )
}