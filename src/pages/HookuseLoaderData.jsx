import { Link, useLoaderData } from "react-router-dom"
import { paises } from "../datos/datos"

export function loader() {
    const countrys = paises.sort().reverse()
    return countrys
}
function HookuseLoaderData() {

    const countrys = useLoaderData()

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
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Pais</th>
                        <th scope="col">Dominio</th>
                    </tr>
                </thead>
                <tbody>
                    {countrys.map(country =>
                        <tr key={country.id}>
                            <th scope="row">{country.id}</th>
                            <td>{country.nombre}</td>
                            <td>{country.dominio}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    )
}

export default HookuseLoaderData
