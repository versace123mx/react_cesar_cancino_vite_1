import { createContext, useState } from 'react'
const EjemploContext = createContext()

const EjemploProvider = ({children}) => {
    const variableContexto = "Hola Gustavo"
    const saludar = (nombre) =>{
        return nombre
    }
    const [stateContext,setStateContext] = useState("Contenido Inicial al state Context")
    return (
        <EjemploContext.Provider value={{
            variableContexto,
            saludar,
            stateContext,
            setStateContext
        }}>
            {children}
        </EjemploContext.Provider>
    )
}
export {
    EjemploProvider
}
export default EjemploContext
