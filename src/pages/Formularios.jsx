import { Link } from "react-router-dom"

const Formularios = () => {
    return (
        <>
            <h1>Formualarios</h1>
            <ul>
                <li>
                    <Link to="/formularios/formulario-simple">Formualrio Simple</Link>
                </li>
                <li>
                    <Link to="/formularios/useActionData">useActionData</Link>
                </li>
                <li>
                    <Link to="/formularios/useFormik">useFormik</Link>
                </li>
                <li>
                    <Link to="/formularios/reactHookForm">reactHookForm</Link>
                </li>
            </ul>
        </>
    )
}

export default Formularios
