export default function Delivery(){
    return(
        <div className="w-full rounded-2xl overflow-hidden bg-white shadow-xs p-8">
            <div className="pb-12 flex flex-col gap-2">
                <h2 className="text-2xl">Endereço de Entrega</h2>
                <p>Onde devemos entregar sua nova leitura edificante?</p>
            </div>

            <div className="flex flex-col gap-4">
                <p className="font-semibold">Selecione um endereço de entrega</p>
                {/* endereços */}
                <div className="flex gap-8">

                    <div className="border p-4 flex flex-col gap-2 rounded-2xl">
                        <div className="flex justify-between">
                            <div className="flex gap-2">
                                <div><i class="fa-regular fa-house"></i></div>
                                <span className="font-semibold">Casa</span>
                            </div>
                            <div>
                                <i class="fa-regular fa-circle"></i>
                            </div>
                        </div>
                        <div>
                            <div>Av. Aliança, 777, São Paulo - SP, CEP: 01234-567</div>
                        </div>
                    </div>


                    <div className="border p-4 flex flex-col gap-2 rounded-2xl">
                        <div className="flex justify-between">
                            <div className="flex gap-2">
                                <div><i class="fa-solid fa-briefcase"></i></div>
                                <span className="font-semibold">Casa</span>
                            </div>
                            <div>
                                <i class="fa-regular fa-circle"></i>
                            </div>
                        </div>
                        <div>
                            <div>Av. Aliança, 777, São Paulo - SP, CEP: 01234-567</div>
                        </div>
                    </div>
                </div>
                <p className="font-semibold text-sm text-blue-800">+ Adicionar novo endereço</p>
            </div>

            <div className="py-8 flex items-center gap-4 justify-between">
                <div className="h-0.5 bg-gray-200 w-full"></div>
                <div className="text-nowrap text-xs font-semibold text-gray-500">OU PREENCHA UM NOVO</div>
                <div className="h-0.5 bg-gray-200 w-full"></div>
            </div>

            <div className="flex flex-col gap-8">
                {/* CEP */}
                <div className="flex flex-col gap-2">
                    <label className="font-semibold text-sm" htmlFor="CEP">CEP</label>
                    <div className="flex gap-4">
                        <input className="border w-70 py-2 px-4 rounded-lg" type="text" name="" id="CEP" placeholder="00000-000" />
                        <button className="border py-2 px-4 rounded-lg text-sm font-semibold bg-gray-200">Buscar</button>
                    </div>
                </div>

                {/* RUA E NÚMERO */}
                <div className="flex gap-4">

                    <div className="flex flex-col gap-2">
                        <label className="font-semibold text-sm" htmlFor="CEP">RUA</label>
                        <input className="border w-70 py-2 px-4 rounded-lg" type="text" name="" id="CEP" placeholder="Nome do logradouro" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-semibold text-sm" htmlFor="CEP">NÚMERO</label>
                        <input className="border w-70 py-2 px-4 rounded-lg" type="text" name="" id="CEP" placeholder="Ex.: 123" />
                    </div>
                </div>

                {/* COMPLEMENTO E BAIRRO */}
                <div className="flex gap-4">

                    <div className="flex flex-col gap-2">
                        <label className="font-semibold text-sm" htmlFor="CEP">COMPLEMENTO</label>
                        <input className="border w-70 py-2 px-4 rounded-lg" type="text" name="" id="CEP" placeholder="Apto, bloco, etc." />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-semibold text-sm" htmlFor="CEP">BAIRRO</label>
                        <input className="border w-70 py-2 px-4 rounded-lg" type="text" name="" id="CEP" placeholder="Seu bairro" />
                    </div>
                </div>

                {/* CIDADE E ESTADO */}
                <div className="flex gap-4">

                    <div className="flex flex-col gap-2">
                        <label className="font-semibold text-sm" htmlFor="CEP">CIDADE</label>
                        <input className="border w-70 py-2 px-4 rounded-lg" type="text" name="" id="CEP" placeholder="Sua cidade" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-semibold text-sm" htmlFor="CEP">ESTADO</label>
                        <select className="border w-70 py-2 px-4 rounded-lg" name="" id="">
                            <option value="">Seu estado</option>
                            <option value="">AM</option>
                            <option value="">SP</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="py-8 flex flex-col gap-5">
                <div>
                    <p>MODALIDADE DE ENVIO</p>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="border rounded-2xl p-4 flex justify-between items-center">
                        <div className="flex gap-4 items-center">
                            <div>
                                <i class="fa-regular fa-circle"></i>
                            </div>
                            <div>
                                <p className="font-semibold text-lg text-gray-500">Entrega rápida</p>
                                <p className="text-xs italic text-gray-400">Receba em até 4 dias</p>
                            </div>

                        </div>
                        <div className="text-lg font-semibold text-gray-500">
                            R$ 25,00
                        </div>
                    </div>

                    <div>
                        <div className="border rounded-2xl p-4 flex justify-between items-center">
                        <div className="flex gap-4 items-center">
                            <div>
                                <i class="fa-regular fa-circle"></i>
                            </div>
                            <div>
                                <p className="font-semibold text-lg text-gray-500">Entrega padrão</p>
                                <p className="text-xs italic text-gray-400">Receba em até 4 dias</p>
                            </div>

                        </div>
                        <div className="text-lg font-semibold text-gray-500">
                            R$ 25,00
                        </div>
                    </div>
                    </div>
                </div>
            </div>


        </div>
    )
}