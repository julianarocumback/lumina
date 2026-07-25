import { useCart } from '../../../contexts/CartContext/CartContext'
import { motion, AnimatePresence } from 'framer-motion'

export default function Carrinho({carrinhoIsOpen, setCarrinhoIsOpen}) {
    const {items} = useCart()
    const quantidadeProdutos = items.map(item => item.quantidade).reduce((a,b) => a+b ,0)

    function alternar(){
        return(
            carrinhoIsOpen? (setCarrinhoIsOpen(false)): (setCarrinhoIsOpen(true))
        )
    }

    return (
        <div className="botao-carrinho lg:text-xl relative cursor-pointer" onClick={alternar}>
                <i className="fa-solid fa-cart-shopping"></i>
                {/* Mostrar quantidade de produtos no carrinho */}
                <AnimatePresence>
                    {items.length > 0 && 
                    <motion.div initial={{opacity:0, x:10}} animate={{opacity:1, x:0}} exit={{opacity:0, x:10}} transition={{duration: 0.2}} className={`bg-white border rounded-full flex justify-center items-center h-3 w-3 lg:h-4 lg:w-4 absolute top-0 -right-1 ${quantidadeProdutos > 9? 'text-[6px] lg:text-[9px]':'text-[8px] lg:text-[11px]'}`}>
                        {quantidadeProdutos}
                    </motion.div>
                    }  
                </AnimatePresence>
            </div>
    )
}