import { Link, Form, redirect, useActionData, useLoaderData } from "react-router-dom"
import { showAlert } from "../helper/helpers"
import { getCategoriasPorId,editCategoriasPorId } from "../servicios/ApiRestAxios"

export async function action({ request,params }) {
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
    if (await editCategoriasPorId({ nombre: datos.nombre },params.id) == 201) {
        showAlert('Exito', 'Se edito el Registro correctamente', 'success')
        return redirect("/axios/categorias")
    } else {
        return showAlert('Error', 'El Registro no se pudo modificar', 'error')
    }
}

//Con esto obtenemos el valor del id a editar en cuanto cargue el componente
//quise utilizar useParams pero me marco error indicando que no se puede utlizar en el loader
export async function loader({ params }) {
    const datos = await getCategoriasPorId(params.id)
    if (datos == undefined || datos.length == 0) {
        return redirect("/axios/categorias")
    }
    return datos
}
function AxiosCategoriasEdit() {
    const datos = useLoaderData()//aqui cargamos los datos del loader
    const errores = useActionData(); // Aquí obtienes los datos retornados desde la acción
    return (
        <>
            <nav aria-label="breadcrumb">
                <ul className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/axios">Home - Axios</Link></li>
                    <li className="breadcrumb-item"><Link to="/axios/categorias">Categorias - Axios</Link></li>
                    <li className="breadcrumb-item active">Editar Categorias</li>
                </ul>
            </nav>
            <hr />
            <h3>Editar Categorias</h3>
            {/* Mostrar los errores si existen */}
            {errores?.length > 0 && (
                <div className="error">
                    <ul>
                        <li>{errores[0]}</li>
                    </ul>
                </div>
            )}
            <Form method="post">
                <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        className="form-control"
                        placeholder="Nombre"
                        defaultValue={datos.nombre}
                    />
                </div>
                <div className="my-3">
                    <button className="btn btn-primary">Enviar</button>
                </div>
            </Form>
        </>
    )
}

export default AxiosCategoriasEdit
