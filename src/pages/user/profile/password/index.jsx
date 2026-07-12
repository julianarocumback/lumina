export default function password(){
    return(
        <div className="bg-white border border-gray-100 rounded-2xl shadow-xs p-6 flex lg:justify-between items-center">
                        <div className="flex gap-8 items-center">
                            <div className="bg-blue-300/20 w-12 h-12 flex justify-center items-center rounded-2xl text-blue-800"><i class="fa-solid fa-lock"></i></div>
                            <div>
                                <h3 className="font-semibold">Alterar Senha</h3>
                                <p className="text-xs text-gray-500">Última alteração há 3 meses</p>
                            </div>
                        </div>
                        <div>
                            <button className="bg-blue-500 px-4 py-2 rounded-full font-semibold text-white">Alterar</button>
                        </div>
                        
                    </div>
    )
}