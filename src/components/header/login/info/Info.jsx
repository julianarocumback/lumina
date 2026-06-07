import { useNavigate } from 'react-router-dom';

export default function Info({authenticated, logout}){
    const navigate = useNavigate()
   
    // Redirecionar o usuário para a página 'user'
    const handleSubmit =() => {
        if(authenticated){
            navigate('/user')
        }
    }

    return (
        <div className="lg:absolute  top-10 border border-gray-100 lg:-right-19 shadow-xs lg:w-70 bg-white h-fit px-8 py-6 z-50">
            <div className="flex flex-col gap-4">
               <button onClick={handleSubmit} className="flex justify-items-start items-center cursor-pointer gap-4">
                    <div><i class="fa-solid fa-user"></i></div>
                    <span className="font-semibold">Minha conta</span>
                </button>

               <div className="h-0.5 border border-gray-300"></div>
            
                <button onClick={logout} className=" font-semibold flex gap-4 text-red-800 items-center cursor-pointer">
                    <div className=""><i className="fa-solid fa-arrow-right-from-bracket"></i></div>
                    <span className="">Sair da conta</span>
                </button>
            </div>
        </div>
    )
}