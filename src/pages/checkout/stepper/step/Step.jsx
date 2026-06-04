
export default function Step({icone, texto, estilo, etapa, setEtapa, valorEtapa, listaOk, enderecoOk, pagamentoOk}) {

    function alternarEtapa(){
        // Não alternar se estiver na confirmação
        if(etapa === 3) return

        // Alternar se estiver na etapas
        if(listaOk && enderecoOk && pagamentoOk){
            setEtapa(valorEtapa)
        } else if(listaOk && enderecoOk && !pagamentoOk){
            setEtapa(valorEtapa)
        } else if(listaOk && !enderecoOk  && pagamentoOk){
            setEtapa(valorEtapa)
        } else if(etapa === 2 && listaOk){
             setEtapa(valorEtapa)
        } else if(etapa === 1 && !enderecoOk && valorEtapa !== 2){
            setEtapa(valorEtapa)
        } else if(etapa === 0 && listaOk && valorEtapa === 1){
            setEtapa(valorEtapa)
        }
    }

    return (
        <div onClick={alternarEtapa} className={`flex flex-col gap-2 items-center w-10 `}>
            <div className={`w-10 h-10 lg:w-12 lg:h-12 items-center flex justify-center bg-gray-300 rounded-full text-lg ${estilo}`}>
                {icone}
            </div>
            <div className="font-semibold text-blue-900 text-xs lg:text-sm">
                {texto}
            </div>
        </div>
    )
}