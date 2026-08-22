export default function Resume(){
    return (
        <div className='flex flex-col gap-8 w-80 p-8 bg-white border border-gray-100 rounded-2xl shadow-sm'>
            <h3 className='text-2xl font-bold'>Resumo das Avaliações</h3>
            
            {/* Reviews */}
            <div className='flex items-center gap-8'>
                <div className='text-5xl font-bold'>4.9</div>
                <div>
                    <div className='text-[rgb(112,93,0)]'><i className='fa-solid fa-star'></i><i className='fa-solid fa-star'></i><i className='fa-solid fa-star'></i><i className='fa-solid fa-star'></i><i className='fa-solid fa-star'></i></div>
                    <div>Baseado em 128 avaliações</div>
                </div>
            </div>

            {/* Rating distribution */}
            <div>
                <div>
                    <div className='flex items-center gap-4'>
                        <div>5</div>
                        <div className='text-[12px] text-[rgb(112,93,0)]'><i className='fa-solid fa-star'></i></div>
                        <div>uma barra</div>
                        <div className='text-right'>115</div>
                    </div>
                </div>
                <div>
                    <div className='flex items-center gap-4'>
                        <div>4</div>
                        <div className='text-[12px] text-[rgb(112,93,0)]'><i className='fa-solid fa-star'></i></div>
                        <div>uma barra</div>
                        <div className='text-right'>10</div>
                    </div>
                </div>
                <div>
                    <div className='flex items-center gap-4'>
                        <div>3</div>
                        <div className='text-[12px] text-[rgb(112,93,0)]'><i className='fa-solid fa-star'></i></div>
                        <div>uma barra</div>
                        <div className='text-right'>2</div>
                    </div>
                </div>
                <div>
                    <div className='flex items-center gap-4'>
                        <div>2</div>
                        <div className='text-[12px] text-[rgb(112,93,0)]'><i className='fa-solid fa-star'></i></div>
                        <div>uma barra</div>
                        <div className='text-right'>0</div>
                    </div>
                </div>
                <div>
                    <div className='flex items-center gap-4'>
                        <div>1</div>
                        <div className='text-[12px] text-[rgb(112,93,0)]'><i className='fa-solid fa-star'></i></div>
                        <div>uma barra</div>
                        <div className='text-right'>1</div>
                    </div>
                </div>
            </div>

            {/* Recommendations */}
            <div className='flex items-center gap-4 p-3 text-[rgb(0,99,154)] bg-[rgba(206,229,255,0.2)] rounded-2xl'>
                <div><i className='fa-solid fa-thumbs-up'></i></div>
                <div className='text-sm font-bold'>98% dos compradores recomendam este produto</div>
            </div>

            {/* Highlights */}
            <div className='flex flex-col gap-3'>
                <h4 className='font-semibold'>Destaques Principais</h4>
                <div className='flex flex-col gap-1'>
                    <div className='flex gap-2'>
                        <div className='text-[rgb(188,0,75)]'><i className='fa-regular fa-circle-check'></i></div>
                        <div className='text-[rgb(71, 71, 71)]'>Couro de alta qualidade</div>
                    </div>
                    <div className='flex gap-2'>
                        <div className='text-[rgb(188,0,75)]'><i className='fa-regular fa-circle-check'></i></div>
                        <div className='text-[rgb(71, 71, 71)]'>Papel excelente para anotações</div>
                    </div>
                    <div className='flex gap-2'>
                        <div className='text-[rgb(188,0,75)]'><i className='fa-regular fa-circle-check'></i></div>
                        <div className='text-[rgb(71, 71, 71)]'>Conteúdo teológico profundo</div>
                    </div>
                </div>
            </div>
        </div>
    )
}