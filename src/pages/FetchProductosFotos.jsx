import { useState } from "react";
import { Link, useLoaderData, useNavigate, Form, useActionData, redirect } from "react-router-dom";
import { getFotosPorProducto, getProductosPorId, addFotosPorProducto, deleteFotos} from "../servicios/ApiRestFetch";
import Validaciones from "../helper/Validaciones";
import Swal from "sweetalert2";

export async function loader({ params }) {
  const fotos = await getFotosPorProducto(params.id);
  const datos = await getProductosPorId(params.id);
  return [datos, fotos];
}
export async function action({ request, params }) {
  const formData = await request.formData();
  const datos = Object.fromEntries(formData);
  const errores = [];
  let bandera = 0;
  switch (formData.get('foto').type) {
    case 'image/png':
      bandera = 0;
      break;
    case 'image/jpg':
      bandera = 0;
      break;
    case 'image/jpeg':
      bandera = 0;
      break;
    default:
      bandera = 1;
  }
  if (bandera == 1) {
    errores.push('La foto debe tener un formato permitido: PNG|JPG');
  }
  // Retornar datos si hay errores
  if (Object.keys(errores).length) {
    //console.log(errores);
    return errores;
  }
  try {
    await addFotosPorProducto(params.id);
    Swal.fire({
      icon: 'success',
      title: 'Ok',
      text: "Se creó el registro exitosamente"
    });
    return redirect(`/fetch/productos/fotos/${params.id}`);
  } catch (error) {
    return Swal.fire({
      icon: 'error',
      title: 'Ups',
      text: "Ocurrió un error inesperado"
    });
  }
}

const FetchProductosFotos = () => {
  const [datos, fotos] = useLoaderData();
  const errores = useActionData();
  const navigate = useNavigate();
  const dentroEliminar = async (id) => {
    try {
      await deleteFotos(id);
      Swal.fire({
        icon: 'success',
        title: 'Ok',
        text: "Se eliminó el registro exitosamente"
      });
      return navigate(0);
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
          <li className="breadcrumb-item">
            <Link to="/fetch/productos/1">Productos</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">Fotos: {datos.nombre} </li>
        </ol>
      </nav>
      <h1>Fotos: {datos.nombre} </h1>
      <div className="row">
        <h4>Suba una foto</h4>
        {errores?.length && <Validaciones errores={errores} />}
        <Form method="POST" noValidate encType="multipart/form-data">
          <div className="form-group">
            <label htmlFor="foto">Foto</label>
            <input type="file" id="foto" name="foto" className="form-control" />
          </div>
          <hr />
          <button className='btn btn-primary'>
            <i className="fas fa-upload"></i> Subir
          </button>
        </Form>
      </div>
      <hr />
      <div className="row">
        <h4>
          Fotos: <strong>{datos.nombre}</strong>
        </h4>
        <table className="table">
          <thead>
            <tr>
              <th>FOTO</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {fotos.map((foto) => (
              <tr key={foto.id}>
                <td>
                  <img src={foto.foto} width="200" height="200" />
                </td>
                <td className="text-center ">
                  <button className="btn btn-primary" onClick={() => { handleEliminar(foto.id) }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                        </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default FetchProductosFotos