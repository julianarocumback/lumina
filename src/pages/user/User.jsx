import { use, useState } from 'react'

export default function User(){
    const [senha, setSenha] = useState('')

    function validarSenha(valor){    
        setSenha(valor)
    
    }

    // -------------------
    const [pecas, setPecas] = useState([{id: 1, nome: 'Pneu'}, {id: 2, nome: 'Motor'}])

    function apagar(id){
        const listaNova = pecas.filter(item => item.id !== id )
        setPecas(listaNova)
    }
    // -------------------
    const [valorTemp, setValorTemp] = useState('')
    const [totalAcumulado, setTotalAcumulado] = useState(0)

    function somarFrete(){
        setTotalAcumulado(prev => prev + Number(valorTemp))
        setValorTemp('')
    }

    const [ligar, setLigar] = useState(false)
    function interruptor(){
        setLigar(prev => !prev)
    }
    
    return (
        <div>
            <input className="border" type="text" onChange={(e) => validarSenha(e.target.value)} />

            {senha.length < 8? 'Senha muito curta' : 'Senha Forte'}

        {/*  */}

        {pecas.map(peca => {
            return(
                <div className="flex gap-4">
                    <div>{peca.nome}</div>
                    <button onClick={()=>apagar(peca.id)}>Remover</button>
                </div>
            )
        })}

        {/*  */}

        <input className='border 'type="text" onChange={(e)=> setValorTemp(e.target.value)}/>

        <button className="border" onClick={somarFrete}>Somar</button>
        <p>{totalAcumulado}</p>
        <p>{valorTemp}</p>

        <button onClick={interruptor}>Ligar Farol</button>

        



















            
        </div>
        
    )
}