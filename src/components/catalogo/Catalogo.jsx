import { useState, useEffect } from "react"
import { supabase } from "../../supabaseClient"
import Order from "./order/Order"
import Filter from "./filter/Filter"
import Products from "./products/Products"

export default function Catalogo(){

    const [produtos, setProdutos] = useState([])
    const [carregando, setCarregando] = useState(true)

    const [categoria, setCategoria] = useState('Todos')
    const [ordem, setOrdem] = useState('padrao')
    const [quantidade, setQuantidade] = useState(2)


    useEffect(() => {
        async function getProdutos() {
            try {
                setCarregando(true)
                const {data, error} = await supabase
                .from('produtos')
                .select('id,nome,ano,valor,img_url,categoria,livros(autor,tipo_capa,tipo_folha,quantidade_paginas,isbn)')
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

    return (
        <section className="px-4">
            <div className="flex lg:px-80 py-30 w-ful">
                <div className="hidden lg:flex lg:flex-col lg:p-6">
                    <h3 className="text-2xl font-semibold">Catálogo</h3>
                    <Filter lista={produtos} categoria={categoria} setCategoria={setCategoria}/>
                </div>
                <div className="flex flex-col gap-6 w-full">
                    <Order setOrdem={setOrdem} ordemAtiva={ordem} quantidade={lista.length}/>
                    <div className="h-[0.1px] w-full bg-gray-200"></div>
                    <Products produtos={lista} carregar={carregando} setQuantidade={setQuantidade} tamanho={produtos.length}/>
                </div>
            </div>
        </section>
    )
}