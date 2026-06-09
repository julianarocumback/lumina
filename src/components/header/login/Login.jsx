import { useState,  } from 'react'
import ModalLogin from './modalLogin/ModalLogin'
import Info from './info/Info'


export default function Login({authenticated, dadosCliente, login, logout}) {
    const [open, setOpen] = useState(false)

    function handleOpen(){
        setOpen(prev => !prev)
    }

    return (
        <div className="lg:flex">
            <div onClick={handleOpen} className=' md:flex lg:text-xl gap-2 items-center'>
                <i className="fa-regular fa-circle-user"></i>
                <div className="text-base hidden lg:block">
                    {authenticated && <p>{dadosCliente?.nome} </p>}
                </div>
            </div>

            <div>
                {open && <div>{authenticated? <div><Info authenticated={authenticated} logout={logout}/></div>:<ModalLogin authenticated={authenticated} login={login} setOpen={setOpen} />}</div>}
            </div>
        </div>    
    )
}