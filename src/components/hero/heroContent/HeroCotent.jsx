import { motion } from 'framer-motion'

import Badge from '../../ui/Badge'
import Button from '../../ui/Button'

export default function HeroContent() {
    return (
        <div className='text-center flex flex-col gap-4 lg:text-left lg:gap-10'>
            <Badge style={'hidden lg:flex'}/>

            <h1 className='hidden md:block lg:text-8xl text-blue-900'>A <span className=''>Luz</span> que <br />Dissipa todas <br /> as Sombras.</h1>
            <div className='flex flex-col gap-2'>
                <p className='text-2xl/9 lg:text-1xl text-blue-900'><q>Lâmpada para os meus pés é a tua palavra, e <span className=''>luz</span>  para o meu caminho.</q></p>
                <cite className='text-xs text-blue-500 lg:text-xl'><span className='hidden md:inline'>-</span> <span className='uppercase md:capitalize'>Salmos 119:105</span></cite>
            </div>
            <Button
                texto={'Adquira já o seu!'}
                icone={<span className='material-icons-outlined'>auto_awesome</span>}
                style={'hidden lg:flex gap-4'}
                link={'/produto/21'}
                initial={{ left: '-100%' }}
                animate={{ left: '100%' }}
                transition={{ repeat: Infinity, duration: 2, repeatDelay: 3, ease: 'linear'}}
                animationStyle={'absolute top-0 w-1/2 h-full bg-white/20 skew-x-12 blur-sm'}
                whileHover={{ scale: 1.02 }}
            />
            

        </div>
    )
}