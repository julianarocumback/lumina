import { useState, useEffect } from "react"
import { Carrossel, Cards } from "./content/Content"
import { AnimatePresence } from 'framer-motion'


export default function Testemunhos(){
    const [isMobile, setIsMobile] = useState(false)

    useEffect(()=>{
        const checkSize = ()=>{
            setIsMobile(window.innerWidth < 1200)
        }
        checkSize()
        
        window.addEventListener('resize', checkSize)
    
        return ()=> window.removeEventListener('resize', checkSize)
    },[])


    return (
        <section>
            <AnimatePresence>{isMobile? (<Carrossel/>):(<Cards/>)}</AnimatePresence> 
        </section>
    )
}