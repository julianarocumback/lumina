import { useOutletContext } from 'react-router-dom'

import Welcome from './welcome/Welcome'
import OrderPreview from './orderPreview/OrderPreview'
import FavoritesPreview from './favoritesPreview/FavoritesPreview'

export default function Geral(){
    const {dadosCliente} = useOutletContext()
    if(!dadosCliente) return
 
    return (
        <div className="flex flex-col gap-8 lg:gap-8 pt-20 pb-5 lg:py-30 pl-20 pr-5 lg:pl-150 lg:pr-70 h-full">
            
            <Welcome dadosCliente={dadosCliente}/>
           
            <div className="flex-col lg:flex-row flex gap-4 lg:gap-8">
                <OrderPreview orders={dadosCliente.pedidos}/>
                <FavoritesPreview favorites={dadosCliente.favoritos}/>
            </div>

        </div>
    )
}