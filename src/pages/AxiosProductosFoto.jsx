import { Link, Form, redirect, useActionData, useLoaderData, useNavigate, useParams } from "react-router-dom"
import { getProductosFotos, getProductoPorId, addFotosPorProducto, deleteFotos } from "../servicios/ApiRestAxios"
import Validaciones from "../helper/Validaciones"
import { showAlert, showAlertConfirm } from "../helper/helpers"
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
    const formData = await request.formData();
    const datos = Object.fromEntries(formData);
    const errores = [];
    let bandera = 0;
    switch (formData.get('foto').type) {
        case 'image/png':
            bandera = 0;
            break;
        case 'image/jpg':
            bandera = 0;
            break;
        case 'image/jpeg':
            bandera = 0;
            break;
        default:
            bandera = 1;
            break;
    }
    if (bandera == 1) {
        errores.push('La foto debe tener un formato permitido: PNG | JPG');
    }
    // Retornar datos si hay errores
    if (Object.keys(errores).length) {
        //console.log(errores);
        return errores;
    }
    //console.log(formData.get('foto'))
    //return null
    
    if (await addFotosPorProducto(formData.get('foto'), params.id) == 201) {
        showAlert('Ok', 'La imagen se ha cargado correctamente', 'success')
        return redirect(`/axios/productos/fotos/${params.id}`);
    } else {
        showAlert('Error', 'La imagen no se ha cargado', 'error')
        return redirect(`/axios/productos/fotos/${params.id}`);
    }
    
}

const AxiosProductosFoto = () => {
    const [productoFotos, datos] = useLoaderData()//aqui cargamos los datos del loader
    const errores = useActionData(); // Aquí obtienes los datos retornados desde la acción
    const navigate = useNavigate();
    const valorUrl = useParams().id;//Para traer el valor de la url
    //console.log(valorUrl)

    const handleEliminar = async (id) => {
        const result = await showAlertConfirm('Eliminar Registro', '', 'warning')
        if (result.isConfirmed) {
            if (await deleteFotos(id) === 200) {
                showAlert('Ok','Se eliminó el registro exitosamente','success')
                console.log('1')
                return navigate(`/axios/productos/fotos/${valorUrl}`);
            } else {
                return showAlert('Ops','No es posible eliminar el registro en este momento','error')
            }
        }
    };

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
            {/* Mostrar los errores si existen se pasan los errores como props al componente Validaciones*/}
            {errores?.length && <Validaciones errores={errores} />}
            <h3>Formulario</h3>
            <div className="my-3">
                <Form method="post" encType="multipart/form-data">
                    <div>
                        <label htmlFor="foto">Sube tu Foto</label>
                        <input type="file" id="foto" name="foto" className="form-control" />
                    </div>
                    <div className="my-3">
                        <button type="submit" className="btn btn-primary" >Enviar</button>
                    </div>
                </Form>
            </div>
            <div>
                <table className="table table-bordered">
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
                                    <Link to="#" onClick={() => handleEliminar(foto.id)}>
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
