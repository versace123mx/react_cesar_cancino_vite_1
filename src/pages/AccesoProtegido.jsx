import { useContext } from "react"
import AuthContext from "../context/AuthProvider"

const AccesoProtegido = () => {
    const { handleEstalogueado } = useContext(AuthContext)
    handleEstalogueado()
    return (
        <>
            <h1>Protegido</h1>
        </>
    )
}

export default AccesoProtegido
