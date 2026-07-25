export default function Badge(){
    return (
        <div className='items-center gap-2 bg-white px-4 py-2 w-fit hidden lg:flex rounded-4xl'>
            <div className="animate-pulse text-[8px] text-green-500 text-shadow-green-700">
                <i className="fa-solid fa-circle"></i>
            </div>
            <span className="text-xs font-semibold">NOVA EDIÇÃO 2026</span>
        </div>
    )
}