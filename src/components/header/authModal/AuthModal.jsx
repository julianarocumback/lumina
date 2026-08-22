import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import UserMenu from './UserMenu'
import SignUp from './SignUp'
import SignIn from './SignIn'


export default function AuthModal({authenticated, dadosCliente, onSignIn, onSignOut, onSignUp}) {
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
    const [isSignUp, setIsSignUp] = useState(false)

    function handleAuthModalOpen(){
        setIsAuthModalOpen(prev => !prev)
    }

    const loginRef = useRef(null)
    useEffect(()=> {
        function clickOut(event) {
            if (loginRef.current && !loginRef.current.contains(event.target)){
                setIsAuthModalOpen(false)
            }
        }

        if(isAuthModalOpen) {
            document.addEventListener('mousedown', clickOut)
        }

        return () => {
            document.removeEventListener('mousedown', clickOut)
        }
    }, [isAuthModalOpen, setIsAuthModalOpen])


    return (
        <div className="cursor-pointer lg:flex" ref={loginRef}>
            <div onClick={handleAuthModalOpen} className='md:flex md:items-center md:gap-2 lg:text-xl'>
                <i className="fa-regular fa-circle-user"></i>
                <div className="text-base hidden lg:block">
                    {authenticated && <p>{dadosCliente?.nome} </p>}
                </div>
            </div>


            {/* Auth modal */}
            <AnimatePresence>          
                {isAuthModalOpen && 
                    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration: 0.2}} className='h-fit'>
                        {authenticated ? <UserMenu authenticated={authenticated} onSignOut={onSignOut}/> : !authenticated && isSignUp ? <SignUp setIsSignUp={setIsSignUp} onSignUp={onSignUp}/> : <SignIn onSignIn={onSignIn} setIsSignUp={setIsSignUp}/>}
                    </motion.div>
                }
            </AnimatePresence>
        </div>    
    )
}