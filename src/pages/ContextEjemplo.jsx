import { useContext } from "react"
import EjemploContext from "../context/EjemploProvider"

function ContextEjemplo() {
    const {variableContexto,saludar} = useContext(EjemploContext)
    return (
        <>
            <h1>Ejemplo Context</h1>
            <p>{variableContexto}</p>
            <p>Mensage desde una funcion en el context Provider</p>
            <p>Mi nombre es: {saludar('Gustavo')}</p>
        </>
    )
}

export default ContextEjemplo
