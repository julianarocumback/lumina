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
    const [quantidade, setQuantidade] = useState(15)

    const [pesquisa, setPesquisa] = useState('')


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



    const listaFiltrada = produtos
    .filter(item => categoria === 'Todos' || item.categoria === categoria)
    .toSorted((a,b) => {
        const valorA = Number(a.valor)
        const valorB = Number(b.valor)
        if (ordem === 'menor-valor') return valorA - valorB
        if (ordem === 'maior-valor') return valorB - valorA
        return a.nome.localeCompare(b.nome)
    })
    const lista = listaFiltrada.slice(0, quantidade)

    const pesquisaLista = produtos.filter(item => {
        const nomeArrumado = item.nome.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim()
        const autorFormatado = item.livros.autor.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim()

        if(nomeArrumado.includes(pesquisa) || autorFormatado.includes(pesquisa) ) return item
    }).filter(item => categoria === 'Todos' || item.categoria === categoria)
    .toSorted((a,b) => {
        const valorA = Number(a.valor)
        const valorB = Number(b.valor)
        if (ordem === 'menor-valor') return valorA - valorB
        if (ordem === 'maior-valor') return valorB - valorA
        return a.nome.localeCompare(b.nome)
    })

    const handleCleanSearch = () => {
        setPesquisa('')
    }
    
    

    return (
        <section>
            <MobileSearch lista={produtos} categoria={categoria} setCategoria={setCategoria} setPesquisa={setPesquisa}  pesquisa={pesquisa}/>
            <div className="flex lg:px-70 py-12 lg:py-30 w-full">
                <div className="hidden lg:flex lg:flex-col lg:p-6 gap-4">
                    <h3 className="text-2xl font-semibold">Catálogo</h3>
                    <div className="relative w-full ">
                        <h4>Pesquisa</h4>
                        <div className='w-full relative flex items-center '>
                            <input className="border rounded-lg px-2" onChange={(e)=> setPesquisa(e.target.value)} value={pesquisa} type="text" />
                    {pesquisa && <button onClick={handleCleanSearch} className='absolute hover:text-red-500 transition-all right-32 cursor-pointer z-50 '><i className="fa-solid fa-xmark" ></i></button>}


                        </div>

                    </div>
                    <div className="h-0.5 border border-gray-200 w-50"></div>
                    <Filter lista={produtos} categoria={categoria} setCategoria={setCategoria}/>
                </div>
                    {pesquisa === '' ? 
                    <div className="flex flex-col gap-6 w-full">
                        <Order setOrdem={setOrdem} ordemAtiva={ordem} quantidade={lista.length}/>
                        <div className="h-[0.1px] w-full bg-gray-200"></div>
                        <Products produtos={lista} listaFiltrada={listaFiltrada.length} categoria={categoria.length} carregar={carregando} setQuantidade={setQuantidade} tamanho={produtos.length}/>
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