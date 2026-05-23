import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext} from '../../contexts/AuthContext/AuthContext'

export function ProtectedRoute({children}) {
    const {authenticated, loading} = useContext(AuthContext)
    if(loading) {
        return<div>Carregando...</div>
    }

    if (!authenticated) {
        return <Navigate to='/'/>
    }

    return children

}