import {motion} from 'framer-motion'

export default function Card({lista, cardVariants}){
    return(
        lista.map(depoimento => {
           
        
            return(
                <motion.div variants={cardVariants} key={depoimento.id} className="shrink-0 w-70 border border-[#f0f0f0] snap-center snap-always h-70 rounded-xl p-8 gap-8 flex flex-col bg-[#FAFAFA] bg-[radial-gradient(at_100%_0%,rgba(0,99,154,0.1),transparent_50%)]">
                    
                    <p className="text-base text-left text-[#1E293B]"><q>{depoimento.testemunho}</q></p>
                    <div className="flex gap-2 items-center my-auto">
                        <div className="text-2xl">{depoimento.img}</div>
                        <div className="flex flex-col text-left">
                            <span className="text-sm text-[#0F172A] font-semibold">{depoimento.nome}</span>
                            <span className="text-[8px] text-[#2563EB]">{depoimento.label}</span>
                        </div>
                    </div>
                </motion.div>
            )
        })


    )
}
