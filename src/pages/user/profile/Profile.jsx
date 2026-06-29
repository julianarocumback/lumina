import { useState} from 'react'
import { useOutletContext} from 'react-router-dom'

export default function Perfil(){
    const {dadosCliente, atualizarNome, atualizarEmail, atualizarWhatsApp} = useOutletContext()
    const [novoNome, setNovoNome] = useState('')
    const [novoEmail, setNovoEmail] = useState('')
    const [novoWhatsApp, setNovoWhatsApp] = useState('')
    // const [novaSenha, setNovaSenha] = useState('')

    const [ativarBotaoNome, setAtivarBotaoNome] = useState(true)
    const [ativarBotaoEmail, setAtivarBotaoEmail] = useState(true)
    const [ativarBotaoWhatsapp, setAtivarBotaoWhatsApp] = useState(true)
    // const [ativarBotaoSenha, setAtivarBotaoSenha] = useState(true)

    
    // Atualizar nome
    function handleAtivarBotaoNome(){
        setAtivarBotaoNome(false)
    }

    function handleCancelarAtualizacaoNome(){
        setAtivarBotaoNome(true)
        setNovoNome('')
    }
    
    function handleAtualizarNome(){
        if(novoNome.length === 0) return
        atualizarNome(novoNome)
        setNovoNome('')
        setAtivarBotaoNome(true)
    }

    // Atualizar e-mail
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

    // Atualizar whatsApp
    function handleAtivarBotaoWhatsApp(){
        setAtivarBotaoWhatsApp(false)
    }

    function handleCancelarAtualizacaoWhatsApp(){
        setAtivarBotaoWhatsApp(true)
        setNovoWhatsApp('')
       
    }
    
    function handleAtualizarWhatsApp(){
        atualizarWhatsApp(novoWhatsApp)
        setAtivarBotaoWhatsApp(true)
    }

    // // Atualizar senha
    // function handleAtivarBotaoSenha(){
    //     setAtivarBotaoEmail(false)
    // }

    // function handleCancelarAtualizacaoSenha(){
    //     setAtivarBotaoEmail(true)
    //     setNovoEmail('')
       
    // }
    
    // function handleAtualizarSenha(){
    //     atualizarEmail(novoEmail)
    //     setAtivarBotaoEmail(true)
    // }

    if(!dadosCliente) return

    return(
        <div className="flex flex-col gap-8 lg:gap-8 py-7 pb-5 lg:py-30 pl-20 pr-5 lg:pl-150 lg:pr-70 h-full">
                <h1 className="text-2xl font-semibold">Configurações</h1>

                <div className="flex flex-col gap-4">

                    <h2 className="text-xl font-semibold">Dados pessoais</h2>

                    <div className="bg-white border border-gray-100 rounded-2xl shadow-xs p-6 gap-8 flex flex-col ">
                        
                        {/* NOME */}
                        <div className="">
                            <div className='flex flex-col gap-1 w-full'>
                                <h3 className="font-semibold text-[11px] text-gray-500">NOME COMPLETO</h3>

                                <div className="flex flex-col lg:flex-row justify-between w-full ">
                                    <input disabled={ativarBotaoNome} onChange={(e)=>setNovoNome(e.target.value)} value={novoNome} type="text" placeholder={dadosCliente?.nome} className={`${!ativarBotaoNome && 'border left-0'} text-gray-black font-semibold px-2 rounded-lg relative -left-2`}/>
                                    <div>
                                        {ativarBotaoNome && <div onClick={handleAtivarBotaoNome} className="font-semibold text-blue-700">Editar</div>}
                                        <div className="flex gap-4">
                                        {!ativarBotaoNome && <div onClick={handleCancelarAtualizacaoNome} className='text-red-500 font-semibold'>Cancelar</div>}
                                        {!ativarBotaoNome && <div onClick={handleAtualizarNome} className='font-semibold'>Salvar</div>}

                                    </div>
                                    <div className="flex">
                                </div>
                            </div>
                                </div>
                                
                            </div>
                            
                        </div>
                        
                        {/* CPF */}
                        <div className="flex flex-col">
                            <h3 className="font-semibold text-[11px] text-gray-500">CPF</h3>
                            <p className="font-semibold text-gray-400">{dadosCliente.cpf}</p>
                        </div>

                        {/* E-MAIL */}
                        <div className="flex justify-between items-center flex-col lg:flex-row">
                            <div className='flex flex-col gap-1  w-full'>
                                <h3 className="font-semibold text-[11px] text-gray-500">E-MAIL</h3>
                                <div className="flex justify-between w-full">
                                    <input disabled={ativarBotaoEmail} onChange={(e)=> setNovoEmail(e.target.value)} value={novoEmail} type="email" placeholder={dadosCliente?.email} className={`${!ativarBotaoEmail && 'border'}  text-gray-black font-semibold px-2 -left-2 relative`}/>
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
                            
                        </div>

                        {/* WHATSAPP  */}
                        <div className="flex justify-between items-center flex-col lg:flex-row">
                            <div className='flex flex-col gap-1 w-full'>
                                <h3 className="font-semibold text-[11px] text-gray-500">WHATSAPP</h3>
                                <div className="flex justify-between w-full">
                                    <input disabled={ativarBotaoWhatsapp} onChange={(e)=>setNovoWhatsApp(e.target.value)} value={novoWhatsApp} type="text" placeholder={dadosCliente?.whatsapp} className={`${!ativarBotaoWhatsapp && 'border left-0'} text-gray-black font-semibold px-2 -left-2 relative`}/>
                                </div>
                                    <div>
                                        <div className="flex">
                                            {ativarBotaoWhatsapp && <div onClick={handleAtivarBotaoWhatsApp} className="font-semibold text-blue-700">Editar</div>}
                                            <div className="flex gap-4">
                                            {!ativarBotaoWhatsapp && <div onClick={handleCancelarAtualizacaoWhatsApp} className='text-red-500 font-semibold'>Cancelar</div>}
                                            {!ativarBotaoWhatsapp && <div onClick={handleAtualizarWhatsApp} className='font-semibold'>Salvar</div>}
                                        </div>
                                    </div>

                                    </div>
                            </div>
                            
                        </div>

                        {/* DATA DE NASCIMENTO */}
                        <div className="flex flex-col">
                            <h3 className="font-semibold text-[11px] text-gray-500">DATA DE NASCIMENTO</h3>
                            <p className="font-semibold text-gray-400">14 de Agosto, 1994</p>
                        </div>
                        
                        </div>
                    </div>

                    <div className="flex-col flex gap-4">

                    <h2 className="text-xl font-semibold">Segurança da conta</h2>

                    <div className="bg-white border border-gray-100 rounded-2xl shadow-xs p-6 flex lg:justify-between items-center">
                        <div className="flex gap-8 items-center">
                            <div className="bg-blue-300/20 w-12 h-12 flex justify-center items-center rounded-2xl text-blue-800"><i class="fa-solid fa-lock"></i></div>
                            <div>
                                <h3 className="font-semibold">Alterar Senha</h3>
                                <p className="text-xs text-gray-500">Última alteração há 3 meses</p>
                            </div>
                        </div>
                        <div>
                            <button className="bg-blue-500 px-4 py-2 rounded-full font-semibold text-white">Alterar</button>
                        </div>
                        
                    </div>

                    <div className="bg-white border border-gray-100 rounded-2xl shadow-xs p-6 flex lg:justify-between items-center">
                        <div className="flex gap-8 items-center">
                        <div className="bg-yellow-300/20 w-12 h-12 flex justify-center items-center rounded-2xl text-yellow-800"><i class="fa-solid fa-shield-halved"></i></div>
                        <div>
                            <h3 className="font-semibold">Ativar proteção 2FA</h3>
                            <p className="text-xs text-gray-500">Proteção adicional ativada</p>

                        </div>

                        </div>
                        <div>
                            <button className="bg-blue-500 px-4 py-2 rounded-full font-semibold text-white">Ativar</button>
                        </div>
                        
                    </div>

                </div>



                <div className="flex flex-col gap-4">


                <h2 className="text-xl font-semibold">Sessões ativas</h2>

                <div className="bg-gray-100 border border-gray-100 rounded-2xl shadow-xs p-6 gap-8 flex items-center justify-between">
                    <div className="flex gap-4 items-center">
                    <div className="bg-white w-12 h-12 flex justify-center items-center rounded-2xl text-gray-800 text-xl"><i class="fa-solid fa-laptop"></i></div>
                    <div>
                        <h3 className="font-semibold">MackBook Pro</h3>
                        <p className="text-xs text-gray-500">Safari . São Paulo . <span className="text-blue-700 italic font-semibold">Está sessão</span> </p>
                    </div>

                    </div>
                    <div>
                        <div className="font-semibold text-gray-500"><i class="fa-solid fa-arrow-right-from-bracket"></i></div>
                    </div>
                    
                </div>

                <div className="bg-gray-100 border border-gray-100 rounded-2xl shadow-xs p-6 gap-8 flex items-center justify-between">
                    <div className="flex gap-4 items-center">
                    <div className="bg-white w-12 h-12 flex justify-center items-center rounded-2xl text-gray-800 text-xl"><i class="fa-solid fa-mobile-screen-button"></i></div>
                    <div>
                        <h3 className="font-semibold">iPhone 15 Pro</h3>
                        <p className="text-xs text-gray-500">Website . São Paulo . <span className="text-blue-700 italic font-semibold">Está sessão</span> </p>
                    </div>

                    </div>
                    <div>
                        <div className="font-semibold text-gray-500"><i class="fa-solid fa-arrow-right-from-bracket"></i></div>
                    </div>
                    
                </div>

                </div>

                
            </div>
    )
}