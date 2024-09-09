import axios from "axios"

const cabeceros = {
    'content-type':'application/json',
    //'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzksImlhdCI6MTcyNTQzMzE0MCwiZXhwIjoxNzI4MDI1MTQwfQ.dh06EfLh0eFItytiuXqjqWiiebPTXz2RnLDx1_wD41Q'
}

const paypalCrearOrden = async (datos) =>{

    const respuesta = await axios.post(`${import.meta.env.VITE_API_URL}paypal`,datos,{headers:cabeceros})
                                .then((response) => {
                                    return response
                                })
                                .catch((err) => {
                                    console.log("Fallo la comunicacion")
                                })
                            return respuesta
}
const paypalRespuesta =  async (datos) => {


    const respuesta = await axios.post(`${import.meta.env.VITE_API_URL}paypal-capture`,datos,{headers:cabeceros}) 
                                .then((response) => {
                                    return response.status
                                })
                                .catch((err) => {
                                    console.log("Fallo la comunicacion")
                                })
                            return respuesta
}
const paypalCancelado = async (datos)  => {


    const respuesta = await axios.post(`${import.meta.env.VITE_API_URL}paypal-cancelar`,datos,{headers:cabeceros})
                                    .then((response) => {
                                        return response.status
                                    })
                                    .catch((err) => {
                                        console.log("Fallo la comunicacion")
                                    })
                                return respuesta
}

export {
    paypalCrearOrden,
    paypalRespuesta,
    paypalCancelado
}