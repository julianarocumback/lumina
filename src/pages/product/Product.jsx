import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { supabase } from '../../supabaseClient'

import {AuthContext } from '../../contexts/AuthContext/AuthContext'

import Header from '../../components/header/Header'
import ProductHero from './productHero/ProductHero'
import ProductDetails from './productDetails/ProductDetails'
import Comments from './Comments/Comments'
import Footer from '../../components/footer/Footer'

export default function Product(){
    const {authenticated, dadosCliente, addToFavorites, removeFromFavorites} = useContext(AuthContext)
    const {id} =  useParams()
    const [product, setProduct] = useState(null)
    const [photoId, setPhotoId] = useState('0')
    
    useEffect(() => {
        async function getProdutos() {
            try {
                const {data, error} = await supabase
                .from('produtos')
                .select('*, livros(*)')
                .eq('id', id)
                .single()
                if (error) throw error
                setProduct(data)
            } catch(error){
                console.error('Erro ao buscar produtos:', error.message)
            } 
        }
        getProdutos()
    },[id])

    const photo = product?.galeria_url.find(item => item.id === photoId)
    const gallery = product?.galeria_url.map(item => item)
    if(!product){
        return
    }
    
    return(
    <div className='h-full w-full bg-[rgba(249,249,251,1)]'>
        <Header/>
        <ProductHero photo={photo} gallery={gallery} setPhotoId={setPhotoId} product={product} onAddToFavorites={addToFavorites} onRemoveFromFavorites={removeFromFavorites} dadosCliente={dadosCliente} authenticated={authenticated}/>
        <ProductDetails product={product}/>
        <Comments/>
        <Footer/>
    </div>
)
}