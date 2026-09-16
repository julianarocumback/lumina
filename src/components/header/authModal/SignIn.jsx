import { useState } from 'react'

export default function SignIn({setIsAuthModalOpen, onSignIn, setIsSignUp}){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [isEmailInteracted, setIsEmailInteracted]= useState(false)
    const [isPasswordInteracted, setIsPasswordInteracted]= useState(false)
    const [isSubmit, setIsSubmit]= useState(false)
    const [isSignInError, setIsSignInError] = useState(false)

    const hasEmailContent = email !== ''
    const hasEmailError = (isEmailInteracted || isSubmit) && !hasEmailContent
    const showEmailError = hasEmailError

    const hasPasswordContent = password !== ''
    const hasPasswordError = (isPasswordInteracted || isSubmit) && !hasPasswordContent
    const showPasswordError = hasPasswordError

    const hasSignInError = isSignInError && hasEmailContent


    const handleBlur =()=> {
        setIsEmailInteracted(true)
    }

    const handlePasswordBlur =()=> {
        setIsPasswordInteracted(true)
    }

    const handleEmailChange = (e) => {
        const email = e.target.value.trim()
        setEmail(email)
    }

    const handleSubmit = async (e) => {
        setIsSubmit(true)
        e.preventDefault()
        try {
            setIsSignInError(false)
            await onSignIn(email, password)
            setIsAuthModalOpen(false)
        } catch(err) {
            if(err){
                setIsSignInError(true)
            }
        }

        setIsSignUp(false)
    }
    
    return (
        <div className='absolute bottom-14 left-0 lg:left-auto lg:right-0 lg:top-14 shadow-lg border border-gray-300 w-full lg:w-72 bg-white min-h-fit p-6 z-50 rounded-xl flex flex-col gap-3'>
            <h3 className='text-center text-lg'>Entrar</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
                <div className='flex flex-col gap-2'>
                    <input value={email} placeholder='E-mail' onChange={handleEmailChange} onBlur={handleBlur} className={`w-full px-2 py-1 border ${hasEmailError ? 'border-red-500': 'border-gray-400'} rounded-lg type="email`}/>
                    {showEmailError && <p className='text-xs text-red-500'>Digite o email</p>}
                    <input value={password} placeholder='Senha' onChange={(e)=> setPassword(e.target.value)} className={`w-full px-2 py-1 border ${hasPasswordError ? 'border-red-500': 'border-gray-400'} rounded-lg  type="email`} type="password" onBlur={handlePasswordBlur}/>

                </div>
                <button type='submit' className=" w-full py-1 text-white bg-black/70 rounded-lg cursor-pointer">Entrar</button>
                {showPasswordError && <p className='text-xs text-red-500'>Digite sua senha</p>}
                {hasSignInError && <p className='text-xs text-red-500'>Email ou senha incorretos</p>}
            </form>
            <div className='text-xs flex justify-between w-full'>
                <p className="text-md text-red-700 cursor-pointer ">Esqueci a senha</p>
                <button className='underline cursor-pointer' onClick={()=>setIsSignUp(true)}>Criar conta</button>

            </div>
        </div>
    )
}