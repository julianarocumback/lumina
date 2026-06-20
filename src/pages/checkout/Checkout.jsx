import Header from '../../components/header/Header'
import Stepper from './stepper/Stepper'
import Cart from './cart/Cart'
import Footer from '../../components/footer/Footer'

import { useCart } from '../../contexts/CartContext/CartContext'
import { AuthContext } from '../../contexts/AuthContext/AuthContext'
import { useState, useEffect, useContext } from 'react'

export default function Checkout() {
    const {items, setItems, aumentarQuantidade, diminuirQuantidade, removeToCart } = useCart()
    const {user, adicionarPedido, dadosCliente} = useContext(AuthContext)

    const [endereco, setEndereco] = useState({})
    const [frete, setFrete] = useState({})
    const [pagamento, setPagamento] = useState({})
    const [cupom, setCupom] = useState({})
    const [etapa, setEtapa] = useState(0)
    console.log('pagamento', pagamento)

    const listaOk = items.length > 0
    const enderecoOk = Object.keys(endereco).length > 0 && Object.keys(frete).length > 0
    const pagamentoOk = Object.keys(pagamento).length > 0

    // verificar informações antes de ir para a próxima etapa
    function verificar(){
        if(listaOk && pagamentoOk && enderecoOk) {
            setEtapa(3)
            adicionarPedido({cliente_id: user.id , produtos: items, endereco: endereco, frete: frete, pagamento: pagamento, cupom: cupom, valor: 20})
            setItems([])
        } else if (listaOk && enderecoOk && !pagamentoOk) {
            setEtapa(2)
        } else if (listaOk && !enderecoOk && !pagamentoOk) {
            setEtapa(1)  
        } else {
            return
        }
    }

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
        <div className=" relative bg-[radial-gradient(at_0%_0%,#cee5ff90,transparent_50%),radial-gradient(at_100%_100%,#fb923c20,transparent_50%),radial-gradient(at_0%_100%,#ec489910,transparent_50%),radial-gradient(at_100%_0%,#22c55e10,transparent_50%)]" >
            <Header/>
            <div className="flex flex-col gap-4 lg:px-90 relative">
                <Stepper listaOk={listaOk} enderecoOk={enderecoOk} pagamentoOk={pagamentoOk} etapa={etapa} setEtapa={setEtapa}/>
                <div className='lg:pt-70'>
                    <Cart 
                    etapa={etapa} setEtapa={setEtapa}
                    lista={items} aumentarQuantidade={aumentarQuantidade} diminuirQuantidade={diminuirQuantidade} removerDoCarrinho={removeToCart} 
                    endereco={endereco} setEndereco={setEndereco} frete={frete} setFrete={setFrete}
                    pagamento={pagamento} setPagamento={setPagamento} cupom={cupom} setCupom={setCupom}
                    
                    listaOk={listaOk} enderecoOk={enderecoOk} pagamentoOk={pagamentoOk} verificar={verificar}
                    addresses={dadosCliente?.address} payments={dadosCliente?.payment}
                    />

                </div>
            </div>
            <Footer/>
        </div>
    )
}