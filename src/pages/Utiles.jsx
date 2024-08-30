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
            </ul> 
        </>
    )
}

export default Utiles
