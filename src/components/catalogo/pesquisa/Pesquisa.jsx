import { useState } from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import Order from '../order/Order'

// Mobile search
export const MobileSearch = ({lista, setCategory, pesquisa, setPesquisa, setOrdem, ordem, filteredProducts}) => {
    const [isFilterOpen, setIsFilterOpen] = useState(false)
    if(!lista) return null

    function searchChange(e) {
        const search = e.target.value.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()

        setPesquisa(search)
    }
    
    const handleCleanSearch = () => {
        setPesquisa('')
    }

    const filters = [...new Set(lista.map(item => item.categoria))].map(item => <div onClick={()=>setCategory(item)}>{item}</div>)

    return (
        <AnimatePresence>
        <motion.div  className='sticky -mt-21  sm:hidden flex flex-col z-20 left-0 top-0 h-fit w-full p-4 gap-4 items-center'>
            
            <div className='flex w-full gap-4'>
                <div className='w-full relative flex items-center justify-center'>
                    <input value={pesquisa} onChange={(e)=> searchChange(e)} className='w-full shadow rounded-full py-2 px-4 bg-white' type='text' />
                    {pesquisa && <button onClick={handleCleanSearch} className='absolute hover:text-red-500 transition-all right-4 cursor-pointer z-50 '><i className='fa-solid fa-xmark' ></i></button>}

                </div>
                <button onClick={() => setIsFilterOpen(prev => !prev)} className=' shadow p-2 rounded-xl bg-white'><i className='fa-solid fa-filter'></i></button>
                
            </div>
            <div className='w-screen bg-white'>
                {isFilterOpen &&
                    <motion.div initial={{opacity:0, y:-30}} layout animate={{opacity: 1, y:0}}   transition={{ type: 'tween', duration: 0.5 }} exit={{opacity:0, y:-30}} className='bg-white w-full justify-center h-fit flex gap-4'>
                            {filters}

                    </motion.div>
                }
                <div className='bg-white  w-full p-4 flex flex-col'>
                    <Order setOrdem={setOrdem} ordemAtiva={ordem} quantidade={filteredProducts.length}/>
                    <div className='block h-[0.1px] w-full bg-gray-200'></div>
                </div>

            </div>
            
        </motion.div>
        </AnimatePresence>
    )
}



// Desktop search
export const DesktopSearch = ({pesquisa, setPesquisa}) => {
    function searchChange(e) {
        const search = e.target.value.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()

        setPesquisa(search)
    }
    
    const handleCleanSearch = () => {
        setPesquisa('')
    }
   
    return (
         <AnimatePresence>
            <motion.div  className=' flex flex-col z-10 left-0 -top-10 w-full items-center'>
                <div className='w-full relative flex items-center justify-center'>
                    <input value={pesquisa} onChange={(e) => searchChange(e)} className='w-full shadow border border-gray-100 rounded-full py-2 px-4 bg-white' type='text' />
                    {pesquisa && <button onClick={handleCleanSearch} className='absolute hover:text-red-500 transition-all right-4 cursor-pointer z-50 '><i className='fa-solid fa-xmark' ></i></button>}
                </div>    
            </motion.div>
        </AnimatePresence>
    )
}