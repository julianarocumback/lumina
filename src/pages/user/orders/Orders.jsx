import { useOutletContext } from 'react-router-dom'
import { useState } from 'react'
import { motion} from 'framer-motion'

export default function Orders(){
    const [status, setStatus] = useState('Todos')
    const [search, setSearch] = useState('')
    const {dadosCliente} = useOutletContext()
    if(!dadosCliente) return
    const orders = dadosCliente.pedidos ?? []

    const categorias = [
        {
            status: 'Todos',
            ativo: true
        },
        {
            status: 'Processando',
            ativo: false
        },
        {
            status: 'Em transporte',
            ativo: false
        },
        {
            status: 'Entregue',
            ativo: false
        },
        {
            status: 'Cancelado',
            ativo: false
        }
    ]

    function SearchChange(e){
        const search = e.target.value
        setSearch(search)
    }

   
    
 
    return (
        <div className="flex flex-col gap-8 lg:gap-8 pt-7 pb-25 lg:py-30 pl-20 pr-5 lg:pl-150 lg:pr-70 h-full">
            <div className="flex flex-col w-full h-full gap-8">
                <div>
                    <h2 className=" text-2xl font-semibold">Meus Pedidos</h2>
                    <p className="hidden lg:block">Acompanhe suas jornadas literárias. Aqui você encontra o histórico de todas as suas aquisições e o status atual das suas entregas.</p>

                </div>

                <div className="flex flex-col gap-8 relative">
                    <div className="relative">
                        <div className="absolute top-3 left-3 text-gray-900"><i class="fa-solid fa-magnifying-glass"></i></div>
                        <input onChange={SearchChange} value={search} className=" bg-gray-200 w-full py-3 pl-10 pr-2 rounded-3xl" type="text" placeholder="Busque por número do pedido ou livro..."/>
                    </div>

                    <div className="text-nowrap flex gap-4 overflow-x-auto no-scrollbar ">
                        {categorias.map(categoria => {
                            return (
                                <button onClick={()=> setStatus(categoria.status)} className={`border border-gray-100 py-2 px-4 font-semibold rounded-full  ${categoria.ativo? 'bg-blue-400 text-white ':'bg-white'}`}>{categoria.status}</button>
                            )
                        })}
                        {orders.map(item => <div>{item?.nome}</div>)} 
                    </div>


                </div>
                {search !== ''?
                
                
                <div className="flex flex-col gap-4">
                    {dadosCliente.pedidos.filter(item => {
                        const idArrumado = item.id.toLowerCase()
                        const nomeArrumado = item.produtos.map(item => item.nome.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase().trim())
                        const busca = search.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase().trim()

                        if(idArrumado.includes(busca) || nomeArrumado.some(item => item.includes(busca))) return item

                    }).reverse().map(item => {
                    return(

                        <motion.div initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }} className="rounded-3xl p-8 bg-white border border-gray-100 shadow-xs gap-4 flex flex-col w-full">

                                <div className="flex justify-between items-end">
                                    <div className="flex flex-col gap-4 w-full">
                                        <div className="flex gap-4 lg:justify-start">
                                            <p className="text-gray-500 font-semibold">#{[...item.id].map((letra, index)=> {
                                                if(index > 7) return 
                                                return letra
                                            }).join('')}                             </p>
                                            <span className="bg-green-300/30 text-green-700 text-xs rounded-full py-1 px-3 font-semibold uppercase">{item.status}</span>
                                            <p className="hidden lg:block font-light">{item.created_at}</p>
                                        </div>

                                        <p className="font-light lg:hidden">Realizado em 12 out 2026</p>

                                        <div className=" overflow-x-scroll w-full flex gap-4 no-scrollbar">
                                            {item?.produtos.map(produto => {
                                                return(
                                                    <div className="border border-gray-200 w-15 rounded-xl overflow-hidden flex flex-none">
                                                        <img src={produto.img_url} alt="" />

                                                    </div>
                                                )
                                            })
                                            }
                                            
                                        </div>
                                         
                                    </div>
                                    
                                    <div className="lg:flex flex-col gap-4 hidden">
                                        <button className="bg-gray-200 font-semibold  rounded-3xl text-xs py-2 px-4 lg:text-base lg:py-2 lg:px-4">Ver detalhes</button>
                                        <button className="bg-blue-900 font-semibold text-white rounded-3xl text-xs py-2 px-4 lg:text-base lg:py-2 lg:px-4">
                                            Comprar novamente
                                        </button>
                                    </div>
                                </div>
                                

                                <div className="font-semibold flex gap-8 justify-between items-center">
                                    <div>
                                        {/* {pedido.valor.toLocaleString('BRL', {style: 'currency', currency: 'BRL'})} */}
                                    </div>
                                    <button className="bg-gray-200 font-semibold  rounded-3xl text-xs py-2 px-4 lg:text-base lg:py-2 lg:px-4 lg:hidden">Ver detalhes</button>
                                </div>
                            </motion.div>
                                        )}
                    )}
                </div>
                :
                
                
                <div className="flex flex-col gap-4 overflow-hidden">
                    {orders.filter(pedido => pedido.status === (status === 'Todos' ? pedido.status : status ?? pedido.status)).reverse().map(pedido => {
                        return (
                            <div className="rounded-3xl p-8 bg-white border border-gray-100 shadow-xs gap-4 flex flex-col w-full">

                                <div className="flex justify-between items-end">
                                    <div className="flex flex-col gap-4 w-full">
                                        <div className="flex gap-4 lg:justify-start">
                                            <p className="text-gray-500 font-semibold">#{[...pedido.id].map((letra, index)=> {
                                                if(index > 7) return 
                                                return letra
                                            }).join('')}                             </p>
                                            <span className="bg-green-300/30 text-green-700 text-xs rounded-full py-1 px-3 font-semibold uppercase">{pedido.status}</span>
                                            <p className="hidden lg:block font-light">{pedido.created_at}</p>
                                        </div>

                                        <p className="font-light lg:hidden">Realizado em 12 out 2026</p>

                                        <div className=" overflow-x-scroll w-full flex gap-4 no-scrollbar">
                                            {pedido?.produtos.map(produto => {
                                                return(
                                                    <div className="border border-gray-200 w-15 rounded-xl overflow-hidden flex flex-none">
                                                        <img src={produto.img_url} alt="" />

                                                    </div>
                                                )
                                            })
                                            }
                                            
                                        </div>
                                         
                                    </div>
                                    
                                    <div className="lg:flex flex-col gap-4 hidden">
                                        <button className="bg-gray-200 font-semibold  rounded-3xl text-xs py-2 px-4 lg:text-base lg:py-2 lg:px-4">Ver detalhes</button>
                                        <button className="bg-blue-900 font-semibold text-white rounded-3xl text-xs py-2 px-4 lg:text-base lg:py-2 lg:px-4">
                                            Comprar novamente
                                        </button>
                                    </div>
                                </div>
                                

                                <div className="font-semibold flex gap-8 justify-between items-center">
                                    <div>
                                        {/* {pedido.valor.toLocaleString('BRL', {style: 'currency', currency: 'BRL'})} */}
                                    </div>
                                    <button className="bg-gray-200 font-semibold  rounded-3xl text-xs py-2 px-4 lg:text-base lg:py-2 lg:px-4 lg:hidden">Ver detalhes</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
                }                   
            </div>
        </div>
    )
}