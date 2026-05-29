export default function HelpCenter(){
    return(
        <div className="flex flex-col gap-8 lg:gap-8 pt-20 pb-5 lg:py-30 pl-20 pr-5 lg:pl-100 lg:pr-20 h-full">
                <div className="p-8 bg-white border rounded-2xl gap-4 flex flex-col">
                    <h1 className="text-2xl font-semibold">Problemas com um pedido?</h1>
                    <p>Nossa equipe de suporte está pronta para resolver qualquer dúvida sobre suas entregas ou pagamentos.</p>
                    <button className="flex gap-2 bg-pink-700 text-white font-semibold px-3 py-3 rounded-3xl">
                        <div><i class="fa-solid fa-headset"></i></div>
                        Abrir chamado sobre um pedido
                    </button>
                </div>

                <div>

                <div className="p-8 flex flex-col gap-8 ">
                    <h2 className="text-xl font-semibold">Histórico de atendimento</h2>
                    <div className="flex justify-between gap-4 bg-gray-200 p-1 rounded-2xl">
                        <button className="w-full bg-white p-2 rounded-xl text-blue-700 font-semibold">Em aberto</button>
                        <button className="w-full rounded-xl font-semibold  text-gray-500">Concluído</button>
                    </div>
                </div>


                <div className="flex flex-col gap-4">

<div className="p-8 shadow-xs border border-gray-100 flex flex-col bg-white rounded-2xl ">
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
                
                
            </div>
    )
}