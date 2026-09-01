import { motion } from 'framer-motion'

import Specifications from './specifications/Specifications'
import Box from './box/Box'
import Warning from './warning/Warning'

export default function ProductDetails({product}){
    return (
        <div  className='h-full w-full   bg-[rgba(243,243,245,1)] p-4 sm:p-6 md:p-8 lg:p-16 xl:p-32 2xl:px-80'>
            <div className='flex flex-col flex-wrap gap-10'>
               

                <div className='flex flex-wrap gap-8 lg:flex-nowrap'>

                    {/* Specifications */}
                    <div className='flex flex-col gap-10 w-full'>
                        <h3 className='text-xl font-bold'>Especificações</h3>
                        <motion.div initial={{opacity:0, y:-30}} whileInView={{opacity:1, y:0}} transition={{duration: 0.7}} className='w-full border border-gray-200/20 rounded-2xl shadow-sm'>
                            <Specifications product={product}/>
                        </motion.div>
                    </div>

                    {/* What's in the box */}
                    <div className='flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full'>
                        <h3 className='text-xl font-bold'>O que há na caixa</h3>
                        <div className='flex flex-col sm:flex-row lg:flex-col gap-4 '>
                            <motion.div initial={{opacity:0, y:-30}} whileInView={{opacity:1, y:0}} transition={{duration: 0.7}} className='w-full border border-gray-200/20 rounded-2xl shadow-sm'>
                                <Box product={product}/>
                            </motion.div>
                            <Warning/>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}