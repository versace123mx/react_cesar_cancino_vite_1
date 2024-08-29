import { Link, useNavigate } from "react-router-dom"

//Sirve para navegar entre paginas
function HookuseNavigate() {
    const navigate = useNavigate()

    return (
        <>
            <nav aria-label="breadcrumb">
                <ul className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/hooks">Home - Hooks</Link></li>
                    <li className="breadcrumb-item active">useNavigate</li>
                </ul>
            </nav>
            <hr />
            <h3>useNavigate</h3>
            <button className="btn btn-info mx-3 my-3" onClick={() => navigate('/sobre-nosotros')}>Ir a sobre nosotros</button>
            <button className="btn btn-danger  my-3" onClick={() => navigate(-1)}>Ir atras</button>
        </>
    )
}

export default HookuseNavigate
