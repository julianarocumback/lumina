import { useCart } from '../../contexts/CartContext/CartContext'

export default function ListaCarrinho(){
    const { items } = useCart()

    return (
        <div className="h-screen w-100 bg-amber-300 absolute right-0 top-0 flex flex-col p-4">
            <div>Carrinho</div>
            <div className="flex flex-col border w-full h-full gap-4">
                {items.map((item, index) => {
                    return(
                        <div className="flex h-40 w-full border gap-4 overflow-hidden rounded-2xl" key={index}>
                            <div className="h-full">
                                <img className="h-full w-full" src={item.img_url} alt="" />
                            </div>
                            <div className="flex flex-col">
                                <h4 className="text-lg font-semibold">{item.nome}</h4>
                                {item.valor}
                            </div>
                        </div>        
                    )
                })}
            </div>
        </div>
    )
}