import { useState } from 'react'

export default function NewPayment({setNewPayment, addPayment, dadosCliente}){
    const [payment, setPayment] = useState({
        userId: dadosCliente?.id,
        holderName: '',
        lastFour: '',
        expirationDate: '',
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
        if(lastFour > 4) return
        setPayment(prev => ({...prev, lastFour: lastFour}))
    }

    function handleExpirationDate(event) {
        const expirationDate = event.target.value
        setPayment(prev => ({...prev, expirationDate: expirationDate}))
    }

    function handleMainChange(event) {
        const isMain = event.target.checked
        setPayment(prev => ({...prev, isMain: isMain}))
    }

    function handleBrandChange(event) {
        const brand = event.target.value
        setPayment(prev => ({...prev, brand: brand}))
    }

    function handleAddPayment(){
        addPayment(payment)
    }

    console.log(payment)

    return (
        <div className="absolute flex justify-items-start lg:justify-center lg:items-center items-center top-0 h-full lg:h-screen w-full transition-colors bg-black/30">
            <div className='border rounded-2xl w-full h-fit lg:w-150 lg:h-100 lg:right-50 lg:left-50 bg-white p-8 shadow-lg border-gray-200 gap-4 flex flex-col relative'>
                <h2 className="text-xl font-semibold text-blue-700">Novo cartão</h2>
                <button onClick={()=> setNewPayment(false)} className="absolute right-8 w-7 h-7" ><i class="fa-solid fa-xmark" ></i></button>
            
            
            <div className='flex flex-col gap-4 '>
                <div className="flex flex-col gap-2 ">
                <label className='font-semibold text-xs text-gray-700' htmlFor="holderName">Nome completo</label>
                <div className='flex gap-4 h-7'>
                    <input id='holderName' onChange={handleHolderNameChange}  type="text" value={payment.holderName} placeholder='Seu nome' className={` rounded-lg bg-gray-100 px-4 text-xs h-full w-full`}/>
                </div>
            </div>
            <div className="flex flex-col gap-7 ">
                <div className="flex gap-4 h-fit">
                    <div className="flex flex-col gap-2  w-4/5">
                        <label htmlFor='lastFour' className='font-semibold text-xs text-gray-700 w-4/5'>Últimos 4 dígitos</label>
                        <input id='lastFour' onChange={handleLastFourChange} type="text" value={payment.lastFour} placeholder='Número' className={` rounded-lg bg-gray-100 px-4 text-xs  h-7`}/>
                    </div>
                    <div className=' w-1/5 flex flex-col gap-2'>
                        <label className='font-semibold text-xs text-gray-700' htmlFor="expirationDate">Validade</label>
                        <input id='expirationDate' onChange={handleExpirationDate} type="text" value={payment.expirationDate} placeholder='número' className={` rounded-lg bg-gray-100 px-4 text-xs h-7`}/>
                </div>
            </div>


            <div className="flex gap-4 h-7">
                <div className="">
                    <label htmlFor='main' className='font-semibold text-xs text-gray-700'>Principal</label>
                    <input id='main' onChange={handleMainChange} type="checkbox" value className={` rounded-lg bg-gray-100 px-4 text-xs h-full`}/>
                </div>
                <div>
                    <select onChange={handleBrandChange} name="" id="">
                        <option value="" selected disabled>Selecione o tipo</option>
                        <option value="visa">Visa</option>
                        <option value="mastercard">Mastercard</option>
                    </select>
                </div>
            </div>

            </div>

            </div>
            <button onClick={handleAddPayment} className="mt-7 border text-center w-30">Adicionar</button>
            </div>


        </div>
    )
}