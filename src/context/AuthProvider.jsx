import { useState, createContext } from "react";
import { redirect } from "react-router-dom";

/*Este context lo envolvemos en Frontend para que este disponible en todo el arbol del aplicativo*/
const AuthContext = createContext()

const AuthProvider = ({children})=> {

    const [auth,setAuth] = useState((localStorage.getItem('tokenReackt') != null) ? true : false)
    const handleIniciarSession = (token,nombre) => {
        localStorage.setItem('tokenReackt',token)
        localStorage.setItem('tokenNombre',nombre)
        setAuth(true)
    }

    //Aqui en este context es donde verificamos si esta logueado o no
    const handleEstalogueado = () => {
        if(!auth && localStorage.getItem('tokenReackt') == null){
            window.location="/acceso/login"
            //return redirect("/acceso/login")
        }
    }
    return (
        <AuthContext.Provider value={{
            auth,handleIniciarSession,handleEstalogueado
        }}>
            {children}
        </AuthContext.Provider>
    )
}
export {
    AuthProvider
}
export default AuthContext