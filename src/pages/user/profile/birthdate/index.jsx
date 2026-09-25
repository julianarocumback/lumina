import { useState } from 'react'
import { formatDateOnly } from '../../../../utils/formatters'
import Confirmation from './confirmation' 

export default function Birthdate({dadosCliente, onSaveBirthdate}){
    const [birthdate, setBirthdate] = useState('')
    const [isEditingBirthdate, setIsEditingBirthdate] = useState(false)
    const [isConfirming, setIsConfirming] = useState(false)
    const [hasInteracted, setHasInteracted] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const hasBirthdateContent = birthdate !== ''
    const shouldShowBirthdateError = (hasInteracted || isSubmitted) && !hasBirthdateContent

    const handleBirthdateInteracted = () => {
        setHasInteracted(true)
    }

    console.log(dadosCliente?.birthdate)
 
    // SAVE BIRTHDATE
    const handleSaveBirthdate = () => {
        if(!birthdate) return
        onSaveBirthdate(birthdate)
        setIsConfirming(false)
        setIsEditingBirthdate(false)
    }

    const handleAddBirthdate= (event) => {
        const birthdate = event.target.value
        setBirthdate(birthdate)
    }

    const handleEditingBirthdate = () => {
        setIsEditingBirthdate(true)
    }

    // CANCEL EDIT BIRTHDATE
    const handleCancelAddBirthdate = ()=> {
        setIsEditingBirthdate(false)
        setBirthdate('')
        setIsConfirming(false)
        setIsSubmitted(false)
        setHasInteracted(false)
    }

    const handleConfirming = () => {
        setIsSubmitted(true)
        if(!birthdate) return
        setIsConfirming(true)
    }


    return (
        <div className='flex flex-col gap-1'>
            <h3 className='font-semibold text-[11px] text-gray-500'>DATA DE NASCIMENTO</h3>

            {isEditingBirthdate ?
            <div className='flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center sm:gap-0'>
                <div className='flex flex-col gap-1'>
                    <input disabled={!isEditingBirthdate} type='date' value={birthdate} className={`${isEditingBirthdate && 'enabled:outline'} caret-black cursor z-10 w-35  rounded-xl px-2 disabled:border border border-gray-500 lg:border-none`} onChange={handleAddBirthdate} onBlur={handleBirthdateInteracted}/>
                    {shouldShowBirthdateError && <span className='text-xs text-red-700'>O campo não pode ficar vazio</span>}    
                </div>   
                <div className='flex gap-4'>
                    {/* Update birthdate */}
                    <button type='button' className='h-fit px-2 py-1 text-sm font-semibold text-white bg-blue-600 rounded-lg transition-colors cursor-pointer hover:bg-blue-700' onClick={handleConfirming}>Salvar</button>
                    {/* Cancel birthdate update */}
                    <button type='button' className='font-semibold text-gray-600 hover:text-gray-800 transition-colors cursor-pointer' onClick={handleCancelAddBirthdate}>Cancelar</button>
                </div>
                {isConfirming && <Confirmation isConfirming={isConfirming} handleSaveBirthdate={handleSaveBirthdate} handleCancelAddBirthdate={handleCancelAddBirthdate}/>}
            </div>
            :
            <div className='flex flex-col sm:flex-row sm:justify-between'>
                <span>{formatDateOnly(dadosCliente?.birthdate) || 'dd/mm/aaaa'}</span>
                {!dadosCliente?.birthdate && <button onClick={handleEditingBirthdate} className='font-semibold text-blue-700 w-fit'>Adicionar</button>}
            </div> 
            }        
        </div>
    )
}