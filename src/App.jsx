import MainRoutes from './routes'
import { CartProvider } from './contexts/CartContext/CartContext'

export default function App(){
    return (
        <CartProvider>
            <MainRoutes/>
        </CartProvider>
    )
}