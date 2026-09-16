import { useState } from 'react'
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
 
    // SAVE BIRTHDATE
    const handleSaveBirthdate = () => {
        if(!birthdate) return
        onSaveBirthdate(birthdate)
        setIsConfirming(false)
        setIsEditingBirthdate(false)
       
    }

    const handleAddBirthdate= (birthdate) => {
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
        setIsEditingBirthdate(false)

    }


    return (
        <div className="flex flex-col gap-1">
            <h3 className="font-semibold text-[11px] text-gray-500">DATA DE NASCIMENTO</h3>

            <div className='flex flex-col gap-2 sm:flex-row sm:justify-between'>
                <input disabled={!isEditingBirthdate} onChange={(e) => handleAddBirthdate(e.target.value)}  type="date" className={`${isEditingBirthdate && 'enabled:outline'} caret-black cursor z-10 w-35  rounded-xl px-2 disabled:border border border-gray-500 lg:border-none`} value={dadosCliente.birthdate || '11/11/1111'} onBlur={handleBirthdateInteracted}/>     

                <div>
                    {!isEditingBirthdate && !dadosCliente.birthdate &&
                        <button onClick={handleEditingBirthdate} className='font-semibold text-blue-700 w-fit'>Adicionar</button>   
                    }
                    {isEditingBirthdate &&
                        <div className='flex gap-4'>
                            {/* Update birthdate */}
                            <button type='button' className='px-2 py-1 text-sm font-semibold text-white bg-blue-600 rounded-lg transition-colors cursor-pointer hover:bg-blue-700' onClick={handleConfirming}>Salvar</button>
                            {/* Cancel birthdate update */}
                            <button type='button' className='font-semibold text-gray-600 hover:text-gray-800 transition-colors cursor-pointer' onClick={handleCancelAddBirthdate}>Cancelar</button>
                        </div>
                    }
                </div>
            </div>
            {isConfirming &&
               <Confirmation isConfirming={isConfirming} handleSaveBirthdate={handleSaveBirthdate} handleCancelAddBirthdate={handleCancelAddBirthdate}/>
            }
            {shouldShowBirthdateError && <p>O campo não pode ficar vazio</p>}
        
        </div>
    )
}