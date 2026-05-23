import { useCart } from '../../contexts/CartContext/CartContext'
import { useNavigate } from "react-router-dom"
import { useState, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
// import { useLocalStorage} from '../../hooks/useLocalStorage'

export default function ListaCarrinho(){
    const {items, aumentarQuantidade, diminuirQuantidade} = useCart()
    const navigate = useNavigate()
    const {authenticated, user, logout} = useContext(AuthContext)
    const {mensagem, setMensagem} = useState(true)

    function vericacao(){
        if (items.length === 0) {
            setMensagem(true)
            return
        }

        if (!authenticated) {
            return
        }


        navigate('/checkout')

    }

    const subtotal = items.map(item => item.valor * item.quantidade).reduce((a,b) => a + b, 0).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

    return (
        <div className="h-screen w-75 pt-4 pb-8 lg:w-100 bg-white absolute right-0 top-14 flex flex-col  shadow-sm ">
            <div className="p-2 lg:p-7 gap-7 flex flex-col w-full h-3/4">
                <div className="text-lg lg:text-2xl font-semibold">Carrinho</div>

                {/* Produtos no carrinho */}
                <div className="flex flex-col w-full h-full gap-4 overflow-y-auto">
                    {items.map((item, index) => {
                        return(

                            // Card do produto
                            <div className="flex h-35 lg:h-35 w-full border border-gray-200 gap-4 overflow-hidden rounded-2xl shrink-0 shadow-xs p-4" key={index} >
                                <div className="h-full w-20 lg:w-1/4 ">
                                    <img className="h-full w-full rounded-2xl shadow-xs border border-gray-100" src={item.img_url} alt="" />
                                </div>
                                <div className="flex flex-col gap-4 py-2 justify-between overflow-hidden w-3/4 relative">
                                    <div className="flex justify-between">
                                        <div className="w-[85%]">
                                            <h4 className="lg:text-lg font-semibold text-[#1a1c1d]  truncate ">
                                                {item.nome}</h4>
                                            <p>descrição</p>

                                        </div>
                                    </div>
                                        <div className="absolute right-0">
                                            <i class="fa-solid fa-trash"></i>
                                        </div>
                                    <div className="flex justify-between">
                                        <span className="text- font-semibold">
                                            {item.valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}

                                        </span>
                                        
                                        <div className="flex border border-gray-300 w-20 items-center justify-around bg-white rounded-3xl px-2 select-none">

                                            {/* Diminuir a quantidade */}
                                            <div className="text-xs cursor-pointer" onClick={()=> diminuirQuantidade(item)}><i class="fa-solid fa-minus"></i></div>

                                            {/* Quantidade atual */}
                                            <div>{item.quantidade}</div>

                                            {/* Aumentar a quantidade */}
                                            <div className="text-xs cursor-pointer" onClick={()=> aumentarQuantidade(item)}><i class="fa-solid fa-plus"></i></div>
                                            
                                        </div>

                                    </div>
                                </div>
                            </div>        
                        )
                    })}
                </div>


            </div>
            <div className="bg-gray-50 h-1/4 p-7 flex flex-col lg:gap-4">
                <div className="flex justify-between py-4">
                    <span className="text-lg text-[#474747]">Subtotal</span>
                    <span className="text-xl font-semibold">{subtotal}</span>
                    {/* {!mensagem && <p>aaaaaaaaa</p>} */}
                </div>
                    <button onClick={vericacao} className="cursor-pointer rounded-3xl p-2 w-full bg-gradient-to-r from-[#00639a] to-[#bc004b] py-3 text-white font-semibold text-lg">Finalizar compra</button>

                </div>
        </div>
    )
}