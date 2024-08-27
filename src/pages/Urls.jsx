import { NavLink, Link } from "react-router-dom"

function Urls() {
  const id = 12
  const slug= 'lo-que-sea'
  return (
    <div>
      <h1>Rutas</h1>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li><Link to="/sobre-nosotros">Sobre Nosotros</Link></li>
        <li><Link to="/rutas/path">Rutas Path Sin parametros</Link></li>
        <li><Link to="/rutas/path/1/hola-mundo">Rutas Path Con parametros enduro opccionales</Link></li>
        <li><Link to={`/rutas/path/${id}/${slug}`}>Rutas Path Con parametros dinamicos opccionales</Link></li>
        <li><Link to={`/rutas/query-string?id=${id}&slug=${slug}`}>Rutas Path Con queryString</Link></li>
      </ul>
    </div>
  )
}

export default Urls
