import { motion} from 'framer-motion'
import HeroContent from "./heroContent/HeroCotent";
import Book from './book/Book'

export default function Hero() {

  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.7}} className="w-full h-screen relative overflow-hidden flex flex-col bg-[#f0f2f5] font-sans antialiased text-slate-900">
      
      {/* Background Activo */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="prisma-light-mesh absolute inset-0" />
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
      </div>

      {/* Conteúdo da Hero */}
      <main className="flex-1 h-full flex flex-col justify-between px-10 md:p-12 z-10 relative lg:mx-auto lg:mt-40  lg:overflow-y-visible select-none">
  
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-10 lg:pt-0 items-center w-full max-w-7xl">
          
          {/* CONTEÚDO (TEXTO) */}
          <div className="lg:col-start-1 lg:col-span-7 col-span-1 pointer-events-auto">
            <HeroContent />
          </div>

          {/* LIVRO 3D INTERATIVO */}
          <Book/>

          <motion.button 
                className="flex justify-center items-center gap-4 relative overflow-hidden rounded-full p-2 w-full bg-gradient-to-r from-[#00639a] to-[#bc004b] py-3 text-white font-semibold text-lg lg:hidden "
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

      </main>
    </motion.div>
  );
}