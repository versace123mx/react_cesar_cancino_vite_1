import { Link, useLocation } from "react-router-dom"

const HookuseLocation = () => {
    const location = useLocation()
    console.log(location)//se utiliza para obtener parametros de la url o en que ruta te encuentras parado con el pathname y en el campo search puedes ver los parametros pasados por la url
    return (
        <>
            <nav aria-label="breadcrumb">
                <ul className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/hooks">Home - Hooks</Link></li>
                    <li className="breadcrumb-item active">useLocation</li>
                </ul>
            </nav>
            <hr />
            <h3>useLocation</h3>
            <p>resultado: {location.pathname}</p>
            <p>resultado: {location.search}</p>
        </>
    )
}

export default HookuseLocation
