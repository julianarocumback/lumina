import Email from "./email/Email"
import Button from "../hero/button/Button"
import {motion} from 'framer-motion'

export default function NewsLetter(){
    return (
        <motion.div initial={{opacity: 0, y:-50}} whileInView={{opacity:1, y:0}} transition={{duration: 0.5}} className="w-full lg:h-120 flex justify-center lg:py-20">
            <div className="lg:w-[70%] w-full border border-[rgba(198,198,198,0.20)] bg-[#f3f3f5] shadow-lg lg:rounded-4xl flex flex-col lg:px-70 text-center justify-center py-12 gap-3 lg:gap-5">
               
               
                    <h2 className="text-xl lg:text-3xl">Receba Gotas de Inspiração</h2>
                    <p className="text-sm lg:text-base">Inscreva-se para receber lançamentos <br/> exclusivos, reflexões semanais e descontos <br/> especiais em sua caixa de entrada.</p>

                    <div className="flex flex-col lg:flex-row py-2 px-20 lg:px-40 gap-4 justify-center items-center ">
                        <Email/>
                        <Button whileHover={{ scale: 1.05, y: -2 }} // Sobe e cresce de leve no hover
  texto='Inscrever-se' style='bg-gradient-to-r from-[#00639a] to-[#bc004b] py-4 px-6 rounded-4xl w-full lg:w-50 font-medium bg-[#00639a] text-white cursor-pointer'/>
                    </div>

                    


               
            </div>
        </motion.div>
    )
}