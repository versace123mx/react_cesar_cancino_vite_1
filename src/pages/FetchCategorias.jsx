import { useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { getCategorias, addCategorias, editCategorias, deleteCategorias } from '../servicios/ApiRestFetch';
import Modal from 'react-bootstrap/Modal';
import Swal from 'sweetalert2';

export async function loader() {

    let datos = await getCategorias();
    console.log(datos)
    return datos;
}
const FetchCategorias = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [nombre, setNombre] = useState('');
    const [acciones, setAcciones] = useState(1);
    const [accionesId, setAccionesId] = useState();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const datos = useLoaderData();
    const handleSubmit = async (e) => {
        e.preventDefault();
        //setAcciones(1);
        if (nombre == 0 || nombre == "") {
            Swal.fire({
                icon: "error",
                title: "Ups",
                text: "El campo nombre está vacío",
            });
            setNombre("");
            return;
        }
        if (acciones == 1) {
            try {
                await addCategorias({ nombre: nombre });
                Swal.fire({
                    icon: 'success',
                    title: 'Ok',
                    text: "Se creó el registro exitosamente"
                });
                navigate(0);
            } catch (error) {
                return Swal.fire({
                    icon: 'error',
                    title: 'Ops',
                    text: "La categoría indicada ya existe"
                });
            }
        }
        if (acciones == 2) {
            try {
                await editCategorias({ nombre: nombre }, accionesId);
                Swal.fire({
                    icon: 'info',
                    title: 'Ok',
                    text: "Se modificó el registro exitosamente"
                });
                navigate(0);
            } catch (error) {
                return Swal.fire({
                    icon: 'error',
                    title: 'Ops',
                    text: "Ocurrió un error inesperado"
                });
            }
        }

    }
    const handleCrear = () => {
        setAcciones(1);
        setNombre('');
        handleShow();
    }
    const handleEditar = async (modulo) => {
        setAcciones(2);
        setAccionesId(modulo.id);
        setNombre(modulo.nombre);
        handleShow();
    }
    const dentroEliminar = async (id) => {
        try {
            await deleteCategorias(id);
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
                    <li className="breadcrumb-item active" aria-current="page">Categorías</li>
                </ol>
            </nav>
            <h1>Categorías</h1>
            <p>
                <button className='btn btn-success' onClick={handleCrear}>
                    <i className="fas fa-plus"></i> Crear
                </button>
            </p>
            <div className='table-responsive'>
                {(Object.values(datos).length == 0) ? (
                    <div className='alert alert-warning'>No hay registros</div>
                ) : (
                    <table className='table table-bordered table-hover table-striped'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {datos.map((dato) => (
                                <tr key={dato.id}>
                                    <td>{dato.id}</td>
                                    <td>{dato.nombre}</td>
                                    <td>
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
                )}
            </div>
            <Modal size="lg" show={show} onHide={handleClose} id="listingModal">
                <Modal.Header>
                    <Modal.Title>
                        {acciones === 1 ? "Crear" : "Editar"}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <div className='row gy-3'>
                            <div className='col-lg-12'>
                                <label className="form-label" htmlFor="nombre">
                                    Nombre
                                </label>
                                <input
                                    className="form-control"
                                    id="nombre"
                                    type="text"
                                    placeholder='Nombre'
                                    value={nombre}
                                    onChange={(e) => { setNombre(e.target.value) }}
                                />
                            </div>
                        </div>
                        <hr />
                        <div className='row'>
                            <div className="col-6"></div>
                            <div className="col-6 d-flex justify-content-end">
                                <button className='btn btn-primary'>
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
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default FetchCategorias