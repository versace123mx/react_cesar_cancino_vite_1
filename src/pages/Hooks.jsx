import { Link } from "react-router-dom"
const Hooks = () => {
    return (
        <>
            <h1>Hooks</h1>
            <ul>
                <li>
                    <Link to="/hooks/evento-clic">Evento Click</Link>
                </li>
                <li>
                    <Link to="/hooks/useState">Use State</Link>
                </li>
            </ul>
        </>
    )
}

export default Hooks
