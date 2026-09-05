import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { motion } from 'framer-motion'

import {formatDate} from '../../../utils/formatters'

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
                    {dadosCliente?.pedidos?.filter(item => {
                        const idArrumado = item.id.toLowerCase()
                        const nomeArrumado = item.produtos.map(item => item.nome.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim())
                        const busca = search.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim()

                        const pesquisa = busca === '' || idArrumado.includes(busca) || nomeArrumado.some(item => item.includes(busca))
                        const categoria = status === 'Todos' || item.status === status

                        return pesquisa && categoria
                        }).sort((a,b) => new Date(b.created_at) - new Date(a.created_at)).map(item => {
                            return (
                                <motion.div key={item.id} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className='flex flex-col gap-4 w-full p-8 bg-white border border-gray-100 rounded-3xl shadow-xs'>

                                    <div className='flex justify-between items-end'>
                                        <div className='flex flex-col gap-4 w-3/4'>
                                            <div className='flex gap-4 lg:justify-start'>
                                                <p className='font-semibold text-gray-500'>#{item.id.slice(0,8)}</p>
                                                <span className='py-1 px-3 text-xs font-semibold uppercase text-green-700 bg-green-300/30 rounded-full'>{item.status}</span>
                                                <p className='hidden font-light text-gray-500 lg:block'>{formatDate(item.created_at)}</p>
                                            </div>

                                            <p className='font-light text-gray-500 lg:hidden'>{formatDate(item.created_at)}</p>

                                            <div className='flex overflow-x-scroll gap-4 w-full no-scrollbar'>
                                                {item?.produtos.map(produto => {
                                                    return (
                                                        <div className='flex flex-none overflow-hidden w-15 border border-gray-200 rounded-xl'>
                                                            <img src={produto.img_url} alt='Capa do produto' />
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        
                                        <div className='hidden flex-col gap-4 lg:flex'>
                                            <button className='py-2 px-4 text-xs font-semibold bg-gray-200 rounded-3xl lg:py-2 lg:px-4 lg:text-base'>Rastrear pedido</button>
                                            <button className='py-2 px-4 text-xs font-semibold text-white rounded-3xl bg-blue-900 lg:py-2 lg:px-4 lg:text-base'>Comprar novamente</button>
                                        </div>
                                    </div>
                                    

                                    <div className='flex justify-between items-center gap-8 font-semibold'>
                                        <div>
                                            {/* {produto.valor.toLocaleString('BRL', {style: 'currency', currency: 'BRL'})} */}
                                        </div>
                                        <button className='py-2 px-4 text-xs font-semibold bg-gray-200 rounded-3xl lg:py-2 lg:px-4 lg:hidden lg:text-base'>Ver detalhes</button>
                                    </div>
                                </motion.div>
                            )
                        }
                    )}
                </div>
            </div>
        </div>
    )
}