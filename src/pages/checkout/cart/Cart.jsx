import OrderSummary from './orderSummary/OrderSummary'
import ProductList from './productList/ProductList'
import Delivery from './delivery/Delivery'
import Payment from './payment/Payment';
import Confirmation from './confirmation/Confirmation'

export default function Cart({lista, aumentarQuantidade, diminuirQuantidade, removerDoCarrinho, endereco, setEndereco, frete, setFrete, pagamento, setPagamento, cupom, setCupom, listaOk, enderecoOk, pagamentoOk, verificar, etapa}){

    return (
        <div className="">
            {etapa === 3 ?
                <Confirmation/>
            :etapa === 2 ?
                <div className="flex flex-col lg:flex-row lg:gap-20 lg:py-7 gap-4">   
                    <Payment pagamento={pagamento} setPagamento={setPagamento} cupom={cupom} setCupom={setCupom} />
                    <OrderSummary lista={lista} frete={frete} cupom={cupom} listaOk={listaOk} enderecoOk={enderecoOk} pagamentoOk={pagamentoOk} verificar={verificar} etapa={etapa}/>
                </div>
            :etapa === 1 ?
                <div className="flex flex-col lg:flex-row lg:gap-20 lg:py-7">
                    <Delivery endereco={endereco} setEndereco={setEndereco} frete={frete} setFrete={setFrete}/>
                    <OrderSummary lista={lista} frete={frete} cupom={cupom} listaOk={listaOk} enderecoOk={enderecoOk} pagamentoOk={pagamentoOk} verificar={verificar} etapa={etapa}/>
                </div>
            :
                <div className="flex flex-col lg:flex-row lg:gap-20 lg:py-7 gap-4">
                    <ProductList lista={lista} aumentarQuantidade={aumentarQuantidade} diminuirQuantidade={diminuirQuantidade} removerDoCarrinho={removerDoCarrinho}/>
                    <OrderSummary lista={lista} frete={frete} cupom={cupom} listaOk={listaOk} enderecoOk={enderecoOk} pagamentoOk={pagamentoOk} verificar={verificar} etapa={etapa}/>
                </div>
            }
        </div>
    )
}