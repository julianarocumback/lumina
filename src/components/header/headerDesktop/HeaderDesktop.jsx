import Logo from '../logo/Logo'
import Login from '../login/Login'
import Carrinho from '../carrinho/Carrinho'
import ListaCarrinho from '../../listaCarrinho/ListaCarrinho'

export default function HeaderDesktop({authenticated, dadosCliente, login, logout, setCarrinhoIsOpen, carrinhoIsOpen}){
    return (
        <div className="flex h-14 w-full bg-white justify-between items-center px-8 fixed top-0 z-50 shadow-xs">
            <Logo/>
            <div className="flex gap-4">
                <Login authenticated={authenticated} dadosCliente={dadosCliente} login={login} logout={logout} />
                <Carrinho carrinhoIsOpen={carrinhoIsOpen} setCarrinhoIsOpen={setCarrinhoIsOpen}/>
                {carrinhoIsOpen? (<ListaCarrinho/>): ('')}
            </div>
        </div>
     )
}