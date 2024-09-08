import { useState, createContext } from "react";

/*Este context lo envolvemos en Frontend para que este disponible en todo el arbol del aplicativo*/
const AuthContext = createContext()

const AuthProvider = ({children})=> {

    const [auth,setAuth] = useState((localStorage.getItem('tokenReackt') != null) ? true : false)
    const handleIniciarSession = (token,nombre) => {
        localStorage.setItem('tokenReackt',token)
        localStorage.setItem('tokenNombre',nombre)
        setAuth(true)
    }
    return (
        <AuthContext.Provider value={{
            auth,handleIniciarSession
        }}>
            {children}
        </AuthContext.Provider>
    )
}
export {
    AuthProvider
}
export default AuthContext