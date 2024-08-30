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
            </ul>
        </>
    )
}

export default Utiles
