import { Link } from "react-router-dom"
import { useState } from "react"
import { showAlert } from "../helper/helpers"

function AlmacenamientoLocalLocalStorage() {

/*
EL valor (localStorage.getItem('tokeLocal') != null) ? 1 : 0  que se encuentra en useState
se le pasa de esta forma es por que si hay un valor en localStorage y salimos de la url y luego
volvemos a entrar, a un que exista el localStorage este no se mostrara ya que para ese momento
el valor de existe del useState su valro es vacio, por eso es que le pasamo este valor
para que sienpre verifique si existe le asigna 1 de lo contario 0
*/ 
  const [existe,setExiste] = useState((localStorage.getItem('tokeLocal') != null) ? 1 : 0 )   
  const handleCrear = () => {
    localStorage.setItem('tokeLocal','123456789')
    setExiste(1)
    showAlert('Exito','Se creo el toke en localStorage','success')
  }
  const handleBorrar = () => {
    localStorage.removeItem('tokeLocal')
    setExiste(0)
    showAlert('Exito','Se elimino el toke en localStorage','success')
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
      <h3>Local Storage</h3>
      <div>
      <button className="btn btn-warning my-3 mx-3" onClick={handleCrear}>Crear LocalStorage</button>
      <button className="btn btn-danger my-3" onClick={handleBorrar}>Borrar LocalStorage</button>
      </div>
      {existe == 1 && (localStorage.getItem('tokeLocal'))}
    </>
  )
}

export default AlmacenamientoLocalLocalStorage
