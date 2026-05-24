import { useState, useContext } from "react"
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import ListaCarrinho from "../listaCarrinho/ListaCarrinho"


import Logo from "./logo/Logo"
import Login from "./login/Login"
import Carrinho from "./carrinho/Carrinho"
import Menu from "./menu/Menu"

export default function Header() {
    const [carrinhoIsOpen, setCarrinhoIsOpen] = useState(false)
    const {authenticated, dadosCliente, login, logout} = useContext(AuthContext)


    return (
        <header className="flex h-14 w-all bg-white justify-between px-5 items-center lg:px-8 fixed z-50 w-full">
            <Menu authenticated={authenticated} login={login} dadosCliente={dadosCliente} logout={logout}/>
            <Logo/>
            <div className="flex gap-4">
                <Login authenticated={authenticated} dadosCliente={dadosCliente} login={login} />
                <Carrinho carrinhoIsOpen={carrinhoIsOpen} setCarrinhoIsOpen={setCarrinhoIsOpen}/>
                {carrinhoIsOpen? (<ListaCarrinho/>): ('')}
            </div>
        </header>
    )
}