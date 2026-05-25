export default function Box({produto}){
    if(!produto)return
    return (
        <div className="w-full  rounded-2xl overflow-hidden">
            <table className="w-full [&_td]:p-4 [&_tr]:odd:bg-white [&_tr]:even:bg-gray-50">
                <tr className=" ">
                    <td className="gap-3 flex">
                        <span className="text-[rgba(0,99,154,1)]"><i class="fa-solid fa-book"></i></span>
                        <span className="text-[rgba(71,71,71,1)]">{produto.nome}</span> 
                    </td>
                </tr>
                <tr className=" ">
                    <td className="gap-3 flex">
                        <span className="text-[rgba(0,99,154,1)]"><i class="fa-solid fa-circle-check"></i></span> 
                        <span className="text-[rgba(71,71,71,1)]">Certificado de Autenticidade</span> 
                    </td>
                </tr>
                <tr>
                    <td className="gap-3 flex">
                        <span className="text-[rgba(0,99,154,1)]"><i class="fa-solid fa-bookmark"></i></span>
                        <span className="text-[rgba(71,71,71,1)]">3 Fitilhos em Seda</span> 
                        </td>                
                    </tr>
                <tr>
                    <td className="gap-3 flex">
                        <span className="text-[rgba(0,99,154,1)]"><i class="fa-solid fa-star"></i></span>
                        <span className="text-[rgba(71,71,71,1)]">Estojo Protetor de Couro</span> 
                    </td>
                </tr>
            </table>
        </div>
    )
}