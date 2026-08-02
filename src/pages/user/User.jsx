import {useState, useContext} from 'react'
import { Outlet } from 'react-router-dom';
import { AnimatePresence} from 'framer-motion'

import { AuthContext } from '../../contexts/AuthContext/AuthContext'
import { useCart } from '../../contexts/CartContext/CartContext'
// --------------------------------------------
import Header from '../../components/header/Header'
import Sidebar from './sidebar/Sidebar'
import NewAddress from './address/NewAddress'
// --------------------------------------------

export default function User() {
    const {dadosCliente, removerFavorito, submitName, atualizarEmail, atualizarWhatsApp, addAddress, deleteAddress, addPayment, onDeleteCard, cpfAdd, birthdateAdd, defaultCard, onPurgeAccount, onUpdatePassword} = useContext(AuthContext)
    const {addToCart, items} = useCart()

    const [newAddress, setNewAddress] = useState(false)
    const [newPayment, setNewPayment] = useState(false)    

    return (
        <div className={`h-full w-full`}>
            <Header/>
            <Sidebar/>
            <AnimatePresence>
                <Outlet context={{dadosCliente , addToCart, removerFavorito, items, submitName, atualizarEmail, atualizarWhatsApp, addAddress, deleteAddress, newAddress, setNewAddress , newPayment,setNewPayment, onDeleteCard, cpfAdd, birthdateAdd, addPayment, defaultCard, onPurgeAccount, onUpdatePassword}}/>
            </AnimatePresence>
            {newAddress && <NewAddress addAddress={addAddress} setNewAddress={setNewAddress} dadosCliente={dadosCliente}/>}
            
        </div>
    )
}