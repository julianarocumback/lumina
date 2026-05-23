import { useState } from 'react'

export default function Menu(){
    const [isOpen, setIsOpen] = useState(false)
    
    function handleIsOpen(){
        setIsOpen(prev => !prev)
    }

    return (
        <div>
            <div onClick={handleIsOpen} className='md:hidden'>
                <i className="fa-solid fa-bars"></i>
            </div>

            {isOpen&& <div className="h-screen w-50 bg-white z-50 absolute top-14 left-0 shadow-lg p-4">
                a
            </div>}


        </div>
    )
}