import Specifications from "./specifications/Specifications"
import Box from "./box/Box"
import Warning from "./warning/Warning"
import {motion} from 'framer-motion'

export default function ProductDetails({produto}){
    return (
        <div  className="h-full w-full py-10 lg:py-30 bg-[rgba(243,243,245,1)] px-8 lg:px-90">
            <div className="flex flex-col gap-10 flex-wrap">
                <h2 className="text-2xl font-semibold">Detalhes</h2>

                <div className="flex gap-8 lg:flex-nowrap flex-wrap">
                    <div className="w-full flex flex-col gap-10">
                        <h3 className="text-xl font-bold">Especificações</h3>
                        <motion.div initial={{opacity:0, y:-30}} whileInView={{opacity:1, y:0}} transition={{duration: 0.7}} className="w-full shadow-sm rounded-2xl border border-gray-200/20">
                            <Specifications produto={produto}/>
                        </motion.div>
                    </div>
                    <div className="w-full flex flex-col gap-10">
                        <h3 className="text-xl font-bold">O que há na caixa</h3>
                        <motion.div initial={{opacity:0, y:-30}} whileInView={{opacity:1, y:0}} transition={{duration: 0.7}} className="w-full shadow-sm rounded-2xl border border-gray-200/20">
                            <Box produto={produto}/>
                        </motion.div>
                        <Warning/>
                    </div>

                </div>

            </div>
        </div>
    )
}