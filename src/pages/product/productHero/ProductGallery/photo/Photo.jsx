import {motion} from 'framer-motion'

export default function Photo({foto}) {
    return (
        <motion.div  className="h-120 lg:h-150  w- border border-gray-200 rounded-4xl overflow-hidden">
            <img className="object-cover h-full w-full" src={foto?.url} alt="" />
        </motion.div>
    )
}