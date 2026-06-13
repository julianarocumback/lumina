export default function OrderSummary({lista, frete, cupom, listaOk, enderecoOk, pagamentoOk, verificar, etapa}){
    if(!lista) return

    const valorProdutos = lista.map(items => items.valor * items.quantidade).reduce((a, b) => a + b, 0)
    const valorFrete = frete?.valor
    const valorCupom = cupom?.valor
    const desconto = (valorProdutos + valorFrete) * valorCupom
    const total = valorProdutos + (valorFrete > 0? valorFrete:0) - (desconto > 0? desconto:0)

    return (
        <div className="h-fit lg:w-140 max-h-fit p-4 gap-4 lg:p-8 lg:gap-8 flex flex-col rounded-t-2xl lg:rounded-2xl bg-white shadow-xs sticky bottom-14">

            <h3 className="text-lg font-semibold lg:text-2xl ">Resumo do Pedido</h3>
            <div className="flex gap-2 flex-col text-gray-400">
                <div className="flex text-sm justify-between w-full">
                    <span>Produtos</span>
                    <span className="text-gray-800">{valorProdutos.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>
                </div>
                <div className="flex text-sm justify-between w-full">
                    <span>Frete</span>
                    <span className="text-red-500 font-semibold">{Object.keys(frete).length > 0? valorFrete.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}): '---'}</span>
                </div>
                <div className="flex text-sm justify-between w-full">
                    <span>Desconto</span>
                    <span className="text-green-500 font-semibold">{Object.keys(cupom).length > 0? desconto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}): '---'}</span>
                </div>
            </div>
            <div className="w-full h-0.5 bg-gray-400"></div>
            <div className="flex items-center justify-between">
                <span className="font-semibold text-sm">TOTAL</span>
                <span className="font-semibold text-lg lg:text-3xl">{total.toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}</span>
            </div>



            <button onClick={verificar} className={`py-2 lg:py-4 rounded-full font-semibold lg:font-bold text-white lg:text-lg ${lista.length !== 0 ? ' bg-black cursor-pointer': 'bg-gray-200 cursor-auto'}`}>
                {pagamentoOk && listaOk && enderecoOk ? 'Confirmar': enderecoOk && etapa === 1 ? 'Selecionar pagamento' : listaOk && etapa === 0 ? 'Selecionar endereço' : 'Aguardando'}
            </button>



            
            <div className="bg-gray-100 rounded-2xl p-2 lg:p-4  gap-4 items-center flex">
                <div className="text-blue-500 text-xl">
                    <i class="fa-solid fa-shield-halved"></i>
                </div>
                <div className="flex flex-col">
                    <span className="font-semibold text-xs lg:text-sm ">COMPRA SEGURA</span>
                    <span className="text-[11px] text-gray-500">Seus dados estão protegidos por criptografia SSL de 256 bits.</span>
                </div>
            </div>
            <div className="lg:flex justify-center gap-4 text-2xl text-gray-400 hidden">
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