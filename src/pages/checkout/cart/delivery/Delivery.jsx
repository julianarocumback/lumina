import { useState } from "react";

export default function Delivery({setDeliveryOk, setValorFrete}){

    const [casaSelecinada, setCasaSelecionado] =useState(false)
    const [trabalhoSelecinado, setTrabalhoSelecionado] =useState(false)
    const [adicionarNovoEndereco, setAdicionarNovoEndereco] = useState(false)
    const [fretePadraoSelecionado, setFretePadraoSelecionado] = useState(false)
    const [freteRapidoSelecionado, setFreteRapidoSelecionado] = useState(false)
    
    // Selecionar a entrega rápida
    function handleEntregaRapida(){
        setFreteRapidoSelecionado(prev => !prev)
        setFretePadraoSelecionado(false)
    }

    // Selecionar a entrega padrão
    function handleEntregaPadrao(){
        setFretePadraoSelecionado(prev => !prev)
        setFreteRapidoSelecionado(false)
    }

    // Alterar o valor do frete
    if (freteRapidoSelecionado){
        setValorFrete(25)
    } else if (fretePadraoSelecionado){
        setValorFrete(15)
    } else {
        setValorFrete(0)
    }

    // Mostrar os inputs para adicionar novo endereço
    function handleAdicionarNovoEndereco(){
        setAdicionarNovoEndereco(prev => !prev)
    }

    // Selecionar a casa como endereço de entrega    
    function handleCasaSelecionado(){
        setCasaSelecionado(prev => !prev)
        setTrabalhoSelecionado(false)
    }

    // Selecionar a casa como endereço de entrega    
    function handleTrabalhoSelecionado(){
        setTrabalhoSelecionado(prev => !prev)
        setCasaSelecionado(false)
    }

    // Alterar o valor do Delivery
    if((fretePadraoSelecionado || freteRapidoSelecionado) && (casaSelecinada || trabalhoSelecinado)){
            setDeliveryOk(true)
    } else {
        setDeliveryOk(false)
    }

    return (
        <div className="w-full rounded-2xl overflow-hidden bg-white shadow-xs p-8">
            <div className="pb-12 flex flex-col gap-2">
                <h2 className="text-2xl">Endereço de Entrega</h2>
                <p>Onde devemos entregar sua nova leitura edificante?</p>
            </div>

            <div className="flex flex-col gap-4 pb-8">
                <p className="font-semibold">Selecione um endereço de entrega</p>
                {/* endereços */}
                <div className="flex gap-8">

                    <div onClick={handleCasaSelecionado} className={`border p-4 flex flex-col gap-2 rounded-2xl ${casaSelecinada && 'border-red-500'}`}>
                        <div className="flex justify-between">
                            <div className="flex gap-2">
                                <div><i class="fa-regular fa-house"></i></div>
                                <span className="font-semibold">Casa</span>
                            </div>
                            <div>
                                <i class="fa-regular fa-circle"></i>
                            </div>
                        </div>
                        <div>
                            <div>Av. Aliança, 777, São Paulo - SP, CEP: 01234-567</div>
                        </div>
                    </div>


                    <div onClick={handleTrabalhoSelecionado} className={`border p-4 flex flex-col gap-2 rounded-2xl ${trabalhoSelecinado && 'border-red-500'}`}>
                        <div className="flex justify-between">
                            <div className="flex gap-2">
                                <div><i class="fa-solid fa-briefcase"></i></div>
                                <span className="font-semibold">Trabalho</span>
                            </div>
                            <div>
                                <i class="fa-regular fa-circle"></i>
                            </div>
                        </div>
                        <div>
                            <div>Av. Aliança, 777, São Paulo - SP, CEP: 01234-567</div>
                        </div>
                    </div>
                </div>
                {!adicionarNovoEndereco && <button onClick={handleAdicionarNovoEndereco} className="font-semibold text-sm text-blue-800 w-50">+ Adicionar novo endereço</button>}
            </div>

            
            {/* MOSTRAR SE HOUVER UM CLIQUE PARA ADICIONAR UM NOVO ENDEREÇO*/}
            {adicionarNovoEndereco && <div className="flex flex-col gap-8 ">
                {/* CEP */}
                <div className="flex flex-col gap-2">
                    <label className="font-semibold text-sm" htmlFor="CEP">CEP</label>
                    <div className="flex gap-4">
                        <input className="border w-70 py-2 px-4 rounded-lg" type="text" name="" id="CEP" placeholder="00000-000" />
                        <button className="border py-2 px-4 rounded-lg text-sm font-semibold bg-gray-200">Buscar</button>
                    </div>
                </div>

                {/* RUA E NÚMERO */}
                <div className="flex gap-4">

                    <div className="flex flex-col gap-2">
                        <label className="font-semibold text-sm" htmlFor="CEP">RUA</label>
                        <input className="border w-70 py-2 px-4 rounded-lg" type="text" name="" id="CEP" placeholder="Nome do logradouro" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-semibold text-sm" htmlFor="CEP">NÚMERO</label>
                        <input className="border w-70 py-2 px-4 rounded-lg" type="text" name="" id="CEP" placeholder="Ex.: 123" />
                    </div>
                </div>

                {/* COMPLEMENTO E BAIRRO */}
                <div className="flex gap-4">

                    <div className="flex flex-col gap-2">
                        <label className="font-semibold text-sm" htmlFor="CEP">COMPLEMENTO</label>
                        <input className="border w-70 py-2 px-4 rounded-lg" type="text" name="" id="CEP" placeholder="Apto, bloco, etc." />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-semibold text-sm" htmlFor="CEP">BAIRRO</label>
                        <input className="border w-70 py-2 px-4 rounded-lg" type="text" name="" id="CEP" placeholder="Seu bairro" />
                    </div>
                </div>

                {/* CIDADE E ESTADO */}
                <div className="flex gap-4">

                    <div className="flex flex-col gap-2">
                        <label className="font-semibold text-sm" htmlFor="CEP">CIDADE</label>
                        <input className="border w-70 py-2 px-4 rounded-lg" type="text" name="" id="CEP" placeholder="Sua cidade" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-semibold text-sm" htmlFor="CEP">ESTADO</label>
                        <select className="border w-70 py-2 px-4 rounded-lg" name="" id="">
                            <option value="">Seu estado</option>
                            <option value="">AM</option>
                            <option value="">SP</option>
                        </select>
                    </div>
                </div>
                {adicionarNovoEndereco && <button onClick={handleAdicionarNovoEndereco} className="font-semibold text-sm w-50 h-10 rounded-xl bg-black text-white">Cancelar</button>}
            <div className="h-0.5 bg-gray-200 w-full"></div>
            </div>}

            
           
            <div className="py-8 flex flex-col gap-5">
                <div>
                    <p className="font-semibold">Modalidade de envio</p>
                </div>
                <div className="flex flex-col gap-5">
                    <div  onClick={handleEntregaRapida} className={`${freteRapidoSelecionado? 'border-amber-200': 'border-black'} border rounded-2xl p-4 flex justify-between items-center`}>
                        <div className="flex gap-4 items-center">
                            <div>
                                <i class="fa-regular fa-circle"></i>
                            </div>
                            <div >
                                <p className="font-semibold text-lg text-gray-500">Entrega rápida</p>
                                <p className="text-xs italic text-gray-400">Receba em até 4 dias</p>
                            </div>

                        </div>
                        <div className="text-lg font-semibold text-gray-500">
                            R$ 25,00
                        </div>
                    </div>

                     <div  onClick={handleEntregaPadrao} className={`${fretePadraoSelecionado? 'border-amber-200': 'border-black'} border rounded-2xl p-4 flex justify-between items-center`}>
                        <div className="flex gap-4 items-center">
                            <div>
                                <i class="fa-regular fa-circle"></i>
                            </div>
                            <div >
                                <p className="font-semibold text-lg text-gray-500">Entrega rápida</p>
                                <p className="text-xs italic text-gray-400">Receba em até 4 dias</p>
                            </div>

                        </div>
                        <div className="text-lg font-semibold text-gray-500">
                            R$ 15,00
                        </div>
                    </div>
            </div>


        </div>
            </div>
    )
}