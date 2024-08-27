import { Link } from "react-router-dom"
import { useState } from "react"

const HookEventoOnChange = () => {
    const [nombre, setNombre] = useState('')

    const handleChangeInput = () => {
        console.log(nombre)
    }

    return (
        <>
        <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/hooks">Home - Hooks</Link></li>
                    <li className="breadcrumb-item active">Evento onChange</li>
                </ol>
            </nav>
            <hr />
            <h3>Evento onChange</h3>
            <div className="input-group mb-3">
                <input type="text" placeholder="Ingresa tu nombre"  className="form-control" 
                value={nombre}
                onChange={(e) => {setNombre(e.target.value)}}
                />
            </div>
            <div className="my-3">
                <button 
                    className="btn btn-warning"
                    onClick={handleChangeInput}
                >
                        Enviar valor a consola
                </button>
            </div>
            {nombre&& <p>Valor del State: {nombre}</p>}
        </>
    )
}

export default HookEventoOnChange
