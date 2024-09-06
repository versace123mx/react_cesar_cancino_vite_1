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
    deliteProductoPorId
}