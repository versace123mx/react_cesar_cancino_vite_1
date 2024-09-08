import { Link, useActionData, Form } from "react-router-dom"
import { expresion_correo, expresion_password, showAlert, showAlertConfirm } from "../helper/helpers"
import Validaciones from "../helper/Validaciones"
import { authRegistro } from "../servicios/ApiAuth";
//aqui se extraen los datos de formulario para su validacion
/*
Nota en la parte de los formularios hay varias formas de enviar los datos para que
sean procesados o validados por una funcion handle o de la forma en que lo estamos
asiendo.
en una funcion handle seria
<Form onSubmit={handleEnviar}>
</Form>
y en la funcion handleEnviar ahi realizariamos todo el temea de validacion,

En este Form que estamos asiendo no utilizamos el onSubmit y para obtener los datos y validarlos lo estamso asiendo con action
solo que de esta forma si hay que ponerle el method="post"
*/
export async function action({ request }) {
    const formData = await request.formData();
    const datos = Object.fromEntries(formData)
    const errores = []
    if (Object.values(datos).includes('')) {
        errores.push("Todos los campos son obligatorios")
    }
    if (!expresion_correo.test(formData.get('correo'))) {
        errores.push('El E-Mail ingresado no es válido');
    }
    if (datos.password != datos.password2) {
        errores.push('Las contraseñas ingresadas no coinciden');
    }
    if (!expresion_password.test(formData.get('password'))) {
        errores.push('La contraseña debe tener al menos 1 número, una mayúscula, y un largo entre 6 y 20 caracteres.');
    }
    // Retornar datos si hay errores
    if (Object.keys(errores).length) {
        //console.log(errores);
        return errores;
    }

    //aqui mandamos los vatos via json al api
    let registrado = await authRegistro({ name: datos.nombre, email: datos.correo, password: datos.password });
    console.log(registrado)
    if (registrado.estado == 'ok') {
        showAlert('Ok','Te has registrado exitosamente','success')
        setInterval(() => {
            window.location = window.location.href;
        }, 2000);
        return true;
    } else {
      showAlert('Ops','Ocurrió un error, el e-Mail indicado no está disponible','error')
      return null
    }
}
const AccesoRegistro = () => {
    const errores = useActionData()//se llama aqui, por que se esta cargando desde un actio y para tener accesso lo hacemos de esta forma
    return (
        <>
            <h1>Registro</h1>
            {errores?.length && <Validaciones errores={errores} />}
            <Form method="post">
                <div className="form-group my-3">
                    <label htmlFor="nombre">Nombre</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        className="form-control"
                        placeholder="Nombre"
                    />
                </div>
                <div className="form-group my-3">
                    <label htmlFor="correo">E-Mail</label>
                    <input
                        type="text"
                        id="correo"
                        name="correo"
                        className="form-control"
                        placeholder="E-Mail"
                    />
                </div>
                <div className="form-group my-3">
                    <label htmlFor="password">Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="form-control"
                        placeholder="Contraseña"
                    />
                </div>
                <div className="form-group my-3">
                    <label htmlFor="password2">Repetir contraseña</label>
                    <input
                        type="password"
                        id="password2"
                        name="password2"
                        className="form-control"
                        placeholder="Repetir contraseña"
                    />
                </div>
                <hr />
                <button className='btn btn-primary'>Enviar</button>
            </Form>
            <div className="my-2">
                <Link to="/acceso/login" title="¿Ya tienes cuenta? Entra aquí">¿Ya tienes cuenta? Entra aquí</Link>
            </div>
        </>
    )
}

export default AccesoRegistro
