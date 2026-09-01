import { motion } from 'framer-motion'

import HeroContent from './heroContent/HeroCotent';
import Book from './book/Book'
import Button from '../ui/Button'

export default function Hero() {

  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.7}} className='relative flex flex-col overflow-hidden w-full h-screen font-sans antialiased text-slate-900 bg-[#f0f2f5]'>
      
      {/* Active background */}
      <div className='z-0 inset-0 absolute pointer-events-none'>
        <div className='absolute inset-0 prisma-light-mesh'/>
        <div className='absolute inset-0 opacity-[0.02] pointer-events-none' style={{ backgroundImage: `url('data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E')` }} />
      </div>

      {/* Hero */}
      <main className='z-10 relative flex flex-col flex-1 justify-between h-full px-10 select-none md:p-12 lg:overflow-y-visible lg:mx-auto lg:mt-40'>
        <div className='grid grid-cols-1 items-center gap-8 w-full max-w-7xl pt-10 lg:grid-cols-12 lg:gap-12 lg:pt-0'>
          
          {/* Hero Content*/}
          <div className='col-span-1 pointer-events-auto lg:col-start-1 lg:col-span-7'>
            <HeroContent/>
          </div>
          {/* 3D Interactive Book */}
          <Book />

          {/* Redirect to product */}
          <Button
            texto={'Adquira já o seu!'}
            icone={<span className='material-icons-outlined'>auto_awesome</span>}
            style={'lg:hidden gap-4'}
            link={'/produto/21'}
            initial={{ left: '-100%' }}
            animate={{ left: '100%' }}
            transition={{ repeat: Infinity, duration: 2, repeatDelay: 3, ease: 'linear'}}
            animationStyle={'absolute top-0 w-1/2 lg:w-1/3 h-full bg-white/20 skew-x-12 blur-sm'}
            whileHover={{ scale: 1.02 }}
          />
        </div>
      </main>
    </motion.div>
  );
}