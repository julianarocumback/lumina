import { useState, useContext, useEffect, useRef } from 'react'
import { useNavigate, Link } from "react-router-dom"
import { motion, AnimatePresence } from 'framer-motion'

import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import { useCart } from '../../contexts/CartContext/CartContext'
import { currencyFormatter } from '../../utils/formatters'


export default function SlideOverCart({isCartOpen, setIsCartOpen}){
    // CONTEXTS
    const {items, setItems, increaseQuantity, decreaseQuantity, removeFromCart, updateQuantity, checkQuantity} = useCart()
    const {authenticated} = useContext(AuthContext)
    
    const navigate = useNavigate()
    
    // STATE
    const [hasInteracted, setHasInteracted] = useState(false)
    

    // VARIABLES
    const isAuthenticated = authenticated
    const hasContent = items.length > 0
    
    const hasCart = hasContent && isAuthenticated
    const hasContentError = hasInteracted && !hasContent && isAuthenticated
    const hasAuthenticatedError = hasInteracted && !isAuthenticated && hasContent
    const hasCartError = hasInteracted && !hasContent && !isAuthenticated
    
    
    const subtotal = items?.map(item => item?.valor * item?.quantidade).reduce((a,b) => a + b, 0)
    const cartRef = useRef(null)


    // FUNCTION
    function handleNavigateToCheckout(){
        setHasInteracted(true)
        if(!hasCart) return
       
        navigate('/checkout')
    }


    // 
    useEffect(() => {
        function handleClickOutside(event) {
            if (!cartRef.current) return;

            const isInsideCart = cartRef.current.contains(event.target);
            const isInsideContainer = event.target.closest('.h-screen'); 
            const isToggleCartButton = event.target.closest('.botao-carrinho');
            const isElementInDOM = document.body.contains(event.target);

            if (!isInsideCart && !isInsideContainer && !isToggleCartButton && isElementInDOM) {
                if (isCartOpen) {
                    setIsCartOpen(false);
                }
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isCartOpen, setIsCartOpen]);


    return (
        <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "tween", duration: 0.3 }}
            ref={cartRef}
            className="bottom-13 right-0 flex flex-col h-screen w-82 pt-4 bg-white absolute shadow-sm lg:top-13 lg:w-100 lg:pt-0"
        >
            <div className="flex flex-col gap-7 w-full h-4/5 p-2 pt-16 px-6 lg:h-3/4 lg:p-7">
                <div className='flex justify-between items-center'>
                    <div className="text-lg font-semibold lg:text-xl">Carrinho</div>
                    <AnimatePresence>
                        {items.length > 0 && <motion.button initial={{ opacity: 0}} animate={{ opacity: 1}}  transition={{ duration: 0.5 }}  exit={{ opacity: 0, transition: { duration: 0.20 } }}  className='hover:text-red-500 transition-all' onClick={() => setItems([])}>Limpar</motion.button>}
                    </AnimatePresence>
                </div>  

                {/* Cart items */}
                <div className="flex flex-col w-full h-full gap-4 overflow-y-auto">
                    <AnimatePresence>
                        {items?.map((item) => {
                            const hasExactLength = item.quantidade === 1

                            return (
                                // Item card
                                <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} exit={{ opacity: 0, y: -30, transition: { duration: 0.20 } }} key={item.id}  layout className="flex h-35 lg:h-35 w-full border border-gray-200 gap-4 overflow-hidden rounded-2xl shrink-0 shadow-xs p-4">
                                    <div className="h-full w-20 lg:w-1/4 ">
                                        <Link to={`/produto/${item.id}`}>
                                            <img className="h-full w-full rounded-2xl shadow-xs border border-gray-100" src={item.img_url} alt="" />
                                        </Link>
                                    </div>
                                    <div className="flex flex-col gap-4 py-2 justify-between overflow-hidden w-3/4 relative">
                                        <div className="flex justify-between">
                                            <div className="w-[85%]">
                                                <h4 className="lg:text-lg font-semibold text-[#1a1c1d] truncate">{item.nome}</h4>
                                                <p className='truncate'>{item.description}</p>
                                            </div>
                                        </div>
                                        <div onClick={()=> removeFromCart(item)} className="absolute right-0 hover:text-red-500 cursor-pointer transition-colors"><i className="fa-solid fa-trash"></i></div>
                                        <div className="flex justify-between">
                                            {item && <span className="text- font-semibold">{currencyFormatter(item.valor)}</span>}
                                            
                                            
                                            {/* QUANTIDADE DE PRODUTOS */}
                                            <div className="flex border items-center justify-around px-2 bg-white rounded-3xl border-gray-300 w-20 select-none">

                                                {/* Diminuir a quantidade */}
                                                <div className={`w-5 text-xs ${hasExactLength && 'text-gray-300'} cursor-pointer`} onClick={()=> decreaseQuantity(item)}><i className="fa-solid fa-minus"></i></div>

                                                {/* Quantidade atual */}
                                                <div className='relative flex items-center w-5 h-5'>
                                                    <div className='flex items-center justify-center h-full w-full '>{item.quantidade}</div>
                                                    <input onChange={(e) => updateQuantity(item, e.target.value.replace(/\D/g, ''))} className='z-10 absolute top-0 h-full w-full text-center text-transparent border caret-black focus:outline-none' type="text" value={item.quantidade} onBlur={(e) => checkQuantity(item, e.target.value.replace(/\D/g, ''))}/>
                                                </div>

                                                {/* Aumentar a quantidade */}
                                                <div className="w-5 text-xs cursor-pointer " onClick={()=> increaseQuantity(item)}><i className="fa-solid fa-plus"></i></div>
                                                
                                            </div>

                                        </div>
                                    </div>
                                </motion.div>        
                            )
                        })}
                    </AnimatePresence>
                </div>


            </div>
            <div className="bg-gray-50 h-1/5 lg:h-1/4 px-7 lg:px-7 lg:py-3 flex flex-col gap-3 lg:gap-3 text-center">
                <div className="flex justify-between py-2">
                    <span className="text-lg text-[#474747]">Subtotal</span>
                    <span className="text-xl font-semibold">{currencyFormatter(subtotal)}</span>
                </div>
                <button className="cursor-pointer rounded-3xl p-2 w-full bg-linear-to-r from-[#00639a] to-[#bc004b] py-3 text-white font-semibold text-lg" onClick={handleNavigateToCheckout}>Finalizar compra</button>

                <div className='text-red-500 text-xs lg:text-base'>
                    {hasCartError && <p>Faça login e adicione itens ao carrinho!</p>}
                    {hasContentError && <p>Adicione itens ao carrinho!</p>}
                    {hasAuthenticatedError && <p>Faça login!</p>}
                </div>
            </div>
        </motion.div>
    )
}