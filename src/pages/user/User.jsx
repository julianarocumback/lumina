import { useState, useEffect } from 'react'
import { supabase } from '../../supabaseClient'
// --------------------------------------------
import Header from '../../components/header/Header'
import Sidebar from './sidebar/Sidebar'
import Geral from './geral/Geral'
import Pedidos from './pedidos/Pedidos'
import Perfil from './perfil/Perfil'
import Address from './address/Address'
import Payment from './payment/Payment'
import Favorites from './favorites/Favorites'
import HelpCenter from './helpCenter/HelpCenter'

// --------------------------------------------

export default function User() {
    const [clientes, setClientes] = useState([])
    const [aberto, setAberto] = useState(1)

    useEffect(()=> {
        async function getClientes() {
            try {
                const {data, error} = await supabase
                .from('clientes')
                .select('nome')
                if(error) throw error
                setClientes(data)

            }

            catch(error) {
                console.error('Erro ao buscar informações do usuário', error.message) 
            }
        }

        getClientes()
    },[])

    return (
        <div className="h-screen w-screen">
            <Header/>
            <div className="flex">
                <Sidebar setAberto={setAberto}/>
                <div className="flex w-screen">
                    {aberto === 1? <Geral clientes={clientes}/> : aberto === 2? <Pedidos/> : aberto === 3? <Perfil/> : aberto === 4? <Address/> : aberto === 5? <Payment/> : aberto === 6? <Favorites/> : <HelpCenter/>} 
                </div>
            </div>
        </div>
    )
}