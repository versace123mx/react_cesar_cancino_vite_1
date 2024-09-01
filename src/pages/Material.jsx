import { Link } from "react-router-dom"

const Material = () => {
    return (
        <>
            <h1>Material</h1>
            <ul>
                <li>
                    <Link to="/material/materialbotones">Material Botones</Link>
                </li>
                <li>
                    <Link to="/material/materiallist">Material List</Link>
                </li>
                <li>
                    <Link to="/material/materialmenudrawer">Material Menu Drawer</Link>
                </li>
                <li>
                    <Link to="/material/materialtable">Material Table</Link>
                </li>
                <li>
                    <Link to="/material/materialacordeon">Material Acordeon</Link>
                </li>
                <li>
                    <Link to="/material/materialstepper">Material Stepper</Link>
                </li>
                <li>
                    <Link to="/material/materialtaps">Material Taps</Link>
                </li>
                <li>
                    <Link to="/material/materialdialog">Material Dialog</Link>
                </li>
            </ul>
        </>
    )
}

export default Material
