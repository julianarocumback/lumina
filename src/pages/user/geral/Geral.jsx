import { useOutletContext } from 'react-router-dom'
import { motion } from 'framer-motion'

import Welcome from './welcome/Welcome'
import OrderPreview from './orderPreview/OrderPreview'
import FavoritesPreview from './favoritesPreview/FavoritesPreview'

export default function Geral(){
    const {dadosCliente} = useOutletContext()
    if(!dadosCliente) return
 
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.7}} className="flex flex-col gap-8 lg:gap-8 pt-7 pb-25 lg:py-30 pl-20 pr-5 lg:pl-150 lg:pr-70 h-full">
            
            <Welcome dadosCliente={dadosCliente}/>
           
            <div className="flex-col lg:flex-row flex gap-4 lg:gap-8">
                <OrderPreview orders={dadosCliente.pedidos}/>
                <FavoritesPreview favorites={dadosCliente.favoritos}/>
            </div>

        </motion.div>
    )
}