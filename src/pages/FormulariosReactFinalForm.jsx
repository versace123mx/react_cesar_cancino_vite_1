import { Link } from "react-router-dom"
import { showAlert } from "../helper/helpers"
import { Form, Field } from 'react-final-form'

function FormulariosReactFinalForm() {
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

    const required = (value ) => (value ? undefined : 'Este campo es obligatorio '  );

    const mailValido = (value) => ((/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) ? undefined : 'El E-Mail ingresado no es válido');

    const passwordValido = (value) => ((/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,20}$/i.test(value)) ? undefined : 'La contraseña debe tener al menos 1 número, una mayúscula, y un largo entre 6 y 20 caracteres.');

    const composeValidators = (...validators) => value =>
        validators.reduce((error, validator) => error || validator(value), undefined);
    const onSubmit=async (values) =>
    {
        await sleep(300);
        showAlert('Ok',`E-Mail:${values.correo} | Contraseña:${values.password}`,'success')
    }
    return (
        <>
            <nav aria-label="breadcrumb">
                <ul className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/formularios">Home - Formularios</Link></li>
                    <li className="breadcrumb-item active">ReactFinalForm</li>
                </ul>
            </nav>
            <hr />
            <h3>ReactFinalForm  - otra forma de validar campos</h3>
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <Field name="correo" validate={composeValidators(required, mailValido,)}>
                                {({ input, meta }) => (
                                    <div>
                                        <label htmlFor="correo">E-Mail</label>
                                        <input type="text" className="form-control" placeholder="E-Mail" {...input} />
                                        {meta.error && meta.touched && <div className='text text-danger'>{meta.error}</div>}
                                    </div>
                                )}
                            </Field>
                        </div>

                        <div className="form-group">
                            <Field name="password" validate={composeValidators(required, passwordValido,)}>
                                {({ input, meta }) => (
                                    <div>
                                        <label htmlFor="password">Contraseña</label>
                                        <input type="password" className="form-control" placeholder="Contraseña" {...input} />
                                        {meta.error && meta.touched && <div className='text text-danger'>{meta.error}</div>}
                                    </div>
                                )}
                            </Field>
                        </div>

                        <div className="buttons">
                            <button className="btn btn-info" type="submit" disabled={submitting || pristine}>Enviar</button>
                            &nbsp;&nbsp;
                            <button className='btn btn-info'
                                type="button"
                                onClick={form.reset}
                                disabled={submitting || pristine}
                            >
                                Restablecer
                            </button>
                        </div>

                    </form>
                )}
                >

            </Form>
        </>
    )
}

export default FormulariosReactFinalForm
