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

    // Enables name edit mode
    const handleEditName = () => {
        setIsEditingName(true)
    }

    // Sanitizes input (letters/spaces only) and updates the name state
    const handleAddName = (event) => {
        const name = event.target.value.replace(/[^\p{L}\s]/gu, '').trimStart().replace(/\s{2,}/g, ' ')
        setName(name)
    }

    // Cancel edit name
    const handleCancelEditName = () => {
        setIsEditingName(false)
        setName('')
        setIsSubmit(false)
        setHasInteracted(false)
    }
    
    // Save name
    const handleSaveName = (event) => {
        if (event) event.preventDefault()
        setHasInteracted(true)
        const cleanName = name.trim()
        if(cleanName.length < 3) return
        
        onSaveName(cleanName)
        setName('')
        setIsEditingName(false)
        setHasInteracted(false)
        setIsSubmit(false)
    }

    // Submits the user name
    const handleIsSubmit = () => {
        setIsSubmit(true)
    }

    // // Mark that the user has interacted
    const handleHasInteracted = () => {
        setHasInteracted(true)
    }

    return (
        <div className='flex flex-col gap-1 w-full'>
            <h3 className='text-[11px] font-semibold text-gray-500'>NOME COMPLETO</h3>
        
            {isEditingName ?
                <form onSubmit={handleSaveName} className='flex flex-col justify-between gap-2 w-full sm:flex-row sm:items-center'>
                    <div className='flex flex-col gap-1'>
                        <input type='text' disabled={!isEditingName} value={name} className={`${isEditingName && 'border left-0'} ${shouldShowNameSuccess ? 'ring-green-500': shouldShowNameError ? 'ring-red-700' : 'ring-black'} text-gray-black font-semibold px-2 rounded-lg relative -left-2 border-none outline-none ring-1`} onChange={handleAddName} onBlur={handleHasInteracted}/>
                        {shouldShowNameError && <p className='text-xs text-red-700'>O nome deve conter pelo menos 3 caracteres</p>}
                    </div>
                    <div className='flex gap-4'>
                         {/* Save email */}
                        <button type='submit' className='h-fit px-2 py-1 text-sm font-semibold text-white bg-blue-600 rounded-lg transition-colors cursor-pointer hover:bg-blue-700' onBlur={handleIsSubmit}>Salvar</button>
                        {/* Cancel email update */}
                        <button type='button' className='font-semibold text-gray-600 hover:text-gray-800 transition-colors cursor-pointer' onClick={handleCancelEditName}>Cancelar</button>
                    </div>
                </form>
                :
                <div className='flex flex-col sm:flex-row justify-between w-full '>
                    <span>{dadosCliente?.nome ?? '_________________________'}</span>
                    <button className='font-semibold text-blue-700 w-fit' onClick={handleEditName}>Editar</button>
                </div>
            } 
        </div>
    )
}