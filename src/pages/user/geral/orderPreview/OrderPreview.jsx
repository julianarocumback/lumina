import { Link } from 'react-router-dom'
import { formatDate } from '../../../../utils/formatters'


export default function OrderPreview({orders}){
    const orderArray = orders ?? []
    const latestOrder = orderArray.length > 0? [...orders].reverse()[0] : null
   
    return (
        <div className='flex flex-col overflow-hidden gap-4 p-8 bg-white border border-gray-100 rounded-3xl shadow-lg md:w-3/4 lg:w-3/5 lg:h-125 xl:w-2/3'>
            {latestOrder?
                <div className='flex flex-col gap-8'>
                    <div className='flex justify-between gap-2'>
                        <div className='flex items-center gap-4'>
                            <h2 className='text-xs lg:font-semibold'>ÚLTIMO PEDIDO</h2>
                            <span className='text-xs  font-semibold lg:text-base'>#
                                {latestOrder?.id?.slice(0,8)}
                            </span>
                            <p className='hidden font-light lg:block'>{formatDate(latestOrder.created_at)}</p>
                        </div>
                        <span className='py-1 px-3 text-xs font-semibold uppercase text-green-700 bg-green-300/30 rounded-full'>{latestOrder.status}</span>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <div className='flex overflow-x-auto gap-4 no-scrollbar'>
                            {latestOrder?.produtos?.map(produto => {
                                return (
                                    <Link to={`/produto/${produto.id}`}>
                                        <div key={produto.id} className='flex-none overflow-hidden w-25 h-35 border border-gray-200 rounded-xl'>
                                            <img className='w-full h-full' src={produto.img_url} alt='' />
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>                 

                        <div className='hidden justify-between lg:flex'>
                            <div className='flex items-center gap-4 text-right'>
                                <p className='text-lg text-[rgba(71,71,71,0.7)]'>ENTREGA ESTIMADA</p>
                                <p className='font-semibold'>3 dias a partir da data da compra</p>
                            </div>
                        </div>

                        <div className='flex gap-4 lg:justify-start'>
                            <p className='text-gray-500 font-semibold'></p>
                        </div>          
                    </div>
                    <div>
                        <button className='flex items-center gap-3 px-2 py-2 font-semibold text-blue-800 bg-blue-50 rounded-xl lg:px-4 lg:py-4 lg:text-xl'>
                            <div>Rastrear encomenda</div>
                            <div><i className='fa-solid fa-arrow-right'></i></div>
                        </button>
                    </div>
                </div>
            :
                <div>Não há pedidos recentes!</div>
            }
        </div>
    )
}