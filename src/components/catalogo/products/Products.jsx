import { useCart } from '../../../contexts/CartContext/CartContext'
import { AuthContext } from '../../../contexts/AuthContext/AuthContext'
import { useContext} from 'react'
import { Link } from 'react-router-dom'
import Skeleton from '../skeleton/Skeleton';
import { motion, AnimatePresence } from 'framer-motion'

export default function Products({produtos, carregar, setQuantidade, pesquisaLista, categoria}){
    const {addToCart, items} = useCart()
    const {authenticated, dadosCliente,addToFavorites, removeFromFavorites} = useContext(AuthContext)
    function alterarQuantidade(valor){
        setQuantidade(prev => prev + valor)
    }
    
    function handleAddToFavorite(produto){
        if(dadosCliente?.favoritos?.some(item => Number(item?.id) === produto?.id)){
            removeFromFavorites(produto)
        }else {
            addToFavorites(produto)
        }
        
    }  
    
    
    const categoryLength = produtos.filter(item => item.categoria === categoria).length
    
    return (
        <motion.div initial={{opacity:0, y:-30}} whileInView={{opacity:1, y:0}} transition={{duration: 0.5}} className='flex flex-col justify-center gap-24'>
            {carregar ?
                <div className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8'>
                    {[...Array(3)].map((_, i) => <Skeleton key={i}/>)}
                </div>
            :
                <div 
                    className="@container grid grid-cols-2 lg:grid-cols-3 min-[1500px]:grid-cols-4 justify-center gap-8">

                    <AnimatePresence>
                        {pesquisaLista?.map((produto) => {

                            console.log(categoryLength)
                            console.log(categoria)

                            

                            const isAreadyInFavorite = dadosCliente?.favoritos?.some(item => item.id === produto.id)
                            return (                
                                <motion.div
                                initial={{opacity:0, }}
                                animate={{opacity: 1, y:0}}
                                transition={{ type: 'tween', duration: 0.5 }}
                                exit={{opacity:0}}
                                layout
                                className='flex flex-col gap-4 cursor-pointer relative select-none px-2'
                                key={produto.id}
                                >
                                    {/* Favorite button */}
                                    {authenticated  && <button className={`absolute top-5 right-7 w-8 h-8 ${isAreadyInFavorite ? 'text-red-600 bg-red-200 scale-110':'text-black/50 bg-white/90'} rounded-2xl transition-all shadow cursor-pointer hover:text-red-600 hover:scale-110`} onClick={() => handleAddToFavorite(produto)}><i className='fa-solid fa-heart'></i></button>}
                                    
                                            
                                    <Link to={`/produto/${produto.id}`}>
                                        <div className='h-60 @sm:h-75 @md:h-100 @lg:h-80 @xl:h-90 @2xl:h-100 rounded-2xl overflow-hidden shadow-lg'>
                                            <img  className='object-cover h-full w-full' src={produto.img_url} alt={produto.nome} />
                                        </div>
                                    </Link>
                                    
                                    <div className='flex flex-col'>
                                        <span className='text-xs uppercase truncate text-gray-400 font-semibold'>{produto.livros.autor}</span>
                                        <div className='flex flex-col gap-2'>
                                            <span className='font-semibold truncate lg:text-lg'>{produto.nome}</span>
                                            <div className='flex justify-between items-center'>
                                                <span className='font-semibold text-[12px] lg:text-lg text-blue-700'>{produto.valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>
                                                <button disabled={items?.some(item => item.id === produto.id)} className={`px-2 md:px-3 lg:px-2 py-0.5 lg:py-1 rounded-xl bg-black/80 cursor-pointer text-white text-sm font-semibold   disabled:bg-gray-200 disabled:cursor-default disabled:transition-all`} onClick={() => addToCart(produto)}>{!items?.some(item => item.id === produto.id)? '+ Carrinho': 'Adicionado'}</button>  
                                            </div>
                                        </div>
                                    </div>  
                                </motion.div>
                            )        
                        })}
                    </AnimatePresence>
                </div>
            }
               
            <div className='w-full flex justify-center '>
                {pesquisaLista?.length <  produtos?.length && pesquisaLista?.length !== categoryLength && <button className='py-2 self-center w-70 rounded-full text-lg font-semibold bg-gray-200' onClick={()=> {alterarQuantidade(15)}}>Mostrar mais</button>}
            </div>
        </motion.div>
    )
}