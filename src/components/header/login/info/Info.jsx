import { useState,  } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Info({login}){
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
        <div className="absolute top-14 right-0 border w-70 bg-white h-50 p-8 z-50">
            <div className="flex flex-col gap-4">
                <form onSubmit={handleSubmit} className="w-full flex flex-col gap-2">
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} className="border w-full rounded-lg" type="email"/>
                    
                </form>
                

                

            </div>
        </div>
    )
}