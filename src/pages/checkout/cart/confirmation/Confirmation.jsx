export default function Confirmation(){
    return(
        <div className="w-full rounded-2xl overflow-hidden bg-white shadow-xs p-20 mx-30">
            <div className="flex flex-col gap-8">

                <div className="flex flex-col items-center text-center gap-4">
                    <div className="text-white text-4xl shadow-xs bg-amber-200 rounded-full w-20 h-20 flex justify-center items-center"><i class="fa-solid fa-circle-check"></i></div>
                    <h2 className="text-5xl font-semibold">Pedido realizado com sucesso!</h2>
                    <div className="px-25 text-lg italic">
                        <p>Obrigado por fazer parte da nossa jornada. Preparamos sua encomenda com todo o cuidado e carinho. Você receberá uma confirmação em seu e-mail em instantes.</p>

                    </div>
                </div>


                <div className="flex gap-7">
                    <div className="border w-full bg-gray-200 p-4 rounded-2xl">
                        <p>IDENTIFICAÇÃO DO PEDIDO</p>
                        <p>#RL-SÓ-DEUS-SABE</p>
                    </div>

                    <div className="border w-full bg-blue-200 p-4 rounded-2xl flex gap-4 items-center">
                        <div><i class="fa-solid fa-truck-fast"></i></div>
                        <div>
                            <p>PREVISÃO</p>
                            <p>ATÉ 2 DIAS ÚTEIS</p>
                        </div>
                    </div>
                </div>


                <div className="flex gap-7 mx-20 py-16">
                    <button className="flex items-center p-4 w-full rounded-full bg-red-300 justify-center font-semibold">ACOMPANHAR PEDIDO</button>
                    <button className="flex items-center border p-4 w-full rounded-full  justify-center font-semibold">VOLTAR PARA A LOJA</button>
                </div>

            </div>

        </div>
    )
}