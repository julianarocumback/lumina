import {useState} from 'react'

export default function Email({dadosCliente, atualizarEmail, cancelEmailUpdate, userEmail, userNewEmail}){
    const [email, setEmail] = useState('')
    const [ativarBotaoEmail, setAtivarBotaoEmail] = useState(false)
    const [confirmEmail, SetConfirmEmail] = useState(false)

    

    const handleAddEmail = (event) => {
        const email = event.target.value
        setEmail(email)


    }


     function handleAtivarBotaoEmail(){
        setAtivarBotaoEmail(true)
    }

    function handleCancelarAtualizacaoEmail(){
        setAtivarBotaoEmail(false)
        setEmail('')
       
    }
    
    function handleAtualizarEmail(){
        atualizarEmail(email)
        setAtivarBotaoEmail(true)
        SetConfirmEmail(true)
    }

    function handleCancelEmailUpdate(){
        cancelEmailUpdate()
    }

    return(
        <div className="flex justify-between items-center flex-col lg:flex-row">
            <div className='flex flex-col gap-1  w-full'>
                <h3 className="font-semibold text-[11px] text-gray-500">E-MAIL</h3>
                <div className='flex flex-col lg:flex-row'>
                    <div className="flex  h-7 w-full items-center relative gap-4">
                        <input
                            disabled={!ativarBotaoEmail}
                            value={email} type="email"
                            className={`${ativarBotaoEmail && 'border'} absolute  truncate text-gray-black font-semibold px-2 -left-2   tracking-wider  w-70 z-50 `}
                            onChange={handleAddEmail}
                        />

                        {!ativarBotaoEmail && (userNewEmail === null ? <span className=' tracking-wider'>{userEmail}</span> :  <span className=' tracking-wider'>{userNewEmail}</span>)}
                        
                        {userNewEmail && !ativarBotaoEmail && <div className='text-orange-400 text-xs border px-2 rounded-2xl py-0.5'>Pendente</div>}
                    </div>
                    <div>
                        <div className="flex">
                            {userNewEmail && <div onClick={handleCancelEmailUpdate}>Cancelar auteração</div>}
                            {!ativarBotaoEmail && <div onClick={handleAtivarBotaoEmail} className="font-semibold text-blue-700">Editar</div>}
                            <div className="flex gap-4">
                                {ativarBotaoEmail && <div onClick={handleCancelarAtualizacaoEmail} className='text-red-500 font-semibold'>Cancelar</div>}
                                {ativarBotaoEmail && <div onClick={handleAtualizarEmail} className='font-semibold'>Salvar</div>}
                            </div>
                        </div>
                    </div>
                </div>
                {confirmEmail && <p className='text-orange-400 text-xs'>Você receberá um e-mail de confirmação em seu novo email.</p>}
            </div>                    
        </div>
    )
}