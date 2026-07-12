export default function DeleteAccount(){
    return(
        <div className="bg-white border border-gray-100 rounded-2xl shadow-xs p-6 flex lg:justify-between items-center">
                        <div className="flex gap-8 items-center">
                        <div className="bg-red-300/20 w-12 h-12 flex justify-center items-center rounded-2xl text-red-800"><i class="fa-solid fa-trash"></i></div>
                        <div>
                            <h3 className="font-semibold">Apagar conta</h3>
                            <p className="text-xs text-gray-500">Todos os dados serão excluídos</p>

                        </div>

                        </div>
                        <div>
                            <button className="bg-blue-500 px-4 py-2 rounded-full font-semibold text-white">Ativar</button>
                        </div>
                        
                    </div>
    )
}