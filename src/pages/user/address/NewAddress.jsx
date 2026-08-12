import { useState } from 'react'
import ReactDOM from 'react-dom'
import { motion } from 'framer-motion'

export default function NewAddress({setNewAddress, onAddAddress, dadosCliente}){
    // STATES
    const [address, setAddress] = useState({
        userId: dadosCliente?.id,
        zipCode: '',
        street: '',
        streetNumber: '',
        complement: '',
        neighborhood: '',
        city: '',
        state: '',
        type: '',
        isDefault: false
    })

    console.log(address)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [hasZipCodeInteracted, setHasZipCodeInteracted] = useState(false)
    const [hasStreetInteracted, setHasStreetInteracted] = useState(false)
    const [hasStreetNumberInteracted, setHasStreetNumberInteracted] = useState(false)
    const [hasNeighborhoodInteracted, setHasNeighborhoodInteracted] = useState(false)
    const [hasCityInteracted, setHasCityInteracted] = useState(false)
    const [hasStateInteracted, setHasStateInteracted] = useState(false)
    const [hasTypeInteracted, setHasTypeInteracted] = useState(false)
    
    
    // ZIP CODE VARIABLES
    const hasZipCodeExactLength = address.zipCode.length === 8
    const hasValidZipCode = hasZipCodeExactLength && (hasZipCodeInteracted || isSubmitted)
    const shouldShowZipCodeLengthError = !hasZipCodeExactLength && (hasZipCodeInteracted || isSubmitted)
    const shouldShowZipCodeSuccess = hasZipCodeExactLength && (hasZipCodeInteracted || isSubmitted)


    // STREET VARIABLES
    const hasStreetContent = address.street !== ''
    const hasValidStreet = hasStreetContent && (hasStreetInteracted || isSubmitted)
    const shouldShowStreetContentError = !hasStreetContent && (hasStreetInteracted || isSubmitted)
    const shouldShowStreetSuccess = hasStreetContent && (hasStreetInteracted || isSubmitted)

    // STREET NUMBER VARIABLES
    const hasStreetNumberContent = address.streetNumber !== ''
    const hasValidStreetNumber = hasStreetNumberContent && (hasStreetNumberInteracted || isSubmitted)
    const shouldShowStreetNumberContentError = !hasStreetNumberContent && (hasStreetNumberInteracted || isSubmitted)
    const shouldShowStreetNumberSuccess = hasStreetNumberContent && (hasStreetNumberInteracted || isSubmitted)


    // NEIGHBORHOOD VARIABLES
    const hasNeighborhoodContent = address.neighborhood !== ''
    const hasValidNeighborhood = hasNeighborhoodContent && (hasNeighborhoodInteracted || isSubmitted)
    const shouldShowNeighborhoodContentError = !hasNeighborhoodContent && (hasNeighborhoodInteracted || isSubmitted)
    const shouldShowNeighborhoodSuccess = hasNeighborhoodContent && (hasNeighborhoodInteracted || isSubmitted)


    // CITY VARIABLES
    const hasCityContent = address.city !== ''
    const hasValidCity = hasCityContent && (hasCityInteracted || isSubmitted)
    const shouldShowCityContentError = !hasCityContent && (hasCityInteracted || isSubmitted)
    const shouldShowCitySuccess = hasCityContent && (hasCityInteracted || isSubmitted)


    // STATE VARIABLES
    const hasStateContent = address.state !== ''
    const hasValidState = hasStateContent && (hasStateInteracted || isSubmitted)
    const shouldShowStateError = !hasStateContent && (hasStateInteracted || isSubmitted)
    const shouldShowStateSuccess = hasStateContent && (hasStateInteracted || isSubmitted)


    // TYPE VARIABLES
    const hasTypeContent = address.type !== ''
    const hasTypeState = hasTypeContent && (hasTypeInteracted || isSubmitted)
    const shouldShowTypeContentError = !hasTypeContent && (hasTypeInteracted || isSubmitted)
    const shouldShowTypeSuccess = hasTypeContent && (hasTypeInteracted || isSubmitted)
    

    // ADDRESS
    const hasValidAddress = hasValidZipCode && hasValidStreet && hasValidStreetNumber && hasValidNeighborhood && hasValidCity && hasValidState && hasTypeState
    

    // USER INTERACTIONS FUNCTIONS

    // Mark zipcode verification as interacted
    function handleZipCodeVerification(){
        setHasZipCodeInteracted(true)
    }

    // Mark street verification as interacted
    function handleStreetVerification(){
        setHasStreetInteracted(true)
    }

    // Mark street number verification as interacted
    function handleStreetNumberVerification(){
        setHasStreetNumberInteracted(true)
    }

    // Mark neighborhood verification as interacted
    function handleNeighborhoodVerification(){
        setHasNeighborhoodInteracted(true)
    }

    // Mark city verification as interacted
    function handleCityVerification(){
        setHasCityInteracted(true)
    }

    // Mark state verification as interacted
    function handleStateVerification(){
        setHasStateInteracted(true)
    }

    // Mark type verification as interacted
    function handleTypeVerification(){
        setHasTypeInteracted(true)
    }


    // ADDRESS DATA HANDLERS

    // Add zipcode
    function handleZipCodeChange(zipCode) {
        if(zipCode.length > 8) return
        setAddress(prev => ({...prev, zipCode: zipCode}))
    }

    // Add street
    function handleStreetChange(event) {
        const street = event.target.value
        if(street.length > 53) return
        setAddress(prev => ({...prev, street: street}))
    }

    // Add street number
    function handleStreetNumberChange(event) {
        const streetNumber = event.target.value.replace(/\D/g, "")
        if(streetNumber.length > 4) return
        setAddress(prev => ({...prev, streetNumber: streetNumber}))
    }

    // Add complement
    function handleComplementChange(event) {
        const complement = event.target.value
        if(complement.length > 40) return
        setAddress(prev => ({...prev, complement: complement}))
    }

    // Add neighborhood
    function handleNeighborhoodChange(event) {
        const neighborhood = event.target.value
        if(neighborhood.length > 40) return
        setAddress(prev => ({...prev, neighborhood: neighborhood}))
    }

    // Add city
    function handleCityChange(event) {
        const city = event.target.value
        if(city.length > 40) return
        setAddress(prev => ({...prev, city: city}))
    }

    // Add state
    function handleStateChange(event) {
        const state = event.target.value
        setAddress(prev => ({...prev, state: state}))
    }

    // 
    function handleMainChange(event) {
        const defaultAddress = event.target.checked
        setAddress(prev => ({...prev, isDefault: defaultAddress}))
    }

    // 
    function handleTypeChange(event) {
        const type = event.target.value
        setAddress(prev => ({...prev, type:type}))
    }


    // SUBMIT ADDRESS
    function handleAddAddress(){
        setIsSubmitted(true)
        if(!hasValidAddress) return

        // submit
        onAddAddress(address)

        // reset
        setNewAddress(false)
        setAddress({
            userId: dadosCliente?.id,
            zipCode: '',
            street: '',
            streetNumber: '',
            complement: '',
            neighborhood: '',
            city: '',
            state: '',
            type: '',
            isDefault: false
        })
        setIsSubmitted(false)
        setHasZipCodeInteracted(false)
        setHasStreetInteracted(false)
        setHasStreetNumberInteracted(false)
        setHasNeighborhoodInteracted(false)
        setHasCityInteracted(false)
        setHasStateInteracted(false)
        setHasTypeInteracted(false)
    }


    return ReactDOM.createPortal (
        <motion.div className="fixed flex justify-center items-center top-0 h-screen w-full transition-colors bg-black/30" initial={{opacity:0 }} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.3}}>
            <div className='border lg:rounded-2xl w-full h-full  lg:w-150 lg:h-fit bg-white p-8 shadow-lg border-gray-200 gap-6 flex flex-col relative'>
                <h2 className="text-xl font-semibold">Novo endereço</h2>
                <button onClick={()=> setNewAddress(false)} className="absolute right-8 w-7 h-7 hover:text-red-500 transition-all" ><i class="fa-solid fa-xmark" ></i></button>
            
                {/* INFORMAÇÕES DE PAGAMENTO */}
                <div className='flex flex-col gap-4 '>

                    {/* RUA E NÚMERO */}
                    <div className='flex gap-4'>
                        <div className="flex flex-col gap-2 w-4/5">
                            <label className='font-semibold text-xs text-gray-700' htmlFor='street'>Rua</label>
                            <input id='street' onChange={handleStreetChange} type="text" value={address.street} placeholder='Nome do logradouro' className={`${shouldShowStreetContentError && 'outline outline-red-500 focus:outline-1 focus:outline-red-500'} ${shouldShowStreetSuccess ? 'outline outline-green-500' : 'focus:outline focus:outline-amber-300'} rounded-lg bg-gray-100 px-2 lg:px-3 text-xs py-2`} onBlur={handleStreetVerification}/>
                            {shouldShowStreetContentError && <p className='text-xs text-red-500'>A rua é obrigatória</p>}

                        </div>
                        <div className='flex flex-col gap-2 w-1/5 '>
                            <label className='font-semibold text-xs text-gray-700' htmlFor="streetNumber">Número</label>
                            <input id='streetNumber' onChange={handleStreetNumberChange}  type="text" value={address.streetNumber} placeholder='Ex.: 123' className={`${shouldShowStreetNumberContentError && 'outline outline-red-500'} ${shouldShowStreetNumberSuccess ? 'outline outline-green-500' : 'focus:outline focus:outline-amber-300'} rounded-lg bg-gray-100 px-2 lg:px-3 text-xs py-2`} onBlur={handleStreetNumberVerification}/>
                            {shouldShowStreetNumberContentError && <p className='text-xs text-red-500'>Número obrigatório</p>}

                        </div>
                    </div>

                    {/* COMPLEMENTO E BAIRRO */}
                    <div className='flex flex-col lg:flex-row gap-4'>
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor='complement' className='font-semibold text-xs text-gray-700'>Complemento (opcional)</label>
                            <input id='complement' onChange={handleComplementChange} type="text" value={address.complement} placeholder='Ex.: Bloco A, Apto 10' className={` rounded-lg bg-gray-100 px-4 text-xs h-full py-2 w-full focus:outline-none`}/>

                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="neighborhood" className='font-semibold text-xs text-gray-700'>Bairro</label>
                            <input id='neighborhood' onChange={handleNeighborhoodChange} type="text" value={address.neighborhood} placeholder='Seu bairro' className={`${shouldShowNeighborhoodContentError && 'outline outline-red-500'} ${shouldShowNeighborhoodSuccess ? 'outline outline-green-500' : 'focus:outline focus:outline-amber-300'} rounded-lg bg-gray-100 px-4 py-2 text-xs h-full`} onBlur={handleNeighborhoodVerification}/>
                            {shouldShowNeighborhoodContentError && <p className='text-xs text-red-500'>O bairro é obrigatório</p>}

                        </div>
                    </div>

                    {/* CIDADE, ESTADO E CEP */}
                    <div className='flex flex-col lg:flex-row gap-4'>
                        {/* CIDADE */}
                        <div className='flex gap-4 w-full lg:w-3/4'>

                        <div className="flex flex-col gap-2 w-3/5 lg:w-3/4">
                            <label className={'font-semibold text-xs text-gray-700'} htmlFor='city'>Cidade</label>
                            <input id='city' onChange={handleCityChange} type="text" value={address.city} placeholder='Sua cidade' className={`${shouldShowCityContentError && 'outline outline-red-500'} ${shouldShowCitySuccess ? 'outline outline-green-500' : 'focus:outline focus:outline-amber-300'} rounded-lg bg-gray-100 px-4 text-xs py-2 `} onBlur={handleCityVerification}/>
                            {shouldShowCityContentError && <p className='text-xs text-red-500'>A cidade é obrigatória</p>}

                        </div>
                        {/* ESTADO */}
                        <div className="flex flex-col gap-2 w-2/5 lg:w-1/4">
                            <label htmlFor="state" className='font-semibold text-xs text-gray-700' >Estado</label>
                            <select id="state" onChange={handleStateChange} className={`${shouldShowStateError && 'outline outline-red-500'} ${shouldShowStateSuccess && 'outline outline-green-500'} bg-gray-100 h-full rounded-lg px-2 w-full text-xs`} onBlur={handleStateVerification}>
                                <option value='' selected disabled>Selecione</option>
                                <option value='AC'>Acre</option>
                                <option value='AL'>Alagoas</option>
                                <option value='AP'>Amapá</option>
                                <option value='AM'>Amazonas</option>
                                <option value='BA'>Bahia</option>
                                <option value='CE'>Ceará</option>
                                <option value='DF'>Distrito Federal</option>
                                <option value='ES'>Espírito Santo</option>
                                <option value='GO'>Goiás</option>
                                <option value='MA'>Maranhão</option>
                                <option value='MT'>Mato Grosso</option>
                                <option value='MS'>Mato Grosso do Sul</option>
                                <option value='MG'>Minas Gerais</option>
                                <option value='PA'>Pará</option>
                                <option value='PB'>Paraíba</option>
                                <option value='PR'>Paraná</option>
                                <option value='PE'>Pernambuco</option>
                                <option value='PI'>Piauí</option>
                                <option value='RJ'>Rio de Janeiro</option>
                                <option value='RN'>Rio Grande do Norte</option>
                                <option value='RS'>Rio Grande do Sul</option>
                                <option value='RO'>Rondônia</option>
                                <option value='RR'>Roraima</option>
                                <option value='SC'>Santa Catarina</option>
                                <option value='SP'>São Paulo</option>
                                <option value='SE'>Sergipe</option>
                                <option value='TO'>Tocantins</option>
                            </select>
                            {shouldShowStateError && <p className='text-xs text-red-500'>O estado é obrigatório</p>}

                        </div>
                        </div>

                        {/* CEP */}
                        <div className="flex flex-col gap-2 w-full lg:w-1/4">
                            <label className='font-semibold text-xs text-gray-700' htmlFor="zipCode">CEP</label>
                            <input id='zipCode' onChange={(e) => handleZipCodeChange(e.target.value.replace(/\D/g, ""))}  type="text" value={address.zipCode.replace(/^(\d{5})(\d)/, "$1-$2")} placeholder='00000-000' className={`${shouldShowZipCodeLengthError && 'outline outline-red-500'} ${shouldShowZipCodeSuccess ? 'outline outline-green-500' : 'focus:outline focus:outline-amber-300'}  rounded-lg bg-gray-100 px-4 text-xs py-2`} onBlur={handleZipCodeVerification}/>
                            {shouldShowZipCodeLengthError && <p className='text-xs text-red-500'>Insira um CEP válido</p>}
                        </div>

                    </div>

                    {/* PRINCIPAL E TIPO  */}
                    <div className='flex  gap-4 justify-between'>                     
                        <div className="flex items-center gap-2 select-none">
                            <input id='default' onChange={handleMainChange} type="checkbox" value={address.isMain} className={`rounded-lg bg-gray-100 px-4 text-xs h-full focus:outline-none`}/>
                            <label htmlFor='default' className={`$ font-semibold text-xs text-gray-700`}>Definir como principal</label>
                        </div>
                        <div className='flex gap-2'>
                            <label htmlFor='type' className='font-semibold text-xs text-gray-700'>Tipo:</label>
                            <select id='type' onChange={handleTypeChange} className={`${shouldShowTypeContentError && 'outline outline-red-500'} ${shouldShowTypeSuccess? 'outline outline-green-500' : 'focus:outline focus:outline-amber-300'} text-xs `} onBlur={handleTypeVerification}>
                                <option value="" selected disabled>Selecione</option>
                                <option value="Casa">Casa</option>
                                <option value="Trabalho">Trabalho</option>
                                <option value="Personalizado">Personalizado</option>
                            </select>
                                {address.type === 'Personalizado' && <div><input onChange={handleTypeChange} type="text" className="border" /></div>}
                                {shouldShowTypeContentError && <p className='text-xs text-red-500'>O tipo é obrigatório</p>}

                        </div>
                    </div>
                </div>
                <button onClick={handleAddAddress} className="text-center w-full bg-gradient-to-r from-[#0288D1] to-[#E91E63] py-2 rounded-xl text-white font-semibold hover:cursor-pointer">Adicionar</button>
            </div>
        </motion.div>,
        document.body
    )
}