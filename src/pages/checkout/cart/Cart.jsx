import OrderSummary from './orderSummary/OrderSummary'
import ProductList from './productList/ProductList'
import Delivery from './delivery/Delivery'
import Payment from './payment/Payment';
import Confirmation from './confirmation/Confirmation'

export default function Cart(){
    return(
        <div className="flex gap-20 py-7">
            <Confirmation/>
            {/* <Payment/> */}
            {/* <Delivery/> */}
            {/* <ProductList/> */}
            {/* <OrderSummary/> */}
        </div>
    )
}