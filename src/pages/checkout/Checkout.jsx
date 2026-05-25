import Header from '../../components/header/Header'
import Stepper from './stepper/Stepper'
import Cart from './cart/Cart'
import BackLink  from './backLink/BackLink'
import Footer from '../../components/footer/Footer'

import {useCart} from '../../contexts/CartContext/CartContext'
import {useState } from 'react'

export default function Checkout(){
    const {items} = useCart()
    const [deliveryOk, setDeliveryOk] = useState(false)
    const [paymentOk, setPaymentOk] = useState(false)

    const [etapa1ok, SetEtapa1Ok] = useState(false)
    const [etapa2ok, SetEtapa2Ok] = useState(false)
    const [etapa3ok, SetEtapa3Ok] = useState(false)

    const [valorFrete, setValorFrete] = useState(0)
    const [desconto, setDesconto] = useState(0)


    function verificar(){
        if(paymentOk && deliveryOk && items.length !== 0){
            SetEtapa3Ok(true)
        } else if (deliveryOk && items.length !== 0) {
            SetEtapa2Ok(true)
        } else if (items.length !== 0) {
            SetEtapa1Ok(true)
        } else {return}
    }

    if(!items) return


    return(
        <div className="bg-gray-100" >
            <Header/>
            <div className="px-90">
                <Stepper etapa1ok={etapa1ok} etapa2ok={etapa2ok} etapa3ok={etapa3ok}/>
                <Cart lista={items} deliveryOk={deliveryOk} setDeliveryOk={setDeliveryOk} setPaymentOk={setPaymentOk} verificar={verificar} etapa1ok={etapa1ok} etapa2ok={etapa2ok} etapa3ok={etapa3ok} setValorFrete={setValorFrete} valorFrete={valorFrete} desconto={desconto} setDesconto={setDesconto}/>
                <BackLink/>
            </div>
            <Footer/>
        </div>
    )
}