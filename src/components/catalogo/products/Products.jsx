import { useCart } from '../../../contexts/CartContext/CartContext'
import { Link } from "react-router-dom"
import Skeleton from "../skeleton/Skeleton";


export default function Products({produtos, carregar, setQuantidade, tamanho}){
    const {addToCart} = useCart()

    function alterarQuantidade(valor){
        setQuantidade(prev => prev + valor)
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
        
            return(
                    <div className="flex flex-col gap-4 cursor-pointer" key={produto.id}>
                        <Link to={`/livro/${produto.id}`}>
                            <div className="h-100 rounded-2xl overflow-hidden shadow-xl ">
                                <img  className="object-cover h-full w-full" src={produto.img_url} alt={produto.nome} />
                            </div>
                        </Link>
                        
                        <div className="flex  flex-col">
                            <span className="text-xs uppercase text-gray-400 font-semibold">{produto.livros.autor}</span>
                            <div className="flex flex-col gap-2">
                                <span className="font-semibold text-lg">{produto.nome}</span>
                                <div className="flex justify-between items-center">
                                    <span className="font-semibold text-lg text-blue-700">{produto.valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>
                                    <button className="border px-2 py-1 cursor-pointer rounded-xl bg-black/80 text-white text-sm font-semibold" onClick={() => addToCart(produto)}>Adicionar</button>
                                
                            </div>
                            </div>
                        </div>  
                    </div>
            )
        

            
        
    })
    return (
        <div className="flex flex-col justify-center gap-24">
            <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-8">
                {listaNova}
            </div>
            {listaNova.length !== tamanho&& <button className="py-4 border self-center w-100 rounded-full text-lg font-semibold bg-gray-200" onClick={()=> {alterarQuantidade(2)}}>Mostrar mais</button>}
            

        </div>
    )
}