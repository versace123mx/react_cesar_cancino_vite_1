import { Link } from "react-router-dom"

const AxiosComponent = () => {
    return (
        <>
            <h1>Axios</h1>
            <ul>
                <li>
                    <Link to="/axios/categorias">Categorias</Link>
                </li>
                <li>
                    <Link to="/axios/productos">Productos</Link>
                </li>
            </ul>
        </>
    )
}

export default AxiosComponent
