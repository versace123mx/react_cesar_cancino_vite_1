import { Link, Form, redirect, useActionData } from "react-router-dom"
import { addCategorias } from "../servicios/ApiRestAxios"
import { showAlert } from "../helper/helpers"

export async function action({ request }) {
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
    if (await addCategorias({ nombre: datos.nombre }) == 201) {
        showAlert('Existo', 'Se creo el Registro correctamente', 'success')
        return redirect("/axios/categorias")
    } else {
        return showAlert('Error', 'El Registro no se pudo crear ya existe', 'error')
    }

}
const AxiosCategoriasAdd = () => {
    const errores = useActionData(); // Aquí obtienes los datos retornados desde la acción
    return (
        <>
            <nav aria-label="breadcrumb">
                <ul className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/axios">Home - Axios</Link></li>
                    <li className="breadcrumb-item"><Link to="/axios/categorias">Categorias - Axios</Link></li>
                    <li className="breadcrumb-item active">Crear Categorias</li>
                </ul>
            </nav>
            <hr />
            <h3>Crear Categorias</h3>
            <div>
                {/* Mostrar los errores si existen */}
                {errores?.length > 0 && (
                    <div className="error">
                        <ul>
                            <li>{errores[0]}</li>
                        </ul>
                    </div>
                )}
            </div>
            <Form method="post">
                <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" id="nombre" name="nombre" className="form-control" placeholder="Nombre" />
                </div>
                <div className="my-3">
                    <button className="btn btn-primary">Enviar</button>
                </div>
            </Form>
        </>
    )
}

export default AxiosCategoriasAdd
