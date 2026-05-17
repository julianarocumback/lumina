import Stepper from './stepper/Stepper'

export default function OrderPreview(){
    return (
        <div className="border h-110 rounded-3xl w-3/4">
            <div className="flex ">
                <div>
                    <h2>ÚLTIMO PEDIDO</h2>
                    <span>#LM9942</span>
                </div>
            </div>
            <h3>Bíblia de Estudo Luxo</h3>

            <p>STATUS ATUAL</p>

            <div>
                <Stepper/>
            </div>

        </div>
    )

}