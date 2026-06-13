import {Link} from 'react-router-dom'
export default function Confirmation(){
    return(
        <div className="w-full rounded-2xl overflow-hidden bg-white shadow-xs px-4 py-8 lg:p-20">
            <div className="flex flex-col gap-8 pt-40 lg:pt-0">

                <div className="flex flex-col items-center text-center gap-2 lg:gap-4">
                    <div className="text-white text-lg lg:text-4xl shadow-xs bg-amber-200 rounded-full w-10 h-10 lg:w-20 lg:h-20 flex justify-center items-center"><i class="fa-solid fa-circle-check"></i></div>
                    <h2 className="text-lg lg:text-5xl font-semibold">Pedido realizado com sucesso!</h2>
                    <div className="lg:px-25 lg:text-lg italic">
                        <p>Obrigado por fazer parte da nossa jornada. Preparamos sua encomenda com todo o cuidado e carinho. Você receberá uma confirmação em seu e-mail em instantes.</p>

                    </div>
                </div>


                <div className="flex flex-col lg:flex-row px-50">
                    <div className=" w-full bg-gray-200 p-4 rounded-2xl text-center">
                        <p className="font-semibold">IDENTIFICAÇÃO DO PEDIDO</p>
                        <p>#RL-SÓ-DEUS-SABE</p>
                    </div>

                 
                </div>


                <div className="flex flex-col lg:justify-center lg:flex-row lg:gap-4 gap-2 lg:py-4 ">
                    <Link to='/user/orders'>
                        <button className="flex items-center py-4 px-8 w-full rounded-full justify-center font-semibold bg-gradient-to-r from-[#00639a] to-[#bc004b] text-white">ACOMPANHAR PEDIDO</button>
                    
                    </Link>
                    <Link to='/'>
                        <button className="flex items-center lg:border text-xs lg:text-base py-4 px-8 w-full rounded-full  justify-center font-semibold">VOLTAR PARA A LOJA</button>
                    
                    </Link>
                </div>

            </div>

        </div>
    )
}