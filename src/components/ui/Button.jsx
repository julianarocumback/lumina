import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
 
export default function Button({initial, animate,  texto, icone, style, children, whileHover, whileTap, transition, link, animationStyle}) {
    return (
        <Link to={link}>
            <motion.button
                whileHover={whileHover}
                whileTap={whileTap}
                transition={transition}
                className={`relative flex justify-center items-center overflow-hidden gap-4 w-full lg:w-1/3 px-2 py-3 text-lg font-semibold text-white bg-linear-to-r from-[#00639a] to-[#bc004b] rounded-full hover:cursor-pointer ${style}`}
                onClick={texto} >
                    {icone} {texto} {children}
                <motion.div
                    initial={initial}
                    animate={animate}
                    transition={transition}
                    className={animationStyle}
                />
            </motion.button>
        </Link>
    )
}