import {useState} from 'react'
import Confirmation from './confirmation'

export default function Cpf({dadosCliente, onSaveCpf}){
    const [cpf, setCpf] = useState('')
    const [isEditingCPF, setIsEditingCPF] = useState(false)
    const [isConfirming, setIsConfirming] = useState(false)

    const [hasCPFInteracted, setHasCPFInteracted] = useState(false)
    const [trySubmit, setTrySubmit] = useState(false)

    const hasCPFExactlyLength = cpf.length === 11
    const hasCPFContent = cpf !== ''
    const isCPFCorrect =  hasCPFExactlyLength && hasCPFContent
    const shouldShowCPFErrorLength = hasCPFInteracted && !isCPFCorrect
    const shouldShowCPFErrorContent = hasCPFInteracted && !isCPFCorrect

    const cpfPlaceholder = dadosCliente?.cpf ?? ''
    const placeholderPart1 = cpfPlaceholder.slice(0,3)
    const placeholderPart2 = cpfPlaceholder.slice(3,6)
    const placeholderPart3 = cpfPlaceholder.slice(6,9)
    const placeholderPart4 = cpfPlaceholder.slice(9)
    const cpfparaplaceholder = `${placeholderPart1}. ${placeholderPart2}. ${placeholderPart3}-${placeholderPart4}`

    const cortarTracinhos = cpf + '___________'.slice(cpf.length)
    const part1 = cortarTracinhos.slice(0,3)
    const part2 = cortarTracinhos.slice(3,6)
    const part3 = cortarTracinhos.slice(6,9)
    const part4 = cortarTracinhos.slice(9)
    const cpfFormated = `${part1}. ${part2}. ${part3}-${part4}`

    const cpfFormatedValue = () => {
        const part1 = cpf.slice(0,3)
        const part2 = cpf.slice(3,6)
        const part3 = cpf.slice(6,9)
        const part4 = cpf.slice(9)

        let resultado = ''
        if(part1) resultado += part1
        if(part2) resultado += '.' + part2
        if(part3) resultado += '.' + part3
        if(part4) resultado += '-' + part4

        return resultado

    }

    // SAVE CPF
    const handleSaveCpf = () => {
        if(cpf.length !== 11) return
        onSaveCpf(cpf)
        setIsConfirming(false)
        setIsEditingCPF(false)
       
    }

    const handleAddCPF = (cpf) => {
        if(cpf.length > 11) return
        setCpf(cpf)
    }

    const handleEditingCPF = () => {
        setIsEditingCPF(true)
    }

    // CANCEL EDIT CPF
    const handleCancelAddCpf = ()=> {
        setIsEditingCPF(false)
        setCpf('')
    }

    const handleCPFInteracted = () => {
        setHasCPFInteracted(true)
    }

    const handleTrySubmit = () => {
        setTrySubmit(true)
    }


    
    return (
        <div className="flex flex-col gap-1">
            <h3 className="font-semibold text-[11px] text-gray-500">CPF</h3>
            <div className='flex flex-col sm:flex-row justify-between relative'>
                {!isEditingCPF && <span>{!dadosCliente?.cpf?cpfFormated:cpfparaplaceholder }</span>}
                {isEditingCPF && <div> <input disabled={!isEditingCPF} onChange={(e) => handleAddCPF(e.target.value.replace(/\D/g, ''))}  type="text" className={` absolute active:outline-none text-transparent bg-transparent caret-black  z-10`} value={cpfFormatedValue()} onBlur={handleCPFInteracted}/>
                <span className='select-none pointer-events-none relative -left-[0.2px] tracking-tight font-arial font-sans'>{cpfFormated}</span></div>}
                <div className='flex flex-col sm:flex-row lg:justify-between'>
                    {!isEditingCPF && !dadosCliente?.cpf && <button onClick={handleEditingCPF} className='font-semibold text-blue-700 w-fit'>Adicionar</button>}
                </div>
                {isEditingCPF &&
                    <div className='flex gap-4'>
                        {/* Update cpf */}
                        <button type='button' className='px-2 py-1 text-sm font-semibold text-white bg-blue-600 rounded-lg transition-colors cursor-pointer hover:bg-blue-700' onClick={handleTrySubmit}>Salvar</button>
                        {/* Cancel cpf update */}
                        <button type='button' className='font-semibold text-gray-600 hover:text-gray-800 transition-colors cursor-pointer' onClick={handleCancelAddCpf}>Cancelar</button>
                    </div>
                }
           </div>
           {shouldShowCPFErrorLength && <p className='text-xs text-red-700 font-semibold'> Adicione um CPF válido</p>}
           {trySubmit && <p className='text-xs text-red-700 font-semibold'> Adicione um CPF</p>}
           {isCPFCorrect && <Confirmation isConfirming={isConfirming} onHandleSaveCpf={handleSaveCpf} setIsConfirming={setIsConfirming} onHandleCancelAddCpf={handleCancelAddCpf} cpf={cpf}/>}
        
        </div>
    )
}