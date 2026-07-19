import Comment from "./comment/Comment"
import Resume from "./resume/Resume"
import {motion} from 'framer-motion'

export default function Comments(){
    return (
        <div initial={{opacity:0}} animate={{opacity:1}} transition={{duration: 0.7}} className="bg-[rgba(249,249,251,1)] px-8 lg:px-90  h-full lg:h-screen w-full py-10 relative flex-col justify-center border-gray-300 border-b">
            <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 1}} className="flex gap-8 flex-wrap">
                <Resume/>
                <Comment/>
            </motion.div>
        </div>
    )
}