import { useState } from "react"

const Exemplo = ({cor}) =>{

    const [texto, setTexto] = useState("Texto do exemplo")
    const [corNova, setCorNova] = useState("black")

    return (
        <div>
            <h1 style={{color: corNova}}>{texto}</h1>
            <button onClick={()=>{setTexto("Mudando via botão")}}>Mudar</button>
            <button onClick={() => {setCorNova("red")}}>Mudar cor</button>
            </div>
    )
}

export default Exemplo