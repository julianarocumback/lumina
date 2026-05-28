import { Link } from "react-router-dom"


export default function Step({icone, texto, funcao, link}) {
    return (
        <Link to={link}>
            <div className="flex flex-col gap-2 items-center">
                <div className="w-10 h-10 lg:w-12 lg:h-12 items-center flex justify-center bg-gray-300 rounded-full text-lg">
                    {icone}
                </div>
                <div className="font-semibold text-blue-900 lg:text-sm text-xs">
                    {texto}
                </div>
            </div>
        </Link>
    )
}