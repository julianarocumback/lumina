import { Link } from "react-router-dom"

export default function Filter({lista, setCategoria}){
    
    const categorias = [...new Set(lista.map(item => item.categoria))].map(item => <div className={`${lista.some(item => item.id) === item.id  && 'text-red-200'}`} onClick={() => setCategoria(item)}>{item}</div>)
    

    
    return (
        <div className="w-80 h-full">
            <div>
                <div className="flex flex-col" onClick={() => setCategoria('Todos')}>Todos</div>
                {categorias}
            </div>
        </div>
    )
}