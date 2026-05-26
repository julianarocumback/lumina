import { NavLink } from 'react-router-dom'

export default function Sidebar({logout}) {

    const opcoes = [
        {
            path: '/user',
            end: 'end',
            icone: <span className="material-icons">dashboard</span>,
            nome: 'Visão Geral'
        },
        {
            path: '/user/orders',
            icone: <i className="fa-solid fa-box-open"></i>,
            nome: 'Pedidos'
        },
        {
            path: '/user/profile',
            icone: <i className="fa-solid fa-user-shield"></i>,
            nome: 'Perfil'
        },
        {
            path: '/user/address',
    
            icone: <i className="fa-solid fa-location-dot"></i>,
            nome: 'Endereço'
        },
        {
            path: '/user/payment',
            icone: <i className="fa-solid fa-credit-card"></i>,
            nome: 'Pagamento'
        },
        {
            path: '/user/favorites',
            icone: <i className="fa-solid fa-heart"></i>,
            nome: 'Favoritos'
        },
        {
            path: '/user/help-center',
            icone: <i className="fa-solid fa-circle-question"></i>,
            nome: 'Central de Ajuda'
        }
    ]

    return (
        <aside className="relative h-[calc(100vh-56px)] top-14 w-80 bg-gray-100">
            <div className="flex flex-col p-8 justify-between w-full h-full">

                {/* Navegação */}
                <div className="flex flex-col gap-8">
                    {opcoes.map(opcao=> {
                        return (
                            <NavLink key={opcao.path} to={opcao.path} end={opcao.end} className={({isActive}) => `flex gap-4 text-[#474747] items-center ${isActive && 'text-red-500'}`}>
                                {opcao.icone}
                                {opcao.nome}
                            </NavLink>
                        )
                    })}
                </div>

                {/* Logout */}
                <div className="flex gap-4 text-red-800 items-center">
                    <div><i className="fa-solid fa-arrow-right-from-bracket"></i></div>
                    <button onClick={logout} className="font-semibold">Sair da conta</button>
                </div>
            
            </div>
        </aside>
    )
}