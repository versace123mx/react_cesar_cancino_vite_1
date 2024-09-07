import { useState } from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import {
  getProductos,
  getCategorias,
  addProductos,
  editProductos,
  deleteProductos,
} from "../servicios/ApiRestFetch";
import Modal from "react-bootstrap/Modal";
import Validaciones from "../helper/Validaciones";
import Swal from "sweetalert2";
export async function loader({ params }) {
  let datos = await getProductos(params.page);
  let categorias = await getCategorias();
  return [datos, categorias];
}
const FetchProductos = () => {
  const [nombre, setNombre] = useState("");
  const [categorias_id, setCategorias_id] = useState("0");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [stock, setStock] = useState("");
  const [acciones, setAcciones] = useState(1);
  const [accionesId, setAccionesId] = useState();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [datos, categorias] = useLoaderData();
  const { page } = useParams();
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
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (categorias_id == 0) {
      Swal.fire({
        icon: "error",
        title: "Ups",
        text: "Debe seleccionar una categoría",
      });
      setCategorias_id("0");
      return;
    }
    if (nombre == 0 || nombre == "") {
      Swal.fire({
        icon: "error",
        title: "Ups",
        text: "El campo nombre está vacío",
      });
      setNombre("");
      return;
    }
    if (descripcion == 0 || descripcion == "") {
      Swal.fire({
        icon: "error",
        title: "Ups",
        text: "El campo Descripción está vacío",
      });
      setDescripcion("");
      return;
    }
    if (precio == 0 || precio == "") {
      Swal.fire({
        icon: "error",
        title: "Ups",
        text: "El campo precio está vacío",
      });
      setPrecio("");
      return;
    }
    if (acciones == 1) {
      try {
        await addProductos({ nombre: nombre, descripcion: descripcion, precio: precio, stock: stock, categorias_id: categorias_id });
        Swal.fire({
          icon: 'success',
          title: 'Ok',
          text: "Se creó el registro exitosamente"
        });
        navigate(0)
      } catch (error) {
        return Swal.fire({
          icon: 'error',
          title: 'Ops',
          text: "Ocurrió un error inesperado"
        });
      }
    }
    if (acciones == 2) {
      try {
        await editProductos({ nombre: nombre, descripcion: descripcion, precio: precio, stock: stock, categorias_id: categorias_id }, accionesId);
        Swal.fire({
          icon: 'info',
          title: 'Ok',
          text: "Se modificó el registro exitosamente"
        });
        navigate(0)
      } catch (error) {
        return Swal.fire({
          icon: 'error',
          title: 'Ops',
          text: "Ocurrió un error inesperado"
        });
      }
    }
  };
  const handleCrear = () => {
    setAcciones(1);
    setNombre("");
    setCategorias_id("0");
    setPrecio("");
    setStock("");
    setDescripcion("");
    handleShow();
  };
  const handleEditar = async (modulo) => {
    setAcciones(2);
    setAccionesId(modulo.id);
    setNombre(modulo.nombre);
    setCategorias_id(modulo.categorias_id);
    setPrecio(modulo.precio);
    setStock(modulo.stock);
    setDescripcion(modulo.descripcion);
    handleShow();
  };
  const dentroEliminar = async (id) => {
    try {
      await deleteProductos(id);
      Swal.fire({
        icon: 'success',
        title: 'Ok',
        text: "Se eliminó el registro exitosamente"
      });
      navigate(0);
    } catch (error) {
      return Swal.fire({
        icon: 'error',
        title: 'Ops',
        text: "No es posible eliminar el registro en este momento"
      });
    }

  }
  const handleEliminar = (id) => {
    Swal.fire({
      title: '¿Realmente desea eliminar este registro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'NO',
      confirmButtonText: 'SI'
    }).then((result) => {
      if (result.isConfirmed) {
        dentroEliminar(id);
      }

    });

  };
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/fetch">Fetch</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Productos
          </li>
        </ol>
      </nav>
      <h1>
        Productos ({datos.total} registros en total) ({datos.por_pagina} en esta
        página)
      </h1>
      <p>
        <button className="btn btn-success" onClick={handleCrear}>
          <i className="fas fa-plus"></i> Crear
        </button>
      </p>
      <div className="table-responsive">
        {Object.values(datos).length == 0 ? (
          <div className="alert alert-warning">No hay registros</div>
        ) : (
          <>
            <table className="table table-bordered table-hover table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Categoría</th>
                  <th>Nombre</th>
                  <th>Descripción</th>
                  <th>Precio</th>
                  <th>Stock</th>
                  <th>Fotos</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {datos.datos.map((dato) => (
                  <tr key={dato.id}>
                    <td>{dato.id}</td>
                    <td>
                      <Link
                        to={`/fetch/productos/categorias/${dato.categoria_slug}/1`}
                      >
                        {dato.categoria}
                      </Link>
                    </td>
                    <td>{dato.nombre}</td>
                    <td>{acortarTexto(dato.descripcion, 0, 100)}...</td>
                    <td>${formatearNumero(dato.precio)}</td>
                    <td>{dato.stock}</td>
                    <td className="text-center">
                      <Link to={`/fetch/productos/fotos/${dato.id}`}>
                        <i className="fas fa-camera"></i>
                      </Link>
                    </td>
                    <td className="text-center">
                      <Link to="#" onClick={() => { handleEditar(dato) }}>
                        <i className="fas fa-edit"></i>
                      </Link>
                      &nbsp;&nbsp;
                      <Link to="#" onClick={() => { handleEliminar(dato.id) }}>
                        <i className="fas fa-trash"></i>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">
                  <Link className="page-link" to={`/fetch/productos/1`}>
                    Primera
                  </Link>
                </li>
                <li className="page-item">
                  <Link
                    className="page-link"
                    to={`/fetch/productos/${anterior}`}
                  >
                    Anterior
                  </Link>
                </li>
                {/*paginación numérica */}
                {[...paginas].map((x, i) => (
                  <li className="page-item" key={i}>
                    {i >= 1 && (
                      <Link
                        className={`page-link ${page == i ? "active" : ""}`}
                        to={`/fetch/productos/${i}`}
                      >
                        {i}
                      </Link>
                    )}
                  </li>
                ))}
                {/* fin paginación numérica */}
                <li className="page-item">
                  <Link
                    className="page-link"
                    to={`/fetch/productos/${siguiente}`}
                  >
                    Siguiente
                  </Link>
                </li>
                <li className="page-item">
                  <Link
                    className="page-link"
                    to={`/fetch/productos/${datos.links}`}
                  >
                    Última
                  </Link>
                </li>
              </ul>
            </nav>
          </>
        )}
      </div>
      {/*################MODAL */}
      <Modal size="lg" show={show} onHide={handleClose} id="listingModal">
        <Modal.Header closeButton>
          <Modal.Title>{acciones === 1 ? "Crear" : "Editar"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="row gy-3">
              <div className='col-lg-12'>
                <label htmlFor="categorias_id">Categoría</label>
                <select value={categorias_id}
                  onChange={(e) => setCategorias_id(e.target.value)} id="categorias_id" className="form-control">
                  <option value="0">Seleccione....</option>
                  {categorias.map((categoria) =>
                  (
                    <option key={categoria.id} value={categoria.id}>{categoria.nombre}</option>
                  ))}
                </select>
              </div>
              <div className="col-lg-12">
                <label className="form-label" htmlFor="nombre">
                  Nombre
                </label>
                <input
                  className="form-control"
                  id="nombre"
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Nombre"
                />
              </div>
              <div className="col-lg-12">
                <label htmlFor="descripcion">Descripción:</label>
                <textarea value={descripcion}
                  onChange={(e) => setDescripcion(e.target.value)} id="descripcion" className="form-control" placeholder="Descripción"></textarea>
              </div>
              <div className='col-lg-12'>
                <label htmlFor="precio">Precio</label>
                <input type="number" id="precio" value={precio}
                  onChange={(e) => setPrecio(e.target.value)} className='form-control' placeholder='Precio' />
              </div>
              <div className='col-lg-12'>
                <label htmlFor="stock">Stock</label>
                <select value={stock}
                  onChange={(e) => setStock(e.target.value)} id="stock" className="form-control">
                  {(() => {
                    let rows = [];
                    for (let i = 1; i <= 100; i++) {
                      rows.push(<option key={i} value={i}>{i}</option>);
                    }
                    return rows;
                  })()}
                </select>
              </div>
              <hr />
              <div className="row">
                <div className="col-6"></div>
                <div className="col-6 d-flex justify-content-end">
                  <button className="btn btn-primary">
                    {acciones === 1 ? (
                      <>
                        <i className="fas fa-plus"></i> Crear
                      </>
                    ) : (
                      <>
                        <i className="fas fa-pencil-alt"></i> Editar
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
      {/*################FIN MODAL */}
    </>
  );
};

export default FetchProductos;
