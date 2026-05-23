export default function FavoritesPreview(){
    const favoritos = [
        {
            imagem: '',
            nome: 'Teste',
            valor: 50
        },
        {
            imagem: '',
            nome: 'Teste',
            valor: 50
        },
        {
            imagem: '',
            nome: 'Teste',
            valor: 50
        },
        {
            imagem: '',
            nome: 'Teste',
            valor: 50
        },
        {
            imagem: '',
            nome: 'Teste',
            valor: 50
        },

    ]

    return (
        <div className="h-110 rounded-3xl w-1/4 bg-white p-8 shadow-lg flex flex-col gap-4">
            <div className="flex justify-between">
                <h3 className="font-semibold text-lg">Favoritos recentes</h3>
            </div>

            <div className="flex flex-col h-full justify-between">    
                {favoritos.map(favorito => {
                    return(
                    <div className="flex gap-4 items-center">
                        <div className="border h-12 w-12 rounded-xl">
                            {favorito.imagem}
                        </div>
                        <div className="">
                            <p className="font-semibold">{favorito.nome}</p>
                            <p className="text-blue-500 font-semibold">{favorito.valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>
                        </div>

                    </div>
                    )


                })}             
            </div>
        </div>
    )

}