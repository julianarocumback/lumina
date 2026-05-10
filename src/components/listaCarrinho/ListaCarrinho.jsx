import { useCart } from '../../contexts/CartContext/CartContext'
import { Link } from "react-router-dom"

export default function ListaCarrinho(){
    const { items, removeToCart, adicionar, remover, quantidade } = useCart()

    return (
        <div className=" h-[calc(100vh-56px)] w-100 bg-amber-300 absolute right-0 top-14 flex flex-col p-4">
            <div>Carrinho</div>
            <div className="flex flex-col border w-full h-full gap-4 overflow-y-auto">
                {items.map((item, index) => {
                    return(
                        <div className="flex h-40 w-full border border-red-500 gap-4 overflow-hidden rounded-2xl shrink-0" key={index} >
                            {/* onClick={()=> removeToCart(item)} */}
                            <div className="h-full">
                                <img className="h-full w-full" src={item.img_url} alt="" />
                            </div>
                            <div className="flex flex-col">
                                <h4 className="text-lg font-semibold">{item.nome}</h4>
                                {item.valor}
                                {item.valor*item.quantidade}
                            <div className="flex border border-amber-400 w-20 items-center justify-around bg-white rounded-3xl px-2">
                                <div className="" onClick={()=> remover(item)}>-</div>
                                <div>{quantidade}</div>
                                <div onClick={()=> adicionar()}>+</div>
                            </div>
                            </div>
                        </div>        
                    )
                })}
            </div>
            <div className="flex justify-between py-4">
                <span>Subtotal</span>
                <span>R$ 1.000,00</span>
            </div>
            <Link to="/checkout">
                <button className="border rounded-3xl p-2">Pagamento</button>
            </Link>
        </div>
    )
}