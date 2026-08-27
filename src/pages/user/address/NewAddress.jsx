import ReactDOM from 'react-dom'

import { useState } from 'react'
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
        const streetNumber = event.target.value.replace(/\D/g, '')
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
        if(type == 'Casa'){
            setHasTypeInteracted(false)
            setIsSubmitted(false)
        }
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
        <motion.div className='fixed flex justify-center items-center top-0 h-screen w-full transition-colors bg-black/30' initial={{opacity:0 }} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.3}}>
            <div className='relative flex flex-col  gap-6 w-full h-full p-8 bg-white border border-gray-200 shadow-lg lg:w-150 lg:h-fit lg:rounded-2xl'>
                <h2 className='text-xl font-semibold'>Novo endereço</h2>
                <button onClick={()=> setNewAddress(false)} className='absolute right-8 w-7 h-7 hover:text-red-500 transition-all' ><i className='fa-solid fa-xmark' ></i></button>
            
                {/* INFORMAÇÕES DE PAGAMENTO */}
                <div className='flex flex-col gap-4 '>

                    {/* RUA E NÚMERO */}
                    <div className='flex gap-4'>
                        <div className='flex flex-col gap-2 w-4/5'>
                            <label className='font-semibold text-xs text-gray-700' htmlFor='street'>Rua</label>
                            <input
                                type='text' value={address.street}
                                placeholder='Nome do logradouro'
                                id='street'
                                className={`px-4 h-8 text-xs bg-gray-100 ${shouldShowStreetSuccess ? 'outline outline-green-500' : shouldShowStreetContentError ? 'outline outline-red-500 focus:outline-1 focus:outline-red-500': 'focus:outline focus:outline-amber-300'} rounded-lg lg:px-3`}
                                onChange={handleStreetChange}
                                onBlur={handleStreetVerification}
                            />
                            {shouldShowStreetContentError && <p className='text-xs text-red-500'>A rua é obrigatória</p>}

                        </div>
                        <div className='flex flex-col gap-2 w-1/5'>
                            <label className='font-semibold text-xs text-gray-700' htmlFor='streetNumber'>Número</label>
                            <input
                                type='text'
                                placeholder='Ex.: 123'
                                value={address.streetNumber}
                                id='streetNumber'
                                className={`px-4 h-8 text-xs bg-gray-100 ${shouldShowStreetNumberSuccess ? 'outline outline-green-500' : shouldShowStreetNumberContentError ? 'outline outline-red-500 focus:outline-1 focus:outline-red-500': 'focus:outline focus:outline-amber-300'} rounded-lg lg:px-3`}
                                onChange={handleStreetNumberChange}
                                onBlur={handleStreetNumberVerification}
                            />
                            {shouldShowStreetNumberContentError && <p className='text-xs text-red-500'>Número obrigatório</p>}
                        </div>
                    </div>

                    {/* COMPLEMENTO E BAIRRO */}
                    <div className='flex flex-col lg:flex-row gap-4'>
                        <div className='flex flex-col gap-2 w-full'>
                            <label htmlFor='complement' className='font-semibold text-xs text-gray-700'>Complemento (opcional)</label>
                            <input
                                type='text'
                                placeholder='Ex.: Bloco A, Apto 10'
                                value={address.complement}
                                id='complement'
                                className={`max-h-10 w-full px-4 py-2 text-xs bg-gray-100 rounded-lg focus:outline-none`}
                                onChange={handleComplementChange}
                            />
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <label htmlFor='neighborhood' className='font-semibold text-xs text-gray-700'>Bairro</label>
                            <input
                                type='text'
                                placeholder='Seu bairro'
                                value={address.neighborhood}
                                id='neighborhood'
                                className={`px-4 h-8 text-xs bg-gray-100 ${shouldShowNeighborhoodSuccess ? 'outline outline-green-500' : shouldShowNeighborhoodContentError ? 'outline outline-red-500 focus:outline-1 focus:outline-red-500': 'focus:outline focus:outline-amber-300'} rounded-lg lg:px-3`}
                                onChange={handleNeighborhoodChange}
                                onBlur={handleNeighborhoodVerification}
                            />
                            {shouldShowNeighborhoodContentError && <p className='text-xs text-red-500'>O bairro é obrigatório</p>}

                        </div>
                    </div>

                    {/* CIDADE, ESTADO E CEP */}
                    <div className='flex flex-col lg:flex-row gap-4'>
                        {/* CIDADE */}
                        <div className='flex flex-col gap-2 w-full lg:w-3/4'>
                            <label className={'font-semibold text-xs text-gray-700'} htmlFor='city'>Cidade</label>
                            <input
                                type='text' 
                                placeholder='Sua cidade'
                                value={address.city}
                                id='city'
                                className={`px-4 h-8 text-xs bg-gray-100 ${shouldShowCitySuccess ? 'outline outline-green-500' : shouldShowCityContentError ? 'outline outline-red-500 focus:outline-1 focus:outline-red-500': 'focus:outline focus:outline-amber-300'} rounded-lg lg:px-3`}
                                onChange={handleCityChange}
                                onBlur={handleCityVerification}
                            />
                            {shouldShowCityContentError && <p className='text-xs text-red-500'>A cidade é obrigatória</p>}
                        </div>
                        {/* ESTADO */}
                        <div className='flex flex-col gap-2 w-full lg:w-1/4'>                     
                            <label htmlFor='state' className='font-semibold text-xs text-gray-700' >Estado</label>
                            <select
                                id='state'
                                className={`px-4 h-8 text-xs bg-gray-100 ${shouldShowStateSuccess ? 'outline outline-green-500' : shouldShowStateError ? 'outline outline-red-500 focus:outline-1 focus:outline-red-500': 'focus:outline focus:outline-amber-300'} rounded-lg lg:px-3`}
                                onChange={handleStateChange}
                                onBlur={handleStateVerification}
                            >
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

                        {/* CEP */}
                        <div className='flex flex-col gap-2 w-full lg:w-1/4'>
                            <label className='font-semibold text-xs text-gray-700' htmlFor='zipCode'>CEP</label>
                            <input
                                type='text'
                                placeholder='00000-000'
                                value={address.zipCode.replace(/^(\d{5})(\d)/, '$1-$2')}
                                id='zipCode'
                                className={`px-4 h-8 text-xs bg-gray-100 ${shouldShowZipCodeSuccess ? 'outline outline-green-500' : shouldShowZipCodeLengthError ? 'outline outline-red-500 focus:outline-1 focus:outline-red-500': 'focus:outline focus:outline-amber-300'} rounded-lg lg:px-3`}
                                onChange={(e) => handleZipCodeChange(e.target.value.replace(/\D/g, ''))}
                                onBlur={handleZipCodeVerification}
                            />
                            {shouldShowZipCodeLengthError && <p className='text-xs text-red-500'>Insira um CEP válido</p>}
                        </div>

                    </div>

                    {/* PRINCIPAL E TIPO */}
                    <div className='flex  gap-4 justify-between'>                     
                        <div className='flex items-center gap-2 select-none'>
                            <input
                                type='checkbox'
                                value={address.isMain}
                                id='default'
                                className={`rounded-lg bg-gray-100 px-4 text-xs h-full focus:outline-none`}
                                onChange={handleMainChange}
                            />
                            <label htmlFor='default' className={`$ font-semibold text-xs text-gray-700`}>Definir como principal</label>
                        </div>
                        <div className='flex items-center gap-2'>
                            <label htmlFor='type' className='font-semibold text-xs text-gray-700'>Tipo:</label>
                            <select
                                id='type'
                                className={`px-4 h-8 text-xs bg-gray-100 ${shouldShowTypeSuccess ? 'outline outline-green-500' : shouldShowTypeContentError ? 'outline outline-red-500 focus:outline-1 focus:outline-red-500': 'focus:outline focus:outline-amber-300'} rounded-lg lg:px-3`}
                                onChange={handleTypeChange}
                                onBlur={handleTypeVerification}
                            >
                                <option value='' selected disabled>Selecione</option>
                                <option value='Casa'>Casa</option>
                                <option value='Trabalho'>Trabalho</option>
                                <option value='Personalizado'>Personalizado</option>
                            </select>
                                {(address.type != '' && address.type != 'Casa' && address.type != 'Trabalho') && <div><input onChange={handleTypeChange} type='text' className='border' /></div>}
                                {shouldShowTypeContentError && <p className='text-xs text-red-500'>O tipo é obrigatório</p>}
                        </div>
                    </div>
                </div>
                <button onClick={handleAddAddress} className='text-center w-full bg-linear-to-r from-[#0288D1] to-[#E91E63] py-2 rounded-xl text-white font-semibold hover:cursor-pointer'>Adicionar</button>
            </div>
        </motion.div>,
        document.body
    )
}