export default function Welcome({clientes}){
    return (
        <div className="border px-12 py-10 rounded-3xl flex gap-16 h-56 justify-between items-center">
            <div className="flex flex-col gap-4">
                <h2 className="text-5xl font-semibold">Bem-vinda de volta, {clientes.map(cliente => <span>{cliente.nome}</span>)}!</h2>
                <span className="text-lg">É um prazer ter você aqui novamente.</span>
            </div>
            <div className="border flex flex-col h-30 w-45 items-center justify-center gap-2 rounded-2xl">
                <span>LEITOR LUMINA</span>
                <div>
                    <span className="text-3xl font-bold">450 </span>
                    <span className="text-xl">pts</span>
                </div>
            </div>
        </div>
    )

}