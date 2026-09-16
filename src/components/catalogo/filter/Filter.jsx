export default function Filter({lista, category, setCategory}){
    const categories = ['Todos', ...new Set(lista.map(item => item.categoria))]
    
    return (
        <div className="w-full sm:w-80 h-full flex sm:flex-col overflow-x-auto no-scrollbar">
            {categories.map(item => <div className={`flex gap-4 w-30 px-2 ${item === category && 'text-blue-500 bg-blue-400/10 border'} rounded-lg cursor-pointer`} onClick={() => setCategory(item)}>{item}</div>)}
        </div>
    )
}