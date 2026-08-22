import { useState, useContext } from "react"
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import { AnimatePresence } from 'framer-motion'

import Logo from "./logo/Logo"
import AuthModal from "./authModal/AuthModal"
import ExploreByColorsIcon from './exploreByColorsIcon/ExploreByColorsIcon'
import SlideOverCart from "../slideOverCart/SlideOverCart"
import CartIcon from "./cartIcon/CartIcon"

export default function Header() {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const {authenticated, dadosCliente, signIn, signOut, signUp} = useContext(AuthContext)

    return (
        <header className="fixed bottom-0 z-50 lg:top-0 h-14 lg:h-14 w-screen items-center flex left-0 bg-white border border-gray-200 shadow-xs">
            <div className="lg:hidden button-0 px-8 flex justify-around w-full">
                <Logo/>
                <ExploreByColorsIcon/>
                <AuthModal authenticated={authenticated} dadosCliente={dadosCliente} onSignIn={signIn} onSignOut={signOut} onSignUp={signUp}/>
                <CartIcon setIsCartOpen={setIsCartOpen} />
                <AnimatePresence>
                    {isCartOpen && (<SlideOverCart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen}/>)}
                </AnimatePresence>
            </div>
            <div className="hidden px-8 lg:flex justify-between gap-4 w-full items-center">
                <Logo/>
                <div className="flex gap-4">
                    <AnimatePresence>
                        <AuthModal authenticated={authenticated} dadosCliente={dadosCliente} onSignIn={signIn} onSignOut={signOut} onSignUp={signUp}/>
                    </AnimatePresence>
                    <CartIcon setIsCartOpen={setIsCartOpen} />
                    <AnimatePresence>{isCartOpen && <SlideOverCart/>}</AnimatePresence>
                </div>
            </div>
        </header>
    )
}