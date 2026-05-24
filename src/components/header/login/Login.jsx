import { useState,  } from 'react'
import ModalLogin from './modalLogin/ModalLogin'
import Info from './info/Info'


export default function Login({authenticated, dadosCliente, login}) {
    const [open, setOpen] = useState(false)

    function handleOpen(){
        setOpen(prev => !prev)
    }

    return (
        <div className="hidden lg:flex">
            <div onClick={handleOpen} className='hidden md:flex lg:text-xl gap-2 items-center'>
                <i className="fa-regular fa-circle-user"></i>
                <div className="text-base">
                    {authenticated && <p>{dadosCliente?.nome} </p>}
                </div>
            </div>

            <div>
                {open && <div>{authenticated? <div className="absolute"><Info/></div>:<ModalLogin authenticated={authenticated} login={login} />}</div>}
            </div>
            
        </div>    
    )
}