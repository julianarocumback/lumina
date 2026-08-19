import Button from "../ui/Button"
import {motion} from 'framer-motion'

export default function NewsLetter(){
    return (
        <motion.div initial={{opacity: 0, y:-50}} whileInView={{opacity:1, y:0}} transition={{duration: 0.5}} className="flex justify-center w-full lg:h-120 lg:py-20">
            <div className="flex flex-col justify-center gap-3 w-full py-12 text-center bg-[#f3f3f5] border border-[rgba(198,198,198,0.20)] shadow-lg lg:gap-5 lg:px-70 lg:w-[70%]  lg:rounded-4xl">
                {/* Titles */}
                <h2 className="text-xl lg:text-3xl">Receba Gotas de Inspiração</h2>
                <p className="text-sm lg:text-base">Inscreva-se para receber lançamentos <br/> exclusivos, reflexões semanais e descontos <br/> especiais em sua caixa de entrada.</p>
                {/* Subscribe */}
                <div className="flex flex-col items-center gap-4 py-2 px-20 lg:flex-row lg:px-30">
                    {/* Email input */}
                    <input className="w-full py-4 px-6 bg-white border border-[#e2e8f0] rounded-4xl" type="email" placeholder="Seu melhor e-mail"/>
                    {/* Subscribe button */}
                    <Button whileHover={{ scale: 1.05, y: -2 }} texto='Inscrever-se' style='w-full py-4 px-6 font-medium text-white bg-[#00639a] bg-gradient-to-r from-[#00639a] to-[#bc004b] rounded-4xl cursor-pointer lg:w-40'/>
                </div>        
            </div>
        </motion.div>
    )
}