import { createContext, useState, useContext } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
    const [items, setItems] = useState([])

    function addToCart(produto) {
        const teste = items.find(item => item.id === produto.id)
        if(teste){
            return
        }

        setItems([...items, produto])
    }
    return (
        <CartContext.Provider value={{items, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    return useContext(CartContext)
}
