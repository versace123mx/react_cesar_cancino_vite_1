import { Link } from "react-router-dom"

function HooksEventoClick() {

    const handlePresioname = (e) =>{
        console.log(e.target)
        alert("Hola mundo")
    }

    const handlePresionameConParametro = (nombre) => {
        alert(`Bienvenido: ${nombre}`)
    }
    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/hooks">Home - Hooks</Link></li>
                    <li className="breadcrumb-item active">Evento Click</li>
                </ol>
            </nav>
            <hr />
            <h3>Click</h3>
            <button 
                className="btn btn-primary my-5 mx-3"
                onClick={handlePresioname}
            >Click</button>
            <button 
                className="btn btn-danger my-5"
                onClick={() => handlePresionameConParametro('Gustavo')}
            >Click con nombre</button>
        </>
    )
}

export default HooksEventoClick
