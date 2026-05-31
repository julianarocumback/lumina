import { useOutletContext } from 'react-router-dom'

export default function Pedidos(){
    const {dadosCliente} = useOutletContext()


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

    const categorias = [
        {
            status: 'Todos',
            ativo: true
        },
        {
            status: 'Processando',
            ativo: false
        },
        {
            status: 'Em transporte',
            ativo: false
        },
        {
            status: 'Entregue',
            ativo: false
        },
        {
            status: 'Cancelado',
            ativo: false
        }
    ]

    const produtos = [
        {
            imagem: ''

        },
    ]



    return (
        <div className="flex flex-col gap-4 lg:gap-8 pt-20 pb-5 lg:py-30 pl-20 pr-5 lg:pl-100 lg:pr-20">
            <div className="flex flex-col w-full h-full gap-8">
                <div>
                    <h2 className=" text-2xl font-semibold">Meus Pedidos</h2>
                    <p className="hidden lg:block">Acompanhe suas jornadas literárias. Aqui você encontra o histórico de todas as suas aquisições e o status atual das suas entregas.</p>

                </div>

                <div className="flex flex-col gap-8 relative">
                    <div className="relative">
                        <div className="absolute top-3 left-3 text-gray-900"><i class="fa-solid fa-magnifying-glass"></i></div>
                        <input className=" bg-gray-200 w-full py-3 pl-10 pr-2 rounded-3xl" type="text" placeholder="Busque por número do pedido ou livro..."/>
                    </div>

                    <div className="text-nowrap flex gap-4 overflow-x-auto no-scrollbar ">
                        {categorias.map(categoria => {
                            return (
                                <button className={`border border-gray-100 py-2 px-4 font-semibold rounded-full  ${categoria.ativo? 'bg-blue-400 text-white ':'bg-white'}`}>{categoria.status}</button>
                            )
                        })}
                    </div>


                </div>

                <div className="flex flex-col gap-4">
                    {dadosCliente?.pedidos?.map(pedido => {
                        return (
                            <div className="rounded-3xl p-8 bg-white border border-gray-100 shadow-xs gap-4 flex flex-col ">

                                <div className="flex justify-between items-end">
                                    <div className="flex flex-col gap-4 ">
                                        <div className="flex gap-4 lg:justify-start">
                                            <p className="text-gray-500 font-semibold">#LM9942</p>
                                            <span className="bg-green-300/30 text-green-700 text-xs rounded-full py-1 px-3 font-semibold ">{pedido.status}</span>
                                            <p className="hidden lg:block font-light">Realizado em 12 out 2026</p>
                                        </div>

                                        <p className="font-light lg:hidden">Realizado em 12 out 2026</p>

                                        <div className="flex items-center gap-4">
                                            <div>
                                                <div className="h-20 w-15 rounded-xl bg-gray-400"> </div>
                                            </div>
                                            <div>
                                                <div className="h-20 w-15 rounded-xl bg-gray-400"> </div>
                                            </div>
                                            <div>
                                                <div className="h-20 w-15 rounded-xl bg-gray-400"> </div>
                                            </div> 
                                        </div>
                                    </div>
                                    
                                    <div className="lg:flex flex-col gap-4 hidden">
                                        <button className="bg-gray-200 font-semibold  rounded-3xl text-xs py-2 px-4 lg:text-base lg:py-2 lg:px-4">Ver detalhes</button>
                                        <button className="bg-blue-900 font-semibold text-white rounded-3xl text-xs py-2 px-4 lg:text-base lg:py-2 lg:px-4">
                                            Comprar novamente
                                        </button>
                                    </div>
                                </div>
                                

                                <div className="font-semibold flex gap-8 justify-between items-center">
                                    <div>
                                        {/* {pedido.valor.toLocaleString('BRL', {style: 'currency', currency: 'BRL'})} */}
                                    </div>
                                    <button className="bg-gray-200 font-semibold  rounded-3xl text-xs py-2 px-4 lg:text-base lg:py-2 lg:px-4 lg:hidden">Ver detalhes</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}