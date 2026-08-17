import { useState, useEffect } from "react";
import QRCode from './qr-code.svg';
import { motion, AnimatePresence } from 'framer-motion';
import { currencyFormatter } from '../../../../utils/formatters';
import { supabase } from '../../../../supabaseClient';

export default function Payment({
  pagamento,
  setPagamento,
  cupom,
  setCupom,
  payments,
  dadosCliente,
  onAddCard,
  onDeleteCard,
  defaultCard,
  lista,
  frete
}) {
  const [cupomAdicionado, setCupomAdicionado] = useState('');
  const [paymentType, setPaymentType] = useState('card');
  const [newPayment, setNewPayment] = useState(false);
  const [card, setCard] = useState({
    userId: dadosCliente?.id,
    holderName: '',
    cardNumber: '',
    expirationDate: '01/50',
    cvv: 123,
    brand: '',
    isDefault: false
  });

  const [liberado, setLiberado] = useState(false);

  // Escuta o canal do Supabase em tempo real
  useEffect(() => {
    const canal = supabase.channel('canal-desbloqueio');

    canal
      .on('broadcast', { event: 'liberar-tela' }, () => {
        setLiberado(true);
      })
      .subscribe();

    return () => {
      supabase.removeChannel(canal);
    };
  }, []);

  const [hasHolderNameInteracted, setHasHolderNameInteracted] = useState(false);
  const [hasCardNumberInteracted, setHasCardNumberInteracted] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // HOLDER NAME VARIABLES
  const hasHolderNameContent = card.holderName !== '';
  const hasHolderNameMinLength = card.holderName.length >= 3;
  const hasHolderNameMaxLength = card.holderName.length < 40;
  const hasHolderNameError = !hasHolderNameContent || !hasHolderNameMinLength || !hasHolderNameMaxLength;

  const hasHolderNameContentError = !hasHolderNameContent && (hasHolderNameInteracted || isSubmitted);
  const hasHolderNameContentLengthError = !hasHolderNameMinLength && hasHolderNameContent && (hasHolderNameInteracted || isSubmitted);

  const shouldShowHolderNameError = hasHolderNameError && (hasHolderNameInteracted || isSubmitted);
  const shouldShowHolderNameSuccess = !hasHolderNameError && (hasHolderNameInteracted || isSubmitted);

  // NUMBER CARD VARIABLES
  const hasCardNumberContent = card.cardNumber !== '';
  const hasCardNumberExactLength = card.cardNumber.length === 16;
  const hasCardNumberError = !hasCardNumberContent || !hasCardNumberExactLength;

  const hasCardNumberLengthError = !hasCardNumberExactLength && hasCardNumberContent && (hasCardNumberInteracted || isSubmitted);
  const hasCardNumberContentError = !hasCardNumberContent && (hasCardNumberInteracted || isSubmitted);

  const shouldShowCardNumberError = hasCardNumberError && (hasCardNumberInteracted || isSubmitted);
  const shouldShowCardNumberSuccess = !hasCardNumberError && (hasCardNumberInteracted || isSubmitted);

  // CARD
  const hasCard = !hasHolderNameError || !hasCardNumberError;
  const hasMaxCard = dadosCliente?.payments?.length > 3;

  // PRICE
  const price = (lista || []).map(item => item.valor).reduce((a, b) => a + b, 0);
  const valorFrete = frete?.price || 0;
  const valorCupom = cupom?.valor || 0;
  const desconto = (price + valorFrete) * valorCupom;
  const total = price + (valorFrete > 0 ? valorFrete : 0) - (desconto > 0 ? desconto : 0);
  const isPayInFull = total;
  const twoInstallments = total / 2;
  const threeInstallments = total / 3;

  // HOLDER NAME FUNCTIONS
  function handleHolderNameChange(event) {
    const holderName = event.target.value.replace(/\d/g, '');
    if (holderName.length > 40) return;
    setCard(prev => ({ ...prev, holderName }));
  }

  const handleHolderNameBlur = () => {
    setHasHolderNameInteracted(true);
  };

  // NUMBER CARD FUNCTIONS
  function handleCardNumberChange(event) {
    let cardNumber = event.target.value.replace(/\D/g, '');
    if (cardNumber.length > 16) {
      cardNumber = cardNumber.slice(0, 16);
    }
    setCard(prev => ({ ...prev, cardNumber }));
  }

  const handleCardNumberBlur = () => {
    setHasCardNumberInteracted(true);
  };

  // ADD DEFAULT CARD
  function handleDefaultCardChange(event) {
    const isDefault = event.target.checked;
    setCard(prev => ({ ...prev, isDefault }));
  }

  // ADD CARD PAYMENT
  function handleAddCardPayment(event) {
    event.preventDefault();
    setIsSubmitted(true);

    if (!hasCard || hasMaxCard) return;

    onAddCard(card);
    setNewPayment(false);

    setCard(prev => ({
      ...prev,
      holderName: '',
      cardNumber: '',
      brand: '',
      isDefault: false
    }));

    setHasHolderNameInteracted(false);
    setHasCardNumberInteracted(false);
    setIsSubmitted(false);
  }

  const paymentTypeList = [
    {
      id: 'card',
      main: true,
      title: 'Cartão de crédito',
      type: 'card',
      status: false
    },
    {
      id: 'pix',
      main: true,
      title: 'Pix',
      type: 'card',
      status: true
    }
  ];

  function handlePaymentType(paymentID) {
    setPaymentType(paymentID);
  }

  function handleCartaoSelecionado(payment) {
    if (Object.keys(pagamento).length === 0) {
      setPagamento(payment);
    } else if (pagamento.id !== payment.id) {
      setPagamento(payment);
    } else {
      setPagamento({});
    }
  }

  function handleVerificarCupom() {
    if (cupomAdicionado === 'DEUS') {
      setCupom(prev => ({ ...prev, valor: 0.1 }));
    }
  }

  function handleRemoverCupom() {
    setCupom({});
    setCupomAdicionado('');
  }

  const handleDeleteCard = (cardId) => {
    onDeleteCard(cardId);
  };

  // Timer PIX (30 min)
  const [timeLeft, setTimeLeft] = useState(30 * 60);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formattedMinutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
  const formattedSeconds = String(timeLeft % 60).padStart(2, '0');

  return (
    <div className="w-full h-full lg:rounded-2xl overflow-hidden bg-white shadow-xs flex flex-col gap-8 p-8 mb-50 lg:mb-0">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl">Forma de pagamento</h2>
        <p>Escolha como deseja concluir sua aquisição</p>
      </div>

      {/* FORMA DE PAGAMENTO */}
      <div className="flex flex-col gap-4">
        <div className="flex w-fit text-nowrap gap-4">
          {paymentTypeList.map(payment => (
            <div
              key={payment.id}
              onClick={() => handlePaymentType(payment.id)}
              className={`w-full ${paymentType === payment.id ? 'outline-green-300 bg-green-400 border-none text-white' : ''} border border-gray-300 rounded-2xl py-3 font-semibold px-4 flex text-gray-700 gap-4 cursor-pointer`}
            >
              <div>
                <i className="fa-solid fa-credit-card"></i>
              </div>
              <p>{payment.title}</p>
            </div>
          ))}
          {liberado && (
            <p className="bg-green-100 text-green-700 px-4 py-3 rounded-2xl font-bold">
              🎉 QR Code lido com sucesso!
            </p>
          )}
        </div>

        {/* OPÇÕES DE PAGAMENTO */}
        {paymentType === 'card' ? (
          <div className="flex gap-4 overflow-x-auto no-scrollbar from-95% to-[#0002] py-2">
            <AnimatePresence>
              {payments?.map(card => {
                const maskedCard = card?.card_number?.replace(/\D/g, '').replace(/^(\d{4})(\d{4})(\d{4})(\d{4})$/, '•••• •••• •••• $4');
                const isSelected = pagamento.id === card.id;

                return (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    layout
                    className={`${isSelected ? 'ring-2 ring-green-500' : 'ring-none'} flex-none h-40 lg:h-45 lg:w-75 gap-2 w-full md:w-full justify-center rounded-2xl bg bg-[radial-gradient(at_0%_0%,#000,transparent_100%),radial-gradient(at_100%_100%,#000,transparent_90%),radial-gradient(at_0%_0%,#000,transparent_80%)] shadow-lg p-4 flex flex-col relative`}
                    onClick={() => handleCartaoSelecionado(card)}
                  >
                    <div className='text-white/70 absolute top-4 right-5 flex gap-2'>
                      <button onClick={defaultCard}>deixar principal</button>
                      {card.is_default && <div className='flex justify-center items-center border rounded-full text-xs px-2 bg-green-400/30 border-none'>Principal</div>}
                      <div className='hover:text-white transition-all' onClick={() => handleDeleteCard(card.id)}>
                        <i className="fa-solid fa-trash"></i>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <div className="text-white"><i className="fa-brands fa-cc-visa"></i></div>
                      <span className="text-xs font-bold text-gray-400">{card.brand}</span>
                    </div>

                    <div className="bg-yellow-500 w-6 rounded-md h-4"></div>

                    <div className="self-center text-white font-semibold -tracking-tighter">{maskedCard}</div>
                    <div className="flex justify-between text-white">
                      <div>
                        <span className="text-[8px] font-semibold text-gray-400">Nome</span>
                        <p className="text-xs font-semibold uppercase">{card.holder_name}</p>
                      </div>
                      <div>
                        <span className="text-[8px] font-semibold text-gray-400 text-right">Validade</span>
                        <p className="text-xs font-semibold">{card.expiration_date}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        ) : (
          /* PIX */
          <div className="flex flex-col gap-6 lg:gap-8 text-center items-center p-2 lg:p-8">
            <div className="flex flex-col gap-1 lg:gap-2">
              <h2 className="text-[14px] lg:text-lg font-semibold text-gray-700">Escaneie o QR Code ou copie o código</h2>
              <p className="text-xs text-gray-500">O pagamento via PIX é instantâneo e seguro.</p>
            </div>

            <div className="h-50 border border-gray-200 rounded-2xl overflow-hidden shadow-xl">
              <img className="h-full" src={QRCode} alt="QR Code PIX" />
            </div>
            <div className="flex flex-col gap-4 w-full">
              <p className="text-[14px] lg:text-base font-semibold text-gray-700">Código PIX copia e cola</p>
              <div className="flex gap-4">
                <div className="border w-full text-xs truncate p-2 bg-gray-100 border-gray-200 rounded-lg">
                  00020101021226850014br.gov.bcb.pix0123radianteditorialpix@checkout.com.br5204000053039865406409.235802BR5920Radiant Editorial6009SAO PAULO62070503***6304E2B1
                </div>
                <button className="bg-blue-400 text-white font-semibold rounded-lg px-2 text-xs">COPIAR</button>
              </div>
              <div className="flex gap-2 text-gray-700 items-center justify-center text-[12px] lg:text-base">
                <div><i className="fa-regular fa-clock"></i></div>
                <div>Este código expira em <span className="text-pink-600 font-semibold">{formattedMinutes}:{formattedSeconds}</span> minutos</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {!newPayment && (payments?.length || 0) < 3 && paymentType === 'card' && (
        <div onClick={() => setNewPayment(true)} className="hover:cursor-pointer font-semibold text-sm text-blue-800">
          Adicionar cartão
        </div>
      )}
      {(payments?.length || 0) >= 3 && paymentType === 'card' && (
        <p>Não pode mais porque eu nao deixo</p>
      )}

      {/* NOVO CARTÃO */}
      {newPayment && (
        <div className='flex flex-col gap-6 w-full h-fit'>
          <form onSubmit={handleAddCardPayment} className='flex flex-col gap-4 relative'>
            {/* NÚMERO DO CARTÃO */}
            <div className="flex flex-col gap-2">
              <label htmlFor='lastFour' className='font-semibold text-xs text-gray-700'>NÚMERO DO CARTÃO</label>
              <div className='w-full relative'>
                <input
                  id='cardNumber'
                  type="text"
                  value={(card.cardNumber || '').replace(/(\d{4})(?=\d)/g, '$1 ')}
                  placeholder='0000 0000 0000 0000'
                  className={`${shouldShowCardNumberSuccess ? 'ring ring-green-400 shadow-xs shadow-red-300' : 'focus:ring focus:ring-amber-300'} ${shouldShowCardNumberError ? 'ring ring-red-500' : ''} focus:outline-none w-full rounded-lg bg-gray-100 px-3 text-xs py-2`}
                  onChange={handleCardNumberChange}
                  onBlur={handleCardNumberBlur}
                />
                {card.brand === 'Visa' ? (
                  <div className='absolute top-1 right-3 text-blue-800'><i className="fa-brands fa-cc-visa"></i></div>
                ) : card.brand === 'Mastercard' ? (
                  <div className='absolute top-1 right-3 text-red-900'><i className="fa-brands fa-cc-mastercard"></i></div>
                ) : card.brand === 'American Express' ? (
                  <div className='absolute top-1 right-3 text-gray-700'><i className="fa-brands fa-cc-amex"></i></div>
                ) : null}
                {hasCardNumberContentError && <p className='text-red-500 text-xs'>O número do cartão é obrigatório.</p>}
                {hasCardNumberLengthError && <p className='text-red-500 text-xs'>O número do cartão deve conter 16 caracteres</p>}
              </div>
            </div>

            {/* NOME NO CARTÃO */}
            <div className="flex flex-col gap-2">
              <label className='font-semibold text-xs text-gray-700' htmlFor="holderName">NOME NO CARTÃO</label>
              <input
                id='holderName'
                onChange={handleHolderNameChange}
                type="text"
                value={card.holderName}
                placeholder='Como impresso no cartão'
                className={`${shouldShowHolderNameSuccess ? 'ring ring-green-400 shadow-xs shadow-red-300' : 'focus:ring focus:ring-amber-300'} ${shouldShowHolderNameError ? 'ring ring-red-500' : ''} focus:outline-none rounded-lg bg-gray-100 px-3 text-xs py-2 uppercase`}
                onBlur={handleHolderNameBlur}
              />
              {hasHolderNameContentError && <p className='text-red-500 text-xs'>O nome no cartão é obrigatório.</p>}
              {hasHolderNameContentLengthError && hasHolderNameContent && <p className='text-red-500 text-xs'>O nome deve ter pelo menos 3 caracteres.</p>}
            </div>

            {/* VALIDADE E CVV */}
            <div className="flex gap-4 w-full">
              <div className='w-full flex flex-col gap-2'>
                <label className='font-semibold text-xs text-gray-700' htmlFor="expirationDate">VALIDADE</label>
                <input id='expirationDate' type="text" value={card.expirationDate} disabled placeholder={card.expirationDate} className='rounded-lg bg-gray-100 text-xs py-2 px-3 w-full' />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor='cvv' className='font-semibold text-xs text-gray-700'>CVV</label>
                <input id='cvv' type="text" disabled placeholder={card.cvv} value={card.cvv} className='rounded-lg bg-gray-100 px-3 py-2 text-xs w-full' />
              </div>
            </div>

            {/* PRINCIPAL */}
            <div className="flex gap-4 h-7">
              <div className="flex items-center gap-2">
                <input id='main' onChange={handleDefaultCardChange} type="checkbox" />
                <label htmlFor='main' className='font-semibold text-xs text-gray-700'>Definir como cartão principal</label>
              </div>
            </div>

            {/* SALVAR CARTÃO */}
            <div className="flex gap-4">
              <button type='submit' className='text-center w-full bg-gradient-to-r from-[#0288D1] to-[#E91E63] py-2 rounded-xl text-white font-semibold hover:cursor-pointer'>Salvar cartão</button>
              <button type='button' onClick={() => setNewPayment(false)} className="text-center w-full bg-gray-400 py-2 rounded-xl text-white font-semibold hover:cursor-pointer">Cancelar</button>
            </div>
          </form>
        </div>
      )}

      {/* PARCELAMENTO */}
      {!newPayment && paymentType === 'card' && (
        <div className="flex flex-col gap-2">
          <label htmlFor="parcelamento">Opções de parcelamento:</label>
          <select name="" id="parcelamento" className="border p-2 rounded-lg">
            <option value="">1x de {currencyFormatter(isPayInFull)} sem juros</option>
            <option value="">2x de {currencyFormatter(twoInstallments)} sem juros</option>
            <option value="">3x de {currencyFormatter(threeInstallments)} sem juros</option>
          </select>
        </div>
      )}

      {/* CUPOM */}
      {paymentType === 'card' && !newPayment && (
        <div className="flex flex-col gap-2">
          <label htmlFor="cupom" className="font-semibold">Adicionar cupom de desconto</label>
          <div className="flex gap-4">
            <input
              disabled={Object.keys(cupom).length > 0}
              id="cupom"
              className="disabled:bg-gray-100 disabled:border-gray-300 border rounded-lg px-2 w-50"
              value={cupomAdicionado}
              onChange={(e) => setCupomAdicionado(e.target.value)}
              type="text"
            />
            {Object.keys(cupom).length === 0 ? (
              <button onClick={handleVerificarCupom}>Adicionar</button>
            ) : (
              <button onClick={handleRemoverCupom}>Remover</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}