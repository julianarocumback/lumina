import Header from '../../components/header/Header'
import Stepper from './stepper/Stepper'
import Cart from './cart/Cart'
import BackLink  from './backLink/BackLink'
import Footer from '../../components/footer/Footer'

import { useCart } from '../../contexts/CartContext/CartContext'
import { useState } from 'react'

export default function Checkout() {
    const {items, aumentarQuantidade, diminuirQuantidade, removeToCart} = useCart()
    const [endereco, setEndereco] = useState({})
    const [frete, setFrete] = useState({})
    const [pagamento, setPagamento] = useState({})
    const [cupom, setCupom] = useState({})

    const [etapa1, setEtapa1] = useState(false)
    const [etapa2, setEtapa2] = useState(false)
    const [etapa3, setEtapa3] = useState(false)

    const [pedido, setPedido] = useState([])

    const listaOk = items.length > 0
    const enderecoOk = Object.keys(endereco).length > 0 && Object.keys(frete).length > 0
    const pagamentoOk = Object.keys(pagamento).length > 0
    
    console.log('etapa1', etapa1)
    console.log('etapa2', etapa2)
    console.log('etapa3', etapa3)
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

    
    function verificar(){
        if(listaOk && pagamentoOk && enderecoOk) {
            setEtapa3(true)
            setPedido(prev => [...prev, items, endereco, frete, pagamento, cupom])
        } else if (listaOk && enderecoOk && !pagamentoOk) {
            setEtapa2(true)
        } else if (listaOk && !enderecoOk && !pagamentoOk) {
            setEtapa1(true)
        } else {
            return
        }
    }
    
    if(!items) return
    
    
    return(
        <div className="bg-gray-100" >
            <Header/>
            <div className="px-90">
                <Stepper etapa1={etapa1} etapa2={etapa2} etapa3ok={etapa3}/>

                <Cart 
                etapa1={etapa1} etapa2={etapa2} etapa3={etapa3} SetEtapa1={setEtapa1} SetEtapa2={setEtapa2} SetEtapa3={setEtapa3}
                lista={items} aumentarQuantidade={aumentarQuantidade} diminuirQuantidade={diminuirQuantidade} removerDoCarrinho={removeToCart} 
                endereco={endereco} setEndereco={setEndereco} frete={frete} setFrete={setFrete}
                pagamento={pagamento} setPagamento={setPagamento} cupom={cupom} setCupom={setCupom}
                
                listaOk={listaOk} enderecoOk={enderecoOk} pagamentoOk={pagamentoOk} verificar={verificar}/>
                <BackLink/>
            </div>
            <Footer/>
        </div>
    )
}