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
    const {dadosCliente, logout, removerFavorito, atualizarNome, atualizarEmail, atualizarWhatsApp, adicionarEndereco, removerEndereco, addPayment} = useContext(AuthContext)
    const {addToCart, items} = useCart()

    const [newAddress, setNewAddress] = useState(false)
    const [newPayment, setNewPayment] = useState(false)
    

    return (
        <div className={`h-full w-full`}>
            <Header/>
            <Sidebar logout={logout}/>
            <Outlet context={{dadosCliente , addToCart, removerFavorito, items, atualizarNome, atualizarEmail, atualizarWhatsApp, adicionarEndereco, removerEndereco, newAddress, setNewAddress , newPayment,setNewPayment}}/>
            {newAddress && <NewAddress adicionarEndereco={adicionarEndereco} setNewAddress={setNewAddress} dadosCliente={dadosCliente}/>}
            {newPayment && <NewPayment addPayment={addPayment} setNewPayment={setNewPayment} dadosCliente={dadosCliente}/>}
            
        </div>
    )
}