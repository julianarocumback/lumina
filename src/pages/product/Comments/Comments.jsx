import { motion } from 'framer-motion'

import Resume from './resume/Resume'
import Comment from './comment/Comment'

export default function Comments(){
    return (
        <div initial={{opacity:0}} animate={{opacity:1}} transition={{duration: 0.7}} className='relative  justify-center h-full w-full py-10 px-8 bg-[rgba(249,249,251,1)] border-gray-300 border-b lg:h-screen lg:px-90'>
            <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 1}} className='flex gap-8 flex-wrap'>
                <Resume/>
                <Comment/>
            </motion.div>
        </div>
    )
}