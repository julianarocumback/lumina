export default function HeroContent() {
    return (
        <div className='text-center flex flex-col gap-4 lg:text-left lg:gap-10'>
            <h1 className='hidden md:block lg:text-8xl'>A <span className="">Luz</span> que <br />Dissipa todas <br /> as Sombras.</h1>
            <div className="flex flex-col gap-2">
                <p className='text-2xl/9 lg:text-1xl'><q>Lâmpada para os meus pés é a tua palavra, e <span className="">luz</span>  para o meu caminho.</q></p>
                <cite className="text-xs text-blue-500 lg:text-xl"><span className='hidden md:inline'>-</span> <span className='uppercase md:capitalize'>Salmos 119:105</span></cite>

            </div>
        </div>
    )
}