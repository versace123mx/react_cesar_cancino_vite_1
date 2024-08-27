import { useLocation } from "react-router-dom"

const RutasQueryString = () => {
    const { search } = useLocation()
    const id = new URLSearchParams(search).get('id')
    const slug = new URLSearchParams(search).get('slug')
    return (
        <div>
            <h1>Rutas con query String</h1>
            <h1>ID: {id}</h1>
            <h1>slug: {slug}</h1>
        </div>
    )
}

export default RutasQueryString
