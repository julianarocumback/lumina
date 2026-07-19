import {motion} from 'framer-motion'
 
export default function Button({texto, icone, style, children, whileHover, whileTap, transition}) {
    return (
        <motion.button whileHover={whileHover} whileTap={whileTap} transition={transition} className={style} onClick={texto}>
            {texto}{icone}{children}
        </motion.button>
    )
}