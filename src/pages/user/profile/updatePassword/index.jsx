export default function UpdatePassword({setIsUpdatePassword}){
    return(
        <div className='flex flex-col md:flex-row gap-4 justify-between items-center w-full bg-white border border-gray-100 rounded-2xl shadow-xs p-6 cursor-pointer hover:bg-blue-500/5 '  onClick={()=> setIsUpdatePassword(true)}>
            <div className='flex gap-4 justify-center md:w-2/3'>
                <div className='bg-blue-300/20 w-12 h-12 flex justify-center items-center rounded-2xl text-blue-800'><i class='fa-solid fa-lock'></i></div>
                <div>
                    <h3 className='font-semibold'>Alterar Senha</h3>
                    <p className='text-xs text-gray-500'>Última alteração há 3 meses</p>
                </div>
            </div>
        </div>
    )
}