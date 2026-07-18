import { useState } from 'react'

export default function NewAddress({setNewAddress, addAddress, dadosCliente}){
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
        isMain: false
    })

    const [addressError, setAddressError] = useState({zipCode: null, street: null, streetNumber: null, neighborhood: null, city: null, state: null, isMain:null, type: null})


    function handleZipCodeChange(zipCode) {
        if(zipCode.length > 8) return

        setAddress(prev => ({...prev, zipCode: zipCode}))

        if(zipCode.length === 8) {
            setAddressError(prev  => ({...prev, zipCode: null}))

        }

        

    }

    function handleStreetChange(event) {
        const street = event.target.value
        if(street.length > 53) return
        setAddress(prev => ({...prev, street: street}))
    }

    function handleStreetNumberChange(event) {
        if(event.length > 4) return

        setAddress(prev => ({...prev, streetNumber: event}))
        setAddressError(prev => ({...prev, streetNumber: null}))
    }

    function handleComplementChange(event) {
        const complement = event.target.value
        if(complement.length > 40) return
        setAddress(prev => ({...prev, complement: complement}))
    }

    function handleNeighborhoodChange(event) {
        const neighborhood = event.target.value
        if(neighborhood.length > 40) return
        setAddress(prev => ({...prev, neighborhood: neighborhood}))
    }

    function handleCityChange(event) {
        const city = event.target.value
        if(city.length > 40) return
        setAddress(prev => ({...prev, city: city}))

        if(city.trim() !== ''){
            setAddressError(prev  => ({...prev, city: null}))
        }
    }

    function handleStateChange(event) {
        const state = event.target.value
        setAddress(prev => ({...prev, state: state}))
    }

    function handleAddAddress(){
        let hasError = false
        
        if(address.city === ''){
            setAddressError(prev => ({...prev, city: true}))
            hasError = true
        } 
        
        if(address.zipCode.length !== 8){
            setAddressError(prev => ({...prev, zipCode: true}))    
            hasError = true
        }

        if(address.street === ''){
            setAddressError(prev => ({...prev, street: true}))    
            hasError = true
        }

        if(address.streetNumber === ''){
            setAddressError(prev => ({...prev, streetNumber: true}))    
            hasError = true
        }

        if(address.complement === ''){
            setAddressError(prev => ({...prev, complement: true}))    
            hasError = true
        }

        if(address.neighborhood === ''){
            setAddressError(prev => ({...prev, neighborhood: true}))    
            hasError = true
        }

        if(address.type === ''){
            setAddressError(prev => ({...prev, type: true}))    
            hasError = true
        }

     



        if(hasError) return
     




        // if(address.zipCode.length !== 8) {
        //     setAddressError(prev => ({...prev, zipCode: true}))
        //     return
        // } else {
        //     setAddressError(prev => ({...prev, zipCode: false}))

        // }
        addAddress(address)
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
        isMain: false
    })
    }

 

    function handleMainChange(event) {
        const main = event.target.checked
        setAddress(prev => ({...prev, isMain:main}))
    }

    function handleTypeChange(event) {
        const type = event.target.value
        setAddress(prev => ({...prev, type:type}))
    }

    return (
        <div className="absolute flex justify-center items-center top-0 h-screen w-full transition-colors bg-black/30">
            <div className='border rounded-2xl lg:w-150 h-fit left-40 bg-white p-8 shadow-lg border-gray-200 gap-6 flex flex-col relative'>
                <h2 className="text-xl font-semibold">Novo endereço</h2>
                <button onClick={()=> setNewAddress(false)} className="absolute right-8 w-7 h-7 hover:text-red-500 transition-all" ><i class="fa-solid fa-xmark" ></i></button>
            
                {/* INFORMAÇÕES DE PAGAMENTO */}
                <div className='flex flex-col gap-4 '>

                    {/* RUA E NÚMERO */}
                    <div className='flex gap-4'>
                        <div className="flex flex-col gap-2 w-4/5">
                            <label className='font-semibold text-xs text-gray-700' htmlFor='street'>Rua</label>
                            <input id='street' onChange={handleStreetChange} type="text" value={address.street} placeholder='Nome do logradouro' className={`${addressError.street && 'outline outline-red-500 focus:outline-1 focus:outline-red-500 '} rounded-lg bg-gray-100 px-3 text-xs py-2 focus:outline-none`}/>
                        </div>
                        <div className='flex flex-col gap-2 w-1/5 '>
                            <label className='font-semibold text-xs text-gray-700' htmlFor="streetNumber">Número</label>
                            <input id='streetNumber' onChange={(e) => handleStreetNumberChange(e.target.value.replace(/\D/g, ""))}  type="text" value={address.streetNumber} placeholder='Ex.: 123' className={`${addressError.streetNumber && 'outline outline-red-500'} rounded-lg bg-gray-100 px-3 text-xs py-2 focus:outline-none`}/>
                        </div>
                    </div>

                    {/* COMPLEMENTO E BAIRRO */}
                    <div className='flex gap-4'>
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor='complement' className='font-semibold text-xs text-gray-700'>Complemento</label>
                            <input id='complement' onChange={handleComplementChange} type="text" value={address.complement} placeholder='Ex.: Bloco A, Apto 10' className={`${addressError.complement && 'outline outline-red-500'} rounded-lg bg-gray-100 px-4 text-xs h-full py-2 w-full focus:outline-none`}/>
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="neighborhood" className='font-semibold text-xs text-gray-700'>Bairro</label>
                            <input id='neighborhood' onChange={handleNeighborhoodChange} type="text" value={address.neighborhood} placeholder='Seu bairro' className={`${addressError.neighborhood && 'outline outline-red-500'} rounded-lg bg-gray-100 px-4 py-2 text-xs h-full focus:outline-none`}/>
                        </div>
                    </div>

                    {/* CIDADE, ESTADO E CEP */}
                    <div className='flex gap-4'>
                        {/* CIDADE */}
                        <div className="flex flex-col gap-2 w-2/5">
                            <label className={'font-semibold text-xs text-gray-700'} htmlFor='city'>Cidade</label>
                            <input id='city' onChange={handleCityChange} type="text" value={address.city} placeholder='Sua cidade' className={`${addressError.city && 'outline outline-red-500'} rounded-lg bg-gray-100 px-4 text-xs py-2 focus:outline-none`}/>
                        </div>
                        {/* ESTADO */}
                        <div className="flex flex-col gap-2 w-2/5">
                            <label htmlFor="state" className='font-semibold text-xs text-gray-700' >Estado</label>
                            <select id="state" onChange={handleStateChange} className={`${addressError.zipCode && 'outline outline-red-500'} bg-gray-100 h-full rounded-lg px-2 w-full text-xs focus:outline-none`}>
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
                        </div>

                        {/* CEP */}
                        <div className="flex flex-col gap-2 w-1/5">
                            <label className='font-semibold text-xs text-gray-700' htmlFor="zipCode">CEP</label>
                            <input id='zipCode' onChange={(e) => handleZipCodeChange(e.target.value.replace(/\D/g, ""))}  type="text" value={address.zipCode.replace(/^(\d{5})(\d)/, "$1-$2")} placeholder='00000-000' className={`${addressError.zipCode && 'outline outline-red-500'} rounded-lg bg-gray-100 px-4 text-xs py-2 focus:outline-none`}/>      
                        </div>

                    </div>

                    {/* PRINCIPAL E TIPO  */}
                    <div className='flex gap-4 justify-between'>                     
                        <div className="flex items-center gap-2 select-none">
                            <input id='main' onChange={handleMainChange} type="checkbox" value={address.isMain} className={`rounded-lg bg-gray-100 px-4 text-xs h-full focus:outline-none`}/>
                            <label htmlFor='main' className={`${addressError.complement && ' text-red-500 '} font-semibold text-xs text-gray-700`}>Definir como endereço principal</label>
                        </div>
                        <div className='flex gap-2'>
                            <label htmlFor='main' className='font-semibold text-xs text-gray-700'>Tipo:</label>
                            <select onChange={handleTypeChange} className={`${addressError.type && 'outline outline-red-500'} text-xs focus:outline-none`}>
                                <option value="" selected disabled>Selecione</option>
                                <option value="Casa">Casa</option>
                                <option value="Trabalho">Trabalho</option>
                                <option value="Personalizado">Personalizado</option>
                            </select>
                                {address.type === 'Personalizado' && <div><input onChange={handleTypeChange} type="text" className="border focus:outline-none" /></div>}
                        </div>
                    </div>
                </div>
                <button onClick={handleAddAddress} className="text-center w-full bg-gradient-to-r from-[#0288D1] to-[#E91E63] py-2 rounded-xl text-white font-semibold hover:cursor-pointer">Adicionar</button>
            </div>
        </div>
    )
}