import { Link, useLoaderData, Form, useActionData, redirect } from "react-router-dom"
import { getCategorias, addProductos } from "../servicios/ApiRestAxios"
import { showAlert, showAlertConfirm } from "../helper/helpers"
import Validaciones from "../helper/Validaciones"
//Se realiza con el loader ya que se llama a getCategorias en cuanto carga el componente
//otra forma de utilizarlo es con useEffect que se ejecuta al igual al cargar el componente
//otra forma seria que se ejecute cuando se de click en un boton
export async function loader() {
    const categorias = await getCategorias()
    return categorias
}

export async function action({ request }) {
    //aqui se extraen los datos de formulario para su validacion
    const formData = await request.formData()
    const datos = Object.fromEntries(formData)
    //console.log(datos)
    let errores = []
    if (Object.values(datos).includes('')) {
        errores.push('Todos los campos son obligatorios')
    }
    const expresion_precio = new RegExp("[0-9]");
    if (!expresion_precio.test(formData.get('precio'))) {
        errores.push('El Precio sólo puede tener números');
    }

    if(formData.get('nombre')== ''){
        errores.push('El nombre es obligatorio')
    }
    // Retornar los errores si existen
    if (errores.length > 0) {
        return errores;
    }

    //aqui se hace la peticion al api
    if (await addProductos({nombre: datos.nombre, descripcion: datos.descripcion, precio: datos.precio, stock: datos.stock, categorias_id: datos.categorias_id}) == 201) {
        showAlert('Existo', 'Se creo el Registro correctamente', 'success')
        return redirect("/axios/productos/1")
    } else {
        return showAlert('Error', 'El Registro no se pudo crear ya existe', 'error')
    }
}

const AxiosProductosAdd = () => {
    const categorias = useLoaderData()//aqui cargamos los datos del loader
    const errores = useActionData(); // Aquí obtienes los datos retornados desde la acción

    return (
        <>
            <nav aria-label="breadcrumb">
                <ul className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/axios">Home - Axios</Link></li>
                    <li className="breadcrumb-item"><Link to="/axios/productos/1">Productos - Axios</Link></li>
                    <li className="breadcrumb-item">Crear Producto</li>
                </ul>
            </nav>
            <hr />
            <h3>Crear Productos Categoria</h3>

            {/* Mostrar los errores si existen se pasan los errores como props al componente Validaciones*/}
            {errores?.length && <Validaciones errores={errores} />}
            <Form method='post'>
                <div className='form-group my-3'>
                    <label htmlFor="categorias_id">Categoría</label>
                    <select className='form-control' name='categorias_id' id='categorias_id'>
                        {categorias.map((categoria) =>
                        (
                            <option key={categoria.id} value={categoria.id}>{categoria.nombre}</option>
                        ))}
                    </select>
                </div>
                <div className='form-group my-3'>
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" id="nombre" name="nombre" className='form-control' placeholder='Nombre' />
                </div>
                <div className="form-group my-3">
                    <label htmlFor="descripcion">Descripción:</label>
                    <textarea name="descripcion" id="descripcion" className="form-control" placeholder="Descripción"></textarea>
                </div>
                <div className='form-group my-3'>
                    <label htmlFor="precio">Precio</label>
                    <input type="number" id="precio" name="precio" className='form-control' placeholder='Precio' />
                </div>
                <div className='form-group my-3'>
                    <label htmlFor="stock">Stock</label>
                    <select name="stock" id="stock" className="form-control">
                        {(() => {
                            let rows = [];
                            for (let i = 1; i <= 100; i++) {
                                rows.push(<option key={i} value={i}>{i}</option>);
                            }
                            return rows;
                        })()}
                    </select>
                </div>
                <div className="my-3">
                    <button className='btn btn-primary'>Enviar</button>
                </div>
            </Form>
        </>
    )
}

export default AxiosProductosAdd
