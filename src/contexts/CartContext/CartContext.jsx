import { createContext, useContext, useState } from 'react'
import useLocalStorage  from '../../hooks/useLocalStorage'

const CartContext = createContext()

export function CartProvider({ children }) {
    const [items, setItems] = useLocalStorage('carrinho_compras', [])

    if(!items){
        return
    }

    // Adicionar o produto ao carrinho
    function addToCart(produto) {
        // verificar se o produto já está no carrinho
        if(items.find(item => item.id === produto.id)){
            return
        }
        const p = ({...produto, quantidade : 1})
        setItems(prev => [...prev, p])
    }




    // Remover o produto do carrinho
    function removeToCart(produto) {
        const produtos = items.filter(item => item?.id !== produto?.id)
        setItems([...produtos])
    }

    // Aumentar a quantidade de um produto no carrinho
    function aumentarQuantidade(produto) {
        setItems(prev => prev.map(item => {
            if(item.id === produto.id){
                return {...item, quantidade: item.quantidade + 1}
            }
            return item
        }))
    }

    function quantidades(produto, quantidade) {
        if(quantidade  > 101) return
        if(quantidade === '00') return
        setItems(prev => prev.map(item => {
            if(item.id === produto.id){
                return {...item, quantidade: Number(quantidade)}
            }
            return item
        }))
    }

    
    const teste = (produto, quantidade) => {
        if(quantidade === '' || quantidade === '0') {
            setItems(prev => prev.map(item => {
                if(item.id === produto.id) {
                
                        return {...item, quantidade: 1}
                    
                }
                return item
            }))

        }
    
    
    }
        
           

    // Diminuir a quantidade de um produto no carrinho
    function diminuirQuantidade(produto) {
        if(produto.quantidade === 1) return

        setItems(prev => prev.map(item => {
            if(item.id === produto.id) {
                return {...item, quantidade: item.quantidade - 1}
            }
            return item
        }))
    }

  

    return (
        <CartContext.Provider value={{items, setItems, addToCart, removeToCart, aumentarQuantidade, diminuirQuantidade, quantidades, teste}}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    return useContext(CartContext)
}
