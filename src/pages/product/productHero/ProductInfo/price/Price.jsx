import {currencyFormatter} from '../../../../../utils/formatCurrency'
export default function Price({produto}){
    return (
        <div>
            <span className="text-2xl lg:text-3xl">{currencyFormatter(produto?.valor)}</span>
        </div>
    )
}