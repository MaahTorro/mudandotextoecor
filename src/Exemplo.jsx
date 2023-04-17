import { useState } from "react"

const Exemplo = ({cor}) =>{

    const [texto, setTexto] = useState("Texto do exemplo")
    

    return (
        <div>
            <h1 style={{color: cor}}>{texto}</h1>
            <button onClick={()=>{setTexto("Mudando via botão")}}>Mudar</button>
            </div>
    )
}

export default Exemplo