import ProductList from './productList/ProductList'
import OrderSummary from './orderSummary/OrderSummary'

export default function Cart(){
    return(
        <div className="flex gap-20 py-7">
            <ProductList/>
            <OrderSummary/>
        </div>
    )
}