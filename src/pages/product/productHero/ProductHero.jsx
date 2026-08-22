import ProductGallery from "./ProductGallery/ProductGallery"
import ProductInfo from "./ProductInfo/ProductInfo"
import {motion, AnimatePresence} from 'framer-motion'

export default function ProductHero({photo, gallery , setPhotoId, product, onAddToFavorites, onRemoveFromFavorites, dadosCliente, authenticated}){
    
    return(
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.7}} className="flex flex-col gap-8 w-full h-full px-8 pb-10 pt-20 lg:flex-row lg:gap-30  lg:px-90">
            <AnimatePresence>
                <ProductGallery photo={photo} gallery={gallery} setPhotoId={setPhotoId}/>
                <ProductInfo product={product} onAddToFavorites={onAddToFavorites} onRemoveFromFavorites={onRemoveFromFavorites} dadosCliente={dadosCliente} authenticated={authenticated}/>
            </AnimatePresence>
        </motion.div>
    )
}