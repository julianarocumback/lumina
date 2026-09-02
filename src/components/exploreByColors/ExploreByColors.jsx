import { useState, useEffect } from "react"
import { Carrossel, BentoGrid } from "./exploreCotent/ExploreContent"
import {motion, AnimatePresence} from 'framer-motion'

export default function Explorar(){
    const [isMobile, setIsMobile] = useState(false)

    useEffect(()=> {
        const checkSize = ()=>{
            setIsMobile(window.innerWidth < 1024)
        }
        checkSize()

        window.addEventListener('resize', checkSize)
        return () => window.removeEventListener('resize', checkSize)

    },[])
    return (
        <section id="exploreByColors" className="w-full px-8 py-12 lg:py-24 lg:px-16 xl:px-32 2xl:px-80">
            <AnimatePresence>{isMobile? (<Carrossel/>): (<BentoGrid/>)}</AnimatePresence>
        </section>
    )
}