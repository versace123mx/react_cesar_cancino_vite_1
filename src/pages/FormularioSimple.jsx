import { useState } from "react"
import { Link } from "react-router-dom"
import { showAlert } from "../helper/helpers"

/*
    En este tipo de formulario no es necesario el method ni el post en la etiqueta form
*/
function FormularioSimple() {

    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [edad, setEdad] = useState('')
    const [educacion, setEducacion] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(nombre == '' || apellido == '' || edad == '' || educacion == ''){
            showAlert('Error','Todos los campos deben de estar llenos','error')
            return
        }
        console.log(`Nombre: ${nombre}`)
        console.log(`Apellido: ${apellido}`)
        console.log(`Edad: ${edad}`)
        console.log(`Educacion: ${educacion}`)
        showAlert('Good','Se mostraron correctamente','success')
        
    }
    return (
        <>
            <nav aria-label="breadcrumb">
                <ul className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/formularios">Home - Formularios</Link></li>
                    <li className="breadcrumb-item active">Formulario Simple</li>
                </ul>
            </nav>
            <hr />
            <h3>Formulario Simple</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group my-3">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" id="nombre" className="form-control"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className="form-group my-3">
                    <label htmlFor="apellido">Apellido</label>
                    <input type="text" id="apellido" className="form-control"
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
                    />
                </div>
                <div className="form-group my-3">
                    <label htmlFor="edad">Edad</label>
                    <input type="number" id="edad" className="form-control"
                        value={edad}
                        onChange={(e) => setEdad(e.target.value)}
                    />
                </div>
                <div className="form-group my-3">
                    <label htmlFor="educacion">Educacion</label>
                    <input type="text" id="educacion" className="form-control"
                        value={educacion}
                        onChange={(e) => setEducacion(e.target.value)}
                    />
                </div>
                <div className="my-4">
                    <button className="btn btn-info">Enviar</button>
                </div>
            </form>
        </>
    )
}

export default FormularioSimple
