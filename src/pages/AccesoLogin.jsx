import { Link, useNavigate } from "react-router-dom"
import { useFormik } from "formik"
import { showAlert } from "../helper/helpers"
import { useContext } from "react"
import { authLogin } from "../servicios/ApiAuth"
import AuthContext from "../context/AuthProvider"

const AccesoLogin = () => {
    const navigate = useNavigate();

    /*este valor handleIniciarSession viene de ../context/AuthProvider*/
    const { handleIniciarSession } = useContext(AuthContext)
    const { handleSubmit, handleChange, values } = useFormik({
        initialValues: {
            correo: "",
            password: "",
        },
        onSubmit: async function (values) {
            //p2gHNiENUw
            let mensaje = '';
            if (!values.correo) {
                mensaje = mensaje + " <li>El campo E-Mail es obligatorio</li>";
            }
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.correo)) {
                mensaje = mensaje + " <li>El E-Mail ingresado no es válido</li>";
            }
            if (!values.password) {
                mensaje = mensaje + " <li>El campo Contraseña es obligatorio</li>";
            }

            if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,20}$/i.test(values.password)) {
                mensaje = mensaje + " <li>La contraseña debe tener al menos 1 número, una mayúscula, y un largo entre 6 y 20 caracteres.</li>";
            }
            if (mensaje != '') {
                showAlert('Debes corregir los siguientes',`<ul>${mensaje}</ul>`,'error')
                return;
            } else {
                // Aquí puedes usar values para enviar la información
                let logueado = await authLogin({ correo: values.correo, password: values.password });
                if (logueado.estado == "ok") {
                    handleIniciarSession(logueado.token, logueado.nombre);
                    navigate("/acceso/protegido");

                } else {
                    showAlert('Ops','Las credenciales ingresas no son correctas','error')
                    return null
                }

            }

        },
    });
    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group my-3">
                    <label htmlFor="correo">E-Mail</label>
                    <input
                        type="email"
                        id="correo"
                        name="correo"
                        className="form-control"
                        placeholder="E-Mail"
                        value={values.correo}
                        onChange={handleChange}
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
                        value={values.password}
                        onChange={handleChange}
                    />
                </div>
                <button className='btn btn-primary'>Enviar</button>
            </form>
        </>
    )
}

export default AccesoLogin
