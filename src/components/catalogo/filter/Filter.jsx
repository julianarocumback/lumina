import { Link } from "react-router-dom"

export default function Filter({lista, setCategoria, categoria}){
    
    const categorias = [...new Set(lista.map(item => item.categoria))].map(item => <div className={`${item === categoria  && 'text-blue-500 bg-blue-400/10 border w-30 rounded-lg px-2 relative -left-2'} flex gap-4 cursor-pointer`} onClick={() => setCategoria(item)}>{item}</div>)
    
    return (
        <div className="sticky top-0 w-80 h-full">
            <div>
                <div className={`${categoria === 'Todos' && 'text-blue-500 bg-blue-400/10 border w-30 rounded-lg px-2 relative -left-2'} flex flex-col gap-4`} onClick={() => setCategoria('Todos')}>Todos</div>
                {categorias}
            </div>
        </div>
    )
}