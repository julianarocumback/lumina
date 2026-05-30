import Step from './step/Step'
import ProgressLine from './progressLine/ProgressLine'


export default function Stepper({etapa1, etapa2, etapa3, listaOk, enderecoOk, pagamentoOk}){
    return(
        <div className="flex justify-between items-center gap-2 pt-30 pb-10 px-30">
            <Step icone={<i class="fa-solid fa-bag-shopping"></i>} texto={'CARRINHO'} link={'/checkout'} estilo={`bg-green-300`}/>
            <ProgressLine estilo={`${listaOk && 'bg-green-300'}`}/>
            
            <Step icone={<i class="fa-solid fa-truck-field" ></i>} texto={'ENTREGA'} link={'/delivery'} estilo={`${etapa1 && 'bg-green-300'}`}/>
            <ProgressLine estilo={`${enderecoOk && 'bg-green-300'}`}/>

            <Step icone={<i class="fa-solid fa-money-bills"></i>} texto={'PAGAMENTO'} link={'/checkout'} estilo={`${etapa2 && 'bg-green-300'}`}/>
            <ProgressLine estilo={`${pagamentoOk && 'bg-green-300'}`}/>
            <Step icone={<i class="fa-regular fa-circle-check"></i>} texto={'CONFIRMAÇÃO'} link={'/checkout'} estilo={`${etapa3 && 'bg-green-300'}`}/>
        </div>
    )
}