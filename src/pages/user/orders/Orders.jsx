import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import { currencyFormatter, formatDate} from '../../../utils/formatters'

export default function Orders(){
    const [status, setStatus] = useState('Todos')
    const [search, setSearch] = useState('')
    const {dadosCliente} = useOutletContext()
    if(!dadosCliente) return
    const orders = dadosCliente.pedidos ?? []

    const categories = [
        {
            status: 'Todos'
        },
        {
            status: 'Processando'
        },
        {
            status: 'Em transporte'
        },
        {
            status: 'Entregue'
        },
        {
            status: 'Cancelado'
        }
    ]

    function searchChange(e){
        const search = e.target.value
        setSearch(search)
    }

    const handleClearSearch = () => {
        setSearch('')
    }
 
    return (
        <div className='flex flex-col gap-8 ml-15 p-4 pb-18 sm:p-8 sm:pb-30 md:px-16 lg:ml-80 lg:pt-30 xl:p-32 xl:pb-18 2xl:px-70'>
            <div className='flex flex-col gap-8 w-full h-full'>
                <div>
                    <h2 className='text-2xl font-semibold'>Meus Pedidos</h2>
                    <p className='hidden lg:block'>Acompanhe suas jornadas literárias. Aqui você encontra o histórico de todas as suas aquisições e o status atual das suas entregas.</p>
                </div>

                <div className='flex flex-col gap-8 relative'>
                    <div className='relative'>
                        <div className='absolute top-3 left-3 text-gray-900'><i class='fa-solid fa-magnifying-glass'></i></div>
                        <input onChange={searchChange} value={search} className='w-full py-3 pl-10 pr-2 bg-gray-200 rounded-3xl' type='text' placeholder='Busque por número do pedido ou livro...'/>
                        {search !== '' && <div className='absolute top-3 right-5 cursor-pointer' onClick={handleClearSearch}><i className="fa-solid fa-xmark"></i></div>}
                        
                    </div>

                    {/* Categories */}
                    <div className='flex overflow-x-auto gap-4    w-full no-scrollbar'>
                        {categories.map(category => {
                            return (
                                <button onClick={()=> setStatus(category.status)} className={`py-2 px-4 font-semibold ${category.status === status? 'text-white bg-blue-400':'bg-white'} border border-gray-100 rounded-full cursor-pointer text-nowrap w-fit`}>{category.status}</button>
                            )
                        })}
                    </div>
                </div>           

                {/* Orders list */}
                <div className='flex flex-col gap-4'>
                    {orders?.filter(item => {
                        const idArrumado = item.id.toLowerCase()
                        const nomeArrumado = item.produtos.map(item => item.nome.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim())
                        const busca = search.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim()

                        const pesquisa = busca === '' || idArrumado.includes(busca) || nomeArrumado.some(item => item.includes(busca))
                        const categoria = status === 'Todos' || item.status === status

                        return pesquisa && categoria
                        })
                        .sort((a,b) => new Date(b.created_at) - new Date(a.created_at)).map(item => {
                            return (
                                <motion.div key={item.id} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className='flex flex-col gap-8 w-full p-8 bg-white border border-gray-100 rounded-3xl shadow'>

                                    <div className='flex justify-between items-end'>
                                        <div className='flex flex-col gap-4 w-full'>
                                            <div className='flex justify-between gap-2  items-center'>
                                                <div className='flex flex-col  xl:flex-row xl:gap-4 xl:items-center'>
                                                    
                                                    <span className='text-xs  font-semibold lg:text-base'>#
                                                        {item?.id?.slice(0,8).toUpperCase()}
                                                    </span>
                                                    <span className='text-gray-500 hidden xl:inline'>•</span>
                                                    <p className=' font-light text-[10px] xl:text-base lg:block'>Realizado  {formatDate(item.created_at)}</p>
                                                </div>
                                                <span className='py-1 px-3 text-xs font-semibold uppercase text-green-700 bg-green-300/30 rounded-full'>{item.status}</span>
                                            </div>

                                            <div className='h-0.5 bg-gray-100'></div>


                                            <div className='flex overflow-x-scroll gap-4 w-full no-scrollbar'>
                                                {item?.produtos.map(produto => {
                                                    return (
                                                        <Link to={`/produto/${produto.id}`}>
                                                            <div key={produto.id} className='flex overflow-hidden w-57 h-30 md:h-40 md:w-70 shadow border border-gray-200 rounded-xl gap-2 md:gap-4 items-center p-2'>
                                                                <div className='h-full w-2/3 md:w-2/5 rounded-xl overflow-hidden border border-gray-200'>
                                                                    <img className='w-full h-full object-cover' src={produto.img_url} alt='' />
                                                                </div>
                                                                <div className='w-2/3 md:w-3/5'>
                                                                    <p className='text-[12px] font-semibold text-amber-600'>{produto.categoria}</p>
                                                                    <p className='truncate font-semibold text-gray-800'> {produto.nome}</p>
                                                                    <p className='text-xs line-clamp-2 sm:line-clamp-3 text-gray-700'>{produto.description}</p>
                                                                    <p className='font-semibold'>{currencyFormatter(produto.valor)}</p>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                    

                                    <div className='flex flex-col sm:flex-row justify-between gap-4'>
                                        <div className=''>
                                            <span>Total: </span> <span className='font-semibold'>{currencyFormatter(item.valor)}</span> <span className='text-amber-600 text-xs'>(frete: {currencyFormatter(item.frete.price)})</span>  <span className='text-xs'> (Cartão de crédito)</span>   
                                        </div>
                                        <div className='flex gap-4'>
                                            {item.status === 'Entregue' && <button className='py-2 px-2 text-xs font-semibold bg-gray-200 rounded-3xl lg:py-2 lg:px-4 lg:text-base'>Comprar novamente</button>}  
                                            <button className='py-2 px-2 text-xs font-semibold bg-gray-200 rounded-3xl lg:py-2 lg:px-4 lg:text-base'>Detalhes</button>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}