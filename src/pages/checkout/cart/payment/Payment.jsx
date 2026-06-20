import { useState } from "react";
import QRCode from './qr-code.svg'

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
        } if(pagamento.id !== payment.id){
            setPagamento(payment)
        } else {
            setPagamento({})
        }
    }


    function handleVerificarCupom(){
        if(cupomAdicionado === 'DEUS'){
            setCupom(prev => ({...prev, valor: 0.1}))
        }
    }

    function handleRemoverCupom(){
        setCupom({})
            setCupomAdicionado('')

    }

    return (
        <div className="w-full h-full lg:rounded-2xl overflow-hidden bg-white shadow-xs flex flex-col gap-8 p-8">
            <div className="flex flex-col gap-2">
                <h2 className="text-2xl">Forma de pagamento</h2>
                <p>Escolha como deseja concluir sua aquisição</p>
            </div>

            {/* FORMA DE PAGAMENTO */}
            <div className="flex flex-col gap-4">
                <div className="flex w-fit text-nowrap gap-4">
                    {paymentTypeList.map(payment => {
                        return (
                            <div onClick={()=>handlePaymentType(payment.id)} className={`w-full ${paymentType === payment.id && ' outline-green-300 bg-green-400 border-none text-white'} border border-gray-300 rounded-2xl px py-3 font-semibold px-4 flex text-gray-700 gap-4`} >
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
            <div className="flex gap-4 overflow-x-auto no-scrollbar from-95% to-[#0002] py-2">
                {payments.map(payment => {
                    const isSelected = pagamento.id === payment.id

                    return (
                          <div onClick={()=>handleCartaoSelecionado(payment)} className={`${isSelected && ' outline-green-500 bg-green-700 outline-2 text-gray-700'} h-40 lg:h-40  lg:w-65 gap-2 w-full md:w-70 justify-center rounded-2xl bg bg-[radial-gradient(at_0%_0%,#000,transparent_100%),radial-gradient(at_100%_100%,#000,transparent_90%),radial-gradient(at_0%_0%,#000,transparent_80%)] shadow-lg p-4 flex flex-col`}>
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
                <div className="flex flex-col gap-4 lg:gap-8 text-center items-center p-2 lg:p-8">
                    <div className="flex flex-col gap-1 lg:gap-2">
                        <h2 className="text-[14px] lg:text-lg font-semibold text-gray-700">Escaneie o QR Code ou copie o código</h2>
                        <p className="text-xs text-gray-500">O pagamento via PIX é instantâneo e seguro.</p>
                    </div>

                    <div className="h-50 border border-gray-200 rounded-2xl overflow-hidden shadow-xl"><img className="h-full" src={QRCode} alt="" /></div>
                    <div className="flex flex-col gap-4 w-full">
                        <p className="text-[14px] lg:text-base font-semibold text-gray-700">Código PIX copia e cola</p>
                        <div className="flex gap-4">
                            <div className="border w-full text-xs truncate p-2 bg-gray-100 border-gray-200 rounded-lg">00020101021226850014br.gov.bcb.pix0123radianteditorialpix@checkout.com.br5204000053039865406409.235802BR5920Radiant Editorial6009SAO PAULO62070503***6304E2B1</div>
                            <button className="bg-blue-400 text-white font-semibold rounded-lg px-2 text-xs ">COPIAR</button>

                        </div>
                            <div className="flex gap-2 text-gray-700 items-center justify-center text-[12px] lg:text-base">
                                <div><i class="fa-regular fa-clock"></i></div>
                                <div className="">Este código expira em <span className="text-pink-600 font-semibold">30:00</span> minutos</div>
                            </div>

                    </div>

                </div>
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

            {paymentType === 'card' && 
                <div className="flex flex-col gap-2">
                    <label htmlFor="cupom" className="font-semibold">Adicionar cupom de desconto</label>
                    <div className="flex gap-4">
                        <input disabled={Object.keys(cupom).length > 0} id="cupom" className="disabled:bg-gray-100 disabled:border-gray-300 border rounded-lg px-2 w-50" value={cupomAdicionado} onChange={(e)=> setCupomAdicionado(e.target.value)} type="text" />
                        {Object.keys(cupom).length === 0 && <button onClick={handleVerificarCupom}>Adicionar</button>}
                        {Object.keys(cupom).length > 0 && <button onClick={handleRemoverCupom}>Remover</button>}

                    </div>
                </div>
            }
        </div>
    )
}