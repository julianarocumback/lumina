import { useState, useContext } from "react"
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import ListaCarrinho from "../listaCarrinho/ListaCarrinho"


import Logo from "./logo/Logo"
import Explorar from './explorar/Explorar'
import Login from "./login/Login"
import Carrinho from "./carrinho/Carrinho"

export default function Header() {
    const [carrinhoIsOpen, setCarrinhoIsOpen] = useState(false)
    const {authenticated, dadosCliente, login, logout} = useContext(AuthContext)


    return (
        <header className="fixed bottom-0 z-50 lg:top-0 h-12 lg:h-14 w-screen items-center flex left-0 bg-white border border-gray-200 shadow-xs">
            <div className="lg:hidden button-0 px-8 flex justify-around w-full">
                <Logo/>
                <Explorar/>
                <Login authenticated={authenticated} dadosCliente={dadosCliente} login={login} logout={logout} />
                    <Carrinho carrinhoIsOpen={carrinhoIsOpen} setCarrinhoIsOpen={setCarrinhoIsOpen}/>
                {carrinhoIsOpen? (<ListaCarrinho/>): ('')}
            </div> 
            <div className="hidden px-8 lg:flex justify-between gap-4 w-full items-center">
                <Logo/>
                <div className="flex gap-4">
                    <Login authenticated={authenticated} dadosCliente={dadosCliente} login={login} logout={logout} />
                    <Carrinho carrinhoIsOpen={carrinhoIsOpen} setCarrinhoIsOpen={setCarrinhoIsOpen}/>
                    {carrinhoIsOpen? (<ListaCarrinho/>): ('')}
                </div>
            </div>
        </header>
    )
}