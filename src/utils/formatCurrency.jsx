const Formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
})

export const currencyFormatter = (value) => {
    if(!value || isNaN(value)) return Formatter.format(0)
        return  Formatter.format(value)
}