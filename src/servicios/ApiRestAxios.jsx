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

export {
    getCategorias
}