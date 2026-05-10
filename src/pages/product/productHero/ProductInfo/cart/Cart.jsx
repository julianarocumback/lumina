import { useCart } from '../../../../../contexts/CartContext/CartContext'


export default function Cart(produto){
    const {addToCart} = useCart()

    if(!produto){
        return
    }

    return (
        <div>
            <button onClick={() => addToCart(produto)} className="bg-gradient-to-r from-[#00639a] to-[#bc004b] w-full flex py-3 lg:py-4 rounded-4xl justify-center gap-3 text-xl font-semibold items-center text-white cursor-pointer"><span className="material-icons ">shopping_cart</span>Adicionar ao carrinho</button>
        </div>
    )
}