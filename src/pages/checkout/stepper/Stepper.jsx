import Step from './step/Step'
import ProgressLine from './progressLine/ProgressLine'


export default function Stepper({etapa, setEtapa, listaOk, enderecoOk, pagamentoOk}){
    return(
        <div className="flex fixed py-7 items-center justify-around lg:gap-8 lg:pt-30 lg:px-120 px-2 border-b border-gray-200 lg:border-none lg:bg-transparent z-40 w-full left-0 bg-white/40 backdrop-blur ">
            <Step icone={<i class="fa-solid fa-bag-shopping"></i>} texto={'CARRINHO'} link={'/checkout'} estilo={`cursor-pointer  ${listaOk ? 'bg-green-300' :etapa === 0 &&' border-green-500 border-2'}`} etapa={etapa} setEtapa={setEtapa} valorEtapa={0} listaOk={listaOk} enderecoOk={enderecoOk} pagamentoOk={pagamentoOk}/>
            <ProgressLine estilo={`${listaOk && 'bg-green-300'}`}/>
            
            <Step icone={<i class="fa-solid fa-truck-field" ></i>} texto={'ENTREGA'} link={'/delivery'} estilo={` cursor-pointer  ${ enderecoOk ? 'bg-green-300': etapa === 1 &&' border-green-500 border-2 border/50 shadow-lg' }`} etapa={etapa} setEtapa={setEtapa} valorEtapa={1} listaOk={listaOk} enderecoOk={enderecoOk} pagamentoOk={pagamentoOk}/>
            <ProgressLine estilo={`${enderecoOk && 'bg-green-300'} `}/>

            <Step icone={<i class="fa-solid fa-money-bills"></i>} texto={'PAGAMENTO'} link={'/checkout'} estilo={`${ pagamentoOk  ?  'bg-green-300':etapa === 2 && ' border-green-500 border-2'} cursor-pointer`} etapa={etapa} setEtapa={setEtapa} valorEtapa={2} listaOk={listaOk} enderecoOk={enderecoOk} pagamentoOk={pagamentoOk}/>
            <ProgressLine estilo={`${pagamentoOk && 'bg-green-300'}`}/>
            <Step icone={<i class="fa-regular fa-circle-check"></i>} texto={'CONFIRMAÇÃO'} link={'/checkout'} estilo={`${etapa === 3 && 'bg-green-300'}`}/>
        </div>
    )
}