import { Link, useLoaderData } from "react-router-dom"
import { paises } from "../datos/datos"

export function loader(){
    const countrys = paises
    return countrys
}
function HookuseLoaderData() {

    const countrys = useLoaderData()
    console.log(loader)
    return (
        <>
            <nav aria-label="breadcrumb">
                <ul className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/hooks">Home - Hooks</Link></li>
                    <li className="breadcrumb-item active">useLoaderData</li>
                </ul>
            </nav>
            <hr />
            <h3>useLoaderData</h3>
        </>
    )
}

export default HookuseLoaderData
