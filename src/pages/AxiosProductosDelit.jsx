import { Link, Form, redirect, useActionData, useLoaderData, useParams } from "react-router-dom"
import { showAlert, showAlertConfirm } from "../helper/helpers"
import { deliteProductoPorId } from '../servicios/ApiRestAxios'

//Con esto obtenemos el valor del id a editar en cuanto cargue el componente
//quise utilizar useParams pero me marco error indicando que no se puede utlizar en el loader
export async function loader({ params }) {
    const result = await showAlertConfirm('Eliminar Registro', '', 'warning')
    if (result.isConfirmed) {
        //aqui se hace la peticion al api
        if (await deliteProductoPorId(params.id) == 201) {
            showAlert('Existo', 'El registro se borro correctamente', 'success')
            return redirect("/axios/productos/1")
        } else {
            showAlert('Error', 'El Registro no se pudo borrar', 'error')
            return redirect("/axios/productos/${params.pagina}")
        }
    } else if (result.isDismissed) {
        return redirect(`/axios/productos/${params.pagina}`)
    }
}
function AxiosProductosDelit() {
  return (
    <>
    </>
  )
}

export default AxiosProductosDelit
