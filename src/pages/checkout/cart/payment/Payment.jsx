import { useState } from "react";

export default function Payment({setPaymentOk, desconto, setDesconto}){
    const [cartaoSelecioando, setCartaoSelecionado] = useState(false)
    const [pixSelecioando, setPixSelecionado] = useState(false)
    const [cupomDesconto, setCupomDesconto] = useState('')

    function handleCartaoSelecionado(){
        setCartaoSelecionado(prev => !prev)
        setPixSelecionado(false)
    }

    function handlePixSelecionado(){
        setPixSelecionado(prev => !prev)
        setCartaoSelecionado(false)
    }

    function handleCupomDesconto(cupom){
        setCupomDesconto(cupom)
    }

    if(cupomDesconto === 'DEUS'){
        setDesconto(0.1)
    }

    if(cartaoSelecioando || pixSelecioando){
        setPaymentOk(true)
    }

    return(
        <div className="w-full rounded-2xl overflow-hidden bg-white shadow-xs p-8">
            <div className="pb-12 flex flex-col gap-2">
                <h2 className="text-2xl">Forma de pagamento</h2>
                <p>Escolha como deseja concluir sua aquisição</p>
            </div>

            {/* FORMA DE PAGAMENTO */}
            <div className="flex gap-4">

                {/* CARTÃO DE CRÉDITO */}
                <div onClick={handleCartaoSelecionado} className="border flex justify-between p-4 w-full rounded-2xl">
                    <div>
                        <div className="text-blue-700"><i className="fa-solid fa-credit-card"></i></div>
                        <p className="font-semibold">Cartão de crédito</p>
                    </div>
                    <div>
                        <div><i class="fa-regular fa-circle"></i></div>
                    </div>
                </div>

                {/* PIX */}
                <div onClick={handlePixSelecionado} className="border flex justify-between p-4 w-full rounded-2xl">
                    <div>
                        <div className="text-blue-700"><i class="fa-brands fa-pix"></i></div>
                        <div className="flex gap-2 items-center">
                            <p className="font-semibold">Pix</p>
                             <div className="bg-red-700 rounded-2xl px-2 text-xs flex h-5 items-center font-semibold text-white">10% OFF</div>   
                        </div>
                    </div>
                    <div>
                        <div><i class="fa-regular fa-circle"></i></div>
                    </div>
                </div>

            </div>

            {/* INFORMAÇÕES DO CARTÃO */}
            {cartaoSelecioando && <div className="py-8 flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                    <label htmlFor="numero">Número do cartão</label>
                    <input className="border p-2 rounded-lg" type="text" placeholder="0000 0000 0000 0000" />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="numero">Nome impresso no cartão</label>
                    <input className="border p-2 rounded-lg" type="text" placeholder="Nome como está impresso no cartão" />
                </div>

                <div className="flex gap-2">
                    <div className="flex flex-col w-full">
                        <label htmlFor="numero">Número do cartão</label>
                        <input className="border p-2 rounded-lg" type="text" placeholder="0000 0000 0000 0000" />
                    </div>
                    <div className="flex flex-col w-full ">
                        <label htmlFor="numero">Número do cartão</label>
                        <input className="border p-2 rounded-lg" type="text" placeholder="0000 0000 0000 0000" />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="parcelamento">Opções de parcelamento:</label>
                    <select name="" id="parcelamento" className="border p-2 rounded-lg">
                        <option value="">1x de R$ 500,00 sem juros</option>
                        <option value="">2x de R$ 250,00 sem juros</option>
                        <option value="">3x de R$ 167,00 sem juros</option>
                    </select>
                </div>

            </div>}

            {/* INFORMAÇÕES DO CARTÃO */}
            {pixSelecioando && 
                <div className="py-8 flex flex-col gap-8">
                    <p>Pix</p>
                </div>}

            <div>
                <p>Cupom de desconto</p>
                <input className="border" value={cupomDesconto} onChange={(e)=>handleCupomDesconto(e.target.value)} type="text" />
                <button>Adicionar</button>
            </div>
        </div>
    )
}