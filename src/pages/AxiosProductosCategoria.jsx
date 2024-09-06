import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom"
import { getCategoriasPorSlug, getProductosPorCategorias } from "../servicios/ApiRestAxios"
import { acortarTexto, formatearNumero, showAlert, showAlertConfirm } from "../helper/helpers"

//Se realiza con el loader ya que se llama a getProductos en cuanto carga el componente
//otra forma de utilizarlo es con useEffect que se ejecuta al igual al cargar el componente
//otra forma seria que se ejecute cuando se de click en un boton
export async function loader({ params }) {
    const datos = await getProductosPorCategorias(params.slug,params.page)
    const categorias = await getCategoriasPorSlug(params.slug)
    return [datos,categorias]
}

const AxiosProductosCategoria = () => {
    const [datos,categorias] = useLoaderData()
    const { slug, page } = useParams();//Para traer el valor de la url checar el archivo main.jsx ath:"/axios/productos/categorias/:slug/:page"

    //Logica del paginado
    let anterior;
    let siguiente;
    let pageMenos1 = parseInt(page) - 1;
    if (parseInt(pageMenos1) <= 1) {
        anterior = 1;
    } else {
        anterior = pageMenos1;
    }
    let pageMas1 = parseInt(page) + 1;
    if (parseInt(pageMas1) >= datos.links) {
        siguiente = datos.links;
    } else {
        siguiente = pageMas1;
    }
    let paginas = [];
    for (let i = 1; i <= datos.links; i++) {
        paginas[i] = i;
    }
    return (
        <>
            <nav aria-label="breadcrumb">
                <ul className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/axios">Home - Axios</Link></li>
                    <li className="breadcrumb-item"><Link to="/axios/productos/1">Productos - Axios</Link></li>
                    <li className="breadcrumb-item">Productos Categoria : {categorias && categorias.nombre}</li>
                </ul>
            </nav>
            <hr />
            <h3>Productos Categoria</h3>
            <p>
                <Link className='btn btn-success' to="/axios/productos/add">
                    Crear
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle mx-1" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                    </svg>
                </Link>
            </p>
            
            {(Object.values(datos).length) ? (
                <>
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">nombre</th>
                                <th scope="col">Slug</th>
                                <th scope="col">descripcion</th>
                                <th scope="col">fecha</th>
                                <th scope="col">precio</th>
                                <th scope="col">stock</th>
                                <th scope="col">categoria</th>
                                <th scope="col">categorias_id</th>
                                <th scope="col">Foto</th>
                                <th scope="col">Editar</th>
                                <th scope="col">Eliminar</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">

                            {datos.datos.map((producto) =>
                            (
                                <tr key={producto.id}>
                                    <td>{producto.id}</td>
                                    <td>{producto.nombre}</td>
                                    <td>{producto.slug}</td>
                                    <td>{acortarTexto(producto.descripcion, 0, 30)}...</td>
                                    <td>{producto.fecha}</td>
                                    <td>${formatearNumero(producto.precio)}</td>
                                    <td>{producto.stock}</td>
                                    <td>
                                        <Link to={`/axios/productos/categorias/${producto.categoria_slug}/1`}>
                                            {producto.categoria}
                                        </Link>
                                    </td>
                                    <td>{producto.categorias_id}</td>
                                    <td>
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-image" viewBox="0 0 16 16">
                                                <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                                                <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z" />
                                            </svg>
                                        </a>
                                    </td>
                                    <td>
                                        <Link to={`/axios/productos/editar/${producto.id}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                                            </svg>
                                        </Link>
                                    </td>
                                    <td>
                                        <Link to={`/axios/productos/eliminar/${producto.id}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                            </svg>
                                        </Link>
                                    </td>
                                </tr>
                            )
                            )}

                        </tbody>
                    </table>

                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            {/*
                            <li className="page-item">
                                <Link className="page-link" to={`/axios/productos/1`}>
                                    Primera
                                </Link>
                            </li>
                            <li className="page-item">
                                <Link className="page-link" to={`/axios/productos/${anterior}`}>
                                    Anterior
                                </Link>
                            </li>
                            */}
                            {/*paginación numérica */}
                            {[...paginas].map((x, i) => (
                                <li className="page-item" key={i}>
                                    {i >= 1 && (
                                        <Link className={`page-link ${(page == i) ? 'active' : ''}`} to={`/axios/productos/categorias/${slug}/${i}`}>
                                            {i}
                                        </Link>
                                    )}
                                </li>
                            ))}
                            {/* fin paginación numérica */}
                            {/* 
                            <li className="page-item">
                                <Link className="page-link" to={`/axios/productos/${siguiente}`}>
                                    Siguiente
                                </Link>
                            </li>
                            
                            <li className="page-item">
                                <Link className="page-link" to={`/axios/productos/${datos.links}`}>
                                    Ultima
                                </Link>
                            </li>
                            */}
                        </ul>
                    </nav>
                </>
            ) : (
                <div>
                    <p>No hay datos a Mostrar</p>
                </div>
            )}
        </>
    )
}

export default AxiosProductosCategoria
