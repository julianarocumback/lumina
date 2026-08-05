import { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import { motion, AnimatePresence} from 'framer-motion'

export default function ConfirmationModal({isPurgeAccount, isUpdatePassword, description, onCancel, onConfirm, onHandleAddPassword, onHandleAddConfirmPassword, password, confirmPassword}){
    const cancelButtonRef = useRef(null)
    useEffect(() =>{

        const modal = ()=> {
            if(isPurgeAccount || isUpdatePassword) {
                cancelButtonRef.current?.focus()
                document.body.classList.add('overflow-y-hidden')
            } else {
                document.body.classList.remove('overflow-y-hidden')
            }
        }
        modal()
    }, [isPurgeAccount, isUpdatePassword])

    return ReactDOM.createPortal(
        <AnimatePresence>
            {isPurgeAccount && 
            <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration: 0.3}} className='bg-black/20 fixed w-full h-full inset-0 flex justify-center items-center z-10'>
                <motion.div  className='flex flex-col border border-gray-100 w-100 h-70 bg-white rounded-3xl gap-8 p-8 shadow justify-center top-100'>
                    <p className='text-2xl text-center'>{description}
                    </p>
                    {isUpdatePassword &&
                        <div className='flex w-full flex-col gap-4'>
                            <input type="text" className='border p-2 rounded-xl border-gray-200 focus:outline-gray-300 shadow-xs' placeholder='Digite a nova senha' onChange={onHandleAddPassword} value={password}/>
                            <input type="text" className='border p-2 rounded-xl border-gray-200 shadow-xs focus:outline-gray-300' placeholder='Confirme a nova senha' onChange={onHandleAddConfirmPassword} value={confirmPassword}/>
                        </div>
                    
                    }
                    <div className='flex justify-between gap-8 '>
                        <button className='w-full p-2 rounded-2xl bg-red-500 text-white font-semibold cursor-pointer' onClick={onConfirm}>Confirmar</button>
                        <button className='w-full p-2 rounded-2xl bg-gray-300 text-white font-semibold cursor-pointer focus:border' ref={cancelButtonRef} onClick={onCancel}>Cancelar</button>
                    </div>
                </motion.div>
            </motion.div>
            }
        </AnimatePresence>,
        document.body
    )
}