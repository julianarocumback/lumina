import { useState } from "react";

export default function Delivery({endereco, setEndereco, frete, setFrete, addresses, addAddress, dadosCliente, setNewAddress}){
    const [adicionarNovoEndereco, setAdicionarNovoEndereco] = useState(false)
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
        setAdicionarNovoEndereco(false)
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
    
    const deliveries = [
        {
            id: 1,
            type: 'padrão',
            days: '5',
            price: 15
        },
        {
            id: 2,
            type: 'rápida',
            days: '2',
            price: 25
        }
    ]



    // Selecionar a casa como endereço de entrega    
    function handleCasaSelecionado(selectedAddress){
                        console.log(selectedAddress.id)
                        console.log(endereco)

        if(Object.keys(endereco).length === 0){
            setEndereco(selectedAddress)
        }if(endereco.id !== selectedAddress.id){
            setEndereco(selectedAddress)
        }else {
            setEndereco({})
        }
    }

    // Mostrar os inputs para adicionar novo endereço
    function handleAdicionarNovoEndereco(){
        setAdicionarNovoEndereco(prev => !prev)
    }

    // Selecionar o frete    
    function handleFrete(delivery){
        if(Object.keys(frete).length === 0){
            setFrete(delivery)
        }else if(frete?.price !== delivery?.price){
            setFrete(delivery)
        } else {
            setFrete({})
        }
    }

    return (
        <div className="w-full mt-20 lg:mt-0 lg:rounded-2xl overflow-hidden bg-white shadow-xs p-8 border-red-400 h-full select-none gap-8 flex flex-col">
            <div className=" flex flex-col gap-2">
                <h2 className="text-lg font-semibold lg:text-2xl">Endereço de Entrega</h2>
                <p>Onde devemos entregar sua nova leitura edificante?</p>
            </div>

            <div className="flex flex-col gap-4">
                <p className="font-semibold">Selecione um endereço de entrega</p>
                {/* endereços */}
                <div className="flex gap-8">

                    {addresses?.map(address => {
                        const isSelected = endereco.id === address.id
                        return (
                            <div onClick={()=>handleCasaSelecionado(address)} className={`flex-none w-70 hover:cursor-pointer shadow-md outline-1 outline-gray-200  p-4 flex flex-col gap-2 rounded-2xl ${isSelected && ' outline-green-300 bg-green-100 outline-1 text-gray-700'}`}>
                                <div className="flex justify-between">
                                    <div className="flex gap-2 text-lg">
                                        <div><i class="fa-regular fa-house"></i></div>
                                        <span className="font-semibold ">{address.type}</span>
                                    </div>
                                    <div className={` ${isSelected && 'bg-green-300 border-green-400 border-5'} h-5 w-5 border-1 border-gray-200 rounded-full bg-white`}></div>
                                </div>
                                <div>
                                    <div className="">{address.street},{address.streetNumber} {address.neighborhood} {address.city} {address.state}, {address.zip_code}</div>
                                </div>
                            </div>
                        )
                    })}

                 
                </div>
                {!adicionarNovoEndereco && <button onClick={handleAdicionarNovoEndereco} className="hover:cursor-pointer font-semibold text-sm text-blue-800 w-50">+ Adicionar novo endereço</button>}
            </div>

            
            {/* MOSTRAR SE HOUVER UM CLIQUE PARA ADICIONAR UM NOVO ENDEREÇO*/}
            {adicionarNovoEndereco && <div className="flex flex-col gap-8 ">
                <div className='flex flex-col gap-4'>

                    {/* RUA E NÚMERO */}
                    <div className='flex gap-4'>
                        <div className="flex flex-col gap-2 w-4/5">
                            <label className='font-semibold text-xs text-gray-700' htmlFor='street'>Rua</label>
                            <input id='street' onChange={handleStreetChange} type="text" value={address.street} placeholder='Nome do logradouro' className={` rounded-lg bg-gray-100 px-3 text-xs py-2`}/>
                        </div>
                        <div className='flex flex-col gap-2 w-1/5 '>
                            <label className='font-semibold text-xs text-gray-700' htmlFor="streetNumber">Número</label>
                            <input id='streetNumber' onChange={handleStreetNumberChange}  type="text" value={address.streetNumber} placeholder='Ex.: 123' className={`rounded-lg bg-gray-100 px-3 text-xs py-2`}/>
                        </div>
                    </div>

                    {/* COMPLEMENTO E BAIRRO */}
                    <div className='flex gap-4'>
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor='complement' className='font-semibold text-xs text-gray-700'>Complemento</label>
                            <input id='complement' onChange={handleComplementChange} type="text" value={address.complement} placeholder='Ex.: Bloco A, Apto 10' className={` rounded-lg bg-gray-100 px-4 text-xs h-full py-2 w-full`}/>
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="neighborhood" className='font-semibold text-xs text-gray-700'>Bairro</label>
                            <input id='neighborhood' onChange={handleNeighborhoodChange} type="text" value={address.neighborhood} placeholder='Seu bairro' className={` rounded-lg bg-gray-100 px-4 py-2 text-xs h-full`}/>
                        </div>
                    </div>

                    {/* CIDADE, ESTADO E CEP */}
                    <div className='flex gap-4'>
                        {/* CIDADE */}
                        <div className="flex flex-col gap-2 w-2/5">
                            <label className='font-semibold text-xs text-gray-700' htmlFor='city'>Cidade</label>
                            <input id='city' onChange={handleCityChange} type="text" value={address.city} placeholder='Seu bairro' className={` rounded-lg bg-gray-100 px-4 text-xs py-2`}/>
                        </div>
                        {/* ESTADO */}
                        <div className="flex flex-col gap-2 w-2/5">
                            <label htmlFor="state" className='font-semibold text-xs text-gray-700' >Estado</label>
                            <select id="state" onChange={handleStateChange} className='bg-gray-100 h-full rounded-lg px-2 w-full text-xs'>
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
                            <input id='zipCode' onChange={handleZipCodeChange}  type="text" value={address.zipCode} placeholder='00000-00' className={` rounded-lg bg-gray-100 px-4 text-xs py-2`}/>      
                        </div>

                    </div>

                    {/* PRINCIPAL E TIPO  */}
                    <div className='flex gap-4 justify-between'>                     
                        <div className="flex items-center gap-2">
                            <input id='main' onChange={handleMainChange} type="checkbox" value={address.complement} className={` rounded-lg bg-gray-100 px-4 text-xs h-full`}/>
                            <label htmlFor='main' className='font-semibold text-xs text-gray-700'>Definir como endereço principal</label>
                        </div>
                        <div className='flex gap-2'>
                            <label htmlFor='main' className='font-semibold text-xs text-gray-700'>Tipo:</label>
                            <select onChange={handleTypeChange} className='text-xs '>
                                <option value="" selected disabled>Selecione</option>
                                <option value="Casa">Casa</option>
                                <option value="Trabalho">Trabalho</option>
                                <option value="Personalizado">Personalizado</option>
                            </select>
                                {address.type === 'Personalizado' && <div><input onChange={handleTypeChange} type="text" className="border" /></div>}
                        </div>
                    </div>
                </div>
                <div className="flex gap-4">
                <button onClick={handleAddAddress} className="font-semibold text-sm w-50 h-10 rounded-xl bg-black text-white">Adicionar</button>
                <button onClick={handleAdicionarNovoEndereco} className="font-semibold text-sm w-50 h-10 rounded-xl bg-black text-white">Cancelar</button>

                </div>
            <div className="h-0.5 bg-gray-200 w-full"></div>
            </div>}

            
           
            <div className="flex flex-col gap-5">
                <div>
                    <p className="font-semibold">Modalidade de envio</p>
                </div>
                
                <div className="flex flex-col gap-5">
                    {deliveries.map(delivery => {
                        const isSelected = frete.type === delivery.type
                        return (
                            <div onClick={()=> handleFrete(delivery)} className={`${isSelected && 'outline-green-300 bg-green-100 outline-1'} hover:cursor-pointer border border-gray-200 rounded-2xl p-4 flex justify-between items-center`}>
                        <div className="flex gap-4 items-center">
                            <div className={` ${isSelected && 'bg-green-300 border-green-400 border-5'} h-5 w-5 border-1 border-gray-200 rounded-full bg-white`}></div>
                            <div >
                                <p className="font-semibold text-lg text-gray-500">Entrega {delivery.type}</p>
                                <p className="text-xs italic text-gray-400">Receba em até {delivery.days} dias</p>
                            </div>

                        </div>
                        <div className="text-lg font-semibold text-gray-500">
                            {delivery.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
                        </div>
                    </div>
                        )
                    })}
            </div>


        </div>
            </div>
    )
}