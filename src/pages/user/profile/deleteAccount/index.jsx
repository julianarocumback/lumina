export default function DeleteAccount({setIsPurgeAccount}){
    return(
        <div className='flex flex-col md:flex-row gap-4 justify-between items-center w-full bg-white border border-gray-100 rounded-2xl shadow-xs p-6 cursor-pointer hover:bg-red-500/5 '  onClick={()=> setIsPurgeAccount(true)}>
            <div className='flex gap-4 justify-center md:w-2/3'>
                <div className='bg-red-300/20 w-12 h-12 flex flex-none justify-center items-center rounded-2xl text-red-800'><i class='fa-solid fa-trash'></i></div>
                <div>
                    <h3 className='font-semibold'>Apagar conta</h3>
                    <p className='text-xs text-gray-500'>Todos os dados serão excluídos</p>
                </div>
            </div>
        </div>
    )
}