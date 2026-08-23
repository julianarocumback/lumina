import { motion } from 'framer-motion'

export default function HelpCenter(){
    return(
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.7}} className='flex flex-col gap-8 h-full pt-7 pb-25 pl-20 pr-5 lg:gap-8 lg:py-30 lg:pr-70   lg:pl-150'>
            {/* CTA */}
            <div className='flex flex-col gap-4 p-8  border bg-[radial-gradient(at_0%_100%,#0288D120,transparent_30%),radial-gradient(at_100%_0%,#E91E6310,transparent_30%)] border-gray-100 rounded-2xl shadow-xs lg:py-15'>
                <h1 className='text-2xl font-semibold'>Problemas com um pedido?</h1>
                <p className='text-[14px]'>Nossa equipe de suporte está pronta para resolver qualquer dúvida sobre suas entregas ou pagamentos.</p>
                {/* Open ticket button */}
                <button className='flex justify-center gap-2 px-3 py-3 text-white font-semibold bg-pink-700 rounded-3xl lg:w-75'>
                    <div><i className='fa-solid fa-headset'></i></div>
                    <span>Abrir chamado</span>
                </button>
            </div>

            {/* SUPPORT HISTORY SECTION */}
            <div>
                <div className='flex flex-col items-center gap-8 py-8 lg:flex-row lg:justify-between'>
                    <h2 className='text-xl font-semibold'>Histórico de atendimento</h2>
                    {/* Filter tabs */}
                    <div className='flex justify-between gap-4 p-1 bg-gray-200 rounded-2xl lg:w-100'>
                        <button className='w-full p-2 text-blue-700 font-semibold bg-white rounded-xl'>Em aberto</button>
                        <button className='w-full font-semibold text-gray-500 rounded-xl'>Concluído</button>
                    </div>
                </div>

                {/* Support layout ticket card */}
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col p-8 bg-white border border-gray-100 rounded-2xl shadow-xs'>
                        <div className='flex justify-between items-center'>
                            <p className='text-xs font-medium text-blue-700 '>#CH-0001</p>
                            <p className='py-1 px-2 text-xs font-semibold text-yellow-800 bg-yellow-300 rounded-full'>EM ANÁLISE</p>
                        </div>
                        <p className='text-xl font-semibold'>Atraso na Entrega</p>

                        <div className='flex justify-between items-center mt-3'>
                            <div className='flex justify-between text-xs'>
                                <div><i className='fa-solid fa-calendar'></i></div>
                                <span>10 Out, 2023</span>
                            </div>
                            <button className='h-7 w-7  bg-gray-200 rounded-full'>
                                <i className='fa-solid fa-angle-right'></i>
                            </button>
                        </div>
                    </div>
                    <div className='flex flex-col p-8 bg-white border border-gray-100 rounded-2xl shadow-xs'>
                        <div className='flex justify-between items-center'>
                            <p className='text-xs font-medium text-blue-700 '>#CH-0002</p>
                            <p className='py-1 px-2 text-xs font-semibold text-yellow-800 bg-yellow-300 rounded-full'>EM ANÁLISE</p>
                        </div>
                        <p className='text-xl font-semibold'>Atraso na Entrega</p>

                        <div className='flex justify-between items-center mt-3'>
                            <div className='flex justify-between text-xs'>
                                <div><i className='fa-solid fa-calendar'></i></div>
                                <span>10 Out, 2023</span>
                            </div>
                            <button className='h-7 w-7  bg-gray-200 rounded-full'>
                                <i className='fa-solid fa-angle-right'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}