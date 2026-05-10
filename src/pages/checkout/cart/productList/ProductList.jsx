import Foto from './como_flechas.jpg'

export default function ProductList(){
    return(

        <div className="w-full rounded-2xl overflow-hidden bg-white shadow-xs">
          <table className="w-full">
            <thead className="bg-gray-200 text-sm text-gray-700 font-semibold relative h-12">
                <tr className="indent-7">
                    <td>Produto</td>
                    <td>Preço</td>
                    <td>Quantidade</td>
                    <td>Total</td>
                </tr>
            </thead>
            <tr className="h-12 indent-7 text-sm/">
                <td className="h-12 left-5 relative top-3">
                    <img className="h-40" src={Foto} alt="" /></td>
                <td>R$ 280,00</td>
                <td>aaa</td>
                <td>aaa</td>
            </tr>
            <tr className="h-12 indent-7">
                <td>aaa</td>
                <td>aaa</td>
                <td>aaa</td>
                <td>aaa</td>
            </tr>
            <tr className="h-12 indent-7">
                <td>aaa</td>
                <td>aaa</td>
                <td>aaa</td>
                <td>aaa</td>
            </tr>
            <tr className="h-12 indent-7">
                <td>aaa</td>
                <td>aaa</td>
                <td>aaa</td>
                <td>aaa</td>
            </tr>
          </table>
        </div>
        
    )
}