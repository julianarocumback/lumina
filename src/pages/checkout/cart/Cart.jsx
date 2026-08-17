import OrderSummary from './orderSummary/OrderSummary'
import ProductList from './productList/ProductList'
import Delivery from './delivery/Delivery'
import Payment from './payment/Payment';
import Confirmation from './confirmation/Confirmation'
import BackLink from '../backLink/BackLink'

export default function Cart({lista, increaseQuantity, decreaseQuantity, onRemoveFromCart, addQuantity, endereco, setEndereco, frete, setFrete, pagamento, setPagamento, cupom, setCupom, listaOk, enderecoOk, pagamentoOk, verificar, etapa, addresses, payments, addAddress, addPayment, dadosCliente, setNewAddress, onDeleteCard, defaultCard, deleteAddress}){

    return (
        <div className="lg:sh">
            {etapa === 3 ?
                <div className="flex pb-16">
                    <Confirmation/>
                </div>
            :etapa === 2 ?
                <div className="flex flex-col lg:gap-8 lg:py-7 ">
                    <div className="flex flex-col lg:flex-row lg:gap-8">
                        <Payment pagamento={pagamento} setPagamento={setPagamento} cupom={cupom} setCupom={setCupom} payments={payments} onAddCard={addPayment} dadosCliente={dadosCliente}  onDeleteCard={onDeleteCard} defaultCard={defaultCard} lista={lista} frete={frete}/>
                        <OrderSummary lista={lista} frete={frete} cupom={cupom} listaOk={listaOk} enderecoOk={enderecoOk} pagamentoOk={pagamentoOk} verificar={verificar} etapa={etapa}/>
                    </div>
                    <BackLink/>
                </div>
            :etapa === 1 ?
                <div className="flex flex-col lg:gap-8 lg:py-7">
                    <div className="flex flex-col lg:flex-row lg:gap-8">
                        <Delivery endereco={endereco} setEndereco={setEndereco} frete={frete} setFrete={setFrete} addresses={addresses} onAddAddress={addAddress} dadosCliente={dadosCliente} setNewAddress={setNewAddress} deleteAddress={deleteAddress}/>
                        <OrderSummary lista={lista} frete={frete} cupom={cupom} listaOk={listaOk} enderecoOk={enderecoOk} pagamentoOk={pagamentoOk} verificar={verificar} etapa={etapa}/>
                    </div>
                    <BackLink/>
                </div>
            :
                <div className="flex flex-col lg:gap-8 lg:py-7 relative">
                    <div className="flex flex-col lg:flex-row lg:gap-8 relative">
                        <ProductList lista={lista} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} onRemoveFromCart={onRemoveFromCart} addQuantity={addQuantity}/>
                        <OrderSummary lista={lista} frete={frete} cupom={cupom} listaOk={listaOk} enderecoOk={enderecoOk} pagamentoOk={pagamentoOk} verificar={verificar} etapa={etapa}/>
                    </div>
                    <BackLink/>
                </div>
            }
        </div>
    )
}