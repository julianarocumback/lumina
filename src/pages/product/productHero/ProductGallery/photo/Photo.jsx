export default function Photo({foto}) {
    return (
        <div className="h-130 lg:h-170 w- border border-gray-200 rounded-4xl overflow-hidden">
            <img className="object-cover h-full w-full" src={foto?.url} alt="" />
        </div>
    )
}