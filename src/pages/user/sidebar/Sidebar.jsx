import { MdOutlineAutoAwesome } from "react-icons/md";
import { Link} from 'react-router-dom'

export default function Sidebar({setAberto}) {

    function mostrar(idOpcao){
        setAberto(idOpcao)
        
    }

    const opcoes = [
        {
            id: 1,
            icone: <span className="material-icons">dashboard</span>,
            nome: 'Visão Geral',
            link: '',
            status: true
        },
        {
            id: 2,
            icone: <i class="fa-solid fa-box-open"></i>,
            nome: 'Meus Pedidos',
            link: '',
            status: false
        },
        {
            id: 3,
            icone: <i class="fa-solid fa-user-shield"></i>,
            nome: 'Perfil',
            link: '',
            status: false
        },
        {
            id: 4,
            icone: <i class="fa-solid fa-location-dot"></i>,
            nome: 'Endereço',
            link: '',
            status: false
        },
        {
            id: 5,
            icone: <i class="fa-solid fa-credit-card"></i>,
            nome: 'Pagamento',
            link: '',
            status: false
        },
        {
            id: 6,
            icone: <i class="fa-solid fa-heart"></i>,
            nome: 'Favoritos',
            link: '',
            status: false
        },
        {
            id: 7,
            icone: <i class="fa-solid fa-circle-question"></i>,
            nome: 'Central de Ajuda',
            link: '',
            status: false
        },
    ]
    return (
        <aside className="relative h-[calc(100vh-56px)] top-14 w-80 bg-gray-100 border">
            <div className="flex flex-col p-8 justify-between w-full h-full">
                <div className="flex flex-col gap-8">
                    {opcoes.map(opcao=>{
                        return (
                            <div onClick={()=> mostrar(opcao.id)}  className="flex gap-4 text-[#474747] items-center text-">
                                {opcao.icone}
                                {opcao.nome}
                                
                            </div>)}   
                        )
                    }
                </div>
                <Link to='/'>
                    <div className="flex gap-4 text-red-800 items-center">
                        <div><i class="fa-solid fa-arrow-right-from-bracket"></i></div>
                        <div className="font-semibold">Sair da conta</div>
                    </div>
                </Link>
            </div>
        </aside>
    )
}