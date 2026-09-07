import ReactDOM from 'react-dom'
import { motion, AnimatePresence} from 'framer-motion'


export default function Confirmation({isConfirming,handleSaveBirthdate, handleCancelAddBirthdate }){
    return ReactDOM.createPortal(
        <AnimatePresence>
            {isConfirming && 
            <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration: 0.3}} className='bg-black/20 fixed w-full h-full inset-0 flex justify-center items-center z-10'>
                <motion.div  className='flex flex-col border border-gray-100 w-100 h-70 bg-white rounded-3xl gap-8 p-8 shadow justify-center top-100'>
                    <div className='border '>
                    <p>Só é possível adicionar uma vez, após isso não será possível alterá-lo. Deseja continuar</p>
                    <div className='border flex justify-center items-center gap-8'>
                        <button onClick={handleSaveBirthdate} className='bg-blue-500 py-2 px-8 rounded-xl font-semibold'>Sim</button>
                        <button className='bg-gray-200 py-2 px-8 rounded-xl font-semibold' onClick={handleCancelAddBirthdate}>Não</button>
                    </div>    
                </div>
                </motion.div>
            </motion.div>
            }
        </AnimatePresence>,
        document.body
    )
}