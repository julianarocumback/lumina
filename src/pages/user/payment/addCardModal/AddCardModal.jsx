import { useState, useEffect } from 'react'
import HolderName from './holderName/HolderName'
import { motion } from 'framer-motion'
import ReactDOM from 'react-dom'

export default function AddCardModal({setNewPayment, onAddCard, dadosCliente}){
    const [card, setCard] = useState({
        userId: dadosCliente?.id,
        holderName: '',
        cardNumber: '',
        expirationDate: '01/50',
        cvv: 123,
        brand: '',
        isDefault: false
    })

    const [isHolderNameTouched, setIsHolderNameTouched] = useState(false)
    const [isCardNumberTouched, setIsCardNumberTouched] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

     
    // Erros do holdername
    const isHolderNameEmpty = card.holderName.trim() === ''
    const isHolderNameLower = card.holderName.trim().length < 3
    const hasHolderNameError = isHolderNameEmpty || isHolderNameLower
    const shouldShowHolderNameError = hasHolderNameError && (isHolderNameTouched || isSubmitted)


    // Erros do número do cartão
    const isNumberCardEmpty = card.cardNumber.trim() === ''
    const isNumberCardLower = card.cardNumber.length < 16
    const hasNumberCardError = isNumberCardEmpty || isNumberCardLower
    const shouldShowCardNumberError = hasNumberCardError && (isCardNumberTouched || isSubmitted)


    const handleCardNumberBlur = () => {
        setIsCardNumberTouched(true)
    }
    
    
    const handleHolderNameBlur = () => {
        setIsHolderNameTouched(true)
    }

    // Add holder name
    function handleHolderNameChange(event){
        const holderName = event.target.value.replace(/\d/g, '')

        if(holderName.length > 40) return
        
    
               
        setCard(prev => ({...prev, holderName:holderName}))
    }

    // Add card number
    function handleCardNumberChange(event) {
        let cardNumber = event.target.value.replace(/\D/g, '')     

        if (cardNumber.length > 16) {
            cardNumber = cardNumber.slice(0, 16);
        }

       
        
        setCard(prev => ({...prev, cardNumber: cardNumber}))
    }

    // Add main card
    function handleMainChange(event) {
        const isMain = event.target.checked
        setCard(prev => ({...prev, isDefault: isMain}))
    }

    // Add card payment
    function handleAddPayment(){
        setIsSubmitted(true)
        if(hasHolderNameError) return
        if(hasNumberCardError) return

        onAddCard(card)
        setNewPayment(false)

        setCard({
            holderName: '',
            cardNumber: '',
            brand: '',
            isDefault: false
        })
    }

    useEffect(()=> {
        function brand() {
            if(/^4/.test(card.cardNumber)) {
                setCard(prev => ({...prev, brand: 'Visa'}))
            } else if(/^5[1-5]/.test(card.cardNumber)) {
                setCard(prev => ({...prev, brand: 'Mastercard'}))
            }else if(/^3[4|7]/.test(card.cardNumber)) {
                setCard(prev => ({...prev, brand: 'American Express'}))
            } else {
                setCard(prev => ({...prev, brand: ''}))
            }
        } 

        brand()

    },[card.cardNumber])
    return ReactDOM.createPortal(
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.3}} className='fixed inset-0 flex items-center justify-center h-full w-full bg-black/30 z-50'>

            <div className='relative flex flex-col gap-8 w-full h-fit lg:w-100 border border-gray-200 rounded-2xl shadow-lg bg-white p-8'>
                {/* Close modal */}
                <button className="absolute right-8 w-7 h-7 hover:cursor-pointer hover:text-red-400 transition-colors" onClick={()=> setNewPayment(false)}><i class="fa-solid fa-xmark"></i></button> 

                <h2 className="text-xl font-semibold">Novo cartão</h2>

                <div className='flex flex-col gap-6 w-full h-fit'>

                    {/* INFORMAÇÕES DO CARTÃO */}
                    <div className='flex flex-col gap-4'>

                        {/* NÚMERO DO CARTÃO */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor='cardNumber' className='font-semibold text-xs text-gray-700'>NÚMERO DO CARTÃO</label>
                            <div className='w-full relative'>
                                <input id='cardNumber' type="text" value={(card.cardNumber || '').replace(/(\d{4})(?=\d)/g, '$1 ')} placeholder='0000 0000 0000 0000' className={`${shouldShowCardNumberError && 'ring-1 ring-red-500'} focus:outline-none w-full rounded-lg bg-gray-100 px-3 text-xs py-2`} onChange={handleCardNumberChange} onBlur={handleCardNumberBlur}/>
                                {card.brand === 'Visa'? <div className='absolute top-1 right-3 text-blue-800'><i class="fa-brands fa-cc-visa"></i></div>
                                :card.brand === 'Mastercard' ?<div className='absolute top-1 right-3 text-red-900 '><i class="fa-brands fa-cc-mastercard"></i></div>
                                :card.brand === 'American Express' && <div className='absolute top-1 right-3 text-gray-700'><i class="fa-brands fa-cc-amex"></i></div>}
                            </div>
                        </div>

                        {/* NOME NO CARTÃO */}
                        <HolderName holderName={card?.holderName} setCard={setCard} isSubmitted={isSubmitted} />
                 

                        {/* VALIDADE E CVV */}
                        <div className="flex gap-4 w-full">
                            {/* VALIDADE */}
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

                        {/* PRINCIPAL */}
                        <div className="flex gap-4 h-7">
                            <div className="flex items-center gap-2">
                                <input id='main' onChange={handleMainChange} type="checkbox" className={``}/>
                                <label htmlFor='main' className='font-semibold text-xs text-gray-700'>Definir como cartão principal</label>
                            </div>
                        </div>
                    </div>

                    {/* SALVAR CARTÃO */}
                    <button onClick={handleAddPayment} className="text-center w-full bg-gradient-to-r from-[#0288D1] to-[#E91E63] py-2 rounded-xl text-white font-semibold hover:cursor-pointer">Salvar cartão</button>
             
                </div>

            </div>
        </motion.div>,
        document.body
    )
}