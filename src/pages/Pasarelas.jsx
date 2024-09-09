import { Link } from "react-router-dom"

const Pasarelas = () => {
    return (
        <>
            <h1>Utiles</h1>
            <ul>
                <li>
                    <Link to="/pasarelas/paypal">Paypal</Link>
                </li>
            </ul>
        </>
    )
}

export default Pasarelas
