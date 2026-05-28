import { useOutletContext } from 'react-router-dom'

import Welcome from './welcome/Welcome'
import OrderPreview from './orderPreview/OrderPreview'
import FavoritesPreview from './favoritesPreview/FavoritesPreview'

export default function Geral(){
    const {dadosCliente} = useOutletContext()

    return (
        <div className="flex flex-col py-25 pl-20 pr-5 lg:pl-100 lg:pr-20 gap-8 top-14 w-full">
            
            <Welcome dadosCliente={dadosCliente}/>
           
            <div className="flex-col lg:flex-row flex  gap-4 lg:gap-8 border">
                <OrderPreview/>
                <FavoritesPreview/>
            </div>

        </div>
    )
}