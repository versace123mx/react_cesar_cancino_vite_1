import { Link } from "react-router-dom"
import { useRef, useState } from "react"

function HookuseRef() {
    const [texto, setTexto] = useState('')
    const inputRef = useRef()//extrae lo que tiene el input y lo asigna a inputRef "atributo ref en el input"
    const cambiaColor = useRef();//aqui traemos el boton
    const imprimirValor = () => {
        setTexto(inputRef.current.value)//asignamos el valor del input sin utilizar un onChange
        cambiaColor.current.className='clase_rojo'
    }
    return (
        <>
            <nav aria-label="breadcrumb">
                <ul className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/hooks">Home - Hooks</Link></li>
                    <li className="breadcrumb-item active">useRef</li>
                </ul>
            </nav>
            <hr />
            <h3>useRef: Funciona como un getElementById</h3>
            <input type="text" className="form-control" ref={inputRef} />
            <div className="my-3">
                <button className="btn btn-primary" onClick={imprimirValor}>Mostrar</button>
            </div>
            <div ref={cambiaColor}>
                {texto}
            </div>
        </>
    )
}

export default HookuseRef
