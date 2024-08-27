import { useParams } from "react-router-dom"

function RutasPath() {
    
    const { id, slug } = useParams()

    return (
        <div>
            <h2>Ejemplo parametros path</h2>
            {id && slug ? `El valro del id: ${id}, el valor del slug es: ${slug}`:'no tiene valores'}
        </div>
    )
}

export default RutasPath