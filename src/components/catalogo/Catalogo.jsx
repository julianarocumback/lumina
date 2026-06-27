import { useState, useEffect } from "react"
import { supabase } from "../../supabaseClient"
import Order from "./order/Order"
import Filter from "./filter/Filter"
import Products from "./products/Products"
import {MobileSearch, DesktopSearch} from './pesquisa/Pesquisa'

export default function Catalogo(){

    const [produtos, setProdutos] = useState([])
    const [carregando, setCarregando] = useState(true)

    const [categoria, setCategoria] = useState('Todos')
    const [ordem, setOrdem] = useState('padrao')
    const [quantidade, setQuantidade] = useState(3)



    useEffect(() => {
        async function getProdutos() {
            try {
                setCarregando(true)
                const {data, error} = await supabase
                .from('produtos')
                .select('*, livros(*)')
                if (error) throw error
                setProdutos(data)
            } catch (error) {
                console.error('Erro ao buscar livros:', error.message)
            } finally {
                setCarregando(false)
            }
        }
        getProdutos()
    },[])

    const [pesquisa, setPesquisa] = useState('')


    const lista = produtos
    .filter((_,index) => index < quantidade)
    .filter(item => categoria === 'Todos' || item.categoria === categoria)
    .toSorted((a,b) => {
        const valorA = Number(a.valor)
        const valorB = Number(b.valor)
        if (ordem === 'menor-valor') return valorA - valorB
        if (ordem === 'maior-valor') return valorB - valorA
        return a.nome.localeCompare(b.nome)
    })

    const pesquisaLista = produtos.filter(item => item.nome === pesquisa).filter(item => categoria === 'Todos' || item.categoria === categoria)
    .toSorted((a,b) => {
        const valorA = Number(a.valor)
        const valorB = Number(b.valor)
        if (ordem === 'menor-valor') return valorA - valorB
        if (ordem === 'maior-valor') return valorB - valorA
        return a.nome.localeCompare(b.nome)
    })

    
    

    return (
        <section className="px-5 relative">
            <MobileSearch lista={produtos} categoria={categoria} setCategoria={setCategoria} setPesquisa={setPesquisa} pesquisa={pesquisa}/>
            <div className="flex lg:px-80 py-12 lg:py-30 w-full">
                <div className="hidden lg:flex lg:flex-col lg:p-6 gap-4">
                    <h3 className="text-2xl font-semibold">Catálogo</h3>
                    <div>
                        <h4>Pesquisa</h4>
                        <input className="border rounded-lg" onChange={(e)=> setPesquisa(e.target.value)} type="text" />
                    </div>
                    <div className="h-0.5 border border-gray-200 w-50"></div>
                    <Filter lista={produtos} categoria={categoria} setCategoria={setCategoria}/>
                </div>
                    {pesquisa === '' ? 
                    <div className="flex flex-col gap-6 w-full">
                        <Order setOrdem={setOrdem} ordemAtiva={ordem} quantidade={lista.length}/>
                        <div className="h-[0.1px] w-full bg-gray-200"></div>
                        <Products produtos={lista} carregar={carregando} setQuantidade={setQuantidade} tamanho={produtos.length}/>
                    </div>
                    : 
                    <div className="flex flex-col gap-6 w-full">
                        <Order setOrdem={setOrdem} ordemAtiva={ordem} quantidade={pesquisaLista.length}/>
                        <div className="h-[0.1px] w-full bg-gray-200"></div>
                        <DesktopSearch pesquisaLista={pesquisaLista}/>
                    </div>}
                </div>
            
        </section>
    )
}