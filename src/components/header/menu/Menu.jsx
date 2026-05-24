import { useState } from 'react'

export default function Menu(){
    const [isOpen, setIsOpen] = useState(false)
    
    function handleIsOpen(){
        setIsOpen(prev => !prev)
    }

    return (
        <div onClick={handleIsOpen} className='lg:hidden'>
            <div >
                <i className="fa-solid fa-bars"></i>
            </div>

            {isOpen&& <div className="h-[calc(100vh-100px)] w-50 bg-white z-50 fixed top-14 left-0 shadow-lg p-4 border">
                <div className="flex flex-col justify-between border h-full">
                    <div>a</div>
                <div className="flex gap-4">
                    <div><i class="fa-regular fa-circle-user"></i></div>
                    <p>
                        Fazer login

                    </p>

                </div>
                </div>
            </div>}


        </div>
    )
}