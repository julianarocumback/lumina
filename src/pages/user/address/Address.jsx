import { useOutletContext } from 'react-router-dom'

export default function Address(){
    const {dadosCliente, deleteAddress, setNewAddress} = useOutletContext()
    if(!dadosCliente) return null
    
    const isMaxAddress = dadosCliente?.address?.length === 3

    return (
        <div className={`flex flex-col gap-8 pt-7 lg:py-30 pl-20 w-screen pr-5 lg:pl-150 lg:pr-70`}>
            
            <h1 className="text-2xl font-semibold">Endereços</h1>

            <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 flex-wrap w-full`}>
                
                {dadosCliente?.address?.map(address => {
        
                    return (
                        <div key={address.id} className="bg-white lg:w-full border p-6 rounded-2xl gap-7 flex flex-col h-40 lg:h-45 shadow border-gray-100 justify-center">
                            <div className="flex gap-4 justify-between items-center  ">
                                <div className='flex gap-4 items-center  '>
                                    {address.type === 'Casa'?
                                    <div className={`py-3 px-4 rounded-xl bg-green-200 text-green-800`}><i class="fa-solid fa-house"></i></div>
                                    :address.type === 'Trabalho'?
                                    <div className={`py-3 px-4 rounded-xl bg-blue-200 text-blue-800`}><i class="fa-solid fa-briefcase"></i></div>
                                    :
                                    <div className={`py-3 px-4 rounded-xl bg-gray-200 text-gray-700`}><i class="fa-solid fa-location-dot"></i></div>    
                                
                                }
                                    
                                    <div className='flex flex-col' >
                                        <p className='font-semibold text-lg'>{address?.type}</p>
                                        {address?.is_main&& <p className='font-semibold text-xs rounded-2xl bg-amber-300 px-2  text-amber-900'>Principal</p>}
                                    </div>
                                </div>
                                    <div onClick={() => deleteAddress(address.id)}><i class="fa-solid fa-trash"></i></div>
                             
                            </div>

                            <div className=''>
                                <p className='text-gray-500 font-semibold'>{address.street}, {address.street_number} - {address.neighborhood}, {address.city} - {address.state}, {address.zip_code}</p>
                            </div>
                        </div>
                    )
                })}
                
                
            

                <button onClick={()=>setNewAddress(true)} disabled={isMaxAddress} className={`${!isMaxAddress&& ' hover:bg-blue-500/10 hover:border-blue-500 hover:text-blue-500 group [*_>_p]:text-blue-500 '}h-40 flex-none border lg:h-45 lg:w-full  w-full md:w-70 justify-center items-center gap-2 rounded-2xl p-4 flex flex-col border-dashed  border-gray-300  transition-colors  hover:cursor-pointer `}>               
                    <div className={`${!isMaxAddress && 'group-hover:bg-blue-500/90'} flex justify-center items-center rounded-full bg-gray-200 w-10 h-10 text-gray-500  text-white transition-all`}><i class="fa-solid fa-plus "></i></div>             
                    <p className="text-[12px] font-semibold text-gray-700 group-hover:text-blue-500/90 transition-all">{!isMaxAddress ? 'Novo endereço': 'Não é possível adicionar mais endereços'}</p>
                </button>


            </div>

            

            

        </div>
    )
}