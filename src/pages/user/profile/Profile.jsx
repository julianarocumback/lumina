import { useOutletContext} from 'react-router-dom'
import {motion, AnimatePresence} from 'framer-motion'
import {useEffect, useState} from 'react'


// COMPONENTS
import Cpf from './cpf'
import Name from './name'
import Email from './email'
import Whatsapp from './whatsapp'
import Birthdate from './birthdate'
import Password from './password'
import DeleteAccount from './deleteAccount'

export default function Profile(){
    const {dadosCliente, submitName, atualizarEmail, atualizarWhatsApp, cpfAdd, birthdateAdd, onPurgeAccount, onUpdatePassword} = useOutletContext()

    const [isPurgeAccount, setIsPurgeAccount] = useState(false)
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isUpdatePassword, setIsUpdatePassword] = useState(false)

    function handleUpdatePassword(){
        if(password !== confirmPassword) return
        onUpdatePassword(password)

    }

    function handleAddPassword(event){
        const password = event.target.value
        setPassword(password)
    }

    function handleAddConfirmPassword(event){
        const confirmPassword = event.target.value
        setConfirmPassword(confirmPassword)
    }

    useEffect(() =>{
        const modal = ()=> {
            if(isPurgeAccount || isUpdatePassword) {
                document.body.classList.add('overflow-y-hidden')
            } else {
                document.body.classList.remove('overflow-y-hidden')
            }
        }
        modal()
    }, [isPurgeAccount, isUpdatePassword])
 
    if(!dadosCliente) return

    return(
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.7}} className="flex flex-col gap-8 lg:gap-8 pt-7 pb-25 lg:py-30 pl-20 pr-5 lg:pl-150 lg:pr-70 h-full">

             <AnimatePresence>
                    {isPurgeAccount && 
            <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration: 0.3}} className='bg-black/20 absolute w-full h-full top-0 left-0 flex justify-center items-center z-10'>
                         <motion.div  className='flex flex-col border border-gray-100 w-100 h-70 bg-white rounded-3xl gap-8 p-8 shadow justify-center self-center justify-self-center top-100'>
                            <p className='text-2xl text-center'>Tem certeza que deseja apagar a conta?
                                Essa ação não poderá ser desfeita.
                            </p>
                            <div className='flex justify-between gap-8 '>
                                <button className='w-full p-2 rounded-2xl bg-red-500 text-white font-semibold' onClick={onPurgeAccount}>Apagar</button>
                                <button className='w-full p-2 rounded-2xl bg-gray-300 text-white font-semibold' onClick={()=>setIsPurgeAccount(false)}>Cancelar</button>

                            </div>
                            
                        </motion.div>
                    </motion.div>
                    }

                </AnimatePresence>

                 <AnimatePresence>
                    {isUpdatePassword && 
            <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration: 0.3}} className='bg-black/20 absolute w-full h-full top-0 left-0 flex justify-center items-center z-10 '>
                         <motion.div  className='flex flex-col border border-gray-100 w-100 h-70 bg-white rounded-3xl gap-8 p-8 shadow justify-center self-center justify-self-center top-100'>
                            <p className='text-2xl text-center'>Adicione a nova senha
                                <input type="text" className='border' placeholder='Digite a nova senha' onChange={handleAddPassword} value={password}/>
                                <input type="text" className='border' placeholder='Confirme a nova senha' onChange={handleAddConfirmPassword} value={confirmPassword}/>
                            </p>
                            <div className='flex justify-between gap-8 '>
                                <button className='w-full p-2 rounded-2xl bg-red-500 text-white font-semibold' onClick={handleUpdatePassword}>Atualizar</button>
                                <button className='w-full p-2 rounded-2xl bg-gray-300 text-white font-semibold' onClick={()=>setIsUpdatePassword(false)}>Cancelar</button>

                            </div>
                            
                        </motion.div>
                    </motion.div>
                    }

                </AnimatePresence>
            
            
           
             
            <h1 className="text-2xl font-semibold">Configurações</h1>

            <div className="flex flex-col gap-4">

                {/* ACCOUNT INFO */}
                <h2 className="text-xl font-semibold">Dados pessoais</h2>

                <div className="bg-white border border-gray-100 rounded-2xl shadow-xs p-6 gap-8 flex flex-col ">
                    
                    {/* NAME */}
                    <Name dadosCliente={dadosCliente}  onSaveName={submitName}/>
                    
                    {/* CPF */}
                    <Cpf dadosCliente={dadosCliente} onSaveCpf={cpfAdd}/>

                    {/* E-MAIL */}
                    <Email dadosCliente={dadosCliente} atualizarEmail={atualizarEmail}/>

                    {/* WHATSAPP */}
                    <Whatsapp dadosCliente={dadosCliente} onSaveWhatsApp={atualizarWhatsApp}/>
                    
                    {/* BIRTHDATE */}
                    <Birthdate dadosCliente={dadosCliente} onSaveBirthdate={birthdateAdd}/>
         
                </div>

            </div>

            {/* ACCOUNT SECURITY */}
            <div className="flex-col flex gap-4">

                <h2 className="text-xl font-semibold">Segurança da conta</h2>

                {/* PASSWORD */}
                <Password setIsUpdatePassword={setIsUpdatePassword}/>

                {/* DELETE ACCOUNT */}
                <DeleteAccount onPurgeAccount={onPurgeAccount} setIsPurgeAccount={setIsPurgeAccount}/>
               

            </div>


            {/* ACTIVE SESSIONS */}
            <div className="flex flex-col gap-4">

                <h2 className="text-xl font-semibold">Sessões ativas</h2>

                <div className="bg-gray-100 border border-gray-100 rounded-2xl shadow-xs p-6 gap-8 flex items-center justify-between">
                    <div className="flex gap-4 items-center">
                    <div className="bg-white w-12 h-12 flex justify-center items-center rounded-2xl text-gray-800 text-xl"><i class="fa-solid fa-laptop"></i></div>
                    <div>
                        <h3 className="font-semibold">MackBook Pro</h3>
                        <p className="text-xs text-gray-500">Safari . São Paulo . <span className="text-blue-700 italic font-semibold">Está sessão</span> </p>
                    </div>

                    </div>
                    <div>
                        <div className="font-semibold text-gray-500"><i class="fa-solid fa-arrow-right-from-bracket"></i></div>
                    </div>
                    
                </div>

                <div className="bg-gray-100 border border-gray-100 rounded-2xl shadow-xs p-6 gap-8 flex items-center justify-between">
                    <div className="flex gap-4 items-center">
                    <div className="bg-white w-12 h-12 flex justify-center items-center rounded-2xl text-gray-800 text-xl"><i class="fa-solid fa-mobile-screen-button"></i></div>
                    <div>
                        <h3 className="font-semibold">iPhone 15 Pro</h3>
                        <p className="text-xs text-gray-500">Website . São Paulo . <span className="text-blue-700 italic font-semibold">Está sessão</span> </p>
                    </div>

                    </div>
                    <div>
                        <div className="font-semibold text-gray-500"><i class="fa-solid fa-arrow-right-from-bracket"></i></div>
                    </div>
                    
                </div>

            </div>

        </motion.div>
    )
}