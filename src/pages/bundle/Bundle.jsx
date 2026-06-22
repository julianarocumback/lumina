import { useState, useEffect } from 'react'
import { supabase } from '../../supabaseClient'
import { useParams } from 'react-router-dom';
import {useCart }from '../../contexts/CartContext/CartContext'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

export default function Bundle() {

    const [products, setProducts] = useState([])
    const {items, addToCart} = useCart()
    const {link} = useParams()
    
    useEffect(()=>{
        async function fetchProducts() {
            const { data, error} = await supabase
            .from('produtos')
            .select('*')
            
            if(data){
                setProducts(data)
            }
            if(error){
                console.error('Erro ao buscar produtos:', error.message);
                return
            }
        }
        fetchProducts()
        
    }, [])

    const tons = [
        {
            tom: 'tons-azul',
            titulo:'Profundidade da Palavra',
            substitulo: 'Um conjunto completo de bíblias de estudo unindo as melhores bíblias para que você tenha uma imersão profunda no conhecimento bíblico.',
            tituloPacote: 'Bundle: Trilogia Azul',
            color: 'blue',
            livros: [
                {id:0, titulo: 'Bíblia de Estudo NAA', editora: 'SBB', edicao: 'Letra Grande - Coedição Editora Cultura Crstã', idioma: 'Português', paginas: '2496', ISBN10: '8531117461', ISBN13: '978-8531117466', peso: '1.62', dimensoes: '17 x 6 x 25', recursos: {}} ,
                {id:1, titulo: 'Bíblia de Genebra Reformados'},
                {id:2, titulo: 'Bíblia de Estudo e Aplicação Pessoal'}
            ]
                
        },
        {
            tom: 'tons-rosa',
            titulo:'Profundidade',
            substitulo: 'Um conjunto completo de bíblias de estudo unindo as melhores bíblias para que você tenha uma imersão profunda no conhecimento bíblico.',
            tituloPacote: 'Bundle: Trilogia Rosa',
            color: 'pink',
            livros: [
                {titulo: 'Mananciais no Deserto'} ,
                {titulo: 'Reflexões Diárias com C.S. Lewis'},
                {titulo: 'Manhãs e Noites'}

            ]
        },
        {
            tom: 'tons-amarelo',
            titulo:'Profundidade',
            substitulo: 'Um conjunto completo de bíblias de estudo unindo as melhores bíblias para que você tenha uma imersão profunda no conhecimento bíblico.',
            tituloPacote: 'Bundle: Trilogia Amarelo',
            color: 'yellow',
            livros: [
                {id:0, titulo: 'Você é Especial'} ,
                {titulo: 'Bíblia para Crianças'},
                {titulo: 'Pãozinho Diário Kids'}
            ]
        },
        {
            tom: 'tons-verde',
            titulo:'Profundidade',
            substitulo: 'Um conjunto completo de bíblias de estudo unindo as melhores bíblias para que você tenha uma imersão profunda no conhecimento bíblico.',
            tituloPacote: 'Bundle: Trilogia Verde',
            color: 'green',
            livros: [
                {titulo: 'Institutas da Região Cristã'} ,
                {titulo: 'Cristianismo Puro e Simples'},
                {titulo: 'A Cidade de Deus'}
            ]
        },
        
    ]
    console.log(tons.filter(tom => tom.tom === link).map(item => item.livros).map(item => item))
    // console.log(products)
    // console.log(items)
    // console.log(link)
    // console.log(products.filter(product => product.tom === link))

    function handleAddCart(){
        const product = products.filter(product => product.tom === link).map(product => {
            addToCart(product)

        })
    }
    

    return (
        <div className='bg-gray-100 h-full w-full '>
            <Header/>
            {tons.filter(tom => tom.tom === link).map(item => {
                return(
                    <div className='flex flex-col px-64 py-32 gap-8'>
                        <div className='flex flex-col text-center px-80'>
                            <h1 className='text-3xl font-semibold'>{item.titulo}</h1>
                            <p className=''>{item.substitulo}</p>
                        </div>

                        {/* CARD */}
                        {/* IMAGES */}
                        <div className='border-gray-100 bg-white rounded-2xl flex justify-center gap-8 p-8'>
                                    <div className='w-1/2 relative flex items-center '>
                            
                            {products.filter(item => item.tom === link).map(item => {
                                return (
                                    <div className={`relative  left-10`}>
                                        <div className='h-50 '>
                                            <img className='h-full' src={item.img_url} alt="" />
                                        </div>
                                    </div>    
                                )
                            })}
                            </div>

                            {/* INFO */}
                            <div className='flex flex-col w-1/2 gap-4'>
                            <div className=''>
                                <h2 className='text-2xl font-semibold'>{item.tituloPacote}</h2>
                                <p className='text-lg font-semibold text-blue-600'>O que vem no pacote</p>
                            </div>
                            <div className='flex flex-col gap-2'>
                                    {item.livros.map(item => {
                                      
                                            return(
                                            <div className='flex gap-2'>
                                                <div className={`text-blue-600`}> <i class="fa-regular fa-circle-check"></i></div>
                                                {item.titulo}
                                            </div>

                                            )
                                            
                                        }
                                    )}
                               
                
                            </div>
                            <div className='text-2xl font-semibold'>{products?.filter(product => product.tom === link).map(product => product.valor).reduce((a,b) => a + b,0).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</div>
                            <button onClick={handleAddCart} className='bg-pink-600 rounded-full p-2 text-lg text-white font-semibold flex gap-2 justify-center'>
                                <div><i class="fa-solid fa-cart-arrow-down"></i></div>
                                <div>Adicionar ao carrinho</div>
                                
                            </button>
                            </div>
                        </div>
                        

                        

                    </div>
                )
            })}
             
            
            
            <div className='bg-white w-full flex flex-col gap-4 px-64 py-16'>
                <h2 className='text-2xl font-semibold'>especificações</h2>
                <div className='flex justify-between w-full gap-8'>

                    {tons.filter(tom => tom.tom === link).flatMap(item => item.livros).map(item => {
                        return(
                            <div className='w-full gap-2 flex flex-col'>
                                <h3 className='text-lg font-semibold'>{item.titulo}</h3>
                            

                                <div>
                                    <div><span  className='font-semibold'>Editora:</span>  {item.editora}</div>
                                    <div><span  className='font-semibold'>Edição:</span>  {item.edicao}</div>
                                    <div><span  className='font-semibold'>Idioma:</span>  {item.idioma}</div>
                                    <div><span  className='font-semibold'>Páginas:</span>  {item.paginas}</div>
                                    <div><span  className='font-semibold'>ISBN-10:</span>  {item.ISBN10}</div>
                                    <div><span  className='font-semibold'>ISBN-13:</span>  {item.ISBN13}</div>
                                    <div><span  className='font-semibold'>Peso:</span>  {item.peso}</div>
                                    <div><span  className='font-semibold'>Dimensões:</span>  {item.dimensoes}</div>


                                </div>
                                
                            
                            </div>
                        )
                    })}
                    
                    
                    
                    


                    <div>

                    </div>

                    <div>


                    </div>

                    <div>


                    </div>

















                </div>
                

                
         
            </div>
            
                    <Footer/>
        </div>
    )
}