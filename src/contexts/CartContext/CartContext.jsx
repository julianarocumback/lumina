import { createContext, useState, useContext } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
    const [items, setItems] = useState([])
    const [quantidade, setQuantidade] = useState(1)

    if(!items){
        return
    }

    function addToCart(produto) {
        // verificar se o produto já está no carrinho
        if(items.find(item => item.id === produto.id)){
            return
        }
        const p = {...produto, quantidade : quantidade}
        setItems(prev => [...prev, p])
        
    }

    function removeToCart(produto) {
        const produtos = items.filter(item => item?.id !== produto?.id)

        setItems([...produtos])
    }

    function adicionar(produto){
        setQuantidade(1)

        // setItems(prev => [...prev, ...produto, q])
    }

    function remover(produto){
        if (quantidade === 1){
        return removeToCart(produto)
        }
        setQuantidade(prev => prev - 1)
    }

    return (
        <CartContext.Provider value={{items, addToCart, removeToCart, adicionar, remover, quantidade}}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    return useContext(CartContext)
}
