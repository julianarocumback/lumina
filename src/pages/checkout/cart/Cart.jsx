import OrderSummary from './orderSummary/OrderSummary'
import ProductList from './productList/ProductList'
import Delivery from './delivery/Delivery'
import Payment from './payment/Payment';
import Confirmation from './confirmation/Confirmation'

export default function Cart({etapa1, etapa2, etapa3, setEtapa1, setEtapa2, setEtapa3, lista, aumentarQuantidade, diminuirQuantidade, removerDoCarrinho, endereco, setEndereco, frete, setFrete, pagamento, setPagamento, cupom, setCupom, listaOk, enderecoOk, pagamentoOk, verificar}){

    return (
        <div className="">
            {etapa1 && etapa2 && etapa3 ?
                <Confirmation/>
            :etapa1 && etapa2 ?
                <div className="flex gap-20 py-7">   
                    <Payment pagamento={pagamento} setPagamento={setPagamento} cupom={cupom} setCupom={setCupom} setEtapa3={setEtapa3}/>
                    <OrderSummary lista={lista} frete={frete} cupom={cupom} listaOk={listaOk} enderecoOk={enderecoOk} pagamentoOk={pagamentoOk} verificar={verificar} etapa1={etapa1} etapa2={etapa2} etapa3={etapa3} />
                </div>
            :etapa1 ?
                <div className="flex gap-20 py-7">
                    <Delivery endereco={endereco} setEndereco={setEndereco} frete={frete} setFrete={setFrete} setEtapa1={setEtapa1} setEtapa2={setEtapa2} setEtapa3={setEtapa3}/>
                    <OrderSummary lista={lista} frete={frete} cupom={cupom} listaOk={listaOk} enderecoOk={enderecoOk} pagamentoOk={pagamentoOk} verificar={verificar} etapa1={etapa1} etapa2={etapa2} etapa3={etapa3}/>
                </div>
            :
                <div className="flex gap-20 py-7">
                    <ProductList lista={lista} aumentarQuantidade={aumentarQuantidade} diminuirQuantidade={diminuirQuantidade} removerDoCarrinho={removerDoCarrinho}/>
                    <OrderSummary lista={lista} frete={frete} cupom={cupom} listaOk={listaOk} enderecoOk={enderecoOk} pagamentoOk={pagamentoOk} verificar={verificar} etapa1={etapa1} etapa2={etapa2} etapa3={etapa3}/>
                </div>
            }
        </div>
    )
}