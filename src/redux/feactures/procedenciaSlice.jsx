import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    pais: "Mexico",
    ciudad: "CDMX"
}

//aqui esta el slide que indica la documentacion, se inicializa y se le pasa un nombre
export const procedenciaSlice = createSlice({
    name:"procedencia",//el reducer se debe de llamar en este caso procedenciaReducer para el store
    initialState,
    //aqui tenemos los reducer que indica la documentacion, que son las funciones o acciones
    reducers:{
        cambiarColombia:(state) => {
            state.pais = "Colombia",
            state.ciudad = "Medellin"
        },
        cambiarCuba:(state) => {
            state.pais = "Cuba",
            state.ciudad = "Miramar"
        },
        cambiarAlemania:(state) => {
            state.pais = "Alemania",
            state.ciudad = "Berlin"
        },
        cambiarChile:(state) => {
            state.pais = "Chile",
            state.ciudad = "Viña del Mar"
        }
    }
})

//ahora se exportan para convetir en acciones y reducer
export const {
    cambiarColombia,
    cambiarCuba,
    cambiarAlemania,
    cambiarChile
} = procedenciaSlice.actions

export default procedenciaSlice.reducer