import { useCart } from '../../../contexts/CartContext/CartContext'
import { AuthContext } from '../../../contexts/AuthContext/AuthContext'
import { useContext, useState, useEffect} from 'react'
import { Link } from "react-router-dom"
import Skeleton from "../skeleton/Skeleton";


export const MobileSearch = ({lista, setCategoria, pesquisa, setPesquisa}) => {
    const [isFilterOpen, setIsFilterOpen] = useState(false)
    if(!lista) return null

    function searchChange(e){
        const search = e.target.value.normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
     
        setPesquisa(search)
     
    }
    
    
    
  
    const filters = [...new Set(lista.map(item => item.categoria))].map(item => <div onClick={()=>setCategoria(item)}>{item}</div>)


    return (
        <div className='absolute lg:hidden flex flex-col z-10 left-0 -top-10 w-full p-4 gap-8 items-center'>
            <div className='flex w-full gap-4'>
                <input value={pesquisa} onChange={(e)=> searchChange(e)} className='w-full shadow rounded-full py-2 px-4 bg-white' type="text" />
                <button onClick={() => setIsFilterOpen(prev => !prev)} className=' shadow p-2 rounded-xl bg-white'><i class="fa-solid fa-filter"></i></button>
            </div>
            {isFilterOpen &&
                <div className='bg-white w-full h-full  flex gap-4'>
                    {filters}
                </div>
            }
            
        </div>
    )
}

export const DesktopSearch = ({produtos, carregar, setQuantidade, pesquisaLista}) => {
    const {addToCart, items} = useCart()
    const {authenticated, dadosCliente,adicionarFavorito, removerFavorito} = useContext(AuthContext)

    function alterarQuantidade(valor){
        setQuantidade(prev => prev + valor)
        const a = pesquisaLista
        console.log(produtos)

    }

    function handreFavoritar(produto){
        if(dadosCliente?.favoritos?.some(item => Number(item?.id) === produto?.id)){
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

    if (!pesquisaLista || produtos?.length === 0) return <p>Nenhum livro encontrado.</p>;

   
    return (
        <div className="flex flex-col justify-center gap-24">
            <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-x-4 gap-y-8 lg:gap-8">
           {pesquisaLista?.map((produto) => {

            return (
                    <div className="flex flex-col gap-4 cursor-pointer relative select-none" key={produto.id}>
                                {authenticated && (dadosCliente?.favoritos?.some(item => item.id === produto.id)? <div onClick={ () => handreFavoritar(produto)} className="absolute text-red-300 text-xl lg:text-2xl right-4 top-3"><i className="fa-solid fa-heart"></i></div>:<div onClick={ () => handreFavoritar(produto)} className="absolute text-gray-300 text-xl lg:text-2xl right-4 top-3"><i className="fa-solid fa-heart"></i></div>)}
                                
                        <Link to={`/produto/${produto.id}`}>
                            <div className="h-70 lg:h-100 rounded-2xl overflow-hidden shadow-xl ">
                                <img  className="object-cover h-full w-full" src={produto.img_url} alt={produto.nome} />
                            </div>
                        </Link>
                        
                        <div className="flex  flex-col">
                            <span className="text-xs uppercase text-gray-400 font-semibold">{produto.livros.autor}</span>
                            <div className="flex flex-col gap-2">
                                <span className="font-semibold lg:text-lg truncate">{produto.nome}</span>
                                <div className="flex justify-between items-center">
                                    <span className="font-semibold lg:text-lg text-blue-700">{produto.valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>
                                    <button disabled={items?.some(item => item.id === produto.id)} className={`px-3 lg:px-2 py-0.5 lg:py-1  rounded-xl bg-black/80 cursor-pointer text-white text-sm font-semibold   disabled:bg-gray-200 disabled:cursor-default disabled:transition-all`} onClick={() => addToCart(produto)}>+ carrinho</button>
                                
                            </div>
                            </div>
                        </div>  
                    </div>
            )
        

            
        
        })}
        </div>
        </div>
    )
}