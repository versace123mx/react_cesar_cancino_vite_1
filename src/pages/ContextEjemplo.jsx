import { useContext } from "react"
import EjemploContext from "../context/EjemploProvider"

function ContextEjemplo() {
    const {variableContexto} = useContext(EjemploContext)
    return (
        <>
            <h1>Ejemplo Context</h1>
            <p>{variableContexto}</p>
        </>
    )
}

export default ContextEjemplo
