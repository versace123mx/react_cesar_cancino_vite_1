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
import { formatearFecha, formatearNumero, acortarTexto, showAlert, showAlertConfirm } from "../helper/helpers";
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
          Crear
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle mx-1" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
          </svg>
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-image" viewBox="0 0 16 16">
                          <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                          <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z" />
                        </svg>
                      </Link>
                    </td>
                    <td className="text-center">
                      <Link to="#" onClick={() => { handleEditar(dato) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                          <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                        </svg>
                      </Link>
                      &nbsp;&nbsp;
                      <Link to="#" onClick={() => { handleEliminar(dato.id) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                        </svg>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                {/*
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
                */}
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
                {/*
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
                */}
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
