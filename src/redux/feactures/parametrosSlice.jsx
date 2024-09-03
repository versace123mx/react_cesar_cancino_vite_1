import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    nombre:'',
    perfil_id:3,
    perfil:''
}

//aqui esta el slide que indica la documentacion, se inicializa y se le pasa un nombre
export const parametrosSlice = createSlice({
    name:"parametros",//el reducer se debe de llamar en este caso calculadoraReducer para el store
    initialState,
    //aqui tenemos los reducer que indica la documentacion, que son las funciones o acciones
    reducers:{
        iniciarSesion:(state,datos) => {
            state.nombre = datos.payload.nombre
            state.perfil_id = datos.payload.perfil_id
            state.perfil = datos.payload.perfil
        }
    }
})

//ahora se exportan para convetir en acciones y reducer
export const {
    iniciarSesion
} = parametrosSlice.actions

export default parametrosSlice.reducer