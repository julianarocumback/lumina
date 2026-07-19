export default function Badge(){
    return (
        <div className='items-center gap-2 bg-white px-4 py-2 w-fit hidden lg:flex rounded-4xl'>
            <div className="animate-pulse text-[8px] text-[#BC004B]">
                <i className="fa-solid fa-circle"></i>
            </div>
            <span className="text-xs">NOVA EDIÇÃO 2026</span>
        </div>
    )
}