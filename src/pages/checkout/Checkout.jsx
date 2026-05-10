import Header from '../../components/header/Header'
import Stepper from './stepper/Stepper'
import Cart from './cart/Cart'
import BackLink  from './backLink/BackLink'
import Footer from '../../components/footer/Footer'

export default function Checkout(){
    return(
        <div className="bg-gray-100" >
            <Header/>
            <div className="px-90">
                <Stepper/>
                <Cart/>
                <BackLink/>
            </div>
            <Footer/>
        </div>
    )
}