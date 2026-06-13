import ProductGallery from "./ProductGallery/ProductGallery"
import ProductInfo from "./ProductInfo/ProductInfo"

export default function ProductHero({foto, gallery , setIdFoto, produto, adicionarFavorito, removerFavorito, dadosCliente}){
    
    return(
        <div className="w-full h-full flex flex-col lg:flex-row gap-8 lg:gap-30 px-8 lg:px-90 pb-10 pt-20">
            <ProductGallery foto={foto} gallery={gallery} setIdFoto={setIdFoto}/>
            <ProductInfo produto={produto} adicionarFavorito={adicionarFavorito} removerFavorito={removerFavorito} dadosCliente={dadosCliente}/>
        </div>
    )
}