export default function ProductList({lista, aumentarQuantidade, diminuirQuantidade, removerDoCarrinho}){

    if(!lista) return
    return(

        <div className="w-full h-[calc(100vh-300px)] lg:h-145 lg:rounded-2xl overflow-hidden bg-white shadow-xs overflow-y-auto relative lg:py-0 mt-24 lg:mt-0">
            <table className="w-full">
                <thead className="bg-gray-200 text-sm text-gray-700 font-semibold  h-12">
                    <tr className="indent-7">
                        <td>Produto</td>
                        <td>Nome</td>
                        <td>Preço</td>
                        <td>Quantidade</td>
                        <td>Total</td>
                        <td>Remover</td>
                    </tr>
                </thead>
                <tbody>
                    {lista.length > 0? 
                    lista.map(produto => {
                        return(
                            <tr className="indent-7 text-md">
                            
                                <td className="h-35 left-5 relative top-3">
                                    <img className="h-30 rounded-2xl" src={produto.img_url} alt="" /></td>
                                <td>{produto.nome}</td>
                                <td>{produto.valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</td>
                                <td>
                                    <div className="place-self-center flex border border-gray-300 w-20 items-center justify-around bg-white rounded-3xl  select-none relative indent-0 px-2">
                                            {/* Diminuir a quantidade */}
                                            <div className={`  w-4 text-xs cursor-pointer ${produto.quantidade === 1 && 'text-gray-300 '}`} onClick={()=> diminuirQuantidade(produto)}><i class="fa-solid fa-minus"></i></div>

                                            {/* Quantidade atual */}
                                            <div>{produto.quantidade}</div>

                                            {/* Aumentar a quantidade */}
                                            <div className="text-xs cursor-pointer " onClick={()=> aumentarQuantidade(produto)}><i class="fa-solid fa-plus"></i></div>
                                                
                                        </div>
                                </td>
                                <td>{(produto.valor*produto.quantidade).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</td>
                                <td>
                                    <div onClick={()=> removerDoCarrinho(produto)} className=" text-center hover:text-red-500 cursor-pointer transition-colors">
                                            <i class="fa-solid fa-trash"></i>
                                        </div>
                                </td>
                            </tr>
                            
                            )
                        })
                
                    :
                        <div>
                            Adicione produtos no carrinho!
                        </div>
                    }
                    
                
                   
                </tbody>        
            </table>
        </div>
    )
}