import {currencyFormatter} from '../../../../utils/formatters'
import { useCart } from '../../../../contexts/CartContext/CartContext'

export default function ProductInfo({product, onAddToFavorites, onRemoveFromFavorites, dadosCliente, authenticated}){
    const {addToCart,items} = useCart()

    const isAlreadyFavorite = dadosCliente?.favoritos.some(item => item.id === product.id)
    const isAlreadyInCart = items?.some(item => item.id === product.id)

    function handleAddFavorite() {
        if(isAlreadyFavorite){
            onRemoveFromFavorites(product)
        } else {
            onAddToFavorites(product)
        }
    }
    
    return (
        <div className='w-full flex flex-col justify-center'>
            {/* Categoria */}
            <span className='text-sm font-semibold text-blue-700 lg:text-xl'>{product.categoria}</span>
            
            {/* Title */}
            <div className='py-4'>
                <h1 className='text-3xl font-semibold lg:text-5xl'>{product?.nome}</h1>
            </div>

            {/* Price */}
            <span className='text-2xl lg:text-3xl'>{currencyFormatter(product?.valor)}</span>
            <div className='py-7'>
                <div className='h-1 bg-linear-to-r from-blue-300 to-red-300'></div>
            </div>

            {/* Description */}
            <p className='text-base whitespace-pre-line line-clamp-7 text-[rgba(71,71,71,1)] lg:text-xl'>
                {product?.description}
            </p>

            {/* Call to action buttons */}
            <div className='flex flex-col gap-4 py-10'>
                {/* Add to Cart */}
                <button onClick={() => addToCart(product)} className='flex justify-center items-center gap-3 w-full py-3 text-xl font-semibold text-white bg-linear-to-r from-[#00639a] to-[#bc004b] rounded-4xl cursor-pointer lg:py-4'><span className='material-icons'>shopping_cart</span>{isAlreadyInCart? 'Produto adicionado': 'Adicionar ao carrinho'}</button>

                {/* Add or remove from Favorites */}
                {authenticated && <button onClick={handleAddFavorite}  className={`flex justify-center items-center gap-3 py-3 text-xl font-semibold ${isAlreadyFavorite ? 'text-red-500' : 'text-black'} bg-gray-200 w-full rounded-4xl cursor-pointer lg:py-4`}><i className='fa-solid fa-heart'></i>{isAlreadyFavorite? <span>Remover dos favoritos</span> : <span>Adicionar aos favoritos</span>}</button>}
            </div>

            {/* Product highlights */}
            <div className='hidden lg:flex lg:gap-8 '>
                <div className='flex gap-2'>
                    <div className='text-blue-800'><i className="fa-solid fa-percent"></i></div>
                    <div>Use o cupom 'DEUS' para ganhar 10% de desconto</div>      
                </div>
                <div className='flex gap-2'>
                    <div className='text-blue-800'><i className='fa-regular fa-circle-check'></i></div>
                    <div>Garantia Vitalícia</div>      
                </div>
            </div>
        </div>
    )
}