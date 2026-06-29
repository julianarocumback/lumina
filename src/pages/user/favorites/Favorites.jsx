import { useOutletContext } from 'react-router-dom'

export default function Favorites(){

    const {dadosCliente, addToCart, removerFavorito, items} = useOutletContext()
    const favorites = dadosCliente?.favoritos || []
    console.log(dadosCliente)

    function handleAdicionarCarrinho(favorito){
        addToCart(favorito)
    }

    function handleRemoverFavorito(favorito){
        removerFavorito(favorito)
    }

   


    return(
        <div className={`${favorites.length <= 4 ? 'h-screen': 'h-full'} flex flex-col gap-8 lg:gap-8 py-7 pb-5 lg:py-30 pl-20 pr-5 lg:pl-150 lg:pr-70`}>

                <div className="flex flex-col gap-2">
                    <h2 className="text-2xl font-semibold lg:text-4xl"> Lista de Desejos</h2>
                    <p className="lg:text-lg">Guarde aqui os tesouros que você deseja iluminar sua biblioteca em breve. </p>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 overflow-hidden">
                    {favorites.length > 0 ? 
                    favorites.map(favorito => {
                        return ( 
                            <div key={favorito.id} className="flex flex-rol lg:flex-col lg:h-130 gap-4 lg:gap-2 h-40 p-4 rounded-2xl bg-white shadow-xs lg:justify-between ">
                                <div className="w-20 flex-none  lg:w-full lg:h-80 rounded-xl bg-gray-200 overflow-hidden">
                                    <img className='w-full h-full' src={favorito.img_url} alt="" />
                                </div>
                                <div className="w-full flex flex-col justify-between lg:gap-2 truncate">
                                    <div>
                                        <p className="text-lg/6 font-semibold truncate">{favorito.nome}</p>
                                        <p className="text-xl lg:text-base font-bold text-blue-500">{favorito?.valor?.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>
                                    </div>
                                    <div className="flex gap-4 lg:flex-col">
                                        <button onClick={()=> handleAdicionarCarrinho(favorito)} className="flex items-center lg:justify-center lg:py-3 gap-1 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500 to-red-500 text-white "> 
                                            
                                            
                                            <div className="text-xs font-semibold">{items?.some(item => item.id === favorito.id)? 'ADICIONADO': <div className="flex items-center"><div className="text-xs"><i class="fa-solid fa-plus"></i></div>CARRINHO</div>}</div>
                                        </button>
                                        <button className="text-red-500 lg:hidden "><i class="fa-solid fa-trash"></i></button>
                                        <button onClick={()=> removerFavorito(favorito)} className="hover:text-red-500 cursor-pointer hidden lg:block">Remover</button>

                                    </div>
                                </div>
                            </div>
                                
                        )
                    })
                    : 
                    <div className='h-full text-3xl font-semibold py-50 flex justify-center col-span-full'>
                        adicione favoritos a sua lista!
                    </div>
                    }
                    
                    
                </div>

        
        </div>
    )
}