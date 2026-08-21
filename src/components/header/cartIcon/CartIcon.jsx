import { useCart } from '../../../contexts/CartContext/CartContext'
import { motion, AnimatePresence } from 'framer-motion'

export default function CartIcon({setIsCartOpen}) {
    const {items} = useCart()
    const itemCount = items.map(item => item.quantidade).reduce((a,b) => a + b, 0)
    const hasMinItemCountLength = itemCount > 9
    const hasMinLength = items.length > 0

    function handleToggleCart(){
        setIsCartOpen(prev => !prev)
    }

    return (
        <button className="botao-carrinho relative cursor-pointer lg:text-xl" onClick={handleToggleCart}>
            <i className="fa-solid fa-cart-shopping"></i>
            {/* Show cart item count */}
            <AnimatePresence>
                {hasMinLength && 
                    <motion.div initial={{opacity:0, x:10}} animate={{opacity:1, x:0}} exit={{opacity:0, x:10}} transition={{duration: 0.2}} className={`bg-white border rounded-full flex justify-center items-center h-3 w-3 lg:h-4 lg:w-4 absolute top-0 -right-1 ${hasMinItemCountLength ? 'text-[6px] lg:text-[9px]':'text-[8px] lg:text-[11px]'}`}>
                        {itemCount}
                    </motion.div>
                }  
            </AnimatePresence>
        </button>
    )
}