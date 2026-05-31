import { useOutletContext } from 'react-router-dom'
export default function Payment(){
    const {dadosCliente} = useOutletContext()
    if(!dadosCliente) return
    return(
        <div className="flex flex-col gap-8 lg:gap-8 pt-20 pb-5 lg:py-30 pl-20 pr-5 lg:pl-100 lg:pr-20 h-full lg:h-screen">
                <h1 className="text-2xl font-semibold">Pagamentos</h1>

                <div className="flex flex-col gap-8">
                    <h2 className="text-xl font-semibold">Cartões Salvos</h2>
                    {/* CARTÕES  */}
                    <div className="flex flex-col md:flex-row gap-4">

                    <div className="flex flex-col md:flex-row gap-4">
                        {dadosCliente.cartoes.map(cartao => {
                            return (
                                <div className="h-40 gap-2 w-full md:w-70 justify-center rounded-2xl bg bg-[radial-gradient(at_0%_0%,#000,transparent_100%),radial-gradient(at_100%_100%,#000,transparent_90%),radial-gradient(at_0%_0%,#000,transparent_80%)] shadow-lg p-4 flex flex-col">
                            <div className="flex justify-between">
                            <div className="text-white"><i class="fa-brands fa-cc-visa"></i></div>
                            <span className="text-xs font-bold text-gray-400">{cartao.categoria}</span>
                            </div>

                            <div className="bg-yellow-500 w-6 rounded-md h-4"></div>
                            <div className="self-center text-white font-semibold -tracking-tighter">{cartao.numero}</div>
                            <div className="flex justify-between text-white">
                                <div className="">
                                    <span className="text-[8px] font-semibold text-gray-400">Nome</span>
                                    <p className="text-xs font-semibold">{cartao.nome}</p>
                                </div>
                                <div>
                                    <span className="text-[8px] font-semibold text-gray-400 text-right">Validade</span>
                                    <p className="text-xs font-semibold">{cartao.validade}</p>
                                </div>
                            </div>
                        </div>
                            )
                        })}
                    </div>
                    <button className="h-40 flex-none  w-full md:w-70 justify-center items-center gap-2 rounded-2xl p-4 flex flex-col border-dashed border border-gray-300">
                            
                            <div className="flex justify-center items-center rounded-full bg-gray-200 w-10 h-10 text-gray-500"><i class="fa-solid fa-plus "></i></div>
                           
                            <p className="text-[12px] font-semibold text-gray-700">Novo cartão de crédito</p>
                        </button>
                    </div>
                </div>


                <div className="flex flex-col gap-4">
                
                    <h2 className="text-xl font-semibold">Transações recentes</h2>
                
                    <div className="bg-white shadow-xs p-4 flex flex-col gap-6 rounded-2xl ">
                
                        <div className=" flex justify-between">
                            <div className="h-10 w-10 bg-gray-100 flex justify-center items-center rounded-xl">
                                <i class="fa-solid fa-book-open"></i>
                            </div>
                            <div>
                                <h3 className="text-[14px] font-semibold">O Peregrino</h3>
                                <p className="text-[10px] ">24 Out 2025</p>
                            </div>
                            <div>
                                <p className="text-[14px] font-semibold">R$ 189,90</p>
                                <p className="text-[10px] text-right ">Concluído</p>
                            </div>
                        </div>


                       
                       <div className=" flex justify-between">
                            <div className="h-10 w-10 bg-gray-100 flex justify-center items-center rounded-xl">
                                <i class="fa-solid fa-book-open"></i>
                            </div>
                            <div>
                                <h3 className="text-[14px] font-semibold">O Peregrino</h3>
                                <p className="text-[10px] ">24 Out 2025</p>
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