import { Link } from "react-router-dom"
function AlmacenamientoLocal() {
    return (
        <>
            <h1>Loca Storage</h1>
            <ul>
                <li>
                    <Link to="/almacenamientoLocal/LocalStorage">LocaStorage</Link>
                </li>
                <li>
                    <Link to="/almacenamientoLocal/sessionStorage">sessionStorage</Link>
                </li>
            </ul>
        </>
    )
}

export default AlmacenamientoLocal
