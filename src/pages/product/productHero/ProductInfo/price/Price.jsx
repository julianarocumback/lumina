export default function Price({produto}){
    return (
        <div>
            <span className="text-2xl lg:text-3xl">{produto?.valor}</span>
        </div>
    )
}