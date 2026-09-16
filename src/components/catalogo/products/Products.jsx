import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '../../../contexts/CartContext/CartContext'
import { AuthContext } from '../../../contexts/AuthContext/AuthContext'

export default function Products({filteredProducts, quantity, setQuantity}){
    const {addToCart, items} = useCart()
    const {authenticated, dadosCliente,addToFavorites, removeFromFavorites} = useContext(AuthContext)

    function handleIncrease(quantity) {
        setQuantity(prev => prev + quantity)
    }
    
    function handleAddToFavorite(product) {
        if(dadosCliente?.favoritos?.some(item => Number(item?.id) === product?.id)){
            removeFromFavorites(product)
        } else {
            addToFavorites(product)
        }  
    }  
    
    return (
        <motion.div initial={{opacity:0, y:-30}} whileInView={{opacity:1, y:0}} transition={{duration: 0.5}} className='flex flex-col justify-center gap-24'>
            
            <div className='grid grid-cols-2 gap-8 @container lg:grid-cols-3 min-[1500px]:grid-cols-4'>
                <AnimatePresence>
                    {filteredProducts?.map((product) => {
                        const isAreadyInFavorite = dadosCliente?.favoritos?.some(item => item.id === product.id)

                        return (                
                            <motion.div
                            initial={{opacity:0, }}
                            animate={{opacity: 1, y:0}}
                            transition={{ type: 'tween', duration: 0.5 }}
                            exit={{opacity:0}}
                            layout
                            className='flex flex-col gap-4 cursor-pointer relative select-none px-2'
                            key={product.id}
                            >
                                {/* Favorite button */}
                                {authenticated  && <button className={`absolute top-5 right-7 w-8 h-8 ${isAreadyInFavorite ? 'text-red-600 bg-red-200 scale-110' : 'text-black/50 bg-white/90'} rounded-2xl transition-all shadow cursor-pointer hover:text-red-600 hover:scale-110`} onClick={() => handleAddToFavorite(product)}><i className='fa-solid fa-heart'></i></button>}
                                
                                        
                                <Link to={`/produto/${product?.id}`}>
                                    <div className='overflow-hidden h-60 rounded-2xl shadow-lg @sm:h-75 @md:h-100 @lg:h-80 @xl:h-90 @2xl:h-100'>
                                        <img  className='h-full w-full object-cover ' src={product.img_url} alt={product.nome} />
                                    </div>
                                </Link>
                                
                                <div className='flex flex-col'>
                                    <span className='text-xs uppercase truncate text-gray-400 font-semibold'>{product.livros.autor}</span>
                                    <div className='flex flex-col gap-2'>
                                        <span className='font-semibold truncate lg:text-lg'>{product.nome}</span>
                                        <div className='flex justify-between items-center'>
                                            <span className='font-semibold text-[12px] lg:text-lg text-blue-700'>{product.valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>
                                            <button disabled={items?.some(item => item.id === product.id)} className={`px-2 md:px-3 lg:px-2 py-0.5 lg:py-1 rounded-xl bg-black/80 cursor-pointer text-white text-sm font-semibold   disabled:bg-gray-200 disabled:cursor-default disabled:transition-all`} onClick={() => addToCart(product)}>{!items?.some(item => item.id === product.id)? '+ Carrinho': 'Adicionado'}</button>  
                                        </div>
                                    </div>
                                </div>  
                            </motion.div>
                        )        
                    })}
                </AnimatePresence>
            </div>

            <div className='flex justify-center w-full'>
                {filteredProducts?.length >= quantity && <button className='w-70 py-2 text-lg font-semibold bg-gray-200 rounded-full cursor-pointer transition-all hover:text-white hover:bg-gray-500' onClick={()=> {handleIncrease(quantity)}}>Mostrar mais</button>}
            </div>
        </motion.div>
    )
}