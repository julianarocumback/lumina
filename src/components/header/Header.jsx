import { useState } from "react"
import ListaCarrinho from "../listaCarrinho/ListaCarrinho"

import Logo from "./logo/Logo"
import Login from "./login/Login"
import Carrinho from "./carrinho/Carrinho"
import Menu from "./menu/Menu"

export default function Header() {
    const [carrinhoIsOpen, setCarrinhoIsOpen] = useState(false)
    console.log(carrinhoIsOpen)

    return (
        <header className="flex h-14 w-all bg-white/80 justify-between px-5 items-center lg:px-8 fixed z-50 w-full">
            <Menu/>
            <Logo/>
            <div className="flex gap-4">
                <Login/>
                <Carrinho carrinhoIsOpen={carrinhoIsOpen} setCarrinhoIsOpen={setCarrinhoIsOpen}/>
                {carrinhoIsOpen? (<ListaCarrinho/>): ('')}
            </div>
        </header>
    )
}