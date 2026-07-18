export default function Info({produto}) {
    return (
        <div>
            <p className="text-base lg:text-xl text-[rgba(71,71,71,1)] line-clamp-7 whitespace-pre-line">
                {produto?.description}
            </p>
        </div>
    )
}