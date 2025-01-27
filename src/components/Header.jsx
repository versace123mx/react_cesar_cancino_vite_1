import { Link, NavLink } from "react-router-dom"
import { useContext } from "react"
import AuthContext from "../context/AuthProvider"

function Header() {
    const { auth, handleCerrarSession } = useContext(AuthContext)//el auth viene de ../context/AuthProvider ya que ahi lo dispersamos para todo el arbol
    return (
        <div className="container">
                <header className="border-bottom lh-1 py-3">
                    <div className="row flex-nowrap justify-content-between align-items-center">
                        <div className="col-4 pt-1">
                            <a className="link-secondary" href="#">Subscribe</a>
                        </div>
                        <div className="col-4 text-center">
                            <Link className="blog-header-logo text-body-emphasis text-decoration-none" to='/'>
                                <img src="/image/Minix3_Logo.png" alt="" width='120px'/>
                            </Link>
                        </div>
                        <div className="col-4 d-flex justify-content-end align-items-center">
                            <a className="link-secondary" href="#" aria-label="Search">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor"  className="mx-3" role="img" viewBox="0 0 24 24"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5" /><path d="M21 21l-5.2-5.2" /></svg>
                            </a>
                            <a className="btn btn-sm btn-outline-secondary" href="#">Sign up</a>
                        </div>
                    </div>
                </header>

                <div className="nav-scroller py-1 mb-3 border-bottom">
                    <nav className="nav nav-underline justify-content-between">
                        <Link className="nav-item nav-link link-body-emphasis" to="/">Home</Link>
                        <Link className="nav-item nav-link link-body-emphasis" to="/rutas">Rutas</Link>
                        <Link className="nav-item nav-link link-body-emphasis" to="/hooks">Hooks</Link>
                        <Link className="nav-item nav-link link-body-emphasis" to="/formularios">Formularios</Link>
                        <Link className="nav-item nav-link link-body-emphasis" to="/utiles">Utiles</Link>
                        <Link className="nav-item nav-link link-body-emphasis" to="/material">Material</Link>
                        <Link className="nav-item nav-link link-body-emphasis" to="/almacenamientoLocal">Local Storage</Link>
                        <Link className="nav-item nav-link link-body-emphasis" to="/conetext">Context</Link>
                        <Link className="nav-item nav-link link-body-emphasis" to="/redux">Redux</Link>
                        <Link className="nav-item nav-link link-body-emphasis" to="/axios">Axios</Link>
                        <Link className="nav-item nav-link link-body-emphasis" to="/fetch">Featch</Link>
                        {auth?(
                            <>
                            <Link className="nav-item nav-link link-body-emphasis" to="/acceso/protegido">Protegido</Link>
                            <Link className="nav-item nav-link link-body-emphasis" to="/acceso/protegido2">Protegido2</Link>
                            <Link className="nav-item nav-link link-body-emphasis" to="#" onClick={handleCerrarSession}>Salir</Link>
                            </>
                        ):(
                            <>
                            <Link className="nav-item nav-link link-body-emphasis" to="/acceso/login">Login</Link>
                            <Link className="nav-item nav-link link-body-emphasis" to="/acceso/registro">Registro</Link>
                            </>
                        )}
                        <Link className="nav-item nav-link link-body-emphasis" to="/pasarelas">Pasarelas</Link>
                    </nav>
                </div>
            </div>
    )
}

export default Header
