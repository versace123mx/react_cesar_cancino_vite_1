import axios from 'axios'

const cabeceros = {
    'content-type':'application/json',
    //'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzksImlhdCI6MTcyNTQzMzE0MCwiZXhwIjoxNzI4MDI1MTQwfQ.dh06EfLh0eFItytiuXqjqWiiebPTXz2RnLDx1_wD41Q'
}

const authRegistro = async (request) => {
    let datos = axios.post(`${import.meta.env.VITE_API_URL}registro`, request, {headers:cabeceros})
        .then((response) => {
            return response.data;
        }).catch((error) => {
            console.log(error);
        });
        return datos;
    
}
const authLogin = async (request) => {
    let datos = axios.post(`${import.meta.env.VITE_API_URL}login`, request, {
            headers: { 'content-type': 'application/json' }
        })
        .then((response) => {
            return response.data;
        }).catch((error) => {
            return {"estado":"error"}
        });
    return datos;

}
export {
    authRegistro,
    authLogin
}