import ProductGallery from "./ProductGallery/ProductGallery"
import ProductInfo from "./ProductInfo/ProductInfo"
import {motion, AnimatePresence} from 'framer-motion'

export default function ProductHero({photo, gallery , setPhotoId, product, onAddToFavorites, onRemoveFromFavorites, dadosCliente, authenticated}){
    
    return(
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.7}} className="flex flex-col gap-8 w-full h-full  p-4 sm:p-6 md:p-8 sm:flex-row lg:gap-16  lg:p-16  2xl:px-80 3xl:px-128">
            <AnimatePresence>
                <ProductGallery photo={photo} gallery={gallery} setPhotoId={setPhotoId}/>
                <ProductInfo product={product} onAddToFavorites={onAddToFavorites} onRemoveFromFavorites={onRemoveFromFavorites} dadosCliente={dadosCliente} authenticated={authenticated}/>
            </AnimatePresence>
        </motion.div>
    )
}