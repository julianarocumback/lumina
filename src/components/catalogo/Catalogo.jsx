import { useState, useEffect, useRef } from 'react'
import { supabase } from '../../supabaseClient'
import Order from './order/Order'
import Filter from './filter/Filter'
import Products from './products/Products'
import Search from './search/Search'
import {motion, AnimatePresence} from 'framer-motion'


export default function Catalogo(){

    const [produtos, setProdutos] = useState([])

    const [category, setCategory] = useState('Todos')
    const [ordem, setOrdem] = useState('padrao')
    const [quantity, setQuantity] = useState(15)

    const [query, setQuery] = useState('')
    const [isFilterOpen, setIsFilterOpen] = useState(false)
    const [isStuck, setIsStuck] = useState(false);
    const stickyRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
        if (stickyRef.current) {
            // Pega a distância do elemento até o topo da janela
            const { top } = stickyRef.current.getBoundingClientRect();
            
            // Se a posição "top" for igual ou menor do que a posição sticky definida (ex: 0px do topo)
            // O valor 0 representa o ponto em que ele "trava" na tela
            setIsStuck(top <= 0);
        }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    
    
    useEffect(() => {
        async function getProdutos() {
            try {
     
                const {data, error} = await supabase
                .from('produtos')
                .select('*, livros(*)')
                if (error) throw error
                setProdutos(data)
            } catch (error) {
                console.error('Erro ao buscar livros:', error.message)
            } finally {
               ''
            }
        }
        getProdutos()
    },[])
    
    
    const filteredProducts = produtos.filter(item => {
        const normalizedName = item.nome.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim()
        const normalizedAuthor = item.livros.autor.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim()
        const normalizedQuery = query.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim()
        
        if(normalizedName.includes(normalizedQuery) || normalizedAuthor.includes(normalizedQuery) ) return item
    }).filter(item => category === 'Todos' || item.categoria === category)
    .toSorted((a,b) => {
        const valorA = Number(a.valor)
        const valorB = Number(b.valor)
        if (ordem === 'menor-valor') return valorA - valorB
        if (ordem === 'maior-valor') return valorB - valorA
        return a.nome.localeCompare(b.nome)
    }).slice(0, quantity)
    
    return (
        <section className='relative px-4 py-12 sm:px-8 md:px-16 lg:py-30 xl:px-32 2xl:px-64'>
            <AnimatePresence>
                <div ref={stickyRef} className={`sticky -mt-21 sm:hidden flex flex-col z-20 left-0 top-0 h-fit w-full pt-4 items-center ${isStuck && 'bg-white'}`}>
                    <div className='flex gap-4 w-full'>
                        <Search setQuery={setQuery} query={query} filteredProducts={filteredProducts}/>
                        <button onClick={() => setIsFilterOpen(prev => !prev)} className=' shadow p-2 rounded-xl bg-white'><i className='fa-solid fa-filter'></i></button>
                    </div>
                    <div className='w-full gap-4 flex flex-col py-4'>
                        <motion.div className='w-full ' initial={{opacity:0, y:-30}} layout animate={{opacity: 1, y:0}} transition={{ type: 'tween', duration: 0.5 }} exit={{opacity:0, y:30}}>
                            {isFilterOpen && <Filter lista={produtos} category={category} setCategory={setCategory}/>}

                        </motion.div>
                        <motion.div  initial={{opacity:0, y:-30}} layout animate={{opacity: 1, y:0}} transition={{ type: 'tween', duration: 0.5 }} exit={{opacity:0, y:30}} className='w-full '>
                            <Order setOrdem={setOrdem} ordemAtiva={ordem} itemCount={filteredProducts.length} style={'flex justify-between'}/>
                        </motion.div>


                    </div>
                </div>

            </AnimatePresence>
           
         

            <div className='relative flex w-full sm:gap-8 xl:gap-16 '>
                {/* sidebar */}
                <div className='sm:sticky sm:top-15 lg:top-30 hidden sm:flex sm:flex-col gap-4 lg:p-6 h-fit border border-gray-100 shadow bg-gray-50 rounded-2xl sm:w-1/3 md:w-1/4 p-4'>
                    <h3 className='font-semibold text-2xl'>Catálogo</h3>
                    <div className='relative w-full flex flex-col gap-2'>
                        <h4 className='text-lg font-semibold'>Pesquisa</h4>
                        <Search setQuery={setQuery} query={query} filteredProducts={filteredProducts}/>
                    </div>
                    <div className='h-0.5 w-full border border-gray-200'></div>
                    <div className='flex flex-col gap-2'>
                        <h4 className='text-lg font-semibold'>Categorias</h4>
                        <Filter lista={produtos} category={category} setCategory={setCategory}/>

                    </div>
                </div>

                {/* Products */}
                <div className='flex flex-col gap-6 w-full sm:w-2/3 md:w-3/4 sm:-top-12 lg:-top-30 relative'>
                    <div className='z-10 bg-white top-0 pt-0 lg:pt-32 sm:pt-14 sticky h-fit pb-2 w-full py-8'>
                        <Order setOrdem={setOrdem} ordemAtiva={ordem} itemCount={filteredProducts.length} style={'hidden sm:flex'}/>
                        <div className='hidden sm:block h-[0.1px] w-full bg-gray-200'></div>
                    </div>
                    <Products filteredProducts={filteredProducts} quantity={quantity} setQuantity={setQuantity}/>
                </div>
            </div>
        </section>
    )
}