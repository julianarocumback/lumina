import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext} from '../../contexts/AuthContext/AuthContext'

export function ProtectedRoute() {
    const {authenticated, loading} = useContext(AuthContext)
    if(loading) {
        return<div>Carregando...</div>
    }

    if (!authenticated) {
        return <Navigate to='/' replace/>
    }

    return <Outlet/>

}