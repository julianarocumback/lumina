import { NavLink } from 'react-router-dom'

export default function Sidebar() {

    const navLinks = [
        {
            path: '/user',
            end: 'end',
            icon: <span className='material-icons'>dashboard</span>,
            name: 'Visão Geral'
        },
        {
            path: '/user/orders',
            icon: <i className='fa-solid fa-box-open'></i>,
            name: 'Pedidos'
        },
        {
            path: '/user/profile',
            icon: <i className='fa-solid fa-user-shield'></i>,
            name: 'Perfil'
        },
        {
            path: '/user/address',
            icon: <i className='fa-solid fa-location-dot'></i>,
            name: 'Endereço'
        },
        {
            path: '/user/payment',
            icon: <i className='fa-solid fa-credit-card'></i>,
            name: 'Pagamento'
        },
        {
            path: '/user/favorites',
            icon: <i className='fa-solid fa-heart'></i>,
            name: 'Favoritos'
        },
        {
            path: '/user/help-center',
            icon: <i className='fa-solid fa-circle-question'></i>,
            name: 'Central de Ajuda'
        }
    ]

    return (
        <aside className='fixed w-15 h-[calc(100vh-56px)] bg-gray-100 lg:top-14 lg:w-80'>
            <div className='flex flex-col justify-between items-center p-8 w-full h-full lg:items-start'>
                {/* Navigation */}
                <div className='flex flex-col gap-8'>
                    {navLinks.map(link => {
                        return (
                            <NavLink key={link.path} to={link.path} end={link.end} className={({isActive}) => `flex gap-4  items-center ${isActive ? 'text-red-500': 'text-[#474747]'}`}>
                                <span className=''>{link.icon}</span>
                                <span className='hidden lg:inline'> {link.name}</span>
                            </NavLink>
                        )
                    })}
                </div>
            </div>
        </aside>
    )
}