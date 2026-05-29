export default function Address(){

    const enderecos = [
        {
            titulo: 'Casa',
            rua: 'Rua das Graças',
            numero: '777',
            bairro: 'Jardim das Oliveiras',
            cidade: 'São Paulo',
            estado: 'SP',
            cep: '01234-567',
            status: 'PRINCIPAL',
            icone: <i class="fa-solid fa-house-chimney"></i>,
            tom: 'blue'
        },
        {
            titulo: 'Trabalho',
            rua: 'Rua das Bençãos',
            numero: '111',
            bairro: 'Jardim Grande',
            cidade: 'São Paulo',
            estado: 'SP',
            cep: '01234-777',
            status: null,
            icone: <i class="fa-solid fa-briefcase"></i>,
            tom: 'gray'
        }
    ]

    return(
        <div className="flex flex-col gap-8 lg:gap-8 pt-20 pb-5 lg:py-30 pl-20 pr-5 lg:pl-100 lg:pr-20 h-full">
            <h1 className="text-2xl font-semibold">Endereços</h1>
            {enderecos.map(endereco => {
                return (
                    <div className="bg-white p-6 rounded-2xl gap-4 flex flex-col">
                        <div className="flex gap-4 justify-between items-center">
                            <div className="flex items-center gap-4">
                                <div className={`flex justify-center items-center text-${endereco.tom}-800 bg-${endereco.tom}-300 h-10 w-10 rounded-full`}>{endereco.icone}</div>
                                <div>
                                    <p className="text-lg font-semibold">{endereco.titulo}</p>
                                    {endereco.status && <span className="text-xs font-semibold text-red-800 bg-red-300/30 px-2 py-0.5 rounded-full">{endereco.status}</span>}
                                </div>
                            </div>
                            <div className="flex gap-4 text-gray-500">
                                <div><i class="fa-solid fa-pencil"></i></div>
                                <div><i class="fa-solid fa-trash"></i></div>
                            </div>
                        </div>

                        <div>
                            <p>{endereco.rua}, {endereco.numero} - {endereco.bairro}, {endereco.cidade} - {endereco.estado}, {endereco.cep}</p>
                        </div>
                    </div>
                )
            })}

            <div className="flex gap-2 border rounded-xl h-15 justify-center items-center text-blue-700 font-semibold border-dashed border-gray-400">
                <div><i class="fa-solid fa-location-dot"></i></div>
                Adicionar outro endereço
            </div>

        </div>
    )
}