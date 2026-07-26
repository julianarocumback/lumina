// Format price to Brazilian currency standard (BRL)
export const currencyFormatter = (price) => {
    const Formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
})

    if(!price || isNaN(price)) return Formatter.format(0)
        return  Formatter.format(price)
}


// Format date to the Brazilian date standard (DD/MM/YYYY)
export const formatDate = (dataIso) => {
    if (!dataIso) return ''
    const date = new Date(dataIso)

    if (isNaN(date.getTime())) return ''

    return new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    }).format(date)
}