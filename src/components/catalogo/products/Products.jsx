import { useCart } from '../../../contexts/CartContext/CartContext'
import { AuthContext } from '../../../contexts/AuthContext/AuthContext'
import { useContext} from 'react'
import { Link } from "react-router-dom"
import Skeleton from "../skeleton/Skeleton";


export default function Products({produtos, carregar, setQuantidade, tamanho}){
    const {addToCart} = useCart()
    const {authenticated, dadosCliente,adicionarFavorito, removerFavorito} = useContext(AuthContext)

    function alterarQuantidade(valor){
        setQuantidade(prev => prev + valor)
    }

    function handreFavoritar(produto){
        if(dadosCliente?.favoritos.some(item => Number(item?.id) === produto?.id)){
            removerFavorito(produto)
        }else {
            adicionarFavorito(produto)
        }
        
    }


    if (carregar) {
        return (
            <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-8">
                {[...Array(8)].map((_, i) => <Skeleton key={i}/>)}
            </div>
        )
    }

    if (!produtos || produtos.length === 0) return <p>Nenhum livro encontrado.</p>;

    const listaNova = produtos.map((produto) => {
            return (
                    <div className="flex flex-col gap-4 cursor-pointer relative select-none" key={produto.id}>
                                {authenticated && (dadosCliente?.favoritos.some(item => item.id === produto.id)? <div onClick={ () => handreFavoritar(produto)} className="absolute text-red-300 text-xl lg:text-2xl right-4 top-3"><i className="fa-solid fa-heart"></i></div>:<div onClick={ () => handreFavoritar(produto)} className="absolute text-gray-300 text-xl lg:text-2xl right-4 top-3"><i className="fa-regular fa-heart"></i></div>)}
                                
                        <Link to={`/livro/${produto.id}`}>
                            <div className="h-75 lg:h-100 rounded-2xl overflow-hidden shadow-xl ">
                                <img  className="object-cover h-full w-full" src={produto.img_url} alt={produto.nome} />
                            </div>
                        </Link>
                        
                        <div className="flex  flex-col">
                            <span className="text-xs uppercase text-gray-400 font-semibold">{produto.livros.autor}</span>
                            <div className="flex flex-col gap-2">
                                <span className="font-semibold lg:text-lg truncate">{produto.nome}</span>
                                <div className="flex justify-between items-center">
                                    <span className="font-semibold lg:text-lg text-blue-700">{produto.valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>
                                    <button className="px-3 lg:px-2 py-0.5 lg:py-1 cursor-pointer rounded-xl bg-black/80 text-white text-sm font-semibold" onClick={() => addToCart(produto)}>+ carrinho</button>
                                
                            </div>
                            </div>
                        </div>  
                    </div>
            )
        

            
        
    })
    return (
        <div className="flex flex-col justify-center gap-24">
            <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-x-4 gap-y-8 lg:gap-8">
                {listaNova}
            </div>
            <div className="w-full flex justify-center">
                {listaNova.length !== tamanho && <button className="py-2 self-center w-70 rounded-full text-lg font-semibold bg-gray-200" onClick={()=> {alterarQuantidade(3)}}>Mostrar mais</button>}

            </div>
            

        </div>
    )
}