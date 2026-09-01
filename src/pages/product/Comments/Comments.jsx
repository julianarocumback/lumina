import { motion } from 'framer-motion'

import Resume from './resume/Resume'
import Comment from './comment/Comment'

export default function Comments(){
    return (
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 1}} className='flex flex-col md:flex-row gap-8 relative h-full w-full bg-[rgba(249,249,251,1)] border-gray-100 border-b md:h-screen  p-4 sm:p-6 md:p-8 lg:p-16 xl:p-32 2xl:px-80 3xl:px-128'>
            <Resume/>
            <Comment/>
        </motion.div>
    )
}