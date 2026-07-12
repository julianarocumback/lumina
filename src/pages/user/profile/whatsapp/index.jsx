import {useState,useRef, useLayoutEffect} from 'react'

export default function Whatsapp({dadosCliente, atualizarWhatsApp}){
    const [novoWhatsApp, setNovoWhatsApp] = useState('')
    const [ativarBotaoWhatsapp, setAtivarBotaoWhatsApp] = useState(true)
    const [cursor, setCursor] = useState(null);
    const inputRef = useRef(null);



 // Atualizar whatsApp
    const handleWhatsApp = (whats) => {

        let posicaoCursor = whats.length

        if(!whats) return

        if(whats.length > 11) return
        
        if(whats.length >= 3) {
            const comecacomnove = /^.{2}9/.test(whats)
            
            if(!comecacomnove) return
        }
        setNovoWhatsApp(whats)

        if (whats.length === 0) {
    setCursor(1);
    return;
  }

        if(whats.length > 2) posicaoCursor += 3
        if(whats.length > 7) posicaoCursor += 1
        if(whats.length === 0) posicaoCursor = 1

        setCursor(posicaoCursor)
    }

    function handleAtivarBotaoWhatsApp(){
        setAtivarBotaoWhatsApp(false)
    }

    function handleCancelarAtualizacaoWhatsApp(){
        setAtivarBotaoWhatsApp(true)
        setNovoWhatsApp('')
       
    }
    
    function handleAtualizarWhatsApp(){
        if(novoWhatsApp.length < 11) return
        atualizarWhatsApp(novoWhatsApp)
        setAtivarBotaoWhatsApp(true)
    }

    const whatsappFormatado = (whatsapp) => {
        const ddd = (whatsapp.slice(0, 2) + '__').slice(0,2)
        const parte1 = (whatsapp.slice(2, 7) + '_____').slice(0,5)
        const parte2 = (whatsapp.slice(7, 11) + '_____').slice(0,4)



        return `(${ddd}) ${parte1}-${parte2}`
    }

      useLayoutEffect(() => {
  if (inputRef.current && cursor !== null) {
    // Se o estado estiver vazio, força o cursor no início do underline
    const posicaoFinal = novoWhatsApp.length === 0 ? 1 : cursor;
    inputRef.current.setSelectionRange(posicaoFinal, posicaoFinal);
  }
}, [cursor, novoWhatsApp]);

    return(
        <div className="flex justify-between items-center flex-col lg:flex-row">
                            <div className='flex flex-col gap-1 w-full'>
                                <h3 className="font-semibold text-[11px] text-gray-500">WHATSAPP</h3>
                                <div className="flex justify-between w-full">
                                    <input disabled={ativarBotaoWhatsapp} ref={inputRef}  onChange={(e)=>handleWhatsApp(e.target.value.replace(/\D/g, ''))} value={whatsappFormatado(novoWhatsApp)} type="text" placeholder={dadosCliente?.whatsapp ? whatsappFormatado(dadosCliente?.whatsapp)  : '(__) _____-____'} className={`${!ativarBotaoWhatsapp && 'border left-0'} text-gray-black font-semibold px-2 -left-2 relative`}/>
                                </div>
                                    <div>
                                        <div className="flex">
                                            {ativarBotaoWhatsapp && <div onClick={handleAtivarBotaoWhatsApp} className="font-semibold text-blue-700">Editar</div>}
                                            <div className="flex gap-4">
                                            {!ativarBotaoWhatsapp && <div onClick={handleCancelarAtualizacaoWhatsApp} className='text-red-500 font-semibold'>Cancelar</div>}
                                            {!ativarBotaoWhatsapp && <div onClick={handleAtualizarWhatsApp} className='font-semibold'>Salvar</div>}
                                        </div>
                                    </div>

                                    </div>
                            </div>
                            
                        </div>
    )
}