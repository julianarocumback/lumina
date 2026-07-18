import { MdOutlineAutoAwesome } from "react-icons/md";
import Badge from "./badge/Badge";
import Price from "./price/Price";
import Cart from "./cart/Cart";
import Favorite from "./favorite/Favorite";
import Title from "./title/Title";
import Info from "./info/Info";
import Divisor from "./divisor/Divisor";


export default function ProductInfo({produto, adicionarFavorito, removerFavorito, dadosCliente, authenticated}){
    
    return(
        <div className="w-full flex flex-col justify-center">
            <Badge produto={produto}/>
            <div className="py-4">
                <Title produto={produto}/>
            </div>

            <Price produto={produto}/>
            <Divisor/>
            <Info produto={produto}/>
            <div className="flex flex-col py-10 gap-4">
                <Cart produto={produto}/> 
                <Favorite adicionarFavorito={adicionarFavorito} removerFavorito={removerFavorito} dadosCliente={dadosCliente} produto={produto} authenticated={authenticated}/>
            </div>
            <div className="lg:flex lg:gap-8 hidden">
                <div className="flex gap-2">
                    <div className="text-blue-800"><i className="fa-regular fa-truck"></i></div>
                    <div>Frete Grátis dependendo da região</div>      
                </div>
                <div className="flex gap-2">
                    <div className="text-blue-800"><i className="fa-regular fa-circle-check"></i></div>
                    <div>Garantia Vitalícia</div>      
                </div>
            </div>
        </div>
    )
}