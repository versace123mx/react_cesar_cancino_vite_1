import { Link, useLoaderData } from "react-router-dom"
import { paypalCrearOrden } from "../servicios/ApiPaypal"

export async function loader(){

    const datos = paypalCrearOrden({amount:20})
    return datos;
}
const PasarelasPaypal = () => {
    const datos = useLoaderData()
    console.log(datos)

    return (
        <>
            <nav aria-label="breadcrumb">
                <ul className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/pasarelas">Home - Pasarelas</Link></li>
                    <li className="breadcrumb-item active">Paypal</li>
                </ul>
            </nav>
            <hr />
            <h3>Material Tabs</h3>
        </>
    )
}

export default PasarelasPaypal
