import { useState} from 'react'
import { useOutletContext} from 'react-router-dom'

export default function Perfil(){
    const {dadosCliente, AtualizarNome, AtualizarCPF} = useOutletContext()
    const [novoNome, setNovoNome] = useState('')
    const [novoCPF, setNovoCPF] = useState('')

    const [ativarBotaoNome, setAtivarBotaoNome] = useState(true)
    const [ativarBotaoEmail, setAtivarBotaoEmail] = useState(true)
    const [ativarBotaoWhatsapp, setAtivarBotaoWhatsApp] = useState(true)
    const [ativarBotaoSenha, setAtivarBotaoSenha] = useState(true)
    
    const [nomeAtual, setNomeAtual] = useState()
    console.log(nomeAtual)
    
    function handleAtualizarnome(){
        setAtivarBotaoNome(false)
        setNomeAtual('')
    }

    function cancelarAtualizacaoNome(){
        setAtivarBotaoNome(true)
        setNovoNome('')
        setNomeAtual(dadosCliente?.nome)
    }
    
    function atualizar(){
            AtualizarNome(novoNome)
            setNovoNome('')
            setAtivarBotaoNome(true)
        setNomeAtual(dadosCliente?.nome)
    }

    function handleAtualizarCPF(){
        setAtivarBotaoNome(false)
        setNomeAtual('')
    }

    function cancelarAtualizacaoCPF(){
        setAtivarBotaoNome(true)
        setNovoNome('')
        setNomeAtual(dadosCliente?.nome)
    }
    
    function atualizarCPF(){
            AtualizarCPF(novoCPF)
            setNovoCPF('')
            setAtivarBotaoCPF(true)
    }

        if(!dadosCliente) return

    return(
        <div className="flex flex-col gap-8 lg:gap-8 pt-20 pb-5 lg:py-30 pl-20 pr-5 lg:pl-100 lg:pr-20 h-full">
                <h1 className="text-2xl font-semibold">Configurações</h1>

                <div className="flex flex-col gap-4">

                    <h2 className="text-xl font-semibold">Dados pessoais</h2>

                    <div className="bg-white border border-gray-100 rounded-2xl shadow-xs p-6 gap-8 flex flex-col">
                        
                        <div className="flex justify-between items-center">
                            <div className='flex flex-col gap-1'>
                                <h3 className="font-semibold text-[11px] text-gray-500">NOME COMPLETO</h3>
                                <input disabled={ativarBotaoNome} onChange={(e)=>setNovoNome(e.target.value)} value={novoNome} type="text" placeholder={dadosCliente?.nome} className={`${!ativarBotaoNome && 'border'} text-gray-black font-semibold px-2`}/>
                            </div>
                            <div className="flex">
                                {ativarBotaoNome && <div onClick={handleAtualizarnome} className="font-semibold text-blue-700">Editar</div>}
                                <div className="flex gap-4">
                                    {!ativarBotaoNome && <div onClick={cancelarAtualizacaoNome} className='text-red-500 font-semibold'>Cancelar</div>}
                                    {!ativarBotaoNome && <div onClick={atualizar} className='font-semibold'>Salvar</div>}
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex justify-between items-center">
                            <div className='flex flex-col gap-1'>
                                <h3 className="font-semibold text-[11px] text-gray-500">CPF</h3>
                                <input disabled={ativarBotaoNome} onChange={(e)=>setNovoNome(e.target.value)} value={novoNome} type="text" placeholder={dadosCliente?.cpf} className={`${!ativarBotaoNome && 'border'} text-gray-black font-semibold px-2`}/>
                            </div>
                            <div className="flex">
                                {ativarBotaoNome && <div onClick={handleAtualizarCPF} className="font-semibold text-blue-700">Editar</div>}
                                <div className="flex gap-4">
                                    {!ativarBotaoNome && <div onClick={cancelarAtualizacaoNome} className='text-red-500 font-semibold'>Cancelar</div>}
                                    {!ativarBotaoNome && <div onClick={atualizarCPF} className='font-semibold'>Salvar</div>}
                                </div>
                            </div>
                        </div>


                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="font-semibold text-[11px] text-gray-500">E-MAIL</h3>
                                <p className="font-semibold">beatriz.grace@lumina.com</p>
                            </div>
                            <div className="font-semibold text-blue-700">Editar</div>
                        </div>


                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="font-semibold text-[11px] text-gray-500">TELEFONE</h3>
                                <p className="font-semibold">(11) 12345-6789</p>
                            </div>
                            <div className="font-semibold text-blue-700">Editar</div>

                        </div>
                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="font-semibold text-[11px] text-gray-500">DATA DE NASCIMENTO</h3>
                                <p className="font-semibold">14 de Agosto, 1994</p>
                            </div>
                            <div className="font-semibold text-blue-700">Editar</div>
                        </div>
                        
                        </div>
                    </div>

                    <div className="flex-col flex gap-4">

                    <h2 className="text-xl font-semibold">Dados pessoais</h2>

                    <div className="bg-white border border-gray-100 rounded-2xl shadow-xs p-6 gap-8 flex items-center">
                        <div className="bg-blue-300/20 w-12 h-12 flex justify-center items-center rounded-2xl text-blue-800"><i class="fa-solid fa-lock"></i></div>
                        <div>
                            <h3 className="font-semibold">Alterar Senha</h3>
                            <p className="text-xs text-gray-500">Última alteração há 3 meses</p>

                        </div>
                        <div>
                            <button className="bg-blue-500 px-4 py-2 rounded-full font-semibold text-white">Alterar</button>
                        </div>
                        
                    </div>

                    <div className="bg-white border border-gray-100 rounded-2xl shadow-xs p-6 gap-8 flex items-center">
                        <div className="bg-yellow-300/20 w-12 h-12 flex justify-center items-center rounded-2xl text-yellow-800"><i class="fa-solid fa-shield-halved"></i></div>
                        <div>
                            <h3 className="font-semibold">Alterar Senha</h3>
                            <p className="text-xs text-gray-500">Proteção adicional ativada</p>

                        </div>
                        <div>
                            <button className="bg-blue-500 px-4 py-2 rounded-full font-semibold text-white">Alterar</button>
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