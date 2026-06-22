import { Link } from 'react-router-dom'
export default function FavoritesPreview({favorites}){
  
    return (
        <div className="h-125 justify-center rounded-3xl lg:w-1/4 bg-white p-8 shadow-lg flex flex-col gap-4">
            <div className="flex justify-between">
                <h3 className="font-semibold text-lg">Favoritos recentes</h3>
            </div>

            <div className="flex flex-col h-full">    
                
                {[...favorites].reverse().map((favorite, index) => {
                    if(index < 5) {
                        return (
                            <Link to={`/produto/${favorite.id}`}>
                                <div className="  flex">
                                    <div className="h-20 w-25  py-2 overflow-hidden ">
                                        <img className="border border-gray-200 rounded-lg h-full" src={favorite.img_url} alt="imagem do produto favorito" />
                                    </div>
                                    <div className="flex flex-col justify-center gap-1 w-full">
                                        <h4 className="text-[14px]/4">{favorite.nome}</h4>
                                        <p className="font-semibold text-xs">{favorite?.valor.toLocaleString('PT-BR', {style: 'currency', currency: 'BRL'})}</p>
                                    </div>
                                </div>
                            </Link>
                        )
                    }
                })}         
            </div>
        </div>
    )

}