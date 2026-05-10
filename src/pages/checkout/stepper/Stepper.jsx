import Step from './step/Step'
import ProgressLine from './progressLine/ProgressLine'


export default function Stepper(){
    return(
        <div className="flex justify-between items-center gap-2 pt-30 pb-10 px-30">
            <Step icone={<i class="fa-solid fa-bag-shopping"></i>} texto={'CARRINHO'} link={'/checkout'}/>
            <ProgressLine/>
            <Step icone={<i class="fa-solid fa-truck-field"></i>} texto={'ENTREGA'} link={'/delivery'}/>
            <ProgressLine/>
            <Step icone={<i class="fa-solid fa-money-bills"></i>} texto={'PAGAMENTO'} link={'/checkout'}/>
            <ProgressLine/>
            <Step icone={<i class="fa-regular fa-circle-check"></i>} texto={'CONFIRMAÇÃO'} link={'/checkout'}/>
        </div>
    )
}