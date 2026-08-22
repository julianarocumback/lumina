import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

import AddCardModal from './addCardModal/AddCardModal'

export default function Payment(){
    const {dadosCliente, addPayment, onDeleteCard, defaultCard} = useOutletContext()
    const [addCard, setAddCard] = useState(false)    

    const hasMaxCard = dadosCliente?.payment?.length === 3

    // Delete card
    const handleDeleteCard = (cardId) => {
        onDeleteCard(cardId)
    }
    
    
    if(!dadosCliente) return
    return(
        
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.7}} className={`flex flex-col gap-8 h-full pt-7 pb-25 pl-20 pr-5 lg:gap-8 lg:h-screen lg:py-30 lg:pl-150 lg:pr-70`}>
            {/* Page header */}
            <div className='flex flex-col gap-4'>
                <h1 className='text-2xl font-semibold lg:text-2xl'>Pagamentos</h1>
                <h3 className='hidden text-lg text-gray-600 md:block'>Gerencie suas formas de pagamento e acompanhe suas compras com total transparência e segurança.</h3>
            </div>

            <div className='flex flex-col gap-8'>
                <h2 className='text-xl font-semibold lg:text-2xl'>Cartões Salvos</h2>
                <AnimatePresence>
                {/* Modal */}
                {addCard && <AddCardModal onAddCard={addPayment} dadosCliente={dadosCliente} newPayment={addCard} setNewPayment={setAddCard}/>}
                </AnimatePresence>

                {/* Saved Cards */}
                <AnimatePresence>
                    <div className='grid gap-4 lg:grid-cols-3'> 
                        {dadosCliente?.payment?.map(card => {
                            const maskedCard = card?.card_number?.replace(/\D/g,'').replace(/^(\d{4})(\d{4})(\d{4})(\d{4})$/, '•••• •••• •••• $4')

                            return (
                                <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} layout className='relative flex flex-col justify-center gap-2 w-full h-40 p-4 bg-[radial-gradient(at_0%_0%,#000,transparent_100%),radial-gradient(at_100%_100%,#000,transparent_90%),radial-gradient(at_0%_0%,#000,transparent_80%)] rounded-2xl shadow-lg md:w-full lg:w-full lg:h-45'>
                                    <div className='absolute top-4 right-5 flex gap-2 text-white/70'>
                                        <button onClick={defaultCard}>deixar principal</button>
                                        {card.is_default && <div className='flex justify-center items-center text-xs px-2 bg-green-400/30 border-none rounded-full '>Principal</div>}
                                        <div className='transition-all hover:text-white ' onClick={() => handleDeleteCard(card.id)}>
                                            <i className='fa-solid fa-trash'></i>
                                        </div>
                                    </div>
                        
                                    <div className='flex justify-between'>
                                        <div className='text-white'><i className='fa-brands fa-cc-visa'></i></div>
                                        <span className='text-xs font-bold text-gray-400'>{card.brand}</span>
                                    </div>

                                    <div className='w-6 h-4 bg-yellow-500 rounded-md'></div>
                                    
                                    <div className='self-center font-semibold text-white -tracking-tighter'>{maskedCard}</div>
                                    <div className='flex justify-between text-white'>
                                        <div className=''>
                                            <span className='text-[8px] font-semibold text-gray-400'>Nome</span>
                                            <p className='text-xs font-semibold uppercase'>{card.holder_name}</p>
                                        </div>
                                        <div>
                                            <span className='text-right text-[8px] font-semibold text-gray-400'>Validade</span>
                                            <p className='text-xs font-semibold'>{card.expiration_date}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                        {/* Add card button */}
                        <motion.button
                            initial={{opacity:0}}
                            disabled={hasMaxCard}
                            animate={{opacity:1}}
                            exit={{opacity:0}}
                            layout
                            className={`flex flex-col flex-none justify-center items-center gap-2 w-full h-40 p-4 border border-gray-300 rounded-2xl border-dashed transition-colors ${!hasMaxCard && 'hover:text-blue-500 group [*_>_p]:text-blue-500 hover:bg-blue-500/10 hover:border-blue-500 hover:cursor-pointer'} md:w-full lg:h-45`}
                            onClick={()=>setAddCard(true)}    
                        >
                                <div className={`flex justify-center items-center w-10 h-10 text-white  bg-gray-200 ${!hasMaxCard && 'group-hover:bg-blue-500/90'} rounded-full transition-all`}><i className='fa-solid fa-plus'></i></div>
                            
                                {hasMaxCard ? <p className='text-[12px] font-semibold text-gray-700 transition-all'>Não é possível adicionar mais cartões</p>: <p className='text-[12px] font-semibold text-gray-700 group-hover:text-blue-500/90 transition-all'>Novo cartão de crédito</p>}
                        </motion.button>
                    </div>
                </AnimatePresence>
            </div>

            {/* Recent activity */}
            <div className='flex flex-col gap-4'>
                <h2 className='text-xl font-semibold'>Atividades recentes</h2>
            
                {/* Transaction list */}
                <div className='flex flex-col gap-6 p-4 bg-white rounded-2xl shadow-xs'>
                    <div className='flex justify-between'>
                        <div className='flex gap-4'>
                            <div className='flex justify-center items-center h-10 w-10 bg-gray-100 rounded-xl'>
                                <i className='fa-solid fa-book-open'></i>
                            </div>
                            <div>
                                <h3 className='text-[14px] font-semibold'>O Peregrino</h3>
                                <p className='text-[10px] '>24 Out 2025</p>
                            </div>
                        </div>
                        <div>
                            <p className='text-[14px] font-semibold'>R$ 189,90</p>
                            <p className='text-[10px] text-right '>Concluído</p>
                        </div>
                    </div>
                    
                    <div className='flex justify-between'>
                        <div className='flex gap-4'>
                            <div className='flex justify-center items-center h-10 w-10 bg-gray-100 rounded-xl'>
                                <i className='fa-solid fa-book-open'></i>
                            </div>
                            <div>
                                <h3 className='text-[14px] font-semibold'>O Peregrino</h3>
                                <p className='text-[10px] '>24 Out 2025</p>
                            </div>
                        </div>
                        <div>
                            <p className='text-[14px] font-semibold'>R$ 189,90</p>
                            <p className='text-[10px] text-right '>Concluído</p>
                        </div>
                    </div>

                </div>
            </div>
        </motion.div>
    )
}