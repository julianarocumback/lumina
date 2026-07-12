import {useState} from 'react'

import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext/AuthContext'
import { useCart } from '../../contexts/CartContext/CartContext'
import { Outlet } from 'react-router-dom';
// --------------------------------------------
import Header from '../../components/header/Header'
import Sidebar from './sidebar/Sidebar'
import NewAddress from './address/NewAddress'
import NewPayment from './payment/NewPayment'
// --------------------------------------------

export default function User() {
    const {dadosCliente, logout, removerFavorito, submitName, atualizarEmail, atualizarWhatsApp, addAddress, deleteAddress, addPayment, deleteCard, cpfAdd} = useContext(AuthContext)
    const {addToCart, items} = useCart()

    const [newAddress, setNewAddress] = useState(false)
    const [newPayment, setNewPayment] = useState(false)    

    return (
        <div className={`h-full w-full`}>
            <Header/>
            <Sidebar logout={logout}/>
            <Outlet context={{dadosCliente , addToCart, removerFavorito, items, submitName, atualizarEmail, atualizarWhatsApp, addAddress, deleteAddress, newAddress, setNewAddress , newPayment,setNewPayment, deleteCard, cpfAdd}}/>
            {newAddress && <NewAddress addAddress={addAddress} setNewAddress={setNewAddress} dadosCliente={dadosCliente}/>}
            {newPayment && <NewPayment addPayment={addPayment} setNewPayment={setNewPayment} dadosCliente={dadosCliente}/>}
            
        </div>
    )
}