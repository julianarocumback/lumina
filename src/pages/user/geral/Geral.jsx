import { useOutletContext } from 'react-router-dom'
import { motion } from 'framer-motion'

import Welcome from './welcome/Welcome'
import OrderPreview from './orderPreview/OrderPreview'
import FavoritesPreview from './favoritesPreview/FavoritesPreview'

export default function Geral(){
    const {dadosCliente} = useOutletContext()
    if(!dadosCliente) return
 
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.7}} className='flex flex-col gap-8 ml-15 p-4 pb-18 sm:p-8 sm:pb-30 md:px-16 lg:ml-80 lg:pt-30 xl:p-32 xl:pb-18 2xl:px-70'>
            {/* Welcome banner */}
            <Welcome dadosCliente={dadosCliente}/>
            
            <div className='flex flex-col gap-4 sm:flex-row lg:gap-8'>
                {/* Order preview */}
                <OrderPreview orders={dadosCliente.pedidos}/>
                {/* Favorites preview */}
                <FavoritesPreview favorites={dadosCliente.favoritos}/>
            </div>
        </motion.div>
    )
}