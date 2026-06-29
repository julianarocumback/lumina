import { Link } from 'react-router-dom'

export default function OrderPreview({orders}){
    const orderArray = orders ?? []
    const latestOrder = orderArray.length > 0? [...orders].reverse()[0] : null
   
    return (
        <div className="lg:h-125 rounded-3xl lg:w-3/4 p-8  flex flex-col bg-white shadow-lg overflow-hidden gap-4">
            {latestOrder?
            <div className='flex flex-col gap-8'>

                <div className="flex gap-2 justify-between">
                    <div className='flex items-center gap-4'>
                        <h2 className="text-xs lg:font-semibold">ÚLTIMO PEDIDO</h2>
                        <span className="text-xs  lg:text-base font-semibold">#
                            {[...latestOrder.id].map((letra, index)=> {
                                if(index > 7) return 
                                return letra
                            }).join('')}     
                        </span>
                    </div>
                    <span className="bg-green-300/30 text-green-700 text-xs rounded-full py-1 px-3 font-semibold uppercase">{latestOrder.status}</span>
                </div>
            
                
                <div className="flex flex-col gap-4 border">
                      
                    <div className="flex gap-4">
                        {latestOrder?.produtos?.map(produto => {
                            return(
                                <div key={produto.id} className="border border-gray-200 w-25 rounded-xl overflow-hidden flex">
                                    <img src={produto.img_url} alt="" />

                                </div>
                            )
                        })
                        }
                        
                    </div>                 


                    <div className="lg:flex justify-between hidden ">
                        <div className="text-right">
                            <p className="text-lg text-[rgba(71,71,71,0.7)]">ENTREGA ESTIMADA</p>
                            <p className="font-semibold">25 de maio,2026</p>
                        </div>
                    </div>

                    <div className="flex gap-4 lg:justify-start">
                        <p className="text-gray-500 font-semibold">                        </p>
                        <p className="hidden lg:block font-light">{latestOrder.created_at}</p>
                    </div>
                                 
                </div>
                <div>
                    <button className="bg-blue-50 lg:px-4 lg:py-4   text px-2 py-2 lg:text-xl rounded-xl text-blue-800 font-semibold flex gap-3 items-center">
                        <div>Rastrear encomenda</div>
                        <div><i className="fa-solid fa-arrow-right"></i></div>
                        </button>
                </div>
            </div>
            
        :

        <div>Não há pedidos recentes!</div>
        
        }

        </div>
    )

}