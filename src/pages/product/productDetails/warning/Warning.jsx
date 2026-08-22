import { motion } from 'framer-motion'


export default function Warning(){
    return(
        <motion.div initial={{opacity:0, y:-30}} whileInView={{opacity:1, y:0}} transition={{duration: 0.7}} className='p-7 text-sm text-[rgba(0,74,117,0.85)] bg-[rgba(206,229,255,0.3)] border border-[rgba(0,99,154,0.1)] rounded-2xl '>
            <span><span className='font-bold'>Nota:</span> Cada produto é embalado manualmente para garantir que chegue em perfeitas condições à sua residência.</span>
        </motion.div>
    )
}