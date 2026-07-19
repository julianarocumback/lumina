import { useState } from 'react';
import { motion } from 'framer-motion';

export default function OrderSummary({lista, frete, cupom, listaOk, enderecoOk, pagamentoOk, verificar, etapa}){
    const [estaAberto, setEstaAberto] = useState(false);
    
    if(!lista) return null;

    const valorProdutos = lista.map(items => items.valor * items.quantidade).reduce((a, b) => a + b, 0);
    const valorFrete = frete?.price || 0;
    const valorCupom = cupom?.valor || 0;
    const desconto = (valorProdutos + valorFrete) * valorCupom;
    const total = valorProdutos + (valorFrete > 0 ? valorFrete : 0) - (desconto > 0 ? desconto : 0);

    function aoSoltarArrasto(event, info) {
        if (info.offset.y < -20) {
            setEstaAberto(true);
        }
        if (info.offset.y > 20) {
            setEstaAberto(false);
        }
    }

    return (
        <div className="h-fit lg:w-140 max-h-fit px-6 py-2 border border-gray-100 gap-2 lg:p-8 lg:gap-8 flex flex-col rounded-t-2xl lg:rounded-2xl bg-white shadow-xs sticky bottom-14">
            
            <motion.div 
                drag="y"
                dragConstraints={{ top: 0, bottom: 0 }}
                dragElastic={0.1}
                onDragEnd={aoSoltarArrasto}
                className="w-full py-2 lg:hidden cursor-grab active:cursor-grabbing flex flex-col items-center justify-center mb-1"
            >
                <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
                <span className="text-[10px] text-gray-400 font-medium mt-1 uppercase tracking-wider">
                    {estaAberto ? 'Arraste para baixo para ocultar' : 'Arraste para cima para detalhar'}
                </span>
            </motion.div>

            <motion.div 
                initial={false}
                animate={{ 
                    height: estaAberto ? "auto" : "0px",
                    opacity: estaAberto ? 1 : 0
                }}
                transition={{ type: "spring", stiffness: 260, damping: 28 }}
                className="overflow-hidden flex flex-col gap-1 text-gray-400 lg:!h-auto lg:!opacity-100"
            >
                <h3 className="text-lg font-semibold lg:text-2xl text-gray-900">Resumo do Pedido</h3>
                
                <div className="flex text-sm justify-between w-full">
                    <span>Produtos</span>
                    <span className="text-gray-800">{valorProdutos?.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>
                </div>
                
                <div className="flex text-sm justify-between w-full">
                    <span>Frete</span>
                    <span className="text-red-500 font-semibold">
                        {frete && Object.keys(frete).length > 0 ? valorFrete?.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) : '---'}
                    </span>
                </div>
                
                <div className="flex text-sm justify-between w-full">
                    <span>Desconto</span>
                    <span className="text-green-500 font-semibold">
                        {cupom && Object.keys(cupom).length > 0 ? `-${desconto?.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}` : '---'}
                    </span>
                </div>
                
                <div className="w-full h-0.5 bg-gray-200 lg:bg-gray-400"></div>
            </motion.div>

            <div className="flex items-center justify-between">
                <span className="font-semibold text-sm">TOTAL</span>
                <span className="font-semibold text-lg lg:text-3xl">
                    {total?.toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}
                </span>
            </div>

            <button 
                onClick={verificar} 
                className={`py-2 lg:py-4 rounded-full font-semibold lg:font-bold text-white lg:text-lg transition-colors cursor-pointer ${lista.length !== 0 ? ' bg-black' : 'bg-gray-200 cursor-auto'}`}
            >
                {pagamentoOk && listaOk && enderecoOk ? 'Confirmar' : enderecoOk && etapa === 1 ? 'Selecionar pagamento' : listaOk && etapa === 0 ? 'Selecionar endereço' : 'Aguardando'}
            </button>

            <div className="bg-gray-100 rounded-2xl p-2 lg:p-4 hidden gap-4 items-center lg:flex">
                <div className="text-blue-500 text-xl">
                    <i className="fa-solid fa-shield-halved"></i>
                </div>
                <div className="flex flex-col">
                    <span className="font-semibold text-xs lg:text-sm">COMPRA SEGURA</span>
                    <span className="text-[11px] text-gray-500">Seus dados estão protegidos por criptografia SSL de 256 bits.</span>
                </div>
            </div>

            <div className="lg:flex justify-center gap-4 text-2xl text-gray-400 hidden">
                <i className="fa-solid fa-credit-card"></i>
                <i className="fa-brands fa-pix"></i>
            </div>
        </div>
    );
}