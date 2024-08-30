import { Link } from "react-router-dom"
import '/public/css/spinner.css';
function UtilesSpinerjs() {
    return (
        <>
            <nav aria-label="breadcrumb">
                <ul className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/utiles">Home - Utiles</Link></li>
                    <li className="breadcrumb-item active">Spinner</li>
                </ul>
            </nav>
            <hr />
            <h3>Spinner</h3>
            <div className="spinner">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
            </div>
        </>
    )
}

export default UtilesSpinerjs
