import { Link } from "react-router-dom"

const Utiles = () => {
    return (
        <>
            <h1>Utiles</h1>
            <ul>
                <li>
                    <Link to="/utiles/daysjs">DaysJS</Link>
                </li>
                <li>
                    <Link to="/utiles/momentjs">MomentJS</Link>
                </li>
                <li>
                    <Link to="/utiles/spinner">Spinner</Link>
                </li>
                <li>
                    <Link to="/utiles/swipeable">Swipeable</Link>
                </li>
                <li>
                    <Link to="/utiles/reactwebcam">ReactWebCam</Link>
                </li>
                <li>
                    <Link to="/utiles/graficaspiechart">Graficas con Pie Chart</Link>
                </li>
                <li>
                    <Link to="/utiles/mapas">Mapas</Link>
                </li>
                <li>
                    <Link to="/utiles/mapas2">MapBox</Link>
                </li>
                <li>
                    <Link to="/utiles/modalBootstrap">Modal Bootstrap</Link>
                </li>
                <li>
                    <Link to="/utiles/carrusel">Carrusel</Link>
                </li>
            </ul>
        </>
    )
}

export default Utiles
