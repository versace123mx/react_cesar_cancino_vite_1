import { useState, createContext } from "react";
import { redirect } from "react-router-dom";
import { showAlert, showAlertConfirm } from "../helper/helpers";

/*Este context lo envolvemos en Frontend para que este disponible en todo el arbol del aplicativo*/
const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState((localStorage.getItem('tokenReackt') != null) ? true : false)
    const handleIniciarSession = (token, nombre) => {
        localStorage.setItem('tokenReackt', token)
        localStorage.setItem('tokenNombre', nombre)
        setAuth(true)
    }

    //Aqui en este context es donde verificamos si esta logueado o no
    const handleEstalogueado = () => {
        if (!auth && localStorage.getItem('tokenReackt') == null) {
            window.location = "/acceso/login"
            //return redirect("/acceso/login")
        }
    }

    //Traemos todo lo del context de ejemplo para hacer que no nos marque erro ya que ahora solo estamos utilziando este context
    const variableContexto = "Hola Gustavo"
    const saludar = (nombre) => {
        return nombre
    }
    const [stateContext, setStateContext] = useState("Contenido Inicial al state Context")
    //hasta aqui es del el contenido del context anterior llamado EjemploProvider


    const handleCerrarSession = async () => {

        const confirmacion = await showAlertConfirm('Cerrar Session', '', 'warning')

        if (confirmacion.isConfirmed) {
            //aqui borramos el localstorage
            localStorage.clear()
            setAuth(false)
            window.location = "/acceso/login"
        }
    }

    return (
        <AuthContext.Provider value={{
            auth, handleIniciarSession, handleEstalogueado,
            variableContexto,
            saludar,
            stateContext,
            setStateContext,
            handleCerrarSession
        }}>
            {children}
        </AuthContext.Provider>
    )
}
export {
    AuthProvider
}
export default AuthContext