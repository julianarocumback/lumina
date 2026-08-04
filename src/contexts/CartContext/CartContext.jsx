import { createContext, useContext } from 'react'
import useLocalStorage from '../../hooks/useLocalStorage'

const CartContext = createContext()

export function CartProvider({ children }) {
    const [items, setItems] = useLocalStorage('carrinho_compras', [])

    if(!items) return

    // Add product to cart
    function addToCart(book) {
        // Check if product is already in cart
        if(items.find(item => item.id === book.id)) return

        const p = ({...book, quantidade : 1})
        setItems(prev => [...prev, p])
    }

    // Remove product from cart
    function removeFromCart(book) {
        const books = items.filter(item => item?.id !== book?.id)
        setItems([...books])
    }

    // Increase product quantity in cart
    function increaseQuantity(book) {
        setItems(prev => prev.map(item => {
            if(item.id === book.id){
                return {...item, quantidade: item.quantidade + 1}
            }
            return item
        }))
    }

    // Update product quantity
    function updateQuantity(book, quantity) {
        if(quantity  > 101) return
        if(quantity === '00') return
        setItems(prev => prev.map(item => {
            if(item.id === book.id){
                return {...item, quantidade: Number(quantity)}
            }
            return item
        }))
    }

    // Check product quantity
    const checkQuantity = (book, quantity) => {
        if(quantity === '' || quantity === '0') {
            setItems(prev => prev.map(item => {
                if(item.id === book.id) {
                    return {...item, quantidade: 1}
                }
                return item
            }))
        }    
    }   

    // Decrease product quantity in cart
    function decreaseQuantity(book) {
        if(book.quantidade === 1) return

        setItems(prev => prev.map(item => {
            if(item.id === book.id) {
                return {...item, quantidade: item.quantidade - 1}
            }
            return item
        }))
    }

    return (
        <CartContext.Provider value={{items, setItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, updateQuantity, checkQuantity}}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    return useContext(CartContext)
}