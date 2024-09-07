import axios from "axios";

const authRegistro = async (request) => {
    let datos = axios.post(`${import.meta.env.VITE_API_URL}registro`, request, {
            headers: { 'content-type': 'application/json' }
        })
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