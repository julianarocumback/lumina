import { useState } from 'react'

export default function Menu({authenticated, dadosCliente, logout}){
    const [isOpen, setIsOpen] = useState(false)
    
    function handleIsOpen(){
        setIsOpen(prev => !prev)
    }

    return (
        <div  className='lg:hidden'>
            <div onClick={handleIsOpen}>
                <i className="fa-solid fa-bars"></i>
            </div>

            {isOpen&& <div className="flex flex-col justify-between h-[calc(100vh-56px)] w-50 bg-white z-50 absolute top-14 left-0 shadow-lg p-4">

                <div className="flex">
                    <div>a</div>

                </div>


                <div className="flex justify-between items-center">
                
                    <div className="flex gap-2">
                        <div><i class="fa-regular fa-circle-user"></i></div>
                        {authenticated?<p>{dadosCliente.nome}</p>: <p>Fazer login</p>}
                    </div>

                    {authenticated && <div onClick={logout} className="hover:text-red-500 cursor-pointer "><i class="fa-solid fa-arrow-right-from-bracket "></i></div>}
                    
                </div>
                
            </div>}


        </div>
    )
}