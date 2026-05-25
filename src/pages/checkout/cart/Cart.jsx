import OrderSummary from './orderSummary/OrderSummary'
import ProductList from './productList/ProductList'
import Delivery from './delivery/Delivery'
import Payment from './payment/Payment';
import Confirmation from './confirmation/Confirmation'

export default function Cart({lista, deliveryOk, setDeliveryOk, verificar, setPaymentOk, etapa1ok, etapa2ok, etapa3ok, setValorFrete, valorFrete, desconto, setDesconto}){

    return (
        <div className="">
            {etapa3ok? <Confirmation/>
            :etapa2ok? <div className="flex gap-20 py-7"><Payment setPaymentOk={setPaymentOk} desconto={desconto} setDesconto={setDesconto}/><OrderSummary desconto={desconto} valorFrete={valorFrete} lista={lista} verificar={verificar}/></div>
            :etapa1ok? <div className="flex gap-20 py-7"><Delivery deliveryOk={deliveryOk} setDeliveryOk={setDeliveryOk} setValorFrete={setValorFrete} valorFrete={valorFrete}/><OrderSummary desconto={desconto} lista={lista} verificar={verificar} valorFrete={valorFrete}/></div>
            :<div className="flex gap-20 py-7"><ProductList lista={lista}/><OrderSummary desconto={desconto} valorFrete={valorFrete} lista={lista} verificar={verificar}/></div>}
        </div>
    )
}