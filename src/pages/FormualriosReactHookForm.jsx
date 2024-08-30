import { Link } from "react-router-dom"
import {useForm} from 'react-hook-form'
import { showAlert } from "../helper/helpers"
function FormualriosReactHookForm() {

    const {register, formState:{errors}, handleSubmit} = useForm()
    function onSubmit(values){
        showAlert('Exito',`E-mail: ${values.email}`,'success')
    }
    return (
        <>
            <nav aria-label="breadcrumb">
                <ul className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/formularios">Home - Formularios</Link></li>
                    <li className="breadcrumb-item active">ReactHookForm</li>
                </ul>
            </nav>
            <hr />
            <h3>ReactHookForm  - otra forma de validar campos</h3>
            {(errors.email || errors.password) && (
                <div className="alert alert-danger">
                    <ul>
                        {errors.email && <li>{errors.email?.message}</li>}
                        {errors.password && <li>{errors.password?.message}</li>}
                    </ul>
                </div>
            )}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                    <div className="my-3">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            className="form-control"
                            {...register("email",{
                                required: "El campo email es obligatorio",
                                pattern:{
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message:"El email ingresado no es valido"
                                }
                            })}
                        />
                    </div>
                    <div className="my-3">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="form-control"
                            {...register("password",{
                                required: "El campo email es obligatorio",
                                pattern:{
                                    value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,20}$/i,
                                    message:"El password debe tener almenos 1 numero. una mayuscula y un largo de 6 y 20 caracteres."
                                }
                            })}
                        />
                    </div>
                    <div>
                        <button className="btn btn-primary">Enviar</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default FormualriosReactHookForm
