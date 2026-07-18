import {useState} from 'react'

export default function Cpf({dadosCliente, onSaveCpf}){
    const [cpf, setCpf] = useState('')
    const [isEditingCPF, setIsEditingCPF] = useState(false)
    const [isConfirming, setIsConfirming] = useState(false)

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
    return (
        <div className="flex flex-col gap-1">
            <h3 className="font-semibold text-[11px] text-gray-500">CPF</h3>
            <div className='relative'>
                {!isEditingCPF && <span>{!dadosCliente?.cpf?cpfFormated:cpfparaplaceholder }</span>}
                {isEditingCPF && <div> <input disabled={!isEditingCPF} onChange={(e) => handleAddCPF(e.target.value.replace(/\D/g, ''))}  type="text" className={`${isEditingCPF && 'enabled:outline'} absolute text-transparent bg-transparent caret-black   cursor z-10`} value={cpfFormatedValue()}/>
                {/*  */}
                {/*  */}
                {/*  */}
                <span className='select-none pointer-events-none relative -left-[0.2px] tracking-tight font-arial font-sans'>{cpfFormated}</span></div>}
           </div>
            <div className='flex flex-col lg:flex-row lg:justify-between'>
                {!isEditingCPF && !dadosCliente?.cpf && <button onClick={handleEditingCPF} className='font-semibold text-blue-700 w-fit'>Adicionar</button>}
            </div>
            {isEditingCPF &&
                <div className='flex gap-4'>
                    <button onClick={handleCancelAddCpf}>Cancelar</button>
                    <button onClick={() => setIsConfirming(true)}>Adicionar</button>
                </div>
            }
            {isConfirming &&
                <div className='border '>
                    <p>Só é possível adicionar uma vez, após isso não será possível alterá-lo. Deseja continuar</p>
                    <div className='border flex justify-center items-center gap-8'>
                        <button onClick={handleSaveCpf} className='bg-blue-500 py-2 px-8 rounded-xl font-semibold'>Sim</button>
                        <button className='bg-gray-200 py-2 px-8 rounded-xl font-semibold' onClick={()=>setIsConfirming(false)}>Não</button>
                    </div>    
                </div>
            }
        </div>
    )
}