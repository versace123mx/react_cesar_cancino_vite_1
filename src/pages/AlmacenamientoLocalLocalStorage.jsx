import { Link } from "react-router-dom"

function AlmacenamientoLocalLocalStorage() {
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
    </>
  )
}

export default AlmacenamientoLocalLocalStorage
