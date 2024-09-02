import { Link } from "react-router-dom"

const AlmacenamientoLocalSessionStorage = () => {
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
        </>
    )
}

export default AlmacenamientoLocalSessionStorage
