import { useState, useEffect } from 'react'
import { supabase } from '../../supabaseClient'
import { useParams } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext/CartContext'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

export default function Bundle() {
    const [products, setProducts] = useState([])
    const { addToCart } = useCart()
    const { link } = useParams()

    useEffect(() => {
        async function fetchProducts() {
            const { data, error } = await supabase
                .from('produtos')
                .select('*')
            
            if (data) {
                setProducts(data)
            }
            if (error) {
                console.error('Erro ao buscar produtos:', error.message);
                return
            }
        }
        fetchProducts()
    }, [])

    const tons = [
        {
            tom: 'tons-azul',
            titulo: 'Profundidade da Palavra',
            substitulo: 'Um conjunto completo de bíblias de estudo unindo as melhores bíblias para que você tenha uma imersão profunda no conhecimento bíblico.',
            tituloPacote: 'Bundle: Trilogia Azul',
            color: 'text-blue-600',
            colorGradient: '#3b82f620', // Azul com opacidade para o radial gradient
            livros: [
                { id: 0, titulo: 'Bíblia de Estudo NAA', editora: 'SBB', edicao: 'Letra Grande - Coedição Editora Cultura Crstã', idioma: 'Português', paginas: '2496', ISBN10: '8531117461', ISBN13: '978-8531117466', peso: '1.62', dimensoes: '17 x 6 x 25', recursos: {} },
                { id: 1, titulo: 'Bíblia de Genebra Reformados', editora: 'Cultura Cristã', edicao: 'Padrão', idioma: 'Português', paginas: 'N/A', ISBN10: 'N/A', ISBN13: 'N/A', peso: 'N/A', dimensoes: 'N/A' },
                { id: 2, titulo: 'Bíblia de Estudo e Aplicação Pessoal', editora: 'CPAD', edicao: 'Padrão', idioma: 'Português', paginas: 'N/A', ISBN10: 'N/A', ISBN13: 'N/A', peso: 'N/A', dimensoes: 'N/A' }
            ]
        },
        {
            tom: 'tons-rosa',
            titulo: 'Profundidade',
            substitulo: 'Um conjunto completo de bíblias de estudo unindo as melhores bíblias para que você tenha uma imersão profunda no conhecimento bíblico.',
            tituloPacote: 'Bundle: Trilogia Rosa',
            color: 'text-pink-600',
            colorGradient: '#ec489920', // Rosa com opacidade
            livros: [
                { titulo: 'Mananciais no Deserto', editora: 'Betânia', edicao: 'Padrão', idioma: 'Português', paginas: 'N/A', ISBN10: 'N/A', ISBN13: 'N/A', peso: 'N/A', dimensoes: 'N/A' },
                { titulo: 'Reflexões Diárias com C.S. Lewis', editora: 'Thomas Nelson', edicao: 'Padrão', idioma: 'Português', paginas: 'N/A', ISBN10: 'N/A', ISBN13: 'N/A', peso: 'N/A', dimensoes: 'N/A' },
                { titulo: 'Manhãs e Noites', editora: 'Fiel', edicao: 'Padrão', idioma: 'Português', paginas: 'N/A', ISBN10: 'N/A', ISBN13: 'N/A', peso: 'N/A', dimensoes: 'N/A' }
            ]
        },
        {
            tom: 'tons-amarelo',
            titulo: 'Profundidade',
            substitulo: 'Um conjunto completo de bíblias de estudo unindo as melhores bíblias para que você tenha uma imersão profunda no conhecimento bíblico.',
            tituloPacote: 'Bundle: Trilogia Amarelo',
            color: 'text-yellow-600',
            colorGradient: '#eab30820', // Amarelo com opacidade
            livros: [
                { id: 0, titulo: 'Você é Especial', editora: 'N/A', edicao: 'N/A', idioma: 'Português', paginas: 'N/A', ISBN10: 'N/A', ISBN13: 'N/A', peso: 'N/A', dimensoes: 'N/A' },
                { titulo: 'Bíblia para Crianças', editora: 'N/A', edicao: 'N/A', idioma: 'Português', paginas: 'N/A', ISBN10: 'N/A', ISBN13: 'N/A', peso: 'N/A', dimensoes: 'N/A' },
                { titulo: 'Pãozinho Diário Kids', editora: 'Publicações Pão Diário', edicao: 'Padrão', idioma: 'Português', paginas: 'N/A', ISBN10: 'N/A', ISBN13: 'N/A', peso: 'N/A', dimensoes: 'N/A' }
            ]
        },
        {
            tom: 'tons-verde',
            titulo: 'Profundidade',
            substitulo: 'Um conjunto completo de bíblias de estudo unindo as melhores bíblias para que você tenha uma imersão profunda no conhecimento bíblico.',
            tituloPacote: 'Bundle: Trilogia Verde',
            color: 'text-green-600',
            colorGradient: '#22c55e20', // Verde com opacidade
            livros: [
                { titulo: 'Institutas da Região Cristã', editora: 'Fiel', edicao: 'Padrão', idioma: 'Português', paginas: 'N/A', ISBN10: 'N/A', ISBN13: 'N/A', peso: 'N/A', dimensoes: 'N/A' },
                { titulo: 'Cristianismo Puro e Simples', editora: 'Thomas Nelson', edicao: 'Padrão', idioma: 'Português', paginas: 'N/A', ISBN10: 'N/A', ISBN13: 'N/A', peso: 'N/A', dimensoes: 'N/A' },
                { titulo: 'A Cidade de Deus', editora: 'N/A', edicao: 'N/A', idioma: 'Português', paginas: 'N/A', ISBN10: 'N/A', ISBN13: 'N/A', peso: 'N/A', dimensoes: 'N/A' }
            ]
        }
    ]

    function handleAddCart() {
        products.filter(product => product.tom === link).forEach(product => {
            addToCart(product)
        })
    }

    // Busca as informações do tom que está ativo na URL atual
    const tomAtivo = tons.find(tom => tom.tom === link)

    // Filtra os produtos do banco associados a esse tom
    const produtosFiltrados = products.filter(product => product.tom === link)

    // Calcula o valor total do pacote
    const valorTotal = produtosFiltrados
        .map(product => product.valor)
        .reduce((a, b) => a + b, 0)

    // Define uma cor de backup caso o tom correspondente não seja encontrado de início
    const corDoGradienteDinamico = tomAtivo ? tomAtivo.colorGradient : '#3b82f620'

    return (
        <div 
            style={{
                backgroundImage: `
                    radial-gradient(at 0% 0%, ${corDoGradienteDinamico}, transparent 50%),
                    radial-gradient(at 100% 100%, #fb923c20, transparent 50%),
                    radial-gradient(at 0% 100%, #ec489910, transparent 50%),
                    radial-gradient(at 100% 0%, #22c55e10, transparent 50%)
                `
            }}
            className='h-full w-full bg-gray-100 min-h-screen'
        >
            <Header />
            
            {tons.filter(tom => tom.tom === link).map(item => {
                return (
                    <div key={item.tom} className='flex flex-col px-64 py-32 gap-8'>
                        <div className='flex flex-col text-center px-80'>
                            <h1 className='text-3xl font-semibold'>{item.titulo}</h1>
                            <p className=''>{item.substitulo}</p>
                        </div>

                        {/* CARD */}
                        <div className='border-gray-100 bg-white rounded-2xl flex justify-center gap-8 p-8 shadow-sm'>
                            {/* IMAGES */}
                            <div className='w-1/2 relative flex items-center justify-center gap-4'>
                                {produtosFiltrados.map(prod => {
                                    return (
                                        <div key={prod.id} className='relative'>
                                            <div className='h-50'>
                                                <img className='h-full object-contain' src={prod.img_url} alt={prod.titulo} />
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                            {/* INFO */}
                            <div className='flex flex-col w-1/2 gap-4'>
                                <div>
                                    <h2 className='text-2xl font-semibold'>{item.tituloPacote}</h2>
                                    <p className={`text-lg font-semibold ${item.color}`}>O que vem no pacote</p>
                                </div>
                                
                                <div className='flex flex-col gap-2'>
                                    {item.livros.map((livro, index) => {
                                        return (
                                            <div key={index} className='flex gap-2 items-center'>
                                                <div className={`${item.color}`}> 
                                                    <i className="fa-regular fa-circle-check"></i>
                                                </div>
                                                <span>{livro.titulo}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                                
                                <div className='text-2xl font-semibold'>
                                    {valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                </div>
                                
                                <button onClick={handleAddCart} className='bg-pink-600 rounded-full p-2 text-lg text-white font-semibold flex gap-2 justify-center items-center hover:bg-pink-700 transition-colors'>
                                    <i className="fa-solid fa-cart-arrow-down"></i>
                                    <span>Adicionar ao carrinho</span>
                                </button>
                            </div>
                        </div>
                    </div>
                )
            })}

            {/* ESPECIFICAÇÕES */}
            <div className='bg-white w-full flex flex-col gap-4 px-64 py-16 border-t border-gray-200'>
                <h2 className='text-2xl font-semibold'>Especificações</h2>
                <div className='flex justify-between w-full gap-8'>
                    {tons.filter(tom => tom.tom === link).flatMap(item => item.livros).map((livro, index) => {
                        return (
                            <div key={index} className='w-full gap-2 flex flex-col p-4 bg-gray-50 rounded-xl border border-gray-100'>
                                <h3 className='text-lg font-semibold border-b pb-2 text-gray-800'>{livro.titulo}</h3>
                                <div className='text-sm flex flex-col gap-1 text-gray-600'>
                                    <div><span className='font-semibold text-gray-800'>Editora:</span> {livro.editora || 'N/A'}</div>
                                    <div><span className='font-semibold text-gray-800'>Edição:</span> {livro.edicao || 'N/A'}</div>
                                    <div><span className='font-semibold text-gray-800'>Idioma:</span> {livro.idioma || 'N/A'}</div>
                                    <div><span className='font-semibold text-gray-800'>Páginas:</span> {livro.paginas || 'N/A'}</div>
                                    <div><span className='font-semibold text-gray-800'>ISBN-10:</span> {livro.ISBN10 || 'N/A'}</div>
                                    <div><span className='font-semibold text-gray-800'>ISBN-13:</span> {livro.ISBN13 || 'N/A'}</div>
                                    <div><span className='font-semibold text-gray-800'>Peso:</span> {livro.peso || 'N/A'}</div>
                                    <div><span className='font-semibold text-gray-800'>Dimensões:</span> {livro.dimensoes || 'N/A'}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <Footer />
        </div>
    )
}