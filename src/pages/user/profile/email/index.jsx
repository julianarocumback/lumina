import { useState } from 'react'

export default function Email({ dadosCliente, atualizarEmail, cancelEmailUpdate, userEmail, userNewEmail }) {
  const [email, setEmail] = useState('')
  const [isEditingEmail, setIsEditingEmail] = useState(false)

  const handleAtivarBotaoEmail = () => {
    setEmail(userNewEmail || userEmail || '')
    setIsEditingEmail(true)
  }

  const handleCancelarAtualizacaoEmail = () => {
    setIsEditingEmail(false)
    setEmail('')
  }

  const handleAtualizarEmail = () => {
    if (!email || email === userEmail) return
    atualizarEmail(email)
    setIsEditingEmail(false)
  }

  const handleCancelEmailUpdate = () => {
    cancelEmailUpdate()
  }

  return (
    <div className='flex flex-col gap-1 w-full'>
        <h3 className='font-semibold text-[11px] text-gray-500 uppercase tracking-wider'>
            E-MAIL
        </h3>

        {/* Editing email */}
        {isEditingEmail ? (
            <div className='flex flex-col gap-2 w-full max-w sm:flex-row lg:justify-between'>
                <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Digite o novo e-mail'
                    className='w-full px-3 py-1 text-sm font-semibold text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 lg:w-80'
                    autoFocus
                />
                <div className='flex items-center gap-3 shrink-0'>
                    {/* Save email */}
                    <button type='button' className='px-2 py-1 text-sm font-semibold text-white bg-blue-600 rounded-lg transition-colors cursor-pointer hover:bg-blue-700' onClick={handleAtualizarEmail}>Salvar</button>
                    {/* Cancel email update */}
                    <button type='button' className='font-semibold text-gray-600 hover:text-gray-800 transition-colors cursor-pointer' onClick={handleCancelarAtualizacaoEmail}>Cancelar</button>
                </div>
            </div>
            ) : (
         
            <div className='flex flex-col  justify-between w-full sm:flex-row sm:items-center sm:gap-4'>
                <div className='flex items-center gap-2.5 truncate'>
                    <span className='text-gray-800 truncate tracking-wider'>
                        {userNewEmail || userEmail}
                    </span>

                    {/* Badge  */}
                    {userNewEmail && (
                        <span className='inline-flex  shrink-0 items-center px-2 py-0.5 text-[10px] font-bold text-amber-700 bg-amber-100 border border-amber-200  rounded-full'>
                        Pendente
                        </span>
                    )}
                </div>

                <div className='flex shrink-0 items-center gap-3  font-semibold'>
                    {userNewEmail ? (
                        <button
                        type='button'
                        onClick={handleCancelEmailUpdate}
                        className='text-red-600 hover:text-red-700 transition-colors cursor-pointer'
                        >
                        Cancelar alteração
                        </button>
                    ) : (
                        <button
                        type='button'
                        onClick={handleAtivarBotaoEmail}
                        className='text-base text-blue-700 hover:text-blue-800 transition-colors cursor-pointer'
                        >
                        Editar
                        </button>
                    )}
                </div>
            </div>
            )}

        {/* Dynamically displays the message as long as there is a pending email */}
        {userNewEmail && !isEditingEmail && (
            <p className='mt-1 text-amber-600 text-xs font-medium'> Você receberá um e-mail de confirmação em seu novo e-mail. </p>
        )}
    </div>
  )
}