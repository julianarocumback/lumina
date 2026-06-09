import { useState, useContext } from "react"
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import ListaCarrinho from "../listaCarrinho/ListaCarrinho"


import Logo from "./logo/Logo"
import Explorar from './explorar/Explorar'
import Login from "./login/Login"
import Carrinho from "./carrinho/Carrinho"
import HeaderMobile from './headerMobile/HeaderMobile'
import HeaderDesktop from './headerDesktop/HeaderDesktop'

export default function Header() {
    const [carrinhoIsOpen, setCarrinhoIsOpen] = useState(false)
    const {authenticated, dadosCliente, login, logout} = useContext(AuthContext)


    return (
        <header className="relative">
            {/* <div className="lg:hidden flex justify-around w-full p-8">
                <Logo/>
                <Explorar/>
                <Login authenticated={authenticated} dadosCliente={dadosCliente} login={login} logout={logout} />
                    <Carrinho carrinhoIsOpen={carrinhoIsOpen} setCarrinhoIsOpen={setCarrinhoIsOpen}/>
                {carrinhoIsOpen? (<ListaCarrinho/>): ('')}
            </div> */}
            {/* <div className=" lg:flex justify-between gap-4 w-full items-center">
                <Logo/>
                <div className="flex gap-4">
                    <Login authenticated={authenticated} dadosCliente={dadosCliente} login={login} logout={logout} />
                    <Carrinho carrinhoIsOpen={carrinhoIsOpen} setCarrinhoIsOpen={setCarrinhoIsOpen}/>
                    {carrinhoIsOpen? (<ListaCarrinho/>): ('')}
                </div>
            </div> */}
            <div className="lg:hidden"><HeaderMobile authenticated={authenticated} dadosCliente={dadosCliente} login={login} logout={logout} setCarrinhoIsOpen={setCarrinhoIsOpen} carrinhoIsOpen={carrinhoIsOpen}/></div>
            <div className="hidden lg:flex"><HeaderDesktop authenticated={authenticated} dadosCliente={dadosCliente} login={login} logout={logout} setCarrinhoIsOpen={setCarrinhoIsOpen} carrinhoIsOpen={carrinhoIsOpen}/></div>
        </header>
    )
}