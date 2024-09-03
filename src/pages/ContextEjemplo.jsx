import { useContext } from "react"
import EjemploContext from "../context/EjemploProvider"

function ContextEjemplo() {
    const {variableContexto,saludar,stateContext,setStateContext} = useContext(EjemploContext)
    //setStateContext('nuevo mensaje')//Modificando el valor del state Context inicial
    const handleChangeMessageContex = () => {
        setStateContext('Nuevo valor de statext Context')
    }
    return (
        <>
            <h1>Ejemplo Context</h1>
            <p>{variableContexto}</p>
            <p>Mensage desde una funcion en el context Provider</p>
            <p>Mi nombre es: {saludar('Gustavo')}</p>
            <p>Valor del context: {stateContext}</p>
            <button
                className="btn btn-info my-3"
                onClick={handleChangeMessageContex}>Cambiar valor inicial de stateContext</button>
        </>
    )
}

export default ContextEjemplo
