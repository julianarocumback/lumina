import {motion, AnimatePresence} from 'framer-motion'

// Search
export default function Search ({query, setQuery}) {
    
    const handleSearchChange = (e) => {
        const query = e.target.value.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()

        setQuery(query)
    }
    
    const handleCleanSearch = () => {
        setQuery('')
    }
   
    return (
         <AnimatePresence>
            <motion.div className='z-10 flex flex-col  left-0 -top-10 w-full items-center'>
                <div className='w-full relative flex items-center justify-center'>
                    <input value={query} onChange={(e) => handleSearchChange(e)} className='w-full shadow border border-gray-100 rounded-full py-2 px-4 bg-white' type='text'/>
                    {query && <button onClick={handleCleanSearch} className='absolute hover:text-red-500 transition-all right-4 cursor-pointer z-50 '><i className='fa-solid fa-xmark'></i></button>}
                </div>    
            </motion.div>
        </AnimatePresence>
    )
}