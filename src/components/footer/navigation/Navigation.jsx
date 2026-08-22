import { Link } from 'react-router-dom'

export default function Navigation() {
    return (
        <nav className='flex flex-col gap-6 p-12'>
            <h4 className='text-xs font-medium text-[#1A1C1D]'>NAVEGAÇÃO</h4>
            <ul className='flex flex-col gap-3 text-[#64748B]'>
                <Link to='#'>Livros</Link>
                <Link to='#'>Devocionais</Link>
                <Link to='#'>Teologia</Link>
                <Link to='#'>Infantil</Link>
            </ul>
        </nav>
    )
}