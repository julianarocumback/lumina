import {useState} from 'react'

export default function Email({dadosCliente, atualizarEmail}){
    const [email, setEmail] = useState('')
    const [ativarBotaoEmail, setAtivarBotaoEmail] = useState(true)

    const handleAddEmail = (event) => {
        const email = event.target.value
        setEmail(email)


    }


     function handleAtivarBotaoEmail(){
        setAtivarBotaoEmail(false)
    }

    function handleCancelarAtualizacaoEmail(){
        setAtivarBotaoEmail(true)
        setEmail('')
       
    }
    
    function handleAtualizarEmail(){
        atualizarEmail(email)
        setAtivarBotaoEmail(true)
    }

    return(
        <div className="flex justify-between items-center flex-col lg:flex-row">
            <div className='flex flex-col gap-1  w-full'>
                <h3 className="font-semibold text-[11px] text-gray-500">E-MAIL</h3>
                <div className='flex flex-col lg:flex-row'>
                    <div className="flex justify-between w-full">
                        <input
                            disabled={ativarBotaoEmail}
                            value={email} type="email"
                            placeholder={dadosCliente?.email}
                            className={`${!ativarBotaoEmail && 'border'} w-full truncate text-gray-black font-semibold px-2 -left-2 relative`}
                            onChange={handleAddEmail}
                        />
                    </div>
                    <div>
                        <div className="flex">
                            {ativarBotaoEmail && <div onClick={handleAtivarBotaoEmail} className="font-semibold text-blue-700">Editar</div>}
                            <div className="flex gap-4">
                                {!ativarBotaoEmail && <div onClick={handleCancelarAtualizacaoEmail} className='text-red-500 font-semibold'>Cancelar</div>}
                                {!ativarBotaoEmail && <div onClick={handleAtualizarEmail} className='font-semibold'>Salvar</div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>                    
        </div>
    )
}