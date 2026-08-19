import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
 
export default function Button({texto, icone, style, children, whileHover, whileTap, transition, link}) {
    return (
        <Link to='/produto/21'>
            <motion.button whileHover={whileHover} whileTap={whileTap} transition={transition} className={style} onClick={texto}>
                {texto}{icone}{children}
            </motion.button>
        
        </Link>
    )
}