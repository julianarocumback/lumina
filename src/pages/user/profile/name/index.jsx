import {useState} from 'react'

export default function Name({dadosCliente, onSaveName}){
    const [name, setName] = useState('')
    const [isEditingName, setIsEditingName] = useState(false)

    const [isSubmit, setIsSubmit] = useState(false)
    const [hasInterected, setHasInteracted] = useState(false)

    const hasNameContent = name !== ''
    const hasNameMinLength = name.length >= 3
    const shouldShowNameError = (hasInterected || isSubmit) && (!hasNameContent || !hasNameMinLength)
    const shouldShowNameSuccess = (hasInterected || isSubmit) && (hasNameMinLength)

    // EDIT NAME
    const handleEditName = () => {
        setIsEditingName(true)
    }

    // CANCEL EDIT NAME
    const handleCancelEditName = () => {
        setIsEditingName(false)
        setName('')
        setIsSubmit(false)
        setHasInteracted(false)
    }
    
    // SAVE NAME
    const handleSaveName = () => {
        setHasInteracted(true)
        const cleanName = name.trim()
        if(cleanName.length === 0) return
        
        onSaveName(cleanName)
        setName('')
        setIsEditingName(false)
        setHasInteracted(false)
        setIsSubmit(false)

        
    }

    // 
    const handleIsSubmit = () => {
        setIsSubmit(true)
    }

    const handleHasInteracted = () => {
        setHasInteracted(true)
    }

    return (
        <div className='flex flex-col gap-1 w-full'>
            <h3 className="font-semibold text-[11px] text-gray-500">NOME COMPLETO</h3>

            {!isEditingName &&
                <div className='flex flex-col sm:flex-row justify-between w-full '>
                    {dadosCliente?.nome? <span>{dadosCliente?.nome}</span>: <span></span>}
                    <button className='font-semibold text-blue-700 w-fit' onClick={handleEditName}>Editar</button>
                </div>
            }
        
            {isEditingName &&
                <div className='flex flex-col sm:flex-row justify-between w-full gap-2 '>
                    <input type='text' disabled={!isEditingName} value={name} placeholder={dadosCliente?.nome} className={`${isEditingName && 'border left-0'} ${shouldShowNameSuccess ? 'ring-green-500': shouldShowNameError ? 'ring-red-500' : 'ring-black'} text-gray-black font-semibold px-2 rounded-lg relative -left-2 border-none outline-none ring-1`} onChange={(e)=> setName(e.target.value.replace(/[^\p{L}\s]/gu, '').trimStart().replace(/\s{2,}/g, ' '))} onBlur={handleHasInteracted}/>
                    <div className="flex gap-4">
                         {/* Save email */}
                        <button type='button' className='px-2 py-1 text-sm font-semibold text-white bg-blue-600 rounded-lg transition-colors cursor-pointer hover:bg-blue-700' onClick={handleSaveName} onBlur={handleIsSubmit}>Salvar</button>
                        {/* Cancel email update */}
                        <button type='button' className='font-semibold text-gray-600 hover:text-gray-800 transition-colors cursor-pointer' onClick={handleCancelEditName}>Cancelar</button>
                    </div>
                </div>
            } 
            {shouldShowNameError && <p className='text-xs text-red-700'>O nome deve conter pelo menos 3 caracteres</p>}
            
        </div>     
    )
}