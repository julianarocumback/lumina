import { useOutletContext } from 'react-router-dom'

export default function Payment(){
    const {dadosCliente, newPayment, setNewPayment} = useOutletContext()
    
    
    if(!dadosCliente) return
    return(
        <div className={`${newPayment && 'fixed'} flex flex-col gap-8 lg:gap-8 pt-20 pb-5 lg:py-30 pl-20 pr-5 lg:pl-150 lg:pr-70 h-full lg:h-screen`}>
            <div className="flex flex-col gap-4">
                <h1 className="text-2xl lg:text-4xl font-semibold">Pagamentos</h1>
                <h3 className="hidden md:block text-lg text-gray-600">Gerencie suas formas de pagamento e acompanhe suas compras com total transparência e segurança.</h3>

            </div>

                <div className="flex flex-col gap-8">
                    <h2 className="text-xl lg:text-2xl font-semibold">Cartões Salvos</h2>
                    {/* CARTÕES  */}
                    <div className="flex flex-col lg:flex-row gap-4 flex-wrap md:flex-row">

                    <div className="flex flex-col lg:flex-row gap-4 flex-wrap md:flex-row">
                        {dadosCliente?.payment?.map(card => {
                            return (
                                <div className="h-40 lg:h-45 lg:w-75 gap-2 w-full md:w-70 justify-center rounded-2xl bg bg-[radial-gradient(at_0%_0%,#000,transparent_100%),radial-gradient(at_100%_100%,#000,transparent_90%),radial-gradient(at_0%_0%,#000,transparent_80%)] shadow-lg p-4 flex flex-col">
                            <div className="flex justify-between">
                            <div className="text-white"><i class="fa-brands fa-cc-visa"></i></div>
                            <span className="text-xs font-bold text-gray-400">{card.brand}</span>
                            </div>

                            <div className="bg-yellow-500 w-6 rounded-md h-4"></div>
                            <div className="self-center text-white font-semibold -tracking-tighter">{card.last_four}</div>
                            <div className="flex justify-between text-white">
                                <div className="">
                                    <span className="text-[8px] font-semibold text-gray-400">Nome</span>
                                <p className="text-xs font-semibold">{card.holder_name}</p>
                                </div>
                                <div>
                                    <span className="text-[8px] font-semibold text-gray-400 text-right">Validade</span>
                                    <p className="text-xs font-semibold">{card.expiration_date}</p>
                                </div>
                            </div>
                        </div>
                            )
                        })}
                    </div>
                    <button onClick={()=>setNewPayment(true)} className="h-40 flex-none lg:h-45 lg:w-75  w-full md:w-70 justify-center items-center gap-2 rounded-2xl p-4 flex flex-col border-dashed hover:border-blue-500 border border-gray-300 hover:bg-blue-500/10 transition-colors hover:text-blue-500 hover:cursor-pointer group [*_>_p]:text-blue-500">
                            
                            <div className="flex justify-center items-center rounded-full bg-gray-200 w-10 h-10 text-gray-500 group-hover:bg-blue-500/90 text-white transition-all"><i class="fa-solid fa-plus "></i></div>
                           
                            <p className="text-[12px] font-semibold text-gray-700 group-hover:text-blue-500/90 transition-all">Novo cartão de crédito</p>
                        </button>
                    </div>
                </div>


                <div className="flex flex-col gap-4">
                
                    <h2 className="text-xl font-semibold">Transações recentes</h2>
                
                    <div className="bg-white shadow-xs p-4 flex flex-col gap-6 rounded-2xl ">
                        <div className=" flex justify-between">
                            <div className=" flex gap-4">
                                <div className="h-10 w-10 bg-gray-100 flex justify-center items-center rounded-xl">
                                    <i class="fa-solid fa-book-open"></i>
                                </div>
                                <div>
                                    <h3 className="text-[14px] font-semibold">O Peregrino</h3>
                                    <p className="text-[10px] ">24 Out 2025</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-[14px] font-semibold">R$ 189,90</p>
                                <p className="text-[10px] text-right ">Concluído</p>
                            </div>
                        </div>


                       
                       <div className=" flex justify-between">
                            <div className=" flex gap-4">
                                <div className="h-10 w-10 bg-gray-100 flex justify-center items-center rounded-xl">
                                    <i class="fa-solid fa-book-open"></i>
                                </div>
                                <div>
                                    <h3 className="text-[14px] font-semibold">O Peregrino</h3>
                                    <p className="text-[10px] ">24 Out 2025</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-[14px] font-semibold">R$ 189,90</p>
                                <p className="text-[10px] text-right ">Concluído</p>
                            </div>
                        </div>

    
                    </div>
                    

                </div>
            </div>
    )
}