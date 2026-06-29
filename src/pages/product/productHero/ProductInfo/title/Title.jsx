export default function Title({produto}) {
    return (
        <div>
            <h1 className=" text-3xl lg:text-5xl font-semibold">{produto?.nome}</h1>
        </div>
    )
}