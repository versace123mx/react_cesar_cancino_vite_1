import { createContext } from 'react'
const EjemploContext = createContext()

const EjemploProvider = ({children}) => {
    const variableContexto = "Hola Gustavo"
    return (
        <EjemploContext.Provider value={{
            variableContexto
        }}>
            {children}
        </EjemploContext.Provider>
    )
}
export {
    EjemploProvider
}
export default EjemploContext
