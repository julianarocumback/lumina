import Welcome from './welcome/Welcome'
import FavoritesPreview from './favoritesPreview/FavoritesPreview'
import OrderPreview from './orderPreview/OrderPreview'


export default function Geral({dadosCliente}){
  
    return (
        <div className="relative h-[calc(100vh-56px)] top-14 py-16 px-56 w-full">
            <div className="flex flex-col items h-full w-full justify-between" >
                <div>
                    <Welcome dadosCliente={dadosCliente}/>
                </div>
                <div className="flex gap-8">
                    <OrderPreview/>
                    <FavoritesPreview/>
                </div>

            </div>
        </div>
    )
}