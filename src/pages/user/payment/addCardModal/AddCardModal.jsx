import { useState } from 'react'
import { motion } from 'framer-motion'

import ReactDOM from 'react-dom'  

export default function AddCardModal({setNewPayment, onAddCard, dadosCliente}){
    // STATES
    const [card, setCard] = useState({
        userId: dadosCliente?.id,
        holderName: '',
        cardNumber: '',
        expirationDate: '01/50',
        cvv: 123,
        brand: '',
        isDefault: false
    })
    const [hasHolderNameInteracted, setHasHolderNameInteracted] = useState(false)
    const [hasCardNumberInteracted, setHasCardNumberInteracted] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    
    // HOLDER NAME VARIABLES
    const hasHolderNameContent = card.holderName !== ''
    const hasHolderNameMinLength = card.holderName.length >= 3
    const hasHolderNameMaxLength = card.holderName.length < 40
    const hasHolderNameError = !hasHolderNameContent || !hasHolderNameMinLength || !hasHolderNameMaxLength
    
    const hasHolderNameContentError = !hasHolderNameContent && (hasHolderNameInteracted || isSubmitted)
    const hasHolderNameContentLengthError = !hasHolderNameMinLength && hasHolderNameContent && (hasHolderNameInteracted || isSubmitted)

    const shouldShowHolderNameError = hasHolderNameError && (hasHolderNameInteracted || isSubmitted)
    const shouldShowHolderNameSuccess = !hasHolderNameError && (hasHolderNameInteracted || isSubmitted)


    // NUMBER CARD VARIABLES
    const hasCardNumberContent = card.cardNumber !== ''
    const hasCardNumberExactLength = card.cardNumber.length === 16
    const hasCardNumberError = !hasCardNumberContent || !hasCardNumberExactLength
    
    const hasCardNumberLengthError = !hasCardNumberExactLength && hasCardNumberContent && (hasCardNumberInteracted || isSubmitted)
    const hasCardNumberContentError = !hasCardNumberContent && (hasCardNumberInteracted || isSubmitted)
    
    const shouldShowCardNumberError = hasCardNumberError && (hasCardNumberInteracted || isSubmitted)
    const shouldShowCardNumberSuccess = !hasCardNumberError && (hasCardNumberInteracted || isSubmitted)


    // CARD
    const hasCard = !hasHolderNameError || !hasCardNumberError
    const hasMaxCard = dadosCliente?.payments?.length > 3


    // HOLDER NAME FUNCTIONS

    // Add holder name
    function handleHolderNameChange(event){
        const holderName = event.target.value.replace(/\d/g, '')

        if(holderName.length > 40) return  
        setCard(prev => ({...prev, holderName:holderName}))
    }
    
    // Set holder name field interacted state on blur
    const handleHolderNameBlur = () => {
        setHasHolderNameInteracted(true)
    }


    // NUMBER CARD FUNCTIONS

    // Add card number
    function handleCardNumberChange(event) {
        let cardNumber = event.target.value.replace(/\D/g, '')     

        if (cardNumber.length > 16) {
            cardNumber = cardNumber.slice(0, 16);
        }

        setCard(prev => ({...prev, cardNumber: cardNumber}))
    }

    // Set card number field interacted state on blur
    const handleCardNumberBlur = () => {
        setHasCardNumberInteracted(true)
    }


    // ADD DEFAULT CARD
    function handleDefaultCardChange(event) {
        const isDefault = event.target.checked
        setCard(prev => ({...prev, isDefault: isDefault}))
    }


    // ADD CARD PAYMENT
    function handleAddCardPayment(event){
        event.preventDefault()
        setIsSubmitted(true)

        if(!hasCard || hasMaxCard) return

        onAddCard(card)
        setNewPayment(false)

        setCard(prev => ({
            ...prev,
            holderName: '',
            cardNumber: '',
            brand: '',
            isDefault: false
        }))

        setHasHolderNameInteracted(false)
        setHasCardNumberInteracted(false)
        setIsSubmitted(false)
    }

    
    return ReactDOM.createPortal(
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.3}} className='fixed inset-0 flex items-center justify-center h-full w-full bg-black/30 z-50'>

            <div className='relative flex flex-col gap-8 w-full h-fit lg:w-100 border border-gray-200 rounded-2xl shadow-lg bg-white p-8'>
                {/* Close modal */}
                <button type='button' className="absolute right-8 w-7 h-7 hover:cursor-pointer hover:text-red-400 transition-colors" onClick={()=> setNewPayment(false)}><i class="fa-solid fa-xmark"></i></button> 

                <h2 className="text-xl font-semibold">Novo cartão</h2>

                <form onSubmit={handleAddCardPayment} className='flex flex-col gap-6 w-full h-fit'>

                    {/* INFORMAÇÕES DO CARTÃO */}
                    <div className='flex flex-col gap-4'>

                        {/* NÚMERO DO CARTÃO */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor='cardNumber' className='font-semibold text-xs text-gray-700'>NÚMERO DO CARTÃO</label>
                            <div className='w-full relative flex flex-col gap-2'>
                                <input id='cardNumber' type="text" value={(card.cardNumber || '').replace(/(\d{4})(?=\d)/g, '$1 ')} placeholder='0000 0000 0000 0000' className={` ${shouldShowCardNumberSuccess ? 'ring ring-green-400 shadow-xs shadow-red-300': 'focus:ring focus:ring-amber-300'} ${shouldShowCardNumberError && 'ring ring-red-500'} focus:outline-none w-full rounded-lg bg-gray-100 px-3 text-xs py-2`} onChange={handleCardNumberChange} onBlur={handleCardNumberBlur}/>
                                {card.brand === 'Visa'? <div className='absolute top-1 right-3 text-blue-800'><i class="fa-brands fa-cc-visa"></i></div>
                                :card.brand === 'Mastercard' ?<div className='absolute top-1 right-3 text-red-900 '><i class="fa-brands fa-cc-mastercard"></i></div>
                                :card.brand === 'American Express' && <div className='absolute top-1 right-3 text-gray-700'><i class="fa-brands fa-cc-amex"></i></div>}
                                {hasCardNumberContentError && <p className='text-red-500 text-xs'>O número do cartão é obrigatório.</p>}
                                {hasCardNumberLengthError && <p className='text-red-500 text-xs'>O número do cartão deve conter 16 caracteres</p>}
                            </div>
                        </div>

                        {/* HOLDER NAME */}
                        <div className="flex flex-col gap-2">
                            <label className={`font-semibold text-xs text-gray-700`} htmlFor="holderName">NOME NO CARTÃO</label>
                            <input id='holderName' onChange={handleHolderNameChange}  type="text" value={card.holderName} placeholder='Como impresso no cartão' className={` ${shouldShowHolderNameSuccess ? 'ring ring-green-400 shadow-xs shadow-red-300': 'focus:ring focus:ring-amber-300'} ${shouldShowHolderNameError && 'ring ring-red-500'} focus:outline-none rounded-lg bg-gray-100 px-3 text-xs py-2 uppercase`} onBlur={handleHolderNameBlur}/>
                            {hasHolderNameContentError && <p className='text-red-500 text-xs'>O nome no cartão é obrigatório.</p>}
                            {hasHolderNameContentLengthError && hasHolderNameContent && <p className='text-red-500 text-xs'>O nome deve ter pelo menos 3 caracteres.</p>}
                        </div>
                 
                        {/* EXPIRATION DATE & CVV */}
                        <div className="flex gap-4 w-full">
                            {/* EXPIRATION DATE */}
                            <div className='w-full flex flex-col gap-2'>
                                <label className='font-semibold text-xs text-gray-700' htmlFor="expirationDate">VALIDADE</label>
                                <input id='expirationDate' type="text" value={card.expirationDate} disabled placeholder={card.expirationDate} className={` rounded-lg bg-gray-100 px- text-xs py-2 px-3 w-full`}/>
                            </div>
                                
                            {/* CVV */}
                            <div className="flex flex-col gap-2 w-full">
                                <label htmlFor='cvv' className='font-semibold text-xs text-gray-700'>CVV</label>
                                <input id='cvv' type="text" disabled placeholder={card.cvv}  value={card.cvv} className={` rounded-lg bg-gray-100 px-3 py-2 text-xs w-full`}/>
                            </div>
                        </div>

                        {/* DEFAULT CARD */}
                        <div className="flex gap-4 h-7">
                            <div className="flex items-center gap-2">
                                <input id='main' onChange={handleDefaultCardChange} type="checkbox"/>
                                <label htmlFor='main' className='font-semibold text-xs text-gray-700'>Definir como cartão principal</label>
                            </div>
                        </div>
                    </div>

                    {/* SAVE CARD */}
                    <button type='submit' className={`text-center w-full bg-gradient-to-r from-[#0288D1] to-[#E91E63] py-2 rounded-xl text-white font-semibold hover:cursor-pointer`}>Salvar cartão</button>
             
                </form>
                
            </div>
        </motion.div>,
        document.body
    )
}