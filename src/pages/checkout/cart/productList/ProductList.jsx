import {currencyFormatter} from '../../../../utils/formatters'

export default function ProductList({lista, increaseQuantity, decreaseQuantity, onRemoveFromCart, updateQuantity, checkQuantity}){

    // Strips non-numeric characters from input and updates item quantity
    const handleUpdateQuantity = (item, e) => {
        const itemQuantity = e.target.value.replace(/\D/g, '')
        updateQuantity(item, itemQuantity)
    }

    // Strips non-numeric characters from input and runs quantity checks
    const handleCheckQuantity = (item, e) => {
        const itemQuantity = e.target.value.replace(/\D/g, '')
        checkQuantity(item, itemQuantity)
    }

    if(!lista) return
    return(

        <div className='overflow-y-auto w-full h-[calc(100vh-300px)] mt-24 bg-white shadow-xs lg:h-145 lg:py-0 lg:mt-0 lg:rounded-2xl'>
            <div className='z-10 sticky top-0 grid grid-cols-4 xl:grid-cols-6 justify-items-center  w-full p-4 font-semibold bg-gray-200'>
                <div className=''>Produto</div>
                <div className='hidden xl:block'>Nome</div>
                <div className='hidden xl:block'>Preço</div>
                <div>Quantidade</div>
                <div>Total</div>
                <div>Remover</div>
            </div>
            {lista.length > 0? 
                lista.map(produto => {
                    const total = produto.valor*produto.quantidade
                    const hasExactLength = produto.quantidade === 1

                    return(
                        <div className='grid grid-cols-4 xl:grid-cols-6 items-center justify-items-center p-4 text-md'>
                        
                            <div className='overflow-hidden h-20 w-15 lg:h-35 lg:w-25 border border-gray-200 rounded-2xl shadow-xs'>
                                <img className='h-full w-full' src={produto.img_url} alt='Capa do produto'/>
                            </div>

                            <div className='hidden xl:block'>{produto.nome}</div>

                            <div className='hidden xl:block'>{currencyFormatter(produto.valor)}</div>

                            {/* Product quantity */}
                            <div className='flex items-center justify-around w-15 lg:w-20 px-2 bg-white border border-gray-300 rounded-3xl select-none'>

                                {/* Decrease quantity */}
                                <div className={`w-5 text-xs ${hasExactLength && 'text-gray-300'} cursor-pointer`} onClick={()=> decreaseQuantity(produto)}><i className='fa-solid fa-minus'></i></div>

                                {/* Current quantity */}
                                <div className='relative flex items-center w-5 h-5'>
                                    <div className='flex items-center justify-center h-full w-full '>{produto.quantidade}</div>
                                    <input onChange={(e) => handleUpdateQuantity(produto, e)} className='z-10 absolute top-0 h-full w-full text-center text-transparent border caret-black focus:outline-none' type='text' value={produto.quantidade} onBlur={(e) => handleCheckQuantity(produto, e)}/>
                                </div>

                                {/* Increase quantity */}
                                <div className='w-5 text-xs cursor-pointer' onClick={()=> increaseQuantity(produto)}><i className='fa-solid fa-plus'></i></div>
                                
                            </div>

                            <div>{currencyFormatter(total)}</div>

     
                            <div  className='text-center hover:text-red-500 cursor-pointer transition-colors' onClick={()=> onRemoveFromCart(produto)}>
                                <i className='fa-solid fa-trash'></i>
                            </div>
         
                        </div>        
                    )
                })   
            :
            <div>
                Adicione produtos no carrinho!
            </div>
            }
        </div>
    )
}