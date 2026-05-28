import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext/AuthContext'
import { Outlet } from 'react-router-dom';
// --------------------------------------------
import Header from '../../components/header/Header'
import Sidebar from './sidebar/Sidebar'
// --------------------------------------------

export default function User() {
    const {dadosCliente, logout} = useContext(AuthContext)

    return (
        <div className="h-full lg:h-screen w-full lg:w-screen bg-gray-50">
            <Header/>
            <div className="flex">
                <div className="">
                    <Sidebar logout={logout}/>
                </div>

                <div className="flex w-screen">
                    <Outlet context={{dadosCliente}}/>
                </div>
            </div>
        </div>
    )
}