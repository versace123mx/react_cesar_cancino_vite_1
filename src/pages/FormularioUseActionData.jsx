import { Link, Form } from "react-router-dom"
import { showAlert } from "../helper/helpers"
import { categoria_productos, atributos } from "../datos/datos"
import { useState } from "react"

export async function action({request}){
    //siempre los action deben retornar algo, si no la aplicacion se rompe
    const formData = await request.formData()
    console.log(formData)

    /**
    esta es otra forma de poder recuperar los datos
    const datos = Object.fromEntries(formData)
    console.log(datos)
    console.log(datos.nombre)

    Nota: de esta forma de recuperar el valor del formulario es obligatorio que el campo input tenga el atributo name con su respectivo valor
    <Form method="post"> en este tipo de formulario con Form si se requiere el method post
    */

    const nombre = formData.get('nombre')
    const apellido = formData.get('apellido')
    const edad = formData.get('edad')
    const educacion = formData.get('educacion')
    const categoria = formData.get('categoria')
    const precio = formData.get('precio')
    const descripcion = formData.get('descripcion')
    const destacado = formData.get('destacado')
    const peligroso = formData.get('peligroso')

    //recibir checkbox dinamicos
    let arreglo = []
    let mensajeArreglo = ''
    atributos.map((atributo,i) => {
        if(formData.get("atributo_"+atributo.id) != null){
            arreglo.push(atributo.id)
            mensajeArreglo += atributo.nombre + ", "
        }
    })

    if(nombre == '' || apellido == '' || edad == '' || educacion == ''
        || categoria == '' || precio == '' || descripcion == '' || destacado == null || peligroso == null
    ){
        showAlert('Error','Todos los campos son obligatorios','error')
        return null
    }else{
        showAlert('Ok',
            `El nombre es ${nombre},<br> 
            El apellido ${apellido},<br> 
            su edad: ${edad},<br>
            su nivel academico ${educacion},<br> 
            la categoria es ${categoria},<br>
            el precio ${precio},<br>
            la descripcion: ${descripcion},<br> 
            la categoria es: ${categoria},<br> 
            Es Peligroso ${peligroso}<br>
            Atributos: ${mensajeArreglo}`,'success')
        return null
    }
    
}

const FormularioUseActionData = () => {

    /*
        Nota: el checkbox en este caso como solo es un checkbox el que queremos validar y saber si esta chequeado
        para en base a eso ponerlo como true se le asigna un valor en el useState, de lo contrario no podremos saber si su estado cambio
        En el caso del arreglo de checkbox no se requiere validar ya que mandara su valor del id
    
    */
    const [peligroso,setPeligroso] = useState(false)    
    const handlePeligroso = () => {
        setPeligroso(!peligroso)
    }
    return (
        <>
            <nav aria-label="breadcrumb">
                <ul className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/formularios">Home - Formularios</Link></li>
                    <li className="breadcrumb-item active">useActionData</li>
                </ul>
            </nav>
            <hr />
            <h3>useActionData</h3>
            <Form method="post">
                <div className="form-group my-3">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" id="nombre" name="nombre" className="form-control" />
                </div>
                <div className="form-group my-3">
                    <label htmlFor="apellido">Apellido</label>
                    <input type="text" id="apellido" name="apellido" className="form-control" />
                </div>
                <div className="form-group my-3">
                    <label htmlFor="edad">Edad</label>
                    <input type="number" id="edad" name="edad" className="form-control" />
                </div>
                <div className="form-group my-3">
                    <label htmlFor="educacion">Educacion</label>
                    <input type="text" id="educacion" name="educacion" className="form-control" />
                </div>
                <div className="my-4">
                    <label htmlFor="categoria">Categoria</label>
                    <select name="categoria" id="categoria" className="form-control">
                        <option value="0">Selecciona una Categoria</option>
                        {categoria_productos.map( cp => 
                            <option value={cp.id} key={cp.id}>{cp.nombre}</option>
                        )}
                    </select>
                </div>
                <div className="form-group my-3">
                    <label htmlFor="precio">Precio</label>
                    <input type="number" id="precio" name="precio" className="form-control" placeholder="$50" min={0} max={5000}/>
                </div>
                <div className="form-group my-3">
                    <label htmlFor="descripcion">Descripcion</label>
                    <textarea name="descripcion" id="descripcion" className="form-control" placeholder="Ingresa tu Descripcion"></textarea>
                </div>
                <div className="form-control">
                    <label htmlFor="destacado">Destacado</label>
                    <div className="form-check">
                        <input type="radio" name="destacado" id="destacado1" value="si" className="form-check-input"/>
                        <label htmlFor="destacado1">Si</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="destacado" id="destacado2" value="no" className="form-check-input"/>
                        <label htmlFor="destacado2">No</label>
                    </div>
                </div>
                <div className="form-group my-3">
                    <p><label htmlFor="peligroso">Es Peligroso</label></p>
                    <input type="checkbox" name="peligroso" 
                        id="peligroso" 
                        className="form-check-input"
                        value={peligroso}
                        onChange={handlePeligroso}
                        />
                </div>
                <div className="my-4">
                    <p><label htmlFor="atributos">Atributos</label></p>
                    {atributos.map( atributo =>
                        <div key={atributo.id}>
                            <label htmlFor={atributo.nombre}>{atributo.nombre}</label>
                            <input
                                type="checkbox" 
                                name={`atributo_${atributo.id}`} 
                                id={`atributo_${atributo.id}`} 
                                className="form-check-input mx-3"
                                value={atributo.id}
                                />
                            
                        </div>
                        )}
                </div>
                <div className="my-4">
                    <button className="btn btn-info">Enviar</button>
                </div>
            </Form>
        </>
    )
}

export default FormularioUseActionData
