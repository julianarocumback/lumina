import { useContext } from 'react'
import { Outlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'

import { AuthContext } from '../../contexts/AuthContext/AuthContext'
import { useCart } from '../../contexts/CartContext/CartContext'
// --------------------------------------------
import Header from '../../components/header/Header'
import Sidebar from './sidebar/Sidebar'
// --------------------------------------------

export default function User() {
    const {dadosCliente, removerFavorito, submitName, atualizarEmail, atualizarWhatsApp, addAddress, deleteAddress, addPayment, onDeleteCard, cpfAdd, birthdateAdd, defaultCard, onPurgeAccount, onUpdatePassword} = useContext(AuthContext)
    const {addToCart, items} = useCart()

 

    return (
        <div className={`h-full w-full`}>
            <Header/>
            <Sidebar/>
            <AnimatePresence>
                <Outlet context={{dadosCliente , addToCart, removerFavorito, items, submitName, atualizarEmail, atualizarWhatsApp, onAddAddress: addAddress, deleteAddress, onDeleteCard, cpfAdd, birthdateAdd, addPayment, defaultCard, onPurgeAccount, onUpdatePassword}}/>
            </AnimatePresence>
        </div>
    )
}