import { Link } from "react-router-dom"
import dayjs from "dayjs"
import 'dayjs/locale/es'
dayjs.locale('es')

const UtilesDaysjs = () => {
    const fecha = new Date()

    return (
        <>
            <nav aria-label="breadcrumb">
                <ul className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/utiles">Home - Utiles</Link></li>
                    <li className="breadcrumb-item active">useLocation</li>
                </ul>
            </nav>
            <hr />
            <h3>Daysjs</h3>
            <h3>Formatear Fecha</h3>
            <ul>
                <li>Fecha: {fecha.toString()}</li>
                <li>
                    Fecha2:{' '}
                    {dayjs(fecha).format('dddd').replace(/\b[a-z]/g, c => c.toUpperCase())} {' '}
                    {dayjs(fecha).format('DD')} de {' '}
                    {dayjs(fecha).format('MMMM')} {' '} año {' '}
                    {dayjs(fecha).format('YYYY')} {' '}
                    {dayjs(fecha).format('HH:mm:ss')}
                </li>
                <li>Fecha Corta: {dayjs(fecha).format('DD/MM/YYYY HH:mm:ss')}</li>
                <li>Fecha timestamp: {fecha.valueOf()}</li>
            </ul>
            <h3>Canculos con Fechas</h3>
            <ul>
                <li>
                    Fecha + 7 días: {dayjs(fecha).add(7, "day").format("DD/MM/YYYY")}
                </li>
                <li>
                    Fecha - 7 días: {dayjs(fecha).subtract(7, "day").format("DD/MM/YYYY")}{" "}
                </li>
                <li>
                    Fecha + 7 meses: {dayjs(fecha).add(7, "month").format("DD/MM/YYYY")}{" "}
                </li>
                <li>
                    Fecha - 7 meses:{" "}
                    {dayjs(fecha).subtract(7, "month").format("DD/MM/YYYY")}{" "}
                </li>
                <li>
                    Fecha + 7 años: {dayjs(fecha).add(7, "year").format("DD/MM/YYYY")}{" "}
                </li>
                <li>
                    Fecha - 7 años:{" "}
                    {dayjs(fecha).subtract(7, "year").format("DD/MM/YYYY")}{" "}
                </li>
            </ul>
        </>
    )
}

export default UtilesDaysjs
