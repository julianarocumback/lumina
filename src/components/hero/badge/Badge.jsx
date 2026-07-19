export default function Badge(){
    return (
        <div className=' flex items-center gap-2 bg-white px-4 py-2 w-fit rounded-4xl'>
            <div className="animate-pulse text-[8px] text-[#BC004B]">
                <i className="fa-solid fa-circle"></i>
            </div>
            <span className="text-xs">NOVA EDIÇÃO 2026</span>
        </div>
    )
}