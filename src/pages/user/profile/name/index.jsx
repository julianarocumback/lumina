import {useState} from 'react'

export default function Name({dadosCliente, onSaveName}){
    const [name, setName] = useState('')
    const [isEditingName, setIsEditingName] = useState(false)

    // EDIT NAME
    const handleEditName = () => {
        setIsEditingName(true)
    }

    // CANCEL EDIT NAME
    const handleCancelEditName = () => {
        setIsEditingName(false)
        setName('')
    }
    
    // SAVE NAME
    const handleSaveName = () => {
        const cleanName = name.trim()
        if(cleanName.length === 0) return
        
        onSaveName(cleanName)
        setName('')
        setIsEditingName(false)
    }

    return (
        <div className='flex flex-col gap-1 w-full'>
            <h3 className="font-semibold text-[11px] text-gray-500">NOME COMPLETO</h3>

            {!isEditingName &&
                <div className='flex flex-col sm:flex-row justify-between w-full '>
                    {dadosCliente?.nome? <span>{dadosCliente?.nome}</span>: <span></span>}
                    <button className='font-semibold text-blue-700 w-fit' onClick={handleEditName}>Editar</button>
                </div>
            }
        
            {isEditingName &&
                <div className='flex flex-col sm:flex-row justify-between w-full gap-2 '>
                    <input type='text' disabled={!isEditingName} value={name} placeholder={dadosCliente?.nome} className={`${isEditingName && 'border left-0'} text-gray-black font-semibold px-2 rounded-lg relative -left-2`} onChange={(e)=> setName(e.target.value.replace(/[^\p{L}\s]/gu, '').trimStart().replace(/\s{2,}/g, ' '))}/>
                    <div className="flex gap-4">
                         {/* Save email */}
                        <button type='button' className='px-2 py-1 text-sm font-semibold text-white bg-blue-600 rounded-lg transition-colors cursor-pointer hover:bg-blue-700' onClick={handleSaveName}>Salvar</button>
                        {/* Cancel email update */}
                        <button type='button' className='font-semibold text-gray-600 hover:text-gray-800 transition-colors cursor-pointer' onClick={handleCancelEditName}>Cancelar</button>
                    </div>
                </div>
            } 
            
        </div>     
    )
}