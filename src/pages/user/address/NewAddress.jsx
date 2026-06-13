import { useState } from 'react'

export default function NewAddress({setNewAddress, adicionarEndereco, dadosCliente}){
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

    function handleZipCodeChange(event) {
        const zipCode = event.target.value
        if(zipCode.length > 8) return
        setAddress(prev => ({...prev, zipCode: zipCode}))
    }

    function handleStreetChange(event) {
        const street = event.target.value
        if(street.length > 53) return
        setAddress(prev => ({...prev, street: street}))
    }

    function handleStreetNumberChange(event) {
        const streetNumber = event.target.value
        if(streetNumber.length > 4) return
        setAddress(prev => ({...prev, streetNumber: streetNumber}))
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
    }

    function handleStateChange(event) {
        const state = event.target.value
        setAddress(prev => ({...prev, state: state}))
    }

    function handleAddAddress(){
        adicionarEndereco(address)
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

    console.log(address)
    return (
        <div className="absolute flex justify-center items-center top-0 h-screen w-full transition-colors bg-black/30">
            <div className='border rounded-2xl lg:w-150 lg:h-100 right-50 left-50 bg-white p-8 shadow-lg border-gray-200 gap-4 flex flex-col relative'>
                <h2 className="text-xl font-semibold text-blue-700">Novo endereço</h2>
                <button onClick={()=> setNewAddress(false)} className="absolute right-8 w-7 h-7" ><i class="fa-solid fa-xmark" ></i></button>
            
            
            <div className='flex flex-col gap-4'>
                <div className="flex flex-col gap-2">
                <label className='font-semibold text-xs text-gray-700' htmlFor="zipCode">CEP</label>
                <div className='flex gap-4 h-7'>
                    <input id='zipCode' onChange={handleZipCodeChange}  type="text" value={address.zipCode} placeholder='00000-00' className={` rounded-lg bg-gray-100 px-4 text-xs h-full`}/>
                    <button className="bg-blue-800 text-white px-4 rounded-lg h-full text-xs font-semibold">Buscar</button>
                </div>
            </div>

            <div className="flex flex-col gap-7 ">
                <div className="flex gap-4 h-fit">
                    <div className="flex flex-col gap-2  w-4/5">
                        <label className='font-semibold text-xs text-gray-700 w-4/5' htmlFor='street'>Rua</label>
                        <input id='street' onChange={handleStreetChange} type="text" value={address.street} placeholder='Rua' className={` rounded-lg bg-gray-100 px-4 text-xs  h-7`}/>
                    </div>
                    <div className=' w-1/5 flex flex-col gap-2'>
                        <label className='font-semibold text-xs text-gray-700' htmlFor="streetNumber">Número</label>
                        <input id='streetNumber' onChange={handleStreetNumberChange}  type="text" value={address.streetNumber} placeholder='número' className={` rounded-lg bg-gray-100 px-4 text-xs h-7`}/>
                </div>
            </div>

            <div className="flex gap-4 h-7">
                <div className="">
                    <label htmlFor='complement' className='font-semibold text-xs text-gray-700'>Complemento</label>
                    <input id='complement' onChange={handleComplementChange} type="text" value={address.complement} placeholder='Complemento' className={` rounded-lg bg-gray-100 px-4 text-xs h-full`}/>
                </div>
                <div>
                    <label htmlFor="neighborhood" className='font-semibold text-xs text-gray-700'>Bairro</label>
                    <input id='neighborhood' onChange={handleNeighborhoodChange} type="text" value={address.neighborhood} placeholder='Bairro' className={` rounded-lg bg-gray-100 px-4 text-xs h-full`}/>
                </div>
            </div>

            <div className="flex gap-4 h-7">
                <div className="">
                    <label className='font-semibold text-xs text-gray-700' htmlFor='city'>Cidade</label>
                    <input id='city' onChange={handleCityChange} type="text" value={address.city} placeholder='rua' className={` rounded-lg bg-gray-100 px-4 text-xs h-full`}/>
                </div>
                <div>
                    <label htmlFor="state" className='font-semibold text-xs text-gray-700' >Estado</label>
                    <select id="state" onChange={handleStateChange}>
                        <option value='' selected disabled>Selecione um estado</option>
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
            </div>

            <div className="flex gap-4 h-7">
                <div className="">
                    <label htmlFor='main' className='font-semibold text-xs text-gray-700'>Principal</label>
                    <input id='main' onChange={handleMainChange} type="checkbox" value={address.complement} className={` rounded-lg bg-gray-100 px-4 text-xs h-full`}/>
                </div>
                <div>
                    <select onChange={handleTypeChange} name="" id="">
                        <option value="" selected disabled>Selecione o tipo</option>
                        <option value="Casa">Casa</option>
                        <option value="Trabalho">Trabalho</option>
                        <option value="Personalizado">Personalizado</option>
                    </select>
                        {address.type === 'Personalizado' && <div><input onChange={handleTypeChange} type="text" className="border" /></div>}
                </div>
            </div>

            </div>

            </div>
            <button onClick={handleAddAddress} className="mt-7 border text-center w-30">Adicionar</button>
            </div>


        </div>
    )
}