import { createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from '../components/ProtectedRoute/ProtectedRoute'

// Rotas principais
import App from '../App'
import User from '../pages/user/User'
import Produto from '../pages/product/Product'
import Checkout from '../pages/checkout/Checkout'
import Bundle from '../pages/bundle/Bundle'

// Rotas secundárias
import Geral from '../pages/user/geral/Geral'
import Favorites from '../pages/user/favorites/Favorites'
import Profile from '../pages/user/profile/Profile'
import Orders from '../pages/user/pedidos/Pedidos'
import Address from '../pages/user/address/Address'
import HelpCenter from '../pages/user/helpCenter/HelpCenter'
import Payment from '../pages/user/payment/Payment'


export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>
    },
    {
        path:'/produto/:id',
        element: <Produto/>
    },
    {
        path: '/bundle/:link',
        element: <Bundle/>
    },

    // Rotas protegidas
    {
        element: <ProtectedRoute/>,
        children: [
            {
                path: '/user',
                element: <User/>,
                children: [
                    {
                        index: true,
                        element: <Geral/>,
                    },
                    {
                        path:'favorites',
                        element: <Favorites/>
                    },

                    {
                        path:'profile',
                        element: <Profile/>
                    },
                    {
                        path:'orders',
                        element: <Orders/>
                    },
                    {
                        path:'address',
                        element: <Address/>
                    },
                    {
                        path:'help-center',
                        element: <HelpCenter/>
                    },
                    {
                        path:'payment',
                        element: <Payment/>
                    },
                ]
            },
            {
                path: '/checkout',
                element: <Checkout/>
            },
        ]
    }
])