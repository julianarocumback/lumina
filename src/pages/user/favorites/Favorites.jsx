import { useOutletContext } from 'react-router-dom'
import {motion, AnimatePresence} from 'framer-motion'

import {currencyFormatter} from '../../../utils/formatters'

export default function Favorites(){
    const {dadosCliente, addToCart, onRemoveFromFavorites, items} = useOutletContext()
    const favorites = dadosCliente?.favoritos || []

    if(!favorites) return

    function handleAddToFavorites(favorito){
        addToCart(favorito)
    }

    function handleRemoveFromFavorites(favorite){
        onRemoveFromFavorites(favorite)
    }

    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.7}} className={`flex flex-col gap-8 ml-15 p-4 pb-18 sm:p-8 sm:pb-30 md:px-16 lg:ml-80 lg:pt-30 xl:p-32 xl:pb-18 2xl:px-70`}>
            <div className='flex flex-col gap-2'>
                <h2 className='text-2xl font-semibold lg:text-2xl'> Lista de Desejos</h2>
                <p className='lg:text-lg'>Guarde aqui os tesouros que você deseja iluminar sua biblioteca em breve. </p>
            </div>
            <div className='grid grid-cols-1  gap-4 md:gap-8 py-2 sm:grid-cols-2 lg:grid-cols-[repeat(4,minmax(200px,1fr))] overflow-visible overflow-x-hidden'>
                <AnimatePresence>
                {favorites.length > 0 ? 
                favorites.map(favorite => {
                    return ( 
                        <motion.div initial={{opacity:0, y:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.5}} layout key={favorite.id} className='relative flex flex-rol gap-4 h-40 p-4 bg-white rounded-2xl shadow lg:flex-col lg:justify-between lg:gap-8 lg:h-fit '>
                            <button className='absolute hidden top-7 right-7 w-8 h-8 text-black/50 bg-white/90 rounded-2xl transition-all shadow cursor-pointer lg:block hover:text-red-600 hover:bg-red-200 hover:scale-110' onClick={() => handleRemoveFromFavorites(favorite)}><i className="fa-solid fa-heart-crack"></i></button>
                            <div className='flex-none overflow-hidden w-20 bg-gray-200 rounded-xl lg:w-fit lg:h-75'>
                                <img className='w-full h-full' src={favorite.img_url} alt='Capa do livro' />
                            </div>
                            <div className='flex flex-col justify-between w-full truncate lg:gap-2'>
                                <div className='flex flex-col gap-3'>
                                    <div>
                                        <p className='text-lg/6 font-semibold truncate'>{favorite.nome}</p>
                                        <p className='text-base text-gray-500 truncate'>{favorite.description}</p>
                                    </div>
                                    <p className='text-xl font-bold text-blue-900 lg:text-lg lg:hidden'>{currencyFormatter(favorite.valor)}</p>
                                </div>
                                <div className='flex gap-4 py-1 overflow-visible'>
                                    <p className='text-xl font-bold text-blue-900 lg:text-lg hidden lg:block'>{currencyFormatter(favorite.valor)}</p>
                                    <button onClick={()=> handleAddToFavorites(favorite)} className='flex items-center justify-center gap-1 w-full px-4 lg:px-2 py-1.5 text-white bg-linear-to-r from-blue-500 to-red-500 rounded-full cursor-pointer lg:py-1'> 
                                        <div className='text-xs font-semibold'>{items?.some(item => item.id === favorite.id)? 'ADICIONADO': <div className='flex items-center'><div className='text-xs'><i className='fa-solid fa-plus'></i></div>CARRINHO</div>}</div>
                                    </button>
                                    <button className='flex justify-center items-center w-10 h-7 text-xs text-black/50 bg-white/90 border border-gray-100 rounded-2xl transition-transform shadow cursor-pointer hover:text-red-600 hover:bg-red-200 hover:scale-110 lg:hidden' onClick={() => handleRemoveFromFavorites(favorite)}><i className="fa-solid fa-heart-crack"></i></button>
                                </div>
                            </div>
                        </motion.div> 
                    )
                })
                : 
                <div className='flex justify-center col-span-full h-full py-50 text-3xl font-semibold'>
                    adicione favoritos a sua lista!
                </div>
                }
                </AnimatePresence>
            </div>
        </motion.div>
    )
}