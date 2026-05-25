export default function OrderSummary({verificar, lista, valorFrete, desconto}){
    if(!lista) return

    const valorProdutos = lista.map(items => items.valor * items.quantidade).reduce((a,b)=> a+b,0)
    const frete = valorFrete
    const valordesconto = desconto
    const totalProdutos = valorProdutos + frete - valordesconto
    const totalDesconto = totalProdutos * valordesconto

    return(
        <div className="w-140 max-h-fit p-8 gap-8 flex flex-col rounded-2xl bg-white shadow-xs">

            <h3 className="text-2xl ">Resumo do Pedido</h3>
            <div className="flex gap-2 flex-col text-gray-400">
                <div className="flex text-sm justify-between w-full">
                    <span>Subtotal</span>
                    <span className="text-gray-800">{lista.map(items => items.valor * items.quantidade).reduce((a,b)=> a+b,0).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>
                </div>
                <div className="flex text-sm justify-between w-full">
                    <span>Frete</span>
                    <span className="text-red-500 font-semibold">{valorFrete > 0? valorFrete.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}): '---'}</span>
                </div>
                <div className="flex text-sm justify-between w-full">
                    <span>Cupom de desconto</span>
                    <span className="text-green-500 font-semibold">{valordesconto > 0? totalDesconto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}): '---'}</span>
                </div>
            </div>
            <div className="w-full h-0.5 bg-gray-400"></div>
            <div className="flex justify-between">
                <span className="font-semibold text-sm">TOTAL</span>
                <span className="font-semibold text-3xl">{totalProdutos}</span>
            </div>
            <button onClick={verificar} className={` py-4 rounded-full font-bold text-white text-lg ${lista.length !== 0 ? ' bg-black cursor-pointer': 'bg-gray-200 cursor-auto'}`}>{lista.length !== 0 ? 'Ir para entrega': 'aaaaa'}</button>
            
            <div className="bg-gray-100 rounded-2xl p-4 flex gap-4 items-center">
                <div className="text-blue-500 text-xl">
                    <i class="fa-solid fa-shield-halved"></i>
                </div>
                <div className="flex flex-col">
                    <span className="font-semibold text-sm">COMPRA SEGURA</span>
                    <span className="text-[11px] text-gray-500">Seus dados estão protegidos por criptografia SSL de 256 bits.</span>
                </div>
            </div>
            <div className="flex justify-center gap-4 text-2xl text-gray-400">
                <div>
                    <i class="fa-solid fa-credit-card"></i>
                </div>
                <div>
                    <i class="fa-brands fa-pix"></i>
                </div>
            </div>
        </div>
    )
}