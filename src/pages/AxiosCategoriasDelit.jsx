import { Link, Form, redirect, useActionData, useLoaderData } from "react-router-dom"
import { showAlert, showAlertConfirm } from "../helper/helpers"
import { deliteCategoriasPorId } from '../servicios/ApiRestAxios'

//Con esto obtenemos el valor del id a editar en cuanto cargue el componente
//quise utilizar useParams pero me marco error indicando que no se puede utlizar en el loader
export async function loader({ params }) {
    const result = await showAlertConfirm('Eliminar Registro', '', 'warning')

    if (result.isConfirmed) {
        //aqui se hace la peticion al api
        if (await deliteCategoriasPorId(params.id) == 201) {
            showAlert('Existo', 'El registro se borro correctamente', 'success')
            return redirect("/axios/categorias")
        } else {
            return showAlert('Error', 'El Registro no se pudo borrar', 'error')
        }
    } else if (result.isDismissed) {
        return redirect("/axios/categorias")
    }
}
function AxiosCategoriasDelit() {
    return (
        <></>
    )
}

export default AxiosCategoriasDelit
