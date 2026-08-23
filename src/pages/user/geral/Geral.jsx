import { useOutletContext } from 'react-router-dom'
import { motion } from 'framer-motion'

import Welcome from './welcome/Welcome'
import OrderPreview from './orderPreview/OrderPreview'
import FavoritesPreview from './favoritesPreview/FavoritesPreview'

export default function Geral(){
    const {dadosCliente} = useOutletContext()
    if(!dadosCliente) return
 
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.7}} className='flex flex-col gap-8 h-full pt-7 pb-25 pl-20 pr-5 lg:gap-8 lg:py-30 lg:pl-150 lg:pr-70'>
            {/* Welcome banner */}
            <Welcome dadosCliente={dadosCliente}/>
            
            <div className='flex flex-col gap-4 lg:flex-row lg:gap-8'>
                {/* Order preview */}
                <OrderPreview orders={dadosCliente.pedidos}/>
                {/* Favorites preview */}
                <FavoritesPreview favorites={dadosCliente.favoritos}/>
            </div>
        </motion.div>
    )
}