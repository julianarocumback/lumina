export default function Favorite({adicionarFavorito, removerFavorito, dadosCliente, produto}){

    const hasFavorite = dadosCliente?.favoritos.some(item => item.id === produto.id)

    function handleAddFavorite(){
        if(hasFavorite){
            removerFavorito(produto)
        } else {
            adicionarFavorito(produto)
        }
    }

    return (
        <div>
            <button onClick={handleAddFavorite}  className={`${hasFavorite&& 'text-red-500'} bg-gray-200 w-full flex py-3 lg:py-4 rounded-4xl justify-center gap-3 text-xl font-semibold items-center text-black cursor-pointer`}>{hasFavorite? <span><i class="fa-solid fa-heart"></i>  Remover dos favoritos</span>: <span><i class="fa-solid fa-heart"></i> Adicionar  aos favoritos</span>}</button>
        </div>
    )
}