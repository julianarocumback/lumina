import { useState, useEffect } from 'react'
import { supabase } from '../../supabaseClient'
import Order from './order/Order'
import Filter from './filter/Filter'
import Products from './products/Products'
import {MobileSearch, DesktopSearch} from './pesquisa/Pesquisa'

export default function Catalogo(){

    const [produtos, setProdutos] = useState([])
    const [carregando, setCarregando] = useState(true)

    const [categoria, setCategoria] = useState('Todos')
    const [ordem, setOrdem] = useState('padrao')
    const [quantidade, setQuantidade] = useState(15)

    const [pesquisa, setPesquisa] = useState('')
    console.log(produtos.length)
    
    
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
    
    
    const pesquisaLista = produtos.filter(item => {
        const nomeArrumado = item.nome.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim()
        const autorFormatado = item.livros.autor.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim()
        const pesquisaArrumada = pesquisa.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim()
        
        if(nomeArrumado.includes(pesquisaArrumada) || autorFormatado.includes(pesquisaArrumada) ) return item
    }).filter(item => categoria === 'Todos' || item.categoria === categoria)
    .toSorted((a,b) => {
        const valorA = Number(a.valor)
        const valorB = Number(b.valor)
        if (ordem === 'menor-valor') return valorA - valorB
        if (ordem === 'maior-valor') return valorB - valorA
        return a.nome.localeCompare(b.nome)
    }).slice(0, quantidade)
    
    
    console.log('pesquisa', pesquisaLista.length)
    console.log('produtos', produtos?.length)
    
    return (
        <section className='relative px-4 py-12 sm:px-8 md:px-16 lg:py-30 xl:px-32 2xl:px-64'>
                <MobileSearch
                lista={produtos}
                categoria={categoria}
                setCategoria={setCategoria}
                setPesquisa={setPesquisa}
                pesquisa={pesquisa}
                setOrdem={setOrdem} ordem={ordem} pesquisaLista={pesquisaLista}
                />
         

            <div className='relative flex w-full sm:gap-8 xl:gap-16 '>
                {/* sidebar */}
                <div className='sm:sticky sm:top-15 lg:top-30 hidden sm:flex sm:flex-col gap-4 lg:p-6 h-fit border border-gray-100 shadow bg-gray-50 rounded-2xl sm:w-1/3 md:w-1/4 p-4'>
                    <h3 className='font-semibold text-2xl'>Catálogo</h3>
                    <div className='relative w-full flex flex-col gap-2'>
                        <h4 className='text-lg font-semibold'>Pesquisa</h4>
                        <DesktopSearch setPesquisa={setPesquisa} pesquisa={pesquisa} pesquisaLista={pesquisaLista}/>
                    </div>
                    <div className='h-0.5 w-full border border-gray-200'></div>
                    <div className='flex flex-col gap-2'>
                        <h4 className='text-lg font-semibold'>Categorias</h4>
                        <Filter lista={produtos} categoria={categoria} setCategoria={setCategoria}/>

                    </div>
                </div>

                {/* produtos */}
                <div className='flex flex-col gap-6 w-full sm:w-2/3 md:w-3/4 sm:-top-12   lg:-top-30 relative -top-6'>
                <div className='z-10 bg-white top-0 pt-16 lg:pt-32 sm:pt-14 sticky h-fit pb-2 w-full py-8'>
                    <Order setOrdem={setOrdem} ordemAtiva={ordem} quantidade={pesquisaLista.length} style={'hidden sm:flex'}/>
                    <div className='hidden sm:block h-[0.1px] w-full bg-gray-200'></div>

                </div>
                    <Products pesquisaLista={pesquisaLista} quantidade={quantidade} setQuantidade={setQuantidade} produtos={produtos} categoria={categoria}/>
                </div>
            </div>
        </section>
    )
}