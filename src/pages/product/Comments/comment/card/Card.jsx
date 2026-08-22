export default function Card(){
    return (
        <div className='relative flex flex-col gap-7 w-full p-8 bg-white border border-gray-200 rounded-2xl shadow-sm'>
            <div className='flex gap-4'>
                <div className='flex justify-around items-center h-12 w-12 font-bold bg-[rgba(0,99,154,0.1)] rounded-full'>MD</div>
            
                <div>
                    <h4 className='text-xl font-semibold'>Maria D.</h4>
                    <div className='flex gap-2 text-sm font-semibold text-[rgb(188,0,75)]'>
                        <div><i className='fa-regular fa-circle-check'></i></div>
                        <div>Compra verificada</div>
                    </div>
                    <div className='flex gap-2 text-[rgb(71,71,71)]'>
                        <div>•</div>
                        <div>15 de Outubro, 2023</div>
                    </div>
                </div>
            </div>

            <div className='text-base text-[rgb(71,71,71)] lg:text-lg'>
                'A beleza desta bíblia é inspiradora. A clareza das notas de estudo transformou minha devoção diária. Um verdadeiro tesouro espiritual. O couro tem um toque incrível e as páginas são perfeitas.'
            </div>

            <div className='h-0.5 w-full bg-gray-200'></div>

            <div className='flex items-center gap-8'>
                <span className='text-[rgb(71,71,71)] lg:inline hidden'>Esta avaliação foi útil?</span>
                <div className='flex gap-4'>
                    <button className='flex items-center gap-2 py-2 px-4 bg-gray-200    text-[rgb(71,71,71)] rounded-3xl'>
                        <div>
                            <i className='fa-regular fa-thumbs-up'></i>
                        </div>
                        <div>Útil (24)</div>
                    </button>
                    <button className='flex items-center gap-2 py-2 px-4 bg-gray-200    text-[rgb(71,71,71)] rounded-3xl'>
                        <div>
                            <i className='fa-regular fa-thumbs-down'></i>
                        </div>
                        <div>Não útil (2)</div>
                    </button>
                </div>
            </div>

            <div className='absolute top-9  right-5'>
                <div className='text-xs text-[rgb(112,93,0)] lg:gap-2 lg:text-base lg:flex '>
                    <i className='fa-solid fa-star'></i><i className='fa-solid fa-star'></i><i className='fa-solid fa-star'></i><i className='fa-solid fa-star'></i><i className='fa-solid fa-star'></i>
                </div>
            </div>
        </div>
    )
}