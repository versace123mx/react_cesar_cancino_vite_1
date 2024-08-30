import { Link } from "react-router-dom"

const UtilesMapasjs = () => {
    return (
        <>
            <nav aria-label="breadcrumb">
                <ul className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/utiles">Home - Utiles</Link></li>
                    <li className="breadcrumb-item active">Mapas</li>
                </ul>
            </nav>
            <hr />
            <h3>Mapas</h3>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.851845161362!2d-70.6075862!3d-33.5312374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d08f3aa97fdf%3A0xc60450a8fbed4275!2sAconcagua%208384%2C%208260595%20La%20Florida%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1675016044118!5m2!1ses-419!2scl" width="600" height="450"   allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </>
    )
}

export default UtilesMapasjs
