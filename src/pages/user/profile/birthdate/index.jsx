import {useEffect, useMemo, useState} from 'react'

export default function Birthdate({dadosCliente, onSaveBirthdate}){
    const [birthdate, setBirthdate] = useState('')
    const [isEditingBirthdate, setIsEditingBirthdate] = useState(false)
    const [isConfirming, setIsConfirming] = useState(false)
    console.log(birthdate)

    useEffect(()=> {
        if(dadosCliente?.birthdate){
            setBirthdate(dadosCliente.birthdate)
        }
    },[dadosCliente])


    const birthdateFormated = useMemo(() => {
        if(!birthdate) return ''

        const [ano, mes, dia] = birthdate.split('-')
        return `${dia}/${mes}/${ano}`


    }, [birthdate]) 

    // SAVE BIRTHDATE
    const handleSaveBirthdate = () => {
        if(!birthdate) return
        onSaveBirthdate(birthdate)
        setIsConfirming(false)
        setIsEditingBirthdate(false)
       
    }

    const handleAddBirthdate= (birthdate) => {
        setBirthdate(birthdate)
    }

    const handleEditingBirthdate = () => {
        setIsEditingBirthdate(true)
    }

    // CANCEL EDIT BIRTHDATE
    const handleCancelAddBirthdate = ()=> {
        setIsEditingBirthdate(false)
        setBirthdate('')
        setIsConfirming(false)
    }

    const handleConfirming = () => {
        setIsConfirming(true)
        setIsEditingBirthdate(false)

    }


    return (
        <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-[11px] text-gray-500">DATA DE NASCIMENTO</h3>
            <div className='relative'>
                {!isEditingBirthdate && birthdate && <span>{birthdateFormated}</span>}
                {isEditingBirthdate && <div> <input disabled={!isEditingBirthdate} onChange={(e) => handleAddBirthdate(e.target.value)}  type="date" className={`${isEditingBirthdate && 'enabled:outline'} absolute caret-black   cursor z-10`} value={birthdate}/>
                {/*  */}
                {/*  */}
                {/*  */}
                <span className='select-none pointer-events-none relative -left-[0.2px] tracking-tight font-arial font-sans'>{dadosCliente.birthdate}</span></div>}
           </div>
            <div className='flex flex-col lg:flex-row lg:justify-between'>
                {!isEditingBirthdate  && !dadosCliente.birthdate && <button onClick={handleEditingBirthdate} className='font-semibold text-blue-700 w-fit'>Adicionar</button>}
            </div>
            {isEditingBirthdate &&
                <div className='flex gap-4'>
                    <button onClick={handleCancelAddBirthdate}>Cancelar</button>
                    <button onClick={handleConfirming}>Adicionar</button>
                </div>
            }
            {isConfirming &&
                <div className='border '>
                    <p>Só é possível adicionar uma vez, após isso não será possível alterá-lo. Deseja continuar</p>
                    <div className='border flex justify-center items-center gap-8'>
                        <button onClick={handleSaveBirthdate} className='bg-blue-500 py-2 px-8 rounded-xl font-semibold'>Sim</button>
                        <button className='bg-gray-200 py-2 px-8 rounded-xl font-semibold' onClick={handleCancelAddBirthdate}>Não</button>
                    </div>    
                </div>
            }
        </div>
    )
}