export default function Box({product}){
    if(!product)return
    return (
        <div className='overflow-hidden w-full rounded-2xl '>
            <table className='w-full [&_td]:p-4 [&_tr]:odd:bg-white [&_tr]:even:bg-gray-50'>
                <tr className=' '>
                    <td className='flex gap-3'>
                        <span className='text-[rgba(0,99,154,1)]'><i className='fa-solid fa-book'></i></span>
                        <span className='text-[rgba(71,71,71,1)]'>{product.nome}</span> 
                    </td>
                </tr>
                <tr className=' '>
                    <td className='flex gap-3'>
                        <span className='text-[rgba(0,99,154,1)]'><i className='fa-solid fa-circle-check'></i></span> 
                        <span className='text-[rgba(71,71,71,1)]'>Certificado de Autenticidade</span> 
                    </td>
                </tr>
                <tr>
                    <td className='flex gap-3'>
                        <span className='text-[rgba(0,99,154,1)]'><i className='fa-solid fa-bookmark'></i></span>
                        <span className='text-[rgba(71,71,71,1)]'>3 Fitilhos em Seda</span> 
                        </td>                
                    </tr>
                <tr>
                    <td className='flex gap-3'>
                        <span className='text-[rgba(0,99,154,1)]'><i className='fa-solid fa-star'></i></span>
                        <span className='text-[rgba(71,71,71,1)]'>Estojo Protetor de Couro</span> 
                    </td>
                </tr>
            </table>
        </div>
    )
}