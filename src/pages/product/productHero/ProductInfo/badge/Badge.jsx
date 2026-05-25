export default function Badge({produto}){
    return(
        <div>
            <span className="font-semibold text-sm lg:text-xl text-blue-700">{produto.categoria}</span>
        </div>
    )
}