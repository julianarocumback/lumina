import Stepper from './stepper/Stepper'

export default function OrderPreview(){
    return (
        <div className="lg:h-110 rounded-3xl lg:w-3/4 p-8 flex flex-col justify-around bg-white shadow-lg overflow-hidden gap-4">
            <div className="flex flex-col">
                <div className="flex gap-2">
                    <h2 className="text-xs lg:font-semibold">ÚLTIMO PEDIDO</h2>
                    <span className="text-xs  lg:text-base font-semibold">#LM9942</span>
                </div>
            <h3 className="text-xl lg:text-3xl">Bíblia de Estudo Luxo</h3>
            </div>

            <div className="lg:flex justify-between hidden ">
                <div>
                    <p className="text-lg text-[rgba(71,71,71,0.7)]">STATUS ATUAL</p>
                    <p className="font-semibold">Processando</p>
                </div>
                <div className="text-right">
                    <p className="text-lg text-[rgba(71,71,71,0.7)]">ENTREGA ESTIMADA</p>
                    <p className="font-semibold">25 de maio,2026</p>
                </div>

            </div>

            <div>
                <Stepper/>
            </div>
            <div>
                <button className="bg-blue-50 lg:px-4 lg:py-4   text px-2 py-2 lg:text-xl rounded-xl text-blue-800 font-semibold flex gap-3 items-center">
                    <div>Rastrear encomenda</div>
                    <div><i class="fa-solid fa-arrow-right"></i></div>
                    </button>
            </div>

        </div>
    )

}