import { Link } from "react-router-dom"

const Material = () => {
    return (
        <>
            <h1>Material</h1>
            <ul>
                <li>
                    <Link to="/material/materialbotones">Material Botones</Link>
                </li>
                <li>
                    <Link to="/material/materiallist">Material List</Link>
                </li>
            </ul>
        </>
    )
}

export default Material
