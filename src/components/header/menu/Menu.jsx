import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function Menu({authenticated, dadosCliente, login, logout}){
    const [isOpen, setIsOpen] = useState(false)
    const [isLogin, setIsLogin] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()


    
    function handleIsOpen(){
        setIsOpen(prev => !prev)
    }

    function handleIsLoginOpen(){
        setIsLogin(prev => !prev)
    }

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
        <div  className='lg:hidden '>
            <div onClick={handleIsOpen}>
                <i className="fa-solid fa-bars"></i>
            </div>

            {isOpen&& <div className="flex flex-col justify-between h-[calc(100vh-56px)] w-50 bg-white z-50 absolute top-14 left-0 shadow-lg p-4">

                <div className="flex">
                    <div>a</div>

                </div>


                <div className="flex justify-between items-center">
                
                    <div className="flex gap-2">
                        <div><i class="fa-regular fa-circle-user"></i></div>
                        {authenticated?<p>{dadosCliente.nome}</p>: <button onClick={handleIsLoginOpen}>Fazer login</button>}
                    </div>

                    {authenticated && <div onClick={logout} className="hover:text-red-500 cursor-pointer "><i class="fa-solid fa-arrow-right-from-bracket "></i></div>}
                    
                </div>

                {isLogin&& <div className="absolute bottom-15 left-0 border w-full bg-white h-30 p-2 z-50">
                    <div className="flex flex-col gap-4">
                        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-2">
                            <input value={email} onChange={(e)=>setEmail(e.target.value)} className="border w-full rounded-lg" type="email"/>
                            <input value={password} onChange={(e)=> setPassword(e.target.value)} className="border w-full rounded-lg" type="password"/>
                            <button type='submit' className="border w-full rounded-lg">Entrar</button>
                        </form>
                    </div>
                </div>}
                
            </div>}


        </div>
    )
}