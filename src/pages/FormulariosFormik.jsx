import { Link } from "react-router-dom"
import React from 'react';
import { Formik, Form, Field, useFormik } from 'formik';
import { showAlert } from "../helper/helpers"

const FormulariosFormik = () => {
    const {handleSubmit,handleChange,values} = useFormik({
        initialValues:{
            email:"",
            password:""
        },
        onSubmit: async function(values){
            
            values.email == '' || values.password == ''? showAlert('Error','Todos los campos son Obligatorios','error'):showAlert('Exito','Todo ok','success')
        }
    })
    return (
        <>
            <nav aria-label="breadcrumb">
                <ul className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/formularios">Home - Formularios</Link></li>
                    <li className="breadcrumb-item active">useFormik</li>
                </ul>
            </nav>
            <hr />
            <h3>useFormik  - otra forma de validar campos</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <div className="my-3">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="text" 
                            id="email" 
                            name="email" 
                            className="form-control" 
                            onChange={handleChange} 
                            value={values.email}
                        />
                    </div>
                    <div className="my-3">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            className="form-control" 
                            onChange={handleChange}
                            value={values.password}
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

export default FormulariosFormik
