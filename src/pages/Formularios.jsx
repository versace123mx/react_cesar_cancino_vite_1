import { Link } from "react-router-dom"

const Formularios = () => {
    return (
        <>
            <h1>Formualarios</h1>
            <ul>
                <li>
                    <Link to="/formularios/formulario-simple">Formualrio Simple</Link>
                </li>
            </ul>
        </>
    )
}

export default Formularios