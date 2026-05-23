import { useState, useContext } from 'react'
import {AuthContext} from '../../contexts/AuthContext/AuthContext'
// --------------------------------------------
import Header from '../../components/header/Header'
import Sidebar from './sidebar/Sidebar'
import Geral from './geral/Geral'
import Pedidos from './pedidos/Pedidos'
import Perfil from './perfil/Perfil'
import Address from './address/Address'
import Payment from './payment/Payment'
import Favorites from './favorites/Favorites'
import HelpCenter from './helpCenter/HelpCenter'

// --------------------------------------------

export default function User() {
    const [aberto, setAberto] = useState(1)
    const {dadosCliente, logout} = useContext(AuthContext)

    return (
        <div className="h-full lg:h-screen w-screen bg-gray-50">
            <Header/>
            <div className="flex">
                <div className="hidden lg:block">
                    <Sidebar setAberto={setAberto} logout={logout}/>

                </div>
                <div className="flex w-screen">
                    {aberto === 1? <Geral dadosCliente={dadosCliente}/> : aberto === 2? <Pedidos/> : aberto === 3? <Perfil/> : aberto === 4? <Address/> : aberto === 5? <Payment/> : aberto === 6? <Favorites dadosCliente={dadosCliente}/> : <HelpCenter/>} 
                </div>
            </div>
        </div>
    )
}