import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

import NewAddress from './NewAddress'

export default function Address(){
    const {dadosCliente, deleteAddress, onAddAddress} = useOutletContext()
    const [newAddress, setNewAddress] = useState(false)
    if(!dadosCliente) return null
    
    
    const hasMaxAddress = dadosCliente?.address?.length === 3

    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.7}} className={`flex flex-col w-screen gap-8 pt-7 pr-5 pl-20 lg:py-30 lg:pr-70 lg:pl-150`}>    
            <h1 className="text-2xl font-semibold">Endereços</h1>
            <AnimatePresence>
                <div className={`grid grid-cols-1 gap-8 w-full lg:grid-cols-3`}>
                    {dadosCliente?.address?.map(address => {
                        return (
                            <motion.div initial={{opacity:0}} layout animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.5}}  key={address.id} className="flex flex-col justify-center overflow-hidden gap-7 h-40 p-6 bg-white border border-gray-100 rounded-2xl shadow lg:h-45 lg:w-full">
                                <div className="flex justify-between items-center gap-4">
                                    <div className='flex items-center gap-4'>
                                        {address.type === 'Casa'?
                                            <div className={`py-3 px-4 text-green-800 bg-green-200 rounded-xl`}><i className="fa-solid fa-house"></i></div>
                                            :address.type === 'Trabalho'?
                                            <div className={`py-3 px-4 text-blue-800 bg-blue-200 rounded-xl`}><i className="fa-solid fa-briefcase"></i></div>
                                            :
                                            <div className={`py-3 px-4 text-gray-700 bg-gray-200 rounded-xl`}><i className="fa-solid fa-location-dot"></i></div>    
                                        }
                                        <div className='flex flex-col' >
                                            <p className='text-lg font-semibold'>{address?.type}</p>
                                            {address?.is_default&& <p className='px-2 text-xs font-semibold text-amber-900 bg-amber-300 rounded-2xl'>Principal</p>}
                                        </div>
                                    </div>
                                    <div className='text-gray-500 hover:text-red-600 transition-all cursor-pointer' onClick={() => deleteAddress(address.id)}><i className="fa-solid fa-trash"></i></div>
                                </div>
                                <div className='text-wrap break-all'>
                                    <p className='font-semibold text-gray-500'>{address.street}, {address.street_number} - {address.neighborhood}, {address.city} - {address.state}, {address.zip_code}</p>
                                </div>
                            </motion.div>
                        )
                    })}
                    <motion.button
                        initial={{opacity:0}}
                        layout
                        animate={{opacity:1}}
                        exit={{opacity:0}}
                        transition={{duration:0.5}}
                        className={`${!hasMaxAddress&& ' hover:bg-blue-500/10 hover:border-blue-500 hover:text-blue-500 group [*_>_p]:text-blue-500 '}h-40 flex-none border lg:h-45 lg:w-full  w-full md:w-70 justify-center items-center gap-2 rounded-2xl p-4 flex flex-col border-dashed  border-gray-300  transition-colors  hover:cursor-pointer `}
                        onClick={()=>setNewAddress(true)}
                        disabled={hasMaxAddress}
                    >               
                        <div className={`flex justify-center items-center w-10 h-10 text-white bg-gray-200 ${!hasMaxAddress && 'group-hover:bg-blue-500/90'} rounded-full transition-all`}><i className="fa-solid fa-plus "></i></div>             
                        <p className="text-[12px] font-semibold text-gray-700 group-hover:text-blue-500/90 transition-all">{!hasMaxAddress ? 'Novo endereço': 'Não é possível adicionar mais endereços'}</p>
                    </motion.button>
                </div>
            </AnimatePresence>
            <AnimatePresence>
                {newAddress && <NewAddress dadosCliente={dadosCliente} setNewAddress={setNewAddress} onAddAddress={onAddAddress}/>}
            </AnimatePresence>
        </motion.div>
    )
}