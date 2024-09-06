import { Link, Form, redirect, useActionData, useLoaderData } from "react-router-dom"
import { getProductosFotos, getProductoPorId } from "../servicios/ApiRestAxios"

//Se realiza con el loader ya que se llama a getProductoPorId y getCategorias en cuanto carga el componente
//otra forma de utilizarlo es con useEffect que se ejecuta al igual al cargar el componente
//otra forma seria que se ejecute cuando se de click en un boton
export async function loader({ params }) {
    const productoFotos = await getProductosFotos(params.id)
    const datos = await getProductoPorId(params.id)
    return [productoFotos, datos]
}
export async function action({ request, params }) {
    //aqui se extraen los datos de formulario para su validacion
    const formData = await request.formData()
    const datos = Object.fromEntries(formData)
    let errores = []
    if (Object.values(datos).includes('')) {
        errores.push('Todos los campos son obligatorios')
    }
    // Retornar los errores si existen
    if (errores.length > 0) {
        return errores;
    }

    //aqui se hace la peticion al api
    if (await editProductosXId({ nombre: datos.nombre, descripcion: datos.descripcion, precio: datos.precio, stock: datos.stock, categorias_id: datos.categorias_id }, params.id) == 201) {
        showAlert('Exito', 'Se edito el Registro correctamente', 'success')
        return redirect("/axios/productos/1")
    } else {
        return showAlert('Error', 'El Registro no se pudo modificar', 'error')
    }
}
const AxiosProductosFoto = () => {
    const [productoFotos, datos] = useLoaderData()//aqui cargamos los datos del loader
    console.log(productoFotos)
    console.log(datos)
    return (
        <>
            <nav aria-label="breadcrumb">
                <ul className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/axios">Home - Axios</Link></li>
                    <li className="breadcrumb-item"><Link to="/axios/productos/1">Productos - Axios</Link></li>
                    <li className="breadcrumb-item active">Producto Fotos</li>
                </ul>
            </nav>
            <hr />
            <h3>Producto Fotos</h3>
            <h3>Formulario</h3>
            <div>
                <table className="table  table-bordered">
                    <thead className="table-light">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Foto</th>
                            <th scope="col">Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productoFotos.map(foto => (

                            <tr key={foto.id}>
                                <th scope="row">{foto.id}</th>
                                <td><img src={`${foto.foto}`} alt="" width='70px' /></td>
                                <td>
                                    <Link to={`/axios/productos/eliminar/${foto.id}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                        </svg>
                                    </Link>
                                </td>
                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default AxiosProductosFoto
