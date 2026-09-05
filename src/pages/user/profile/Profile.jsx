import { useOutletContext} from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {useEffect, useState} from 'react'
import ConfirmationModal from './confirmationModal'


// COMPONENTS
import Cpf from './cpf'
import Name from './name'
import Email from './email'
import Whatsapp from './whatsapp'
import Birthdate from './birthdate'
import UpdatePassword from './updatePassword'
import DeleteAccount from './deleteAccount'

export default function Profile(){
    const {dadosCliente, submitName, atualizarEmail, cancelEmailUpdate, atualizarWhatsApp, cpfAdd, birthdateAdd, purgeAccount, user} = useOutletContext()

    const [isPurgeAccount, setIsPurgeAccount] = useState(false)
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isUpdatePassword, setIsUpdatePassword] = useState(false)

    const hasPassword = true

    async function handleUpdatePassword(){
        if(password !== confirmPassword) return
        setIsUpdatePassword(false)
        setPassword('')
        setConfirmPassword('')
    }

    function handleAddPassword(event){
        const password = event.target.value
        setPassword(password)
    }

    function handleAddConfirmPassword(event){
        const confirmPassword = event.target.value
        setConfirmPassword(confirmPassword)
    }

    useEffect(() => {
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
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.7}} className='flex flex-col gap-8 ml-15 p-4 pb-18 sm:p-8 sm:pb-30 md:px-16 lg:ml-80 lg:pt-30 xl:p-32 xl:pb-18 2xl:px-70'>

            <ConfirmationModal
                isPurgeAccount={isPurgeAccount}
                setIsPurgeAccount={setIsPurgeAccount}
                isUpdatePassword={isUpdatePassword}
                onPurgeAccount={purgeAccount}
                description={'Tem certeza que deseja apagar a conta? Essa ação não poderá ser desfeita.'}
                onConfirm={purgeAccount}
                onCancel={() => setIsPurgeAccount(false)}
            />

            <ConfirmationModal
                isPurgeAccount={isUpdatePassword}
                setIsPurgeAccount={setIsUpdatePassword}
                isUpdatePassword={isUpdatePassword}
                onPurgeAccount={purgeAccount}
                description={'Alterar senha'}
                onConfirm={handleUpdatePassword}
                onCancel={() => setIsUpdatePassword(false)}
                onHandleAddPassword = {handleAddPassword}
                onHandleAddConfirmPassword = {handleAddConfirmPassword}
                
                password = {password}
                confirmPassword = {confirmPassword}
                hasPassword={hasPassword}
            />
             
            <h1 className='text-2xl font-semibold'>Configurações</h1>

            <div className='flex flex-col gap-4'>

                {/* ACCOUNT INFO */}
                <h2 className='text-xl font-semibold'>Dados pessoais</h2>

                <div className='bg-white border border-gray-100 rounded-2xl shadow-xs p-6 gap-8 flex flex-col '>
                    
                    {/* NAME */}
                    <Name dadosCliente={dadosCliente}  onSaveName={submitName}/>
                    
                    {/* CPF */}
                    <Cpf dadosCliente={dadosCliente} onSaveCpf={cpfAdd}/>

                    {/* E-MAIL */}
                    <Email dadosCliente={dadosCliente} atualizarEmail={atualizarEmail} userEmail={user?.email} userNewEmail={user?.new_email} cancelEmailUpdate={cancelEmailUpdate}/>

                    {/* WHATSAPP */}
                    <Whatsapp dadosCliente={dadosCliente} onSaveWhatsApp={atualizarWhatsApp}/>
                    
                    {/* BIRTHDATE */}
                    <Birthdate dadosCliente={dadosCliente} onSaveBirthdate={birthdateAdd}/>
         
                </div>

            </div>

            {/* ACCOUNT SECURITY */}
            <div className='flex-col flex gap-4'>

                <h2 className='text-xl font-semibold'>Segurança da conta</h2>

                {/* PASSWORD */}
                <UpdatePassword setIsUpdatePassword={setIsUpdatePassword}/>

                {/* DELETE ACCOUNT */}
                <DeleteAccount onPurgeAccount={purgeAccount} setIsPurgeAccount={setIsPurgeAccount}/>
               

            </div>


            {/* ACTIVE SESSIONS */}
            <div className='flex flex-col gap-4'>

                <h2 className='text-xl font-semibold'>Sessões ativas</h2>

                <div className='bg-gray-100 border border-gray-100 rounded-2xl shadow-xs p-6 gap-8 flex items-center justify-between'>
                    <div className='flex gap-4 items-center'>
                    <div className='bg-white w-12 h-12 flex justify-center items-center rounded-2xl text-gray-800 text-xl'><i class='fa-solid fa-laptop'></i></div>
                    <div>
                        <h3 className='font-semibold'>MackBook Pro</h3>
                        <p className='text-xs text-gray-500'>Safari . São Paulo . <span className='text-blue-700 italic font-semibold'>Está sessão</span> </p>
                    </div>

                    </div>
                    <div>
                        <div className='font-semibold text-gray-500'><i class='fa-solid fa-arrow-right-from-bracket'></i></div>
                    </div>
                    
                </div>

                <div className='bg-gray-100 border border-gray-100 rounded-2xl shadow-xs p-6 gap-8 flex items-center justify-between'>
                    <div className='flex gap-4 items-center'>
                    <div className='bg-white w-12 h-12 flex justify-center items-center rounded-2xl text-gray-800 text-xl'><i class='fa-solid fa-mobile-screen-button'></i></div>
                    <div>
                        <h3 className='font-semibold'>iPhone 15 Pro</h3>
                        <p className='text-xs text-gray-500'>Website . São Paulo . <span className='text-blue-700 italic font-semibold'>Está sessão</span> </p>
                    </div>

                    </div>
                    <div>
                        <div className='font-semibold text-gray-500'><i class='fa-solid fa-arrow-right-from-bracket'></i></div>
                    </div>
                    
                </div>

            </div>

        </motion.div>
    )
}