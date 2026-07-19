import {motion} from 'framer-motion'

export default function HelpCenter(){
    return(
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.7}} className="flex flex-col gap-8 lg:gap-8 pt-7 pb-25 lg:py-30 pl-20 pr-5 lg:pl-150 lg:pr-70 h-full">
                <div className="p-8 lg:py-15 border border-gray-100 rounded-2xl gap-4 flex flex-col bg-[radial-gradient(at_0%_100%,#0288D120,transparent_30%),radial-gradient(at_100%_0%,#E91E6310,transparent_30%)] shadow-xs">
                    <h1 className="text-2xl font-semibold">Problemas com um pedido?</h1>
                    <p className="text-[14px]">Nossa equipe de suporte está pronta para resolver qualquer dúvida sobre suas entregas ou pagamentos.</p>
                    <button className="flex gap-2 bg-pink-700 text-white font-semibold px-3 py-3 rounded-3xl justify-center lg:w-75">
                        <div><i class="fa-solid fa-headset"></i></div>
                        Abrir chamado
                    </button>
                </div>

                <div>

                <div className="py-8 flex flex-col lg:flex-row lg:justify-between gap-8 ">
                    <h2 className="text-xl font-semibold">Histórico de atendimento</h2>
                    <div className="flex justify-between gap-4 bg-gray-200 p-1 rounded-2xl lg:w-100">
                        <button className="w-full bg-white p-2 rounded-xl text-blue-700 font-semibold">Em aberto</button>
                        <button className="w-full rounded-xl font-semibold  text-gray-500">Concluído</button>
                    </div>
                </div>


                <div className="flex flex-col gap-4">

                    <div className="p-8 shadow-xs border border-gray-100 flex justify-between  bg-white rounded-2xl ">
                    <div className="flex gap-4 flex-col lg:flex-row lg:items-center lg:gap-8">
                        <div className="flex flex-col lg:flex-row gap-2 lg:gap-8">
                            <p className="text-blue-700 text-xs font-medium">#CH-0002</p>
                            
                            <div className="flex text-xs">
                                <div><i class="fa-solid fa-calendar"></i></div>
                                10 Out, 2023
                            </div>

                        </div>
                      <p className="text-xl font-semibold">Atraso na Entrega</p>
                    </div>

                    <div className="flex flex-col mt-3 justify-between items-end gap-4 lg:flex-row">
                       <p className="bg-yellow-300 text-xs py-1 px-2 rounded-full font-semibold text-yellow-800">EM ANÁLISE</p>
                        <button className="bg-gray-200 h-7 w-7 rounded-full">
                            <i class="fa-solid fa-angle-right"></i>
                        </button>
                    </div>
                </div>
                <div className="p-8 shadow-xs border border-gray-100 flex flex-col bg-white rounded-2xl  ">
                    <div className="flex justify-between items-center">
                        <p className="text-blue-700 text-xs font-medium">#CH-0002</p>
                        <p className="bg-yellow-300 text-xs py-1 px-2 rounded-full font-semibold text-yellow-800">EM ANÁLISE</p>
                    </div>
                    <p className="text-xl font-semibold">Atraso na Entrega</p>

                    <div className="flex mt-3 justify-between items-center">
                        <div className="flex justify-between text-xs">
                            <div><i class="fa-solid fa-calendar"></i></div>
                            10 Out, 2023
                        </div>
                        <button className="bg-gray-200 h-7 w-7 rounded-full">
                            <i class="fa-solid fa-angle-right"></i>
                        </button>
                    </div>
                </div>
                    
                </div>

                </div>
                
                
            </motion.div>
    )
}