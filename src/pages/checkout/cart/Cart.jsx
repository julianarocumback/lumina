import OrderSummary from './orderSummary/OrderSummary'
import ProductList from './productList/ProductList'
import Delivery from './delivery/Delivery'
import Payment from './payment/Payment';
import Confirmation from './confirmation/Confirmation'
import { useState } from 'react';

export default function Cart({lista, setDeliveryOk, verificar, setPaymentOk, etapa1ok, etapa2ok, etapa3ok}){

 
    return(
        <div className="">
            {etapa3ok? <Confirmation/>
            :etapa2ok? <div className="flex gap-20 py-7"><Payment setPaymentOk={setPaymentOk}/><OrderSummary verificar={verificar}/></div>
            :etapa1ok? <div className="flex gap-20 py-7"><Delivery setDeliveryOk={setDeliveryOk}/><OrderSummary verificar={verificar}/></div>
            :<div className="flex gap-20 py-7"><ProductList lista={lista}/><OrderSummary verificar={verificar}/></div>}
            
        </div>
    )
}