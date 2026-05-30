import { Link } from "react-router-dom"


export default function Step({icone, texto, funcao, link, estilo}) {
    return (
        <Link to={link}>
            <div className={`flex flex-col gap-2 items-center`}>
                <div className={` w-12 h-12 items-center flex justify-center bg-gray-300 rounded-full text-lg ${estilo}`}>
                    {icone}
                </div>
                <div className="font-semibold text-blue-900 text-sm">
                    {texto}
                </div>
            </div>
        </Link>
    )
}