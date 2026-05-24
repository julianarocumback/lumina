import { Link } from "react-router-dom";


export default function Logo() {
    return (
        <Link to='/'>
            <div className="flex justify-start">
                <h1 className="text-lg bg-gradient-to-r from-[#2563EB] via-[#A855F7] to-[#EF4444] font-bold bg-clip-text text-transparent lg:text-xl">Lumina Grace</h1>
            </div>
        </Link>
    )
}