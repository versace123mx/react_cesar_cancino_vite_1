import { Link } from "react-router-dom"
import { useState } from "react"
import { showAlert } from "../helper/helpers"

const AlmacenamientoLocalSessionStorage = () => {
    const [existe, setExiste] = useState((sessionStorage.getItem('tokeLocal') != null) ? 1 : 0)
    const handleCrear = () => {
        sessionStorage.setItem('tokeLocal', '123456789')
        setExiste(1)
        showAlert('Exito', 'Se creo el toke en localStorage', 'success')
    }
    const handleBorrar = () => {
        sessionStorage.removeItem('tokeLocal')
        setExiste(0)
        showAlert('Exito', 'Se elimino el toke en localStorage', 'success')
    }
    return (
        <>
            <nav aria-label="breadcrumb">
                <ul className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/almacenamientoLocal">Home - Alamacenamiento Local</Link></li>
                    <li className="breadcrumb-item active">Almacenamiento Local</li>
                </ul>
            </nav>
            <hr />
            <h3>Session Storage</h3>
            <div>
                <button className="btn btn-warning my-3 mx-3" onClick={handleCrear}>Crear SessionStorage</button>
                <button className="btn btn-danger my-3" onClick={handleBorrar}>Borrar SessionStorage</button>
            </div>
            {existe == 1 && (sessionStorage.getItem('tokeLocal'))}
        </>
    )
}

export default AlmacenamientoLocalSessionStorage
