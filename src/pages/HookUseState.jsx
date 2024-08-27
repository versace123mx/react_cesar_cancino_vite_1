import { Link } from "react-router-dom"
import { useState } from "react"

const HookUseState = () => {

    //declaramos y utilizamos el useState
    const [contador, setContador] = useState(0)

    //funcion para incrementar
    const handleIncrement = () => {
        setContador(contador + 1)
    }

    //funcion para decrementar
    const handleDecrement = () => {
        /*
        en este caso especifico de react, el && le dice que si contador es true entonces se puede ejecutar lo de lado derecho
        podriamos utilizar un ternario pero ese requiere dos valores, el verdadero y el falso, o el valor para cuando la condicion es verdadera y el valor para cuando la condicion es falsa
        */
        contador && setContador(contador - 1)
        
    }
    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/hooks">Home</Link></li>
                    <li className="breadcrumb-item active">useState</li>
                </ol>
            </nav>
            <hr />
            <h3>useState</h3>
            <p>Valor Contador: <span className="fw-bold">{contador}</span></p>
            <button
                className="btn btn-info mt-2 mb-4 mx-3"
                onClick={handleIncrement}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle mx-2" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                </svg>
                Incrementar Contador
            </button>
            <button
                className="btn btn-danger mt-2 mb-4 mx-3"
                onClick={handleDecrement}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash-circle mx-2" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                </svg>
                Decrementar Contador
            </button>
        </>
    )
}

export default HookUseState
