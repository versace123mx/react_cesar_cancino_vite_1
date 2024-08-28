import { Link } from "react-router-dom"

const HooksEventosVarios = () => {

    const mover = () => {
        console.log('se movio')
    }
    const salir = () => {
        console.log('salio')
    }
    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/hooks">Home - Hooks</Link></li>
                    <li className="breadcrumb-item active">Eventos Varios</li>
                </ol>
            </nav>
            <hr />
            <h3>Eventos Varios</h3>
            <img src="/image/Minix3_Logo.png" alt="" onMouseMove={mover} onMouseLeave={salir}/>
        </>
    )
}

export default HooksEventosVarios
