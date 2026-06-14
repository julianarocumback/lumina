import { useState } from "react";

export default function Payment({pagamento, setPagamento,cupom, setCupom, payments}) {
    const [cupomAdicionado, setCupomAdicionado] = useState('')

    function handleCartaoSelecionado(payment){
        if(Object.keys(pagamento).length === 0){
            setPagamento(payment)
        } else {
            setPagamento({})
        }
    }

    function handleVerificarCupom(){
        if(cupomAdicionado === 'DEUS'){
            setCupom(prev => ({...prev, valor: 0.1}))
            setCupomAdicionado('')
        }
    }

    function handleRemoverCupom(){
        setCupom({})
    }

    return (
        <div className="w-full h-full lg:rounded-2xl overflow-hidden bg-white shadow-xs p-8">
            <div className="pb-12 flex flex-col gap-2">
                <h2 className="text-2xl">Forma de pagamento</h2>
                <p>Escolha como deseja concluir sua aquisição</p>
            </div>

            {/* FORMA DE PAGAMENTO */}
            <div className="flex gap-4">

                {payments.map(payment => {
                    return (
                          <div onClick={()=>handleCartaoSelecionado(payment)} className={`border w-full p-4 flex flex-col gap-2 rounded-2xl ${payment.is_main === 'Casa' && 'border-red-500'}`}>
                        <div className="flex justify-between">
                            <div className="flex gap-2">
                                <div><i class="fa-regular fa-house"></i></div>
                                <span className="font-semibold"></span>
                            </div>
                            <div>
                                <i class="fa-regular fa-circle"></i>
                            </div>
                        </div>
                        <div>
                            <div>{payment.brand},{payment.expiration_date} {payment.holder_name} {payment.last_four} {payment.is_main}</div>
                        </div>
                    </div>

                    )
                })}


          

            </div>

            {/* INFORMAÇÕES DO CARTÃO */}
            {pagamento.metodo === 'Cartão' && <div className="py-8 flex flex-col gap-8">
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
            {pagamento.metodo === 'Pix' && 
                <div className="py-8 flex flex-col gap-8">
                    <p>Pix</p>
                </div>}

            <div>
                <label htmlFor="cupom">Cupom de desconto</label>
                <input id="cupom" className="border" value={cupomAdicionado} onChange={(e)=> setCupomAdicionado(e.target.value)} type="text" />
                <button onClick={handleVerificarCupom}>Adicionar</button>
                {Object.keys(cupom).length > 0 && <button onClick={handleRemoverCupom}>Remover</button>}
            </div>
        </div>
    )
}