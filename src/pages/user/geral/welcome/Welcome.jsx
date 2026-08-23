export default function Welcome({dadosCliente}){
    return (
        // Hero Banner
        <div className='flex justify-center items-center h-30 bg-[radial-gradient(at_0%_0%,#cee5ff90,transparent_50%),radial-gradient(at_100%_100%,#fb923c20,transparent_50%),radial-gradient(at_0%_100%,#ec489910,transparent_50%),radial-gradient(at_100%_0%,#22c55e10,transparent_50%)] rounded-3xl shadow-xs lg:h-56 lg:py-10 lg:px-12'>
            {/* Welcome message wrapper */}
            <div className='flex flex-col text-center lg:gap-4'>
                {/* Personalized greeting */}
                <h2 className='text-lg font-semibold lg:text-5xl'>Bem-vinda de volta, {dadosCliente?.nome}!</h2>
                <span className='text-xs lg:text-lg'>É um prazer ter você aqui novamente.</span>
            </div>
        </div>
    )
}