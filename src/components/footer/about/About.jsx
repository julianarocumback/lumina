import { Link } from 'react-router-dom'

export const MobileAbout = () => {
    return (
        <div className='flex flex-col justify-center p-12 text-center'>
            <h2 className='pb-4 text-xl text-[#075985]'>Lumina</h2>
            <p className='pb-8 text-[#474747]'>Iluminando caminhos através da literatura cristã de alta qualidade e design inspirado.</p>
            <div className='flex justify-center gap-2'>
                <div className='text-[#00639A]'><i className='fa-solid fa-earth-americas'></i></div>
                <div className='text-[#00639A]'><i className='fa-solid fa-envelope'></i></div>
            </div>
        </div>
    )
}

export const DesktopAbout =() => {
    return (
        <div className='flex flex-col p-12'>
            <h2 className='pb-4 text-xl font-bold text-[#075985]'>Lumina</h2>
            <p className='pb-8 text-[#474747] '>Iluminando caminhos através da literatura cristã de alta qualidade e design inspirado.</p>
            <div className='flex gap-2 '>
                <Link to='#'><div className='text-[#00639A]'><i className='fa-solid fa-earth-americas'></i></div></Link>
                <Link to='#'><div className='text-[#00639A]'><i className='fa-solid fa-envelope'></i></div></Link>
            </div>
        </div>
    )
}