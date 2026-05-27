import { useOutletContext } from 'react-router-dom'

export default function Favorites(){

    const {dadosCliente} = useOutletContext()

    return(
        <div className="relative h-[calc(100vh-56px)] top-14 w-full">
            <div className="flex flex-col w-full py-16 px-8 lg:px-60 gap-16">
                <div className="flex flex-col gap-2">
                    <h2 className="text-2xl font-semibold lg:text-4xl">Minha Lista de Desejos</h2>
                    <p className="lg:text-lg">Guarde aqui os tesouros que você deseja iluminar sua biblioteca em breve. Cada página é um passo em direção à sabedoria.</p>
                </div>
                <div className="flex flex-col lg:flex-row gap-8">
                    {dadosCliente?.favoritos.map(favorito => {
                        return (
                            <div className="flex lg:flex-col lg:h-full gap-4 lg:gap-2 h-45 p-4 rounded-2xl bg-white shadow-xs">
                                <div className="w-25 lg:w-50 rounded-xl bg-gray-200 overflow-hidden">
                                    
                                    <img className='w-full h-full' src={favorito.img_url} alt="" />
                                </div>
                                <div className="flex flex-col justify-between lg:gap-2">
                                    <div>
                                        <p className="text-lg font-semibold">{favorito.nome}</p>
                                        <p className="text-xl lg:text-base font-bold text-blue-500">{favorito.valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>
                                    </div>
                                    <div className="flex gap-4 lg:flex-col">
                                        <button className="flex items-center lg:justify-center lg:py-3 gap-1 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500 to-red-500 text-white "> 
                                            <div className="text-xs"><i class="fa-solid fa-plus"></i></div>
                                            <div className="text-xs font-semibold">CARRINHO</div>
                                        </button>
                                        <button className="text-red-500 lg:hidden "><i class="fa-solid fa-trash"></i></button>
                                        <button className="hover:text-red-500 cursor-pointer hidden lg:block">Remover</button>

                                    </div>


                                </div>
                            </div>
                                
                        )
                    })}
                    
                </div>

            </div>
            </div>
    )
}