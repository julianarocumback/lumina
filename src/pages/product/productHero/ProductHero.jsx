import ProductGallery from "./ProductGallery/ProductGallery"
import ProductInfo from "./ProductInfo/ProductInfo"
import {motion, AnimatePresence} from 'framer-motion'

export default function ProductHero({foto, gallery , setIdFoto, produto, adicionarFavorito, removerFavorito, dadosCliente, authenticated}){
    
    return(
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.7}} className=" w-full h-full flex flex-col lg:flex-row gap-8 lg:gap-30 px-8 lg:px-90 pb-10 pt-20">
            <AnimatePresence>
                <ProductGallery foto={foto} gallery={gallery} setIdFoto={setIdFoto}/>
                <ProductInfo produto={produto} adicionarFavorito={adicionarFavorito} removerFavorito={removerFavorito} dadosCliente={dadosCliente} authenticated={authenticated}/>
            </AnimatePresence>
        </motion.div>
    )
}