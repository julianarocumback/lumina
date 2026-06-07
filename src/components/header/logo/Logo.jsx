import { Link } from "react-router-dom";


export default function Logo() {
    return (
        <Link to='/'>
            <div className="hidden lg:flex justify-start">
                <h1 className="hidden lg:block text-lg bg-gradient-to-r from-[#2563EB] via-[#A855F7] to-[#EF4444] font-bold bg-clip-text text-transparent lg:text-xl">Lumina Grace</h1>
            </div>
            <div className="lg:hidden">
                <i class="fa-solid fa-house"></i>
            </div>
        </Link>
    )
}