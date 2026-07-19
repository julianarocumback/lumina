import { useCart } from '../../contexts/CartContext/CartContext'
import { useNavigate } from "react-router-dom"
import { useState, useContext, useEffect, useRef } from 'react'
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import {currencyFormatter} from '../../utils/formatCurrency'
import {motion, AnimatePresence} from 'framer-motion'
import {Link} from 'react-router-dom'


export default function ListaCarrinho({isOpen, setCarrinho}){
    const {items, setItems, aumentarQuantidade, diminuirQuantidade, removeToCart, quantidades} = useCart()
    const navigate = useNavigate()
    const {authenticated} = useContext(AuthContext)

    const [caution, setCaution] = useState('')
    const cartRef = useRef(null)

    useEffect(() => {
        function clickOut(event) {
            if (!cartRef.current) return;

            const clickIn = cartRef.current.contains(event.target);
            const clicouDentroDoContainer = event.target.closest('.h-screen'); 
            const clicouNoBotaoDeAbrir = event.target.closest('.botao-carrinho');
            const existElement = document.body.contains(event.target);

            if (!clickIn && !clicouDentroDoContainer && !clicouNoBotaoDeAbrir && existElement) {
                if (isOpen) {
                    setCarrinho(false);
                }
            }
        }

        document.addEventListener('mousedown', clickOut);

        return () => {
            document.removeEventListener('mousedown', clickOut);
        }
    }, [isOpen, setCarrinho]);

    

    function vericacao(){
        if(items?.length === 0 && !authenticated){
            setCaution('tudo')
            return
        } else if (items?.length === 0 && authenticated) {
            setCaution('carrinho')
            return
        } else if (items?.length > 0 && !authenticated) {
            setCaution('logar')
            return
            
        } 
        navigate('/checkout')
    }

    useEffect(()=> {
        function aaa (){
            if(authenticated ||items?.length > 0 ){
                setCaution('')
            }
        }

        aaa()
    }, [authenticated, items?.length])



    if(!items) return
    const subtotal = items?.map(item => item?.valor * item?.quantidade).reduce((a,b) => a + b, 0)

    return (
        <motion.div initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "tween", duration: 0.3 }} ref={cartRef} className="h-screen w-82 pt-4 lg:pt-0 lg:w-100 bg-white absolute bottom-13 lg:top-13 right-0 flex flex-col shadow-sm">
            <div className="p-2 pt-16 px-6 lg:p-7 gap-7 flex flex-col w-full h-4/5 lg:3/4">
            <div className='flex justify-between items-center'>
                <div className="text-lg lg:text-xl font-semibold">Carrinho</div>
                <AnimatePresence>
                    {items.length > 0 && <motion.button initial={{ opacity: 0}} animate={{ opacity: 1}}  transition={{ duration: 0.5 }}  exit={{ opacity: 0, transition: { duration: 0.20 } }}  className='hover:text-red-500 transition-all' onClick={() => setItems([])}>Limpar</motion.button>}
                </AnimatePresence>

            </div>

                {/* Produtos no carrinho */}
                <div className="flex flex-col w-full h-full gap-4 overflow-y-auto">
                    <AnimatePresence>
                        {items?.map((item) => {
                            return(
                                // Card do produto
                                <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} exit={{ opacity: 0, y: -30, transition: { duration: 0.20 } }} key={item.id}  layout className="flex h-35 lg:h-35 w-full border border-gray-200 gap-4 overflow-hidden rounded-2xl shrink-0 shadow-xs p-4">
                                        <div className="h-full w-20 lg:w-1/4 ">
                                    <Link to={`/produto/${item.id}`}>
                                            <img className="h-full w-full rounded-2xl shadow-xs border border-gray-100" src={item.img_url} alt="" />
                                    </Link>
                                        </div>
                                    <div className="flex flex-col gap-4 py-2 justify-between overflow-hidden w-3/4 relative">
                                        <div className="flex justify-between">
                                            <div className="w-[85%]">
                                                <h4 className="lg:text-lg font-semibold text-[#1a1c1d] truncate ">
                                                    {item.nome}</h4>
                                                <p className='truncate'>{item.description}</p>

                                            </div>
                                        </div>
                                        <div onClick={()=> removeToCart(item)} className="absolute right-0 hover:text-red-500 cursor-pointer transition-colors">
                                            <i class="fa-solid fa-trash"></i>
                                        </div>
                                        <div className="flex justify-between">
                                            {item && <span className="text- font-semibold">{currencyFormatter(item.valor)}</span>}
                                            
                                            
                                            {/* QUANTIDADE DE PRODUTOS */}
                                            <div className="flex border border-gray-300 w-20 items-center justify-around bg-white rounded-3xl px-2 select-none">

                                                {/* Diminuir a quantidade */}
                                                <div className={`text-xs cursor-pointer w-5 ${item.quantidade === 1 && 'text-gray-300'}`} onClick={()=> diminuirQuantidade(item)}><i class="fa-solid fa-minus"></i></div>

                                                {/* Quantidade atual */}
                                                <div className='relative'>
                                                <div>{item.quantidade}</div>
                                                <input onChange={(e) => quantidades(item, e.target.value.replace(/\D/g, ''))} className=' w-5 z-10  top-0 absolute focus:outline-none text-center caret-black  text-transparent ' type="text" value={item.quantidade}/>

                                                </div>

                                                {/* Aumentar a quantidade */}
                                                <div className="text-xs cursor-pointer w-5" onClick={()=> aumentarQuantidade(item)}><i class="fa-solid fa-plus"></i></div>
                                                
                                            </div>

                                        </div>
                                    </div>
                                </motion.div>        
                            )
                        })}
                    </AnimatePresence>
                </div>


            </div>
            <div className="bg-gray-50 h-1/5 lg:h-1/4 px-7 lg:px-7 lg:py-3 flex flex-col gap-3 lg:gap-3 text-center">
                <div className="flex justify-between py-2">
                    <span className="text-lg text-[#474747]">Subtotal</span>
                    <span className="text-xl font-semibold">{currencyFormatter(subtotal)}</span>
                    
                </div>
                <button onClick={vericacao} className="cursor-pointer rounded-3xl p-2 w-full bg-gradient-to-r from-[#00639a] to-[#bc004b] py-3 text-white font-semibold text-lg">Finalizar compra</button>
                <div className='text-red-500 text-xs lg:text-base'>
                    {caution === 'tudo'?
                    <p>Faça login e adicione itens ao carrinho!</p>
                    :caution === 'carrinho'? <p>Adicione itens ao carrinho!</p>
                    :caution === 'logar' &&<p>Faça login!</p>
                    }

                </div>
                </div>
        </motion.div>
    )
}