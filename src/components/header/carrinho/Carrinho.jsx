import { useCart } from '../../../contexts/CartContext/CartContext'

export default function Carrinho({carrinhoIsOpen, setCarrinhoIsOpen}) {
    const {items} = useCart()
    const quantidadeProdutos = items.map(item => item.quantidade).reduce((a,b) => a+b ,0)

    function alternar(){
        return(
            carrinhoIsOpen? (setCarrinhoIsOpen(false)): (setCarrinhoIsOpen(true))
        )
    }

    return (
        <div className="lg:text-xl relative" onClick={alternar}>
            <i className="fa-solid fa-cart-shopping"></i>
            {/* Mostrar quantidade de produtos no carrinho */}
            {items.length > 0 && 
            <div style={{fontSize: quantidadeProdutos > 9? '10px': '11px'}} className="bg-white border rounded-full flex justify-center items-center h-4 w-4 absolute top-0 -right-1">
                {quantidadeProdutos}
            </div>
            }  
        </div>
    )
}