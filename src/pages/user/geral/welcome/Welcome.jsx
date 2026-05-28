export default function Welcome({dadosCliente}){
    return (
        <div className="shadow-xs lg:px-12 lg:py-10 rounded-3xl flex h-30 lg:h-56 items-center bg-[radial-gradient(at_0%_0%,#cee5ff90,transparent_50%),radial-gradient(at_100%_100%,#fb923c20,transparent_50%),radial-gradient(at_0%_100%,#ec489910,transparent_50%),radial-gradient(at_100%_0%,#22c55e10,transparent_50%)] justify-center">
            <div className="flex flex-col lg:gap-4 text-center ">
                <h2 className="text-lg lg:text-5xl font-semibold">Bem-vinda de volta, {dadosCliente?.nome}!</h2>
                <span className="text-xs lg:text-lg">É um prazer ter você aqui novamente.</span>
            </div>
        </div>
    )

}