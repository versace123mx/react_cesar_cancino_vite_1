let cabeceros=
{
    'content-type':'application/json',
    'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzksImlhdCI6MTcyNTQzMzE0MCwiZXhwIjoxNzI4MDI1MTQwfQ.dh06EfLh0eFItytiuXqjqWiiebPTXz2RnLDx1_wD41Q'
}
let cabeceros_upload=
{
    //'content-type':'multipart/form-data',
    'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzksImlhdCI6MTcyNTQzMzE0MCwiZXhwIjoxNzI4MDI1MTQwfQ.dh06EfLh0eFItytiuXqjqWiiebPTXz2RnLDx1_wD41Q'
}
export async function getCategorias()
{
    let respuesta = await fetch(`${import.meta.env.VITE_API_URL}categorias`, {headers: cabeceros});
    const resultado = await respuesta.json();
    return resultado;
}
export async function addCategorias(datos) {
    
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL}categorias`, {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: cabeceros
        }) 
        return await respuesta.json()
    
}
export async function editCategorias(datos, id) {

    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}categorias/${id}`, {
        method: 'PUT',
        body: JSON.stringify(datos),
        headers: cabeceros
    })
    await respuesta.json()

}
export async function deleteCategorias(id) {

    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}categorias/${id}`, {
        method: 'DELETE', 
        headers: cabeceros
    })
    await respuesta.json()

}
export async function getProductos(page) {
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}productos?page=${page}`,
        {
            headers: cabeceros
        })
    const resultado = await respuesta.json();
    return resultado;
}
export async function addProductos(datos) {

    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}productos`, {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: cabeceros
    })
    await respuesta.json()

}
export async function editProductos(datos, id) {

    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}productos/${id}`, {
        method: 'PUT',
        body: JSON.stringify(datos),
        headers: cabeceros
    })
    await respuesta.json()

}
export async function deleteProductos(id) {

    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}productos/${id}`, {
        method: 'DELETE',
        headers: cabeceros
    })
    await respuesta.json()

}
export async function getProductosPorId(id) {
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}productos/${id}`,
        {
            headers: cabeceros
        })
    const resultado = await respuesta.json();
    return resultado;
}
export async function getFotosPorProducto(id) {
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}productos-fotos/${id}`,
        {
            headers: cabeceros
        })
    const resultado = await respuesta.json();
    return resultado;
}
export async function addFotosPorProducto( productos_id) {
    let myFile = document.querySelector("input[type=file]").files[0];

    let formData = new FormData();
    formData.append('imagen', myFile);
    formData.append('productos_id', productos_id);
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}productos-fotos`, {
        method: 'POST',
        body: formData,
        headers: cabeceros_upload
    }) 
    await respuesta.json()
}
export async function deleteFotos(id) {

    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}productos-fotos/${id}`, {
        method: 'DELETE',
        headers: cabeceros
    })
    await respuesta.json()

}