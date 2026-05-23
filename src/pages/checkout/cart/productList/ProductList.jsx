export default function ProductList({lista}){
    console.log(lista)
    if(!lista) return
    return(

        <div className="w-full h-145 rounded-2xl overflow-hidden bg-white shadow-xs overflow-y-auto relative">
            <table className="w-full">
                <thead className="bg-gray-200 text-sm text-gray-700 font-semibold  h-12">
                    <tr className="indent-7">
                        <td>Produto</td>
                        <td>Nome</td>
                        <td>Preço</td>
                        <td>Quantidade</td>
                        <td>Total</td>
                    </tr>
                </thead>
                {lista.map(produto => {
                    return(
                        <tr className="indent-7 text-md">
                        
                            <td className="h-35 left-5 relative top-3">
                                <img className="h-30 rounded-2xl" src={produto.img_url} alt="" /></td>
                            <td>{produto.nome}</td>
                            <td>{produto.valor}</td>
                            <td>{produto.quantidade}</td>
                            <td>{(produto.valor*produto.quantidade).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</td>
                        </tr>
                        )
                    })}         
            </table>
        </div>
    )
}