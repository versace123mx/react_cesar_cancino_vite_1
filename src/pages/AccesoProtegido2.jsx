import { useContext } from "react"
import AuthContext from "../context/AuthProvider"
const AccesoProtegido2 = () => {

    const { handleEstalogueado } = useContext(AuthContext)
    handleEstalogueado()

    return (
        <>
            <h1>Protegido 2 </h1>
        </>
    )
}

export default AccesoProtegido2
