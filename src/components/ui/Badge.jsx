export default function Badge({style}){
    return (
        <div className={`items-center gap-2 w-fit px-4 py-2 bg-white rounded-4xl ${style}`}>
            <div className='animate-pulse text-[8px] text-green-500 text-shadow-green-700'>
                <i className='fa-solid fa-circle'></i>
            </div>
            <span className='text-xs font-semibold'>NOVA EDIÇÃO 2026</span>
        </div>
    )
}