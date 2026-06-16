import { useState } from "react";

export default function Payment({pagamento, setPagamento,cupom, setCupom, payments}) {
    const [cupomAdicionado, setCupomAdicionado] = useState('')
    const [paymentType, setPaymentType] = useState('card')
    
    const paymentTypeList = [
        {
            id: 'card',
            main: true,
            title: 'Cartão de crédito',
            type: 'card',
            status: false
        },
        {
            id: 'pix',
            main: true,
            title: 'Pix',
            type: 'card',
            status: true,
        }
    ]

    function handlePaymentType(paymentID){
        setPaymentType(paymentID)
    }
    
    function handleCartaoSelecionado(payment){
        if(Object.keys(pagamento).length === 0){
            setPagamento(payment)
        } else {
            setPagamento({})
        }
    }

    function handlePixSelecionado(){
        setPagamento({})
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
        <div className="w-full h-full lg:rounded-2xl overflow-hidden bg-white shadow-xs flex flex-col gap-8 p-8">
            <div className="flex flex-col gap-2">
                <h2 className="text-2xl">Forma de pagamento</h2>
                <p>Escolha como deseja concluir sua aquisição</p>
            </div>

            {/* FORMA DE PAGAMENTO */}
            <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                    {paymentTypeList.map(payment => {
                        return (
                            <div onClick={()=>handlePaymentType(payment.id)} className={`w-full ${paymentType === payment.id && 'border-red-500'} border rounded-2xl h-30 p-4 flex flex-col justify-between`} >
                                <div>
                                    <i class="fa-solid fa-credit-card"></i>
                                </div>
                                <p>{payment.title}</p>
                            </div>
                        )
                    })}
            </div>   

            {/* OPÇÕES DE PAGAMENTO */}
            {paymentType === 'card' ? 
            // PIX
            
            
            // CARTÃO DE CRÉDITO
            <div className="flex gap-4 overflow-x-auto no-scrollbar bg-gradient-to-r from-[#fff] from-95% to-[#0002] py-2">
                {payments.map(payment => {
                    return (
                          <div onClick={()=>handleCartaoSelecionado(payment)} className="h-40 lg:h-40  lg:w-65 gap-2 w-full md:w-70 justify-center rounded-2xl bg bg-[radial-gradient(at_0%_0%,#000,transparent_100%),radial-gradient(at_100%_100%,#000,transparent_90%),radial-gradient(at_0%_0%,#000,transparent_80%)] shadow-lg p-4 flex flex-col">
                                    <div className="flex justify-between">
                                        <div className="text-white"><i class="fa-brands fa-cc-visa"></i></div>
                                        <span className="text-xs font-bold text-gray-400">{payment.brand}</span>
                                    </div>

                                    <div className="bg-yellow-500 w-6 rounded-md h-4"></div>
                                    
                                    <div className="self-center text-white font-semibold -tracking-tighter">{payment.last_four.replace(/\D/g,'').replace(/^(\d{4})(\d{4})(\d{4})(\d{4})$/, '•••• •••• •••• $4')}</div>
                                    <div className="flex justify-between text-white">
                                        <div className="">
                                            <span className="text-[8px] font-semibold text-gray-400">Nome</span>
                                            <p className="text-xs font-semibold capitalize">{payment.holder_name}</p>
                                        </div>
                                        <div>
                                            <span className="text-[8px] font-semibold text-gray-400 text-right">Validade</span>
                                            <p className="text-xs font-semibold">{payment.expiration_date}</p>
                                        </div>
                                    </div>
                                </div>

                    )}
                )}
            </div>
            :
                <div>aaaaaaaa</div>
            }
                
            
      
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

            <div className="border">
                <label htmlFor="cupom">Cupom de desconto</label>
                <input id="cupom" className="border" value={cupomAdicionado} onChange={(e)=> setCupomAdicionado(e.target.value)} type="text" />
                <button onClick={handleVerificarCupom}>Adicionar</button>
                {Object.keys(cupom).length > 0 && <button onClick={handleRemoverCupom}>Remover</button>}
            </div>
        </div>
    )
}