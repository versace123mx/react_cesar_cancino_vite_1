import { createContext } from 'react'
const EjemploContext = createContext()

const EjemploProvider = ({children}) => {
    const variableContexto = "Hola Gustavo"
    const saludar = (nombre) =>{
        return nombre
    }
    return (
        <EjemploContext.Provider value={{
            variableContexto,
            saludar
        }}>
            {children}
        </EjemploContext.Provider>
    )
}
export {
    EjemploProvider
}
export default EjemploContext
