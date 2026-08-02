import { Link } from "react-router-dom"

export const MobileAbout =() => {
    return (
        <div className="flex flex-col justify-center text-center p-12">
            <h2 className="text-xl text-[#075985] pb-4">Lumina</h2>
            <p className="text-[#474747] pb-8">Iluminando caminhos através da literatura cristã de alta qualidade e design inspirado.</p>
            <div className="flex gap-2 justify-center">
                <div className="text-[#00639A]"><i className="fa-solid fa-earth-americas"></i></div>
                <div className="text-[#00639A]"><i className="fa-solid fa-envelope"></i></div>
            </div>
        </div>
    )
}

export const DesktopAbout =() => {
    return (
        <div className="flex flex-col p-12">
            <h2 className="text-xl text-[#075985] pb-4 font-bold">Lumina</h2>
            <p className="text-[#474747] pb-8">Iluminando caminhos através da literatura cristã de alta qualidade e design inspirado.</p>
            <div className="flex gap-2 ">
                <Link to='#'><div className="text-[#00639A]"><i className="fa-solid fa-earth-americas"></i></div></Link>
                <Link to='#'><div className="text-[#00639A]"><i className="fa-solid fa-envelope"></i></div></Link>
            </div>
        </div>
    )
}