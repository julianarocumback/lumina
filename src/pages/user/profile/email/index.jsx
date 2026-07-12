import {useState} from 'react'

export default function Email({dadosCliente, atualizarEmail}){
    const [novoEmail, setNovoEmail] = useState('')
    const [ativarBotaoEmail, setAtivarBotaoEmail] = useState(true)


     function handleAtivarBotaoEmail(){
        setAtivarBotaoEmail(false)
    }

    function handleCancelarAtualizacaoEmail(){
        setAtivarBotaoEmail(true)
        setNovoEmail('')
       
    }
    
    function handleAtualizarEmail(){
        atualizarEmail(novoEmail)
        setAtivarBotaoEmail(true)
    }

    return(
        <div className="flex justify-between items-center flex-col lg:flex-row">
                            <div className='flex flex-col gap-1  w-full'>
                                <h3 className="font-semibold text-[11px] text-gray-500">E-MAIL</h3>
                                <div className="flex justify-between w-full">
                                    <input disabled={ativarBotaoEmail} onChange={(e)=> setNovoEmail(e.target.value)} value={novoEmail} type="email" placeholder={dadosCliente?.email} className={`${!ativarBotaoEmail && 'border'}  text-gray-black font-semibold px-2 -left-2 relative`}/>
                                </div>
                            </div>
                                    <div>
                                        <div className="flex">
                                        {   ativarBotaoEmail && <div onClick={handleAtivarBotaoEmail} className="font-semibold text-blue-700">Editar</div>}
                                        <div className="flex gap-4">
                                        {!ativarBotaoEmail && <div onClick={handleCancelarAtualizacaoEmail} className='text-red-500 font-semibold'>Cancelar</div>}
                                        {!ativarBotaoEmail && <div onClick={handleAtualizarEmail} className='font-semibold'>Salvar</div>}
                                    </div>
                                </div>
                                </div>
                            
                        </div>
    )
}