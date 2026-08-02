import { useState } from 'react'

export default function HolderName({holderName, isSubmitted, setCard}){

    const [isHolderNameTouched, setIsHolderNameTouched] = useState(false)
    const isHolderNameEmpty = holderName.trim() === ''
    const isHolderNameLower = holderName.trim().length < 3
    const hasHolderNameError = isHolderNameEmpty || isHolderNameLower
    const shouldShowHolderNameError = hasHolderNameError && (isHolderNameTouched || isSubmitted)

    const handleHolderNameBlur = () => {
        setIsHolderNameTouched(true)
    }

    // Add holder name
    function handleHolderNameChange(event){
        const holderName = event.target.value.replace(/\d/g, '')

        if(holderName.length > 40) return
         
        setCard(prev => ({...prev, holderName:holderName}))
    }

    return(
        <div className="flex flex-col gap-2">
            <label className={`font-semibold text-xs text-gray-700`} htmlFor="holderName">NOME NO CARTÃO</label>
            <input id='holderName' onChange={handleHolderNameChange}  type="text" value={holderName} placeholder='Como impresso no cartão' className={`${shouldShowHolderNameError && 'ring-1 ring-red-500'} focus:outline-none rounded-lg bg-gray-100 px-3 text-xs py-2 uppercase`} onBlur={handleHolderNameBlur}/>
        </div>
    )
}