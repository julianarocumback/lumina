import { Link } from "react-router-dom"


export default function BackLink(){
    return(
        <Link to='/'>
            <div className="font-semibold text-sm text-blue-800 pb-10">
                <button className="flex gap-2">
                    <div>
                        <i class="fa-solid fa-arrow-left"></i>
                    </div>
                    <div>
                        Continuar comprando
                    </div>
                </button>
            </div>
        </Link>
    )
}