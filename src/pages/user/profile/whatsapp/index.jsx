import {useState, useMemo} from 'react'

export default function Whatsapp({dadosCliente, onSaveWhatsApp}){
    const [novoWhatsApp, setNovoWhatsApp] = useState('')


    const [whatsapp, setWhatsapp] = useState('')
    const [isEditingWhatsapp, setIsEditingWhatsap] = useState(false)

    

    const whatsappFormated = useMemo(()=>{
        if(!whatsapp) return ''
        const whatsappEdited = whatsapp + '___________'
        const pt1 = whatsappEdited.slice(0,2)
        const pt2 = whatsappEdited.slice(2,7)
        const pt3 = whatsappEdited.slice(7,11)

        return `(${pt1}) ${pt2}-${pt3}`
    })

    const whatsappValue = useMemo(()=>{
        if(!whatsapp) return ''
        let whatsappEdited = ''

        const pt1 = whatsapp.slice(0,2)
        const pt2 = whatsapp.slice(2,7)
        const pt3 = whatsapp.slice(7,11)

        if(pt1) whatsappEdited += `(${pt1}`
        if(pt2) whatsappEdited += ') ' + pt2
        if(pt3) whatsappEdited += '-' + pt3

        return whatsappEdited
    }, [whatsapp])
    
    console.log(whatsappFormated)
    console.log(whatsappValue)

    // ATIVAR EDIÇÃO DO WHATSAPP
    function handleEditWhatsApp(){
        setIsEditingWhatsap(false)
    }

    // SALVAR NO ESTADO
    const handleEditingWhatsapp = (event) => {
        const whatsapp = event.target.value.replace(/\D/g, '')

        if(whatsapp.length > 11) return
        setWhatsapp(whatsapp)
        console.log(whatsapp)
    }

    // Cancel edition
    function handleCancelUpdateWhatsApp(){
        setIsEditingWhatsap(true)
        setNovoWhatsApp('')
        setWhatsapp('')
       
    }
    
    // Save whatsapp
    function handleAtualizarWhatsApp(){
        if(novoWhatsApp.length < 11) return
        onSaveWhatsApp(whatsapp)
        setIsEditingWhatsap(true)
        setIsEditingWhatsap(false)
    }

    const whatsappFormatado = (whatsapp) => {
        const ddd = (whatsapp.slice(0, 2) + '__').slice(0,2)
        const parte1 = (whatsapp.slice(2, 7) + '_____').slice(0,5)
        const parte2 = (whatsapp.slice(7, 11) + '_____').slice(0,4)



        return `(${ddd}) ${parte1}-${parte2}`
    }

    

    return(
        <div className="flex justify-between items-center flex-col lg:flex-row">
                            <div className='flex flex-col gap-1 w-full'>
                                <h3 className="font-semibold text-[11px] text-gray-500">WHATSAPP</h3>
                                <div className="flex justify-between w-full">
                                    <input
                                    type="text"
                                    disabled={isEditingWhatsapp}
                                    value={whatsappValue}
                                    className={`${!isEditingWhatsapp && 'border left-0'} text-gray-black font-semibold px-2 -left-2 relative tracking-wider text-transparent caret-black z-10`}
                                    onChange={handleEditingWhatsapp}
                                    />
                                    <span className='absolute'>{whatsappFormated}</span>
                                </div>
                                    <div>
                                        <div className="flex">
                                            {isEditingWhatsapp && <div onClick={handleEditWhatsApp} className="font-semibold text-blue-700">Editar</div>}
                                            <div className="flex gap-4">
                                            {!isEditingWhatsapp && <div onClick={handleCancelUpdateWhatsApp} className='text-red-500 font-semibold'>Cancelar</div>}
                                            {!isEditingWhatsapp && <div onClick={handleAtualizarWhatsApp} className='font-semibold'>Salvar</div>}
                                        </div>
                                    </div>

                                    </div>
                            </div>
                            
                        </div>
    )
}