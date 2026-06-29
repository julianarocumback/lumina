import { useCart } from '../../../../../contexts/CartContext/CartContext'


export default function Cart(produto){
    const {addToCart,items} = useCart()
    console.log(produto)
    console.log(items)

    if(!produto){
        return
    }

    return (
        <div>
            <button onClick={() => addToCart(produto.produto)} className="bg-gradient-to-r from-[#00639a] to-[#bc004b] w-full flex py-3 lg:py-4 rounded-4xl justify-center gap-3 text-xl font-semibold items-center text-white cursor-pointer"><span className="material-icons ">shopping_cart</span>{!items?.some(item => item.id === produto.id)? ' Carrinho': 'Adicionado'}</button>
        </div>
    )
}