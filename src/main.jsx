import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AuthProvider} from './contexts/AuthContext/AuthContext'
import { CartProvider } from './contexts/CartContext/CartContext'

import { RouterProvider } from 'react-router-dom'
import { router} from './routes'
import './index.css'
import 'material-icons/iconfont/material-icons.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
       <CartProvider>
        <RouterProvider router={router}/>
       </CartProvider>
    </AuthProvider>
  </StrictMode>,
)