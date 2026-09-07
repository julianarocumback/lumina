import ReactDOM from 'react-dom'
import { motion, AnimatePresence} from 'framer-motion'


export default function Confirmation({isConfirming, onHandleSaveCpf, setIsConfirming}){
    return ReactDOM.createPortal(
        <AnimatePresence>
            {isConfirming && 
            <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration: 0.3}} className='bg-black/20 fixed w-full h-full inset-0 flex justify-center items-center z-10'>
                <motion.div  className='flex flex-col border border-gray-100 w-100 h-70 bg-white rounded-3xl gap-8 p-8 shadow justify-center top-100'>
                    <p className='text-2xl text-center'>Você tem certeza?<br/>Só é possível adicionar o CPF uma vez.</p>
                    <div className='flex justify-between gap-8 '>
                        <button className='w-full p-2 rounded-2xl bg-red-500 text-white font-semibold cursor-pointer' onClick={onHandleSaveCpf}>Confirmar</button>
                        <button className='w-full p-2 rounded-2xl bg-gray-300 text-white font-semibold cursor-pointer focus:border' onClick={()=>setIsConfirming(false)}>Cancelar</button>
                    </div>
                </motion.div>
            </motion.div>
            }
        </AnimatePresence>,
        document.body
    )
}