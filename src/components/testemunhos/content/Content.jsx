const lista = [
    {
    img: <span className="material-icons">face_2</span>,
    nome:'Ana Clara Mendes',
    testemunho: 'A curadoria da Radiant é impecável. Cada livro que compro aqui parece ter sido escolhido especificamente para o meu momento o de vida.',
    label: 'LEITORA ASSÍDUA'
    },

    {img: <span className="material-icons">face_6</span>,
    nome:'Marcos Oliveira',
    testemunho: 'O cuidado com o design e a estética do site torna a experiência de compra um momento de meditação.Simplesmente maravilhoso.',
    label: 'COLECIONADOR'
    },

    {img: <span className="material-icons">face_3</span>,
    nome:'Helena Santos',
    testemunho: 'Presentear alguém com um livro da Radiant é Entregar uma obra de arte. A embalagem e o carinho transparecem em tudo.',
    label: 'CLIENTE'
    },
]

const depoimentos = lista.map(depoimento => {
    return(
        <div className="shrink-0 w-70 border border-[#f0f0f0] snap-center snap-always h-70 rounded-xl p-8 gap-8 flex flex-col bg-[#FAFAFA] bg-[radial-gradient(at_100%_0%,rgba(0,99,154,0.1),transparent_50%)]">
            
            <p className="text-base text-left text-[#1E293B]"><q>{depoimento.testemunho}</q></p>
            <div className="flex gap-2 items-center my-auto">
                <div className="text-2xl">{depoimento.img}</div>
                <div className="flex flex-col text-left">
                    <span className="text-sm text-[#0F172A] font-semibold">{depoimento.nome}</span>
                    <span className="text-[8px] text-[#2563EB]">{depoimento.label}</span>
                </div>
            </div>
        </div>
    )
})



export const Carrossel = () => {
    return(
        <section className=" w-full bg-[#f3f3f5]">
            <div className="flex flex-col gap-4 p-8">
                <h3 className="text-xl">Testemunhos</h3>
                <div className="flex overflow-x-scroll gap-8 snap-mandatory snap-x no-scrollbar">
                    {depoimentos}
                   

                </div>
            </div>
        </section>

    )
}

export const Cards = ()=> {
    return(
        <section className="w-full flex flex-col px-8 py-32 bg-[radial-gradient(at_0%_0%,rgba(255,107,107,0.3),transparent_50%),radial-gradient(at_50%_0%,rgba(255,159,67,0.3),transparent_50%),radial-gradient(at_100%_0%,rgba(254,202,87,0.3),transparent_50%),radial-gradient(at_100%_50%,rgba(72,219,251,0.3),transparent_50%),radial-gradient(at_100%_100%,rgba(84,160,255,0.3),transparent_50%),radial-gradient(at_50%_100%,rgba(155,89,182,0.3),transparent_50%),radial-gradient(at_0%_100%,rgba(231,76,60,0.3),transparent_50%),radial-gradient(at_0%_50%,rgba(46,204,133,0.5),transparent_50%)]">
            <div className="text-center flex flex-col gap-20 max-w-8xl">
                <div>
                    <span className="text-[10px] text-[#00639A]">TESTEMUNHOS</span>
                    <h3 className="text-4xl text-[#1A1C1D]">Vozes da Comunidade</h3>
                    <p className="text-base text-[#474747]">Experiências transformadoras de quem caminha conosco na luz da palavra.</p>
                </div>
                <div className="flex gap-10 justify-center">
                    {depoimentos}
                </div>

            </div>

        </section>

    )
}