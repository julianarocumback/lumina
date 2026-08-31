import { p } from 'framer-motion/client';
import {useState} from 'react'

export default function Email({dadosCliente, atualizarEmail, cancelEmailUpdate, userEmail, userNewEmail}){
    const [email, setEmail] = useState('')
    const [isEditingEmail, setIsEditingEmail] = useState(false)
    const [confirmEmail, SetConfirmEmail] = useState(false)

    

    const handleAddEmail = (event) => {
        const email = event.target.value
        setEmail(email)


    }


     function handleAtivarBotaoEmail(){
        setIsEditingEmail(true)
    }

    function handleCancelarAtualizacaoEmail(){
        setIsEditingEmail(false)
        setEmail('')
       
    }
    
    function handleAtualizarEmail(){
        atualizarEmail(email)
        setIsEditingEmail(false)
        SetConfirmEmail(true)
    }

    function handleCancelEmailUpdate(){
        cancelEmailUpdate()
    }

    console.log(userNewEmail)

    return(
        <div className="flex justify-between items-center flex-col lg:flex-row">
            <div className='flex flex-col gap-1  w-full'>
                <h3 className="font-semibold text-[11px] text-gray-500">E-MAIL</h3>
                <div className='flex flex-col lg:flex-row'>
                    <div className="flex  h-7 w-full items-center relative gap-4">
                        <input
                            disabled={!isEditingEmail}
                            value={email} type="email"
                            className={`${isEditingEmail && 'border'} absolute  truncate text-gray-black font-semibold px-2 -left-2   tracking-wider  w-70 z-50 `}
                            onChange={handleAddEmail}
                        />


                        {userNewEmail}
                        {!isEditingEmail && userNewEmail === null ? <span className=' tracking-wider'>{userEmail}</span> :  <span className=' tracking-wider'>{userNewEmail}</span>}
                        



                        


                        {userNewEmail && !isEditingEmail && <div className='text-orange-400 text-xs border px-2 rounded-2xl py-0.5'>Pendente</div>}
                    </div>
                    <div>
                        <div className="flex border w-fit">
                            {userNewEmail && <div className='text-xs font-semibold text-red-600 cursor-pointer border w-full' onClick={handleCancelEmailUpdate}>Cancelar alteração</div>}
                            
                            
                            
                            {!isEditingEmail &&  <div onClick={handleAtivarBotaoEmail} className="font-semibold text-blue-700">Editar</div>}
                            
                            {isEditingEmail &&
                                <div className="flex gap-4">
                                    <div onClick={handleCancelarAtualizacaoEmail} className='text-red-500 font-semibold'>Cancelar</div>
                                    <div onClick={handleAtualizarEmail} className='font-semibold'>Salvar</div>
                                </div>
                            }
                            
                        </div>
                    </div>
                </div>
                {confirmEmail && <p className='text-orange-400 text-xs'>Você receberá um e-mail de confirmação em seu novo email.</p>}
            </div>                    
        </div>
    )
}