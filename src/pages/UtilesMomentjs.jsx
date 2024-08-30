import { Link } from "react-router-dom"
import setLocaleTo_ES_WithData from 'moment_spanish_locale'
import moment from 'moment'
setLocaleTo_ES_WithData(moment)

function UtilesMomentjs() {
  const fecha = new Date()
  return (
    <>
    <nav aria-label="breadcrumb">
                <ul className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/utiles">Home - Utiles</Link></li>
                    <li className="breadcrumb-item active">Momentjs</li>
                </ul>
            </nav>
            <hr />
            <h3>MomentJS</h3>
            <ul>
                <li>Fecha: {fecha.toString()}</li>
                <li>
                    Fecha2:{' '}
                    {moment(fecha).format('dddd').replace(/\b[a-z]/g, c => c.toUpperCase())} {' '}
                    {moment(fecha).format('DD')} de {' '}
                    {moment(fecha).format('MMMM')} {' '} año {' '}
                    {moment(fecha).format('YYYY')} {' '}
                    {moment(fecha).format('HH:mm:ss')}
                </li>
                <li>Fecha Corta: {moment(fecha).format('DD/MM/YYYY HH:mm:ss')}</li>
                <li>Fecha timestamp: {fecha.valueOf()}</li>
            </ul>
            <h3>Canculos con Fechas</h3>
            <ul>
                <li>
                    Fecha + 7 días: {moment(fecha).add(7, "day").format("DD/MM/YYYY")}
                </li>
                <li>
                    Fecha - 7 días: {moment(fecha).subtract(7, "day").format("DD/MM/YYYY")}{" "}
                </li>
                <li>
                    Fecha + 7 meses: {moment(fecha).add(7, "month").format("DD/MM/YYYY")}{" "}
                </li>
                <li>
                    Fecha - 7 meses:{" "}
                    {moment(fecha).subtract(7, "month").format("DD/MM/YYYY")}{" "}
                </li>
                <li>
                    Fecha + 7 años: {moment(fecha).add(7, "year").format("DD/MM/YYYY")}{" "}
                </li>
                <li>
                    Fecha - 7 años:{" "}
                    {moment(fecha).subtract(7, "year").format("DD/MM/YYYY")}{" "}
                </li>
            </ul>
    </>
  )
}

export default UtilesMomentjs
