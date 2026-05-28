export default function Pedidos(){
    const pedidos = [
        {
            capa: 'capa',
            nome: 'aaa',
            numero: 'numero',
            valor: 123,
            status: 'Entregue',
            dataCompra: '12/12/26'
        },
        {
            capa: 'capa',
            nome: 'aaa',
            numero: 'numero',
            valor: 123,
            status: 'Entregue',
            dataCompra: '12/12/26'
        },
        {
            capa: 'capa',
            nome: 'aaa',
            numero: 'numero',
            valor: 123,
            status: 'Entregue',
            dataCompra: '12/12/26'
        }
    ]

    return (
        <div className="flex flex-col lg:h-screen  gap-4 lg:gap-8 pt-20 pb-5 lg:py-30 pl-20 pr-5 lg:pl-100 lg:pr-20">
            <div className="flex flex-col w-full h-full gap-8">
                <div>
                    <h2 className="text-2xl font-semibold">Meus Pedidos</h2>
                    <p>Acompanhe suas jornadas literárias. Aqui você encontra o histórico de todas as suas aquisições e o status atual das suas entregas.</p>

                </div>

                <div className="flex flex-col gap-4">
                    <div className="">
                        <input className="border w-full p-2 rounded-xl" type="text" placeholder="Busque por número do pedido ou livro..."/>
                    </div>

                    <div className="flex gap-4 overflow-x-auto">
                        <button className="border">Todos</button>
                        <button className="border">Processando</button>
                        <button className="border">Em Transporte</button>
                        <button className="border">Entregues</button>
                        <button className="border">Cancelados</button>
                    </div>

                </div>

                <div className="flex flex-col gap-4">
                    {pedidos.map(pedido => {
                        return (
                            <div className="border rounded-xl p-4">
                                <div className="flex gap-4">
                                    <p>#LM9942</p>
                                    <span>ENTREGUE</span>
                                    <p>Realizado em 12 out 2026</p>
                                </div>

                                <div className="flex justify-between items-center">
                                    <div>
                                        produtos
                                    </div>
                                    <div className="flex flex-col">
                                        <button>Ver detalhes</button>
                                        <button>
                                            Comprar novamente
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    {pedido.valor.toLocaleString('BRL', {style: 'currency', currency: 'BRL'})}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}