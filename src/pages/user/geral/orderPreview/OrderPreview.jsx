import { Link } from 'react-router-dom'
import { currencyFormatter, formatDate } from '../../../../utils/formatters'


export default function OrderPreview({orders}){
    const orderArray = orders ?? []
    const latestOrder = orderArray.length > 0? [...orders].sort((a,b)=> new Date(b.created_at) - new Date(a.created_at))[0] : null
   
    return (
        <div className='flex flex-col overflow-hidden gap-4 p-8 bg-white border border-gray-100 rounded-3xl shadow-lg md:w-3/4 lg:w-3/5 lg:h-125 xl:w-2/3'>
            {latestOrder?
                <div className='flex flex-col gap-4 lg:gap-6'>


                    <div className='flex justify-between gap-2  items-center'>
                        <div className='flex flex-col  xl:flex-row xl:gap-4 xl:items-center'>
                            
                            <span className='text-xs  font-semibold lg:text-base'>#
                                {latestOrder?.id?.slice(0,8).toUpperCase()}
                            </span>
                            <span className='text-gray-500 hidden xl:inline'>•</span>
                            <p className=' font-light text-[10px] xl:text-base lg:block'>Realizado  {formatDate(latestOrder.created_at)}</p>
                        </div>
                        <span className='py-1 px-3 text-xs font-semibold uppercase text-green-700 bg-green-300/30 rounded-full'>{latestOrder.status}</span>
                    </div>


                    <div className='gap-2 items-center flex border p-3 rounded-2xl border-gray-50  bg-blue-100/30'>
                            <div>
                                <div className='p-2 h-9 rounded-lg w-9 flex items-center justify-center bg-blue-300 text-white'><i class="fa-solid fa-bolt-lightning"></i></div>
                            </div>
                            <div className='flex flex-col '>
                                <p className='font-semibold text-[14px] text-gray-700  text-text-[rgba(71,71,71,0.7)]'>Chega em  até dois dias</p>
                                <p className='text-xs text-gray-500'>Entrega rápida • {currencyFormatter(latestOrder?.frete?.price)}</p>
                            </div>
                        </div>


                    <div className='flex flex-col gap-4'>
                        <div className='flex overflow-x-auto gap-4 no-scrollbar'>
                            {latestOrder?.produtos?.map(produto => {
                                return (
                                    <Link to={`/produto/${produto.id}`}>
                                        <div key={produto.id} className='flex overflow-hidden w-57 h-30 shadow border border-gray-200 rounded-xl gap-2 items-center p-2'>
                                            <div className='h-full w-1/3 rounded-xl overflow-hidden'>
                                                <img className='w-full h-full object-cover' src={produto.img_url} alt='' />

                                            </div>
                                            <div className='w-2/3'>
                                            <p className='text-[12px] font-semibold text-amber-600'>{produto.categoria}</p>
                                               <p className='truncate font-semibold text-gray-800'> {produto.nome}</p>
                                               <p className='text-xs line-clamp-2 text-gray-700'>{produto.description}</p>
                                               <p className='font-semibold'>{currencyFormatter(produto.valor)}</p>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>                 
         
                    </div>

                    <div className='h-0.5 bg-gray-100'></div>

                    <div className='flex flex-col gap-2'>
                        <div className='flex justify-between'>
                            <p className='text-gray-700 lg:text-lg'>Subtotal</p>
                            <p className=' text-lg font-semibold'>{currencyFormatter(latestOrder.valor)}</p>
                        </div>
                        <div className='flex gap-4'>
                            <button className='flex items-center gap-1 px-2 py-2 w-full font-semibold text-gray-800 bg-gray-50 rounded-xl lg:px-4 lg:py-4 lg:text-xl'>
                            <div><i className="fa-solid fa-file-lines"></i></div>
                            <div>Detalhes</div>
                        </button>
                        <button className='flex items-center gap-1 px-2 py-2 font-semibold text-blue-400 bg-blue-50 rounded-xl lg:px-4 lg:py-4 lg:text-xl w-full'>
                            <div><i className="fa-solid fa-location-dot"></i></div>
                            <div>Rastrear</div>
                        </button>

                        </div>
                        
                    </div>
                </div>
            :
                <div>Não há pedidos recentes!</div>
            }
        </div>
    )
}