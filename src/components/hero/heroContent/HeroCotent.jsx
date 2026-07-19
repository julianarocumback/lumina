import {motion} from 'framer-motion'
import Badge from '../badge/Badge'

export default function HeroContent() {
    return (
        <div className='text-center flex flex-col gap-4 lg:text-left lg:gap-10'>
            <Badge/>

            <h1 className='hidden md:block lg:text-8xl'>A <span className="">Luz</span> que <br />Dissipa todas <br /> as Sombras.</h1>
            <div className="flex flex-col gap-2">
                <p className='text-2xl/9 lg:text-1xl'><q>Lâmpada para os meus pés é a tua palavra, e <span className="">luz</span>  para o meu caminho.</q></p>
                <cite className="text-xs text-blue-500 lg:text-xl"><span className='hidden md:inline'>-</span> <span className='uppercase md:capitalize'>Salmos 119:105</span></cite>
            </div>
                <motion.button 
                className="flex justify-center items-center gap-4 relative overflow-hidden rounded-full p-2 w-1/3 bg-gradient-to-r from-[#00639a] to-[#bc004b] py-3 text-white font-semibold text-lg hidden lg:flex"
                whileHover={{ scale: 1.02 }}
                >
                <span class="material-icons-outlined">auto_awesome</span>
                <span>Adquira já o seu!</span>
                

                <motion.div
                    initial={{ left: "-100%" }}
                    animate={{ left: "100%" }}
                    transition={{ repeat: Infinity, duration: 2, repeatDelay: 3, ease: "linear" }}
                    className="absolute top-0 w-1/2 h-full bg-white/20 skew-x-12 blur-sm"
                />
                </motion.button>
        </div>
    )
}