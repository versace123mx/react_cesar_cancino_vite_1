import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

const HookUseEffect = () => {

    const [arreglo, setArreglo] = useState([])
    const [marcador, setMarcador] = useState(0)

    useEffect(() => {
        setArreglo(
            [
                { id: 1, nombre: "Gustavo Marchena", correo: "versace123mx@gmail.com" },
                { id: 2, nombre: "Vannesa Flores", correo: "vanneflores@gmail.com" },
                { id: 3, nombre: "Maria Jose Taboada", correo: "majotab@gmail.com" }
            ]
        )
    }, [marcador])
    /*El use Effect se eejecuta de manera global siempre y cuando no se le pasen valores al [] final, si se le pasa algun valor, este estara condicionado al valor que se le pase como en el
        ejemplo que estamos manejando, aqui en nuestro ejemplo esperamos a que cambie el valor de marcador
    */

    const mostrarArreglo = (valor) => {
        setMarcador(valor)
    }

    return (
        <>
            <nav aria-label="breadcrumb">
                <ul className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/hooks">Home - Hooks</Link></li>
                    <li className="breadcrumb-item active">useEffect</li>
                </ul>
            </nav>
            <hr />
            <h3>useEffect</h3>
            <hr />
            <button className="btn btn-info mx-3 my-3" onClick={() => mostrarArreglo(1)}>Mostrar Items</button>
            <button className="btn btn-danger" onClick={() => mostrarArreglo(0)}>Ocultar Items</button>
            <ul>
                { marcador == 1 &&
                    <ul>
                        {arreglo.map((item) => (
                            <li key={item.id}>
                                <span className="fw-bold">Nombre:</span> {item.nombre}{'  '}
                                <span className="fw-bold">E-mail:</span> {item.correo}
                            </li>
                        ))}
                    </ul>
                }
            </ul>
        </>
    )
}

export default HookUseEffect
