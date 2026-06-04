import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext/AuthContext'
import { useCart } from '../../contexts/CartContext/CartContext'
import { Outlet } from 'react-router-dom';
// --------------------------------------------
import Header from '../../components/header/Header'
import Sidebar from './sidebar/Sidebar'
// --------------------------------------------

export default function User() {
    const {dadosCliente, logout, removerFavorito, atualizarNome, atualizarEmail, atualizarWhatsApp} = useContext(AuthContext)
    const {addToCart, items} = useCart()

    return (
        <div className="h-full w-full bg-gray-50 border">
            <Header/>
            <Sidebar logout={logout}/>
            <Outlet context={{dadosCliente, addToCart, removerFavorito, items, atualizarNome, atualizarEmail, atualizarWhatsApp}}/>
        </div>
    )
}