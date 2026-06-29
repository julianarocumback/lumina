import Gallery from "./gallery/Gallery"
import Photo from "./photo/Photo"

export default function ProductGallery({foto, gallery, setIdFoto}){

    function alterarImagem(id){
        setIdFoto(id)
    }

    const galeria = gallery.map(item => {
        return(
            <div className="border border-gray-200 cursor-pointer rounded-2xl overflow-hidden" key={item?.id} onClick={()=> alterarImagem(item?.id)}>
                <img className="object-cover h-full w-full" src={item?.url} alt="" />
            </div>
        )
    })

    return (
        <div className="lg:w-240 h-full flex flex-col gap-4 relative">
            <Photo foto={foto}/>
            <Gallery galeria={galeria}/>
        </div>
    )
}