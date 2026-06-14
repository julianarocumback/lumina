import { useState } from 'react'

export default function NewPayment({setNewPayment, addPayment, dadosCliente}){
    const [payment, setPayment] = useState({
        userId: dadosCliente?.id,
        holderName: '',
        lastFour: '',
        expirationDate: '01/50',
        cvv: 123,
        brand: '',
        isMain: false
    })

    function handleHolderNameChange(event){
        const holderName = event.target.value
        if(holderName.length > 40) return
        setPayment(prev => ({...prev, holderName:holderName}))
    }

    function handleLastFourChange(event) {
        const lastFour = event.target.value
        console.log(lastFour[0])
        if(!(/^[1-9]+$/).test(lastFour)) return
        if(lastFour.length > 16) return
        if(lastFour){
            console.log('é 4')
        }
        setPayment(prev => ({...prev, lastFour: lastFour}))
    }

    function handleMainChange(event) {
        const isMain = event.target.checked
        setPayment(prev => ({...prev, isMain: isMain}))
    }

    function handleAddPayment(){
        addPayment(payment)
    }

    console.log(payment)

    return (
        <div className="absolute flex justify-items-start lg:justify-center lg:items-center items-center top-0 h-full lg:h-screen w-full transition-colors bg-black/30">
            <div className='border rounded-2xl w-full h-fit lg:w-100 lg:h-fit lg:right-50 lg:left-50 bg-white p-8 shadow-lg border-gray-200 gap-8 flex flex-col relative'>
                <div className='flex'>
                    <h2 className="text-xl font-semibold text-blue-700">Novo cartão</h2>
                    <button onClick={()=> setNewPayment(false)} className="absolute right-8 w-7 h-7 hover:cursor-pointer hover:text-red-400 transition-colors" ><i class="fa-solid fa-xmark" ></i></button>
                </div>

            
                <div className='flex flex-col gap-6 w-full h-fit'>

                    {/* INFORMAÇÕES DO CARTÃO */}
                    <div className='flex flex-col gap-4'>

                        {/* NÚMERO DO CARTÃO */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor='lastFour' className='font-semibold text-xs text-gray-700'>NÚMERO DO CARTÃO</label>
                            <input id='lastFour' onChange={handleLastFourChange} type="text" value={payment.lastFour} placeholder='0000 0000 0000 0000' className={`rounded-lg bg-gray-100 px-3 text-xs py-2`}/>
                        </div>

                        {/* NOME NO CARTÃO */}
                        <div className="flex flex-col gap-2">
                            <label className='font-semibold text-xs text-gray-700' htmlFor="holderName">NOME NO CARTÃO</label>
                            <input id='holderName' onChange={handleHolderNameChange}  type="text" value={payment.holderName} placeholder='Como impresso no cartão' className={`rounded-lg bg-gray-100 px-3 text-xs py-2`}/>
                        </div>

                        {/* VALIDADE E CVV */}
                        <div className="flex gap-4 w-full">
                            {/* VALIDADE */}
                            <div className='w-full flex flex-col gap-2'>
                                <label className='font-semibold text-xs text-gray-700' htmlFor="expirationDate">VALIDADE</label>
                                <input id='expirationDate' type="text" value={payment.expirationDate} disabled placeholder={payment.expirationDate} className={` rounded-lg bg-gray-100 px- text-xs py-2 px-3 w-full`}/>
                            </div>
                                
                            {/* CVV */}
                            <div className="flex flex-col gap-2 w-full">
                                <label htmlFor='cvv' className='font-semibold text-xs text-gray-700'>CVV</label>
                                <input id='cvv' type="text" disabled placeholder={payment.cvv}  value={payment.cvv} className={` rounded-lg bg-gray-100 px-3 py-2 text-xs w-full`}/>
                            </div>
                        </div>

                        {/* PRINCIPAL */}
                        <div className="flex gap-4 h-7">
                            <div className="flex items-center gap-2">
                                <input id='main' onChange={handleMainChange} type="checkbox" value className={``}/>
                                <label htmlFor='main' className='font-semibold text-xs text-gray-700'>Definir como cartão principal</label>
                            </div>
                        </div>
                        
                    </div>

                    {/* SALVAR CARTÃO */}
                    <button onClick={handleAddPayment} className="text-center w-full bg-gradient-to-r from-[#0288D1] to-[#E91E63] py-2 rounded-xl text-white font-semibold hover:cursor-pointer">Salvar cartão</button>
             
                </div>

            </div>
        </div>
    )
}