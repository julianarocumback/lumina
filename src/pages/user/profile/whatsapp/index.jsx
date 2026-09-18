import {useState, useMemo} from 'react'

export default function Whatsapp({dadosCliente, onSaveWhatsApp}){
    const [whatsapp, setWhatsapp] = useState('')
    const [isEditingWhatsapp, setIsEditingWhatsap] = useState(false)
    const [hasInteracted, setHasInteracted] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    // Validation flags and conditional error display rules
    const hasContent = whatsapp !== ''
    const shouldShowContentError = !hasContent && (hasInteracted || isSubmitted)

    const hasExactLength = whatsapp.length === 11
    const shouldShowExactLengthError = hasContent && !hasExactLength && (hasInteracted || isSubmitted)

    // Displays the saved customer number (read-only mode)
    const formattedClientWhatsapp = useMemo(() => {
        if(dadosCliente.whatsapp === null) {
            return '(__) _____-___'
        } else {
            const whatsappEdited = dadosCliente.whatsapp + '___________'
            const pt1 = whatsappEdited.slice(0,2)
            const pt2 = whatsappEdited.slice(2,7)
            const pt3 = whatsappEdited.slice(7,11)
            return `(${pt1}) ${pt2}-${pt3}`
        }
    }, [dadosCliente?.whatsapp])

    // Mask template with underlines rendered behind the input (edit mode)
    const whatsappMaskTemplate = useMemo(() => {
        const whatsappEdited = whatsapp + '___________'
        const pt1 = whatsappEdited.slice(0,2)
        const pt2 = whatsappEdited.slice(2,7)
        const pt3 = whatsappEdited.slice(7,11)

        return `(${pt1}) ${pt2}-${pt3}`
    }, [whatsapp])

    // Progressive formatting for the controlled <input /> value
    const formattedInputValue = useMemo(() => {
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
    
    // Marks the field as interacted on blur
    const handleWhatsappVerification = () => {
        setHasInteracted(true)
    }
    

    // Enters edit mode
    function handleEditWhatsApp(){
        setIsEditingWhatsap(true)
    }

    // Update state
    const handleEditingWhatsapp = (event) => {
        const whatsapp = event.target.value.replace(/\D/g, '')

        if(whatsapp.length > 11) return
        setWhatsapp(whatsapp)
    }

    // Resets component state and cancels editing mode
    function handleCancelEditingWhatsApp(){
        setIsEditingWhatsap(false)
        setWhatsapp('')
        setHasInteracted(false)
        setIsSubmitted(false)
    }
    
    // Validates length and submits the sanitized phone number
    function handleAddWhatsApp(event){
        if (event) event.preventDefault()
        setIsSubmitted(true)

        if(whatsapp.length < 11) return

        onSaveWhatsApp(whatsapp)
        setIsEditingWhatsap(false)
        setWhatsapp('')
        setHasInteracted(false)
        setIsSubmitted(false)
    }

    return (
        <div className="flex flex-col justify-between w-full ">
            <h3 className="text-[11px] font-semibold text-gray-500">WHATSAPP</h3>
        
            <form onSubmit={handleAddWhatsApp} className='flex flex-col justify-between w-full sm:flex-row'>
                <div className="flex justify-between w-full">
                    {isEditingWhatsapp ?
                    <div  className='relative w-full'>
                        <input
                            type="text"
                            disabled={!isEditingWhatsapp}
                            value={formattedInputValue}
                            className={`z-10 absolute -left-1 flex items-center px-1 text-base text-transparent leading-relaxed tracking-wider text- ring-1 ring-black rounded-lg caret-black focus:outline-none`}
                            onChange={handleEditingWhatsapp}
                            onBlur={handleWhatsappVerification}
                        />
                        <span className='relative top-px text-base tracking-wider'>{whatsappMaskTemplate}</span>
                    </div>
                    :
                    <span className='relative top-px text-base tracking-wider'>{formattedClientWhatsapp}</span>
                    }
                </div>
                <div className="flex">
                    {!isEditingWhatsapp && <div onClick={handleEditWhatsApp} className="font-semibold text-blue-700">Editar</div>}
                    <div className="flex gap-4">
                        {isEditingWhatsapp && 
                        <div className='flex gap-2'>
                            {/* Update whatsapp */}
                            <button type='submit' className='px-2 py-1 text-sm font-semibold text-white bg-blue-600 rounded-lg transition-colors cursor-pointer hover:bg-blue-700' >Salvar</button>
                            {/* Cancel whatsapp update */}
                            <button type='button' className='font-semibold text-gray-600 hover:text-gray-800 transition-colors cursor-pointer' onClick={handleCancelEditingWhatsApp}>Cancelar</button>
                        </div>}
                    </div>
                </div>
            </form>
            {shouldShowContentError && <p className='text-xs text-red-500'>O campo não pode ficar vazio</p>}
            {shouldShowExactLengthError && <p className='text-xs text-red-500'>Deve conter 11 dígitos</p>}
        </div>
    )
}

