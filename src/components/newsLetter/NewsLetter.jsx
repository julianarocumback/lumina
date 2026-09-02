import Button from '../ui/Button'
import {motion} from 'framer-motion'

export default function NewsLetter(){
    return (
        <motion.div initial={{opacity: 0, y:-50}} whileInView={{opacity:1, y:0}} transition={{duration: 0.5}} className='flex w-full sm:justify-center sm:p-8 md:p-16 lg:p-24'>
            <div className='flex flex-col justify-center gap-2 w-full p-4 text-center bg-[#f3f3f5] border border-[rgba(198,198,198,0.20)] shadow-lg sm:w-200 sm:rounded-2xl sm:px-16 sm:gap-4 md:w-200 md:py-12 md:px-32 lg:w-240 lg:px-54 lg:gap-8 lg:rounded-4xl'>
                {/* Titles */}
                <h2 className='text-xl lg:text-3xl'>Receba Gotas de Inspiração</h2>
                <p className='text-sm md:text-base'>Inscreva-se para receber lançamentos <br/> exclusivos, reflexões semanais e descontos <br/> especiais em sua caixa de entrada.</p>
                {/* Subscribe */}
                <div className='flex flex-col gap-2 sm:gap-4 md:flex-row'>
                    {/* Email input */}
                    <input type='email' placeholder='Seu melhor e-mail' className='w-full py-3 px-8 bg-white border border-[#e2e8f0] rounded-4xl lg:w-270'/>
                    {/* Subscribe button */}
                    <Button whileHover={{ scale: 1.05, y: -2 }} texto='Inscrever-se' style='text-center font-medium text-white bg-[#00639a] bg-linear-to-r from-[#00639a] to-[#bc004b] rounded-4xl cursor-pointer' link='#'/>
                </div>        
            </div>
        </motion.div>
    )
}