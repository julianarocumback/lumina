import Header from '../../components/header/Header'
import Stepper from './stepper/Stepper'
import Cart from './cart/Cart'
import BackLink  from './backLink/BackLink'
import Footer from '../../components/footer/Footer'
import Confirmation from './cart/confirmation/Confirmation'
import Payment from './cart/payment/Payment'

import { useCart } from '../../contexts/CartContext/CartContext'
import { useState, useEffect } from 'react'

export default function Checkout() {
    const {items, aumentarQuantidade, diminuirQuantidade, removeToCart} = useCart()
    const [endereco, setEndereco] = useState({})
    const [frete, setFrete] = useState({})
    const [pagamento, setPagamento] = useState({})
    const [cupom, setCupom] = useState({})

    const [etapa, setEtapa] = useState(0)
    const [pedido, setPedido] = useState([])

    const listaOk = items.length > 0
    const enderecoOk = Object.keys(endereco).length > 0 && Object.keys(frete).length > 0
    const pagamentoOk = Object.keys(pagamento).length > 0
    
    console.log('etapa', etapa)
    console.log(' ')
    console.log('endereço',endereco)
    console.log('frete',frete)
    console.log('pagamento',pagamento)
    console.log('cupom',cupom)
    console.log(' ')
    console.log('listaok', listaOk)
    console.log('endereçook', enderecoOk)
    console.log('pagamentook', pagamentoOk)
    console.log(' ')
    console.log('Pedido',pedido)

    // verificar informações antes de ir para a próxima etapa
    function verificar(){
        if(listaOk && pagamentoOk && enderecoOk) {
            setEtapa(3)
            setPedido(prev => [...prev, items, endereco, frete, pagamento, cupom])
        } else if (listaOk && enderecoOk && !pagamentoOk) {
            setEtapa(2)
        } else if (listaOk && !enderecoOk && !pagamentoOk) {
            setEtapa(1)  
        } else {
            return
        }
    }

    useEffect(()=> {
        
    })

    useEffect(()=> {
        function teste(){
            if(!listaOk){
                setEndereco({})
                setFrete({})
                setPagamento({})
                setCupom({})
            }
        }
        teste()

    }, [listaOk])
        
    

    if(!items) return
    
    return(
        <div className="bg-gray-100" >
            <Header/>
            <div className="flex flex-col gap-4 lg:px-90">
                <Stepper listaOk={listaOk} enderecoOk={enderecoOk} pagamentoOk={pagamentoOk} etapa={etapa} setEtapa={setEtapa}/>

                <Cart 
                etapa={etapa} setEtapa={setEtapa}
                lista={items} aumentarQuantidade={aumentarQuantidade} diminuirQuantidade={diminuirQuantidade} removerDoCarrinho={removeToCart} 
                endereco={endereco} setEndereco={setEndereco} frete={frete} setFrete={setFrete}
                pagamento={pagamento} setPagamento={setPagamento} cupom={cupom} setCupom={setCupom}
                
                listaOk={listaOk} enderecoOk={enderecoOk} pagamentoOk={pagamentoOk} verificar={verificar}/>
            </div>
            <Footer/>
        </div>
    )
}