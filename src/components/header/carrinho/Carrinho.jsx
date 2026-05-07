export default function Carrinho({carrinhoIsOpen, setCarrinhoIsOpen}) {

    function alternar(){
        return(
            carrinhoIsOpen? (setCarrinhoIsOpen(false)): (setCarrinhoIsOpen(true))
        )
    }

    return (
        <div className="lg:text-xl" onClick={alternar}>
            <i className="fa-solid fa-cart-shopping"></i>
        </div>
    )
}