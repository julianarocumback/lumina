import { useState } from 'react'

export default function Email({ dadosCliente, atualizarEmail, cancelEmailUpdate, userEmail, userNewEmail }) {
  const [email, setEmail] = useState('')
  const [isEditingEmail, setIsEditingEmail] = useState(false)
  const [isEmailValidated, setIsEmailValidated] = useState(true)
  const [isInteracted, setIsInteracted] = useState(false)
  const [isCanceling, setIsCanceling] = useState(false)

  const hasEmailContent = email.trim() !== ''
  const shouldShowEmailError = isInteracted && !hasEmailContent

  const handleEmailInteracted = () => {
    setIsInteracted(true)
  }

  const handleAtivarBotaoEmail = () => {
    setEmail(userNewEmail || userEmail || '')
    setIsEditingEmail(true)
    setIsEmailValidated(true)
    setIsInteracted(false)
  }

  const handleCancelarAtualizacaoEmail = () => {
    setIsEditingEmail(false)
    setEmail('')
    setIsInteracted(false)
    setIsEmailValidated(true)
  }

  const handleAtualizarEmail = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if (!email || email === userEmail) return

    if (!emailRegex.test(email)) {
      setIsEmailValidated(false)
      return
    }

    setIsEmailValidated(true)
    atualizarEmail(email)
    setIsEditingEmail(false)
    setIsInteracted(false)
  }

  const handleCancelEmailUpdate = async () => {
    setIsCanceling(true)
    try {
      await cancelEmailUpdate()
    } finally {
      setIsCanceling(false)
    }
  }

  return (
    <div className='flex flex-col gap-1 w-full'>
      <h3 className='font-semibold text-[11px] text-gray-500 uppercase tracking-wider'>
        E-MAIL
      </h3>

      {/* Modo de Edição */}
      {isEditingEmail ? (
        <div className='flex flex-col gap-2 w-full max-w sm:flex-row lg:justify-between'>
          <input
            type='email'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              if (!isEmailValidated) setIsEmailValidated(true)
            }}
            placeholder='Digite o novo e-mail'
            className='w-full px-3 py-1 text-sm font-semibold text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 lg:w-80'
            autoFocus
            onBlur={handleEmailInteracted}
          />
          <div className='flex items-center gap-3 shrink-0'>
            <button 
              type='button' 
              className='px-2 py-1 text-sm font-semibold text-white bg-blue-600 rounded-lg transition-colors cursor-pointer hover:bg-blue-700' 
              onClick={handleAtualizarEmail}
            >
              Salvar
            </button>
            <button 
              type='button' 
              className='font-semibold text-gray-600 hover:text-gray-800 transition-colors cursor-pointer text-sm' 
              onClick={handleCancelarAtualizacaoEmail}
            >
              Cancelar
            </button>
          </div>
        </div>
      ) : (
        /* Modo de Visualização */
        <div className='flex flex-col justify-between w-full sm:flex-row sm:items-center sm:gap-4'>
          <div className='flex items-center gap-2.5 truncate'>
            <span className='text-gray-800 truncate tracking-wider text-sm font-semibold'>
              {userNewEmail || userEmail}
            </span>

            {/* Badge Pendente */}
            {userNewEmail && (
              <span className='inline-flex shrink-0 items-center px-2 py-0.5 text-[10px] font-bold text-amber-700 bg-amber-100 border border-amber-200 rounded-full'>
                Pendente
              </span>
            )}
          </div>

          <div className='flex shrink-0 items-center gap-3 font-semibold'>
            {userNewEmail ? (
              <button
                type='button'
                disabled={isCanceling}
                onClick={handleCancelEmailUpdate}
                className='text-xs text-red-600 hover:text-red-700 transition-colors cursor-pointer disabled:opacity-50'
              >
                {isCanceling ? 'Cancelando...' : 'Cancelar alteração'}
              </button>
            ) : (
              <button
                type='button'
                onClick={handleAtivarBotaoEmail}
                className='text-sm text-blue-700 hover:text-blue-800 transition-colors cursor-pointer'
              >
                Editar
              </button>
            )}
          </div>
        </div>
      )}

      {/* Mensagens de Feedback */}
      {userNewEmail && !isEditingEmail && (
        <p className='mt-1 text-amber-600 text-xs font-medium'>
          Você receberá um e-mail de confirmação em seu novo e-mail.
        </p>
      )}
      {shouldShowEmailError && isEditingEmail && (
        <p className='text-xs text-red-500 font-medium'>O campo não pode ficar vazio</p>
      )}
      {!isEmailValidated && isEditingEmail && (
        <p className='text-xs text-red-500 font-medium'>E-mail inválido</p>
      )}
    </div>
  )
}