import { Link } from "react-router-dom"
import { categorias, productos } from "../datos/datos"
import { useState } from "react"
import useHooksPersonalizado from "../hooks/useHooksPersonalizado"
function HookCustom() {

    const [categoria, setCategoria] = useState(0)
    const [producto, setProducto] = useState(0)
    const [verduras, setVerduras] = useHooksPersonalizado()

    const handleDesplegar = (e) => {
        e = Number(e)
        setCategoria(e)
        e ? setVerduras(productos.filter( p => p.categoria_id == e)):`${setProducto(0)} ${setVerduras([])}`
        
    }
    return (
        <>
            <nav aria-label="breadcrumb">
                <ul className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/hooks">Home - Hooks</Link></li>
                    <li className="breadcrumb-item active">Hook Custom</li>
                </ul>
            </nav>
            <hr />
            <h3>Hook Custom</h3>
            <div className="form-group my-3">
                <label htmlFor="categoria">Categorias</label>
                <select id="categoria" className="form-control"
                    value={categoria}
                    onChange={(e) => handleDesplegar(e.target.value)}
                >
                    <option value="0">Seleccione una Opcción</option>
                    {categorias.map(categoria =>

                        <option value={categoria.id} key={categoria.id}>{categoria.nombre}</option>

                    )}
                </select>
            </div>
            <div className="form-group my-3">
                <label htmlFor="producto">Productos</label>
                <select id="producto" className="form-control"
                    value={producto}
                    onChange={(e) => { setProducto(e.target.value) }}
                >
                    <option value="0">Seleccione una Opcción</option>
                    {verduras.map(verdura =>

                        <option value={verdura.id} key={verdura.id}>{verdura .nombre}</option>

                    )}
                </select>
            </div>
        </>
    )
}

export default HookCustom
