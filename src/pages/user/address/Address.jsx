import { useOutletContext } from 'react-router-dom'

export default function Address(){
    const {dadosCliente, deleteAddress, setNewAddress} = useOutletContext()
    if(!dadosCliente) return null

    return (
        <div className={` ${dadosCliente?.enderecos?.length < 3 ? 'h-screen' : 'h-full' } flex flex-col gap-8 pt-7 pb-25 lg:py-30 pl-20 pr-5 lg:pl-150 lg:pr-70 `}>
            
            <h1 className="text-2xl font-semibold">Endereços</h1>
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 relative">
                {dadosCliente?.address?.map(address => {
                    return (
                        <div key={address.id} className="bg-white p-6 rounded-2xl gap-4 flex flex-col">
                            <div className="flex gap-4 justify-between items-center">
                                <div className="flex items-center gap-4">
                                    <div className={`flex justify-center items-center text-${address.tom}-800 bg-${address.tom}-300 h-10 w-10 rounded-full`}><i class={`fa-solid ${address.icone}`}></i></div>
                                    <div>
                                        <p className="text-lg font-semibold">{address.titulo}</p>
                                        {address.city && <span className="text-xs font-semibold text-red-800 bg-red-300/30 px-2 py-0.5 rounded-full">{address.status}</span>}
                                    </div>
                                </div>
                                <div className="flex gap-4 text-gray-500">
                                    {/* <div><i class="fa-solid fa-pencil"></i></div> */}
                                    <div onClick={() => deleteAddress(address.id)}><i class="fa-solid fa-trash"></i></div>
                                </div>
                            </div>

                            <div>
                                <p>{address.street}, {address.street_number} - {address.neighborhood}, {address.city} - {address.state}, {address.zip_code}</p>
                            </div>
                        </div>
                    )
                })}
                
            </div>
            

            <div onClick={()=>setNewAddress(true)} className="flex gap-2 border rounded-xl h-15 justify-center items-center text-blue-700 font-semibold border-dashed border-gray-400">
                <div><i class="fa-solid fa-location-dot"></i></div>
                Adicionar outro endereço
            </div>

            

        </div>
    )
}