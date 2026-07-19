import { useOutletContext} from 'react-router-dom'
import {motion} from 'framer-motion'


// COMPONENTS
import Cpf from './cpf'
import Name from './name'
import Email from './email'
import Whatsapp from './whatsapp'
import Birthdate from './birthdate'
import Password from './password'
import DeleteAccount from './deleteAccount'

export default function Profile(){
    const {dadosCliente, submitName, atualizarEmail, atualizarWhatsApp, cpfAdd, birthdateAdd} = useOutletContext()
 
    if(!dadosCliente) return

    return(
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.7}} className="flex flex-col gap-8 lg:gap-8 pt-7 pb-25 lg:py-30 pl-20 pr-5 lg:pl-150 lg:pr-70 h-full">
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
                <Password/>

                {/* DELETE ACCOUNT */}
                <DeleteAccount/>

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