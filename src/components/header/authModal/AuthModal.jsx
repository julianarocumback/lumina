import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ModalLogin from './modalLogin/ModalLogin'
import Info from './info/Info'


export default function AuthModal({authenticated, dadosCliente, login, logout, onSignUp}) {
    const [open, setOpen] = useState(false)

    function handleOpen(){
        setOpen(prev => !prev)
    }

    const loginRef = useRef(null)

    useEffect(()=> {
        function clickOut(event) {
            if (loginRef.current && !loginRef.current.contains(event.target)){
                setOpen(false)
            }
        }

        if(open) {
            document.addEventListener('mousedown', clickOut)
        }

        return () => {
            document.removeEventListener('mousedown', clickOut)
        }
    }, [open, setOpen])


    return (
        <div className="lg:flex" ref={loginRef}>
            <div onClick={handleOpen} className=' md:flex lg:text-xl gap-2 items-center'>
                <i className="fa-regular fa-circle-user"></i>
                <div className="text-base hidden lg:block">
                    {authenticated && <p>{dadosCliente?.nome} </p>}
                </div>
            </div>

            <AnimatePresence>
                    {open && 
                <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration: 0.2}} >
                    <div>
                        {authenticated?
                        <div><Info authenticated={authenticated} logout={logout}/></div>
                        :
                        <ModalLogin authenticated={authenticated} login={login} onSignUp={onSignUp} setOpen={setOpen} />} 
                    </div>
                </motion.div>
                    }

            </AnimatePresence>
        </div>    
    )
}