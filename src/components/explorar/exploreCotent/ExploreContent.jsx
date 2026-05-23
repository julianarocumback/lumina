import blueCollection from './blueCollection.png'
import pinkCollection from './pinkCollection.png'
import yellowCollection from './yellowCollection.png'
import greenCollection from './greenCollection.png'

export const Carrossel = () => {
    return(
        <div className="w-full">
            <p>aaaaaaaaaa</p>
        </div>
    )
}

export const BentoGrid = () => {
    return (
        <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-2 text-center">
                <span className="text-[#BC004B] text-base font-bold">EXPLORE POR CORES</span>
                <h3 className="text-4xl text-[#1A1C1D]">A Cromatografia da Fé</h3>
                <p className="text-base text-[#474747]">Navegue por nossas coleções curadas visualmente para encontrar o tom que ressoa com seu momento espiritual.</p>
            </div>
            <div className="grid grid-cols-4 grid-rows-2 gap-4">
                <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden">
                    <div className='h-full w-full bg-linear-to-t from-[rgba(0,99,154,90)] via-[rgba(0,99,154,70)] to-[rgba(0,99,154,10)] relative'>
                        <img className='h-full w-full object-cover' src={blueCollection} alt="" />
                        <div className='flex flex-col justify-end absolute inset-0 py-6 px-6 gap-3'>
                            <div>
                                <p className=' text-white text-3xl'>Tons de Azul</p>
                                <p className=' text-white/80'>Bíblias de Estudo e Edições de Luxo</p>
                            </div>
                            <div>
                                <p className=' text-white font-bold'>Ver Coleção</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 row-span-1 rounded-2xl  overflow-hidden">
                    <div className='h-full bg-linear-to-t from-[rgba(188,0,75,90)] via-[rgba(188,0,75,70)] to-[rgba(188,0,75,10)] relative'>
                        <img className='h-full w-full object-cover' src={pinkCollection} alt="" />
                        <div className='flex flex-col justify-end absolute inset-0 py-6 px-6 gap-3'>
                            <div>
                                <p className=' text-white text-2xl'>Tons de Rosa</p>
                                <p className=' text-white/80'>Devocionais Diários e Inspiração</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 rounded-2xl  overflow-hidden">
                    <div className='h-full bg-linear-to-t from-[rgba(112,93,0,90)] via-[rgba(112,93,0,70)] to-[rgba(112,93,0,10)] relative'>
                        <img className='h-full w-full object-cover' src={yellowCollection} alt="" />
                        <div className='flex flex-col justify-end absolute inset-0 py-6 px-6 gap-3'>
                            <div>
                                <p className=' text-white text-2xl'>Tons de Amarelo</p>
                                <p className=' text-white/80'>Literatura Infantil Cristã</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 rounded-2xl  overflow-hidden">
                    <div className='h-full bg-linear-to-t from-[rgba(15,23,42,90)] via-[rgba(15,23,42,70)] to-[rgba(15,23,42,10)] relative'>
                        <img className='h-full w-full object-cover' src={greenCollection} alt="" />
                        <div className='flex flex-col justify-end absolute inset-0 py-6 px-6 gap-3'>
                            <div>
                                <p className=' text-white text-2xl'>Tons de Verde</p>
                                <p className=' text-white/80'>Teologia e Clássicos</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}