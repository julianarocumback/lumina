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
        <header className="flex h-14 w-full bg-white lg:justify-between justify-around px-5 items-center lg:px-8 fixed lg:top-0 bottom-0 z-50 shadow-xs">
            <div className="lg:hidden flex justify-around w-full p-8">
                <Logo/>
                <Explorar/>
                <Login authenticated={authenticated} dadosCliente={dadosCliente} login={login} logout={logout} />
                    <Carrinho carrinhoIsOpen={carrinhoIsOpen} setCarrinhoIsOpen={setCarrinhoIsOpen}/>
                {carrinhoIsOpen? (<ListaCarrinho/>): ('')}
            </div>
            <div className="hidden lg:flex justify-between gap-4 w-full items-center">
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