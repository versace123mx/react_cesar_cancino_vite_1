import axios from 'axios'

const cabeceros = {
    'content-type':'application/json',
    'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzksImlhdCI6MTcyNTQzMzE0MCwiZXhwIjoxNzI4MDI1MTQwfQ.dh06EfLh0eFItytiuXqjqWiiebPTXz2RnLDx1_wD41Q'
}
const cabeceros_upload = {
    'content-type':'multipart/form-data',
    'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzksImlhdCI6MTcyNTQzMzE0MCwiZXhwIjoxNzI4MDI1MTQwfQ.dh06EfLh0eFItytiuXqjqWiiebPTXz2RnLDx1_wD41Q'
}
const getCategorias = async () =>{
    const datos = axios.get(`${import.meta.env.VITE_API_URL}categorias`,{headers:cabeceros})
                .then((response) => {
                    if(response.status == 200){
                        return response.data
                    }else{
                        console.log("Fallo la comunicacion en el then")
                    }
                })
                .catch((err) => {
                    console.log("Fallo la comunicacion")
                })
        return datos
}

const addCategorias = async (request) =>{
    const datos = axios.post(`${import.meta.env.VITE_API_URL}categorias`,request,{headers:cabeceros})
                .then((response) => {
                    return response.status
                })
                .catch((err) => {
                    console.log("Fallo la comunicacion")
                })
        return datos
}

const getCategoriasPorId = async (id) =>{
    const datos = axios.get(`${import.meta.env.VITE_API_URL}categorias/${id}`,{headers:cabeceros})
                .then((response) => {
                    if(response.status == 200){
                        return response.data
                    }else{
                        console.log("Fallo la comunicacion en el then")
                    }
                })
                .catch((err) => {
                    console.log("Fallo la comunicacion")
                })
        return datos
}

const editCategoriasPorId = async (request,id) =>{
    const datos = axios.put(`${import.meta.env.VITE_API_URL}categorias/${id}`,request,{headers:cabeceros})
                .then((response) => {
                    return response.status
                })
                .catch((err) => {
                    console.log("Fallo la comunicacion")
                })
        return datos
}
const deliteCategoriasPorId = async (id) =>{
    const datos = axios.delete(`${import.meta.env.VITE_API_URL}categorias/${id}`,{headers:cabeceros})
                .then((response) => {
                    return response.status
                })
                .catch((err) => {
                    console.log("Fallo la comunicacion")
                })
        return datos
}
const getProductos = async (page) =>{
    const datos = axios.get(`${import.meta.env.VITE_API_URL}productos?page=${page}`,{headers:cabeceros})
                .then((response) => {
                    if(response.status == 200){
                        return response.data
                    }else{
                        console.log("Fallo la comunicacion en el then")
                    }
                })
                .catch((err) => {
                    console.log("Fallo la comunicacion")
                })
        return datos
}

const getCategoriasPorSlug = async (slug) =>{
    const datos = axios.get(`${import.meta.env.VITE_API_URL}categorias-slug/${slug}`,{headers:cabeceros})
                .then((response) => {
                    if(response.status == 200){
                        return response.data
                    }else{
                        console.log("Fallo la comunicacion en el then")
                    }
                })
                .catch((err) => {
                    console.log("Fallo la comunicacion")
                })
        return datos
}

const getProductosPorCategorias = async (slug,page) =>{
    const datos = axios.get(`${import.meta.env.VITE_API_URL}productos-buscar/${slug}?page=${page}`,{headers:cabeceros})
                .then((response) => {
                    if(response.status == 200){
                        return response.data
                    }else{
                        console.log("Fallo la comunicacion en el then")
                    }
                })
                .catch((err) => {
                    console.log("Fallo la comunicacion")
                })
        return datos
}

const addProductos = async (request) =>{
    const datos = axios.post(`${import.meta.env.VITE_API_URL}productos`,request,{headers:cabeceros})
                .then((response) => {
                    return response.status
                })
                .catch((err) => {
                    console.log("Fallo la comunicacion")
                })
        return datos
}

const getProductoPorId = async (id) =>{
    const datos = axios.get(`${import.meta.env.VITE_API_URL}productos/${id}`,{headers:cabeceros})
                .then((response) => {
                    if(response.status == 200){
                        return response.data
                    }else{
                        console.log("Fallo la comunicacion en el then")
                    }
                })
                .catch((err) => {
                    console.log("Fallo la comunicacion")
                })
        return datos
}

const editProductosXId = async (request,id) =>{
    const datos = axios.put(`${import.meta.env.VITE_API_URL}productos/${id}`,request,{headers:cabeceros})
                .then((response) => {
                    return response.status
                })
                .catch((err) => {
                    console.log("Fallo la comunicacion")
                })
        return datos
}

const deliteProductoPorId = async (id) =>{
    const datos = axios.delete(`${import.meta.env.VITE_API_URL}productos/${id}`,{headers:cabeceros})
                .then((response) => {
                    return response.status
                })
                .catch((err) => {
                    console.log("Fallo la comunicacion")
                })
        return datos
}

const getProductosFotos = async (id) =>{
    const datos = axios.get(`${import.meta.env.VITE_API_URL}productos-fotos/${id}`,{headers:cabeceros})
                .then((response) => {
                    if(response.status == 200){
                        return response.data
                    }else{
                        console.log("Fallo la comunicacion en el then")
                    }
                })
                .catch((err) => {
                    console.log("Fallo la comunicacion")
                })
        return datos
}

const addFotosPorProducto = async (imagen, productos_id) => {
    let formData = new FormData();
    formData.append('imagen', imagen);
    formData.append('productos_id', productos_id);
    let datos = axios.post(`${import.meta.env.VITE_API_URL}productos-fotos`, formData, {headers: cabeceros_upload})
        .then((response) => {
            return response.status;
        }).catch((error) => {
            console.log(error);
        });
    return datos;
}

const deleteFotos = (id) => {
    let datos = axios.delete(`${import.meta.env.VITE_API_URL}productos-fotos/${id}`, {
            headers: cabeceros
        })
        .then((response) => {
            return response.status;
        }).catch((error) => {
            console.log(error);
        });
    return datos;
}
export {
    getCategorias,
    addCategorias,
    getCategoriasPorId,
    editCategoriasPorId,
    deliteCategoriasPorId,
    getProductos,
    getCategoriasPorSlug,
    getProductosPorCategorias,
    addProductos,
    getProductoPorId,
    editProductosXId,
    deliteProductoPorId,
    getProductosFotos,
    addFotosPorProducto,
    deleteFotos
}