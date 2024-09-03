import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    numero1:10,
    numero2:10,
    resultado:0,
    op:'no hay operacion'
}

//aqui esta el slide que indica la documentacion, se inicializa y se le pasa un nombre
export const calculadoraSlice = createSlice({
    name:"calculadora",//el reducer se debe de llamar en este caso calculadoraReducer para el store
    initialState,
    //aqui tenemos los reducer que indica la documentacion, que son las funciones o acciones
    reducers:{
        sumar:(state) => {
            state.resultado = state.numero1 + state.numero2
            state.op = 'Suma'
        },
        restar:(state) => {
            state.resultado = state.numero1 - state.numero2
            state.op = 'Resta'
        },
        multiplicar:(state) => {
            state.resultado = state.numero1 * state.numero2
            state.op = 'Multiplicacion'
        },
        dividir:(state) => {
            state.resultado = state.numero1 / state.numero2
            state.op = 'Divicion'
        },
        resetear:(state) =>{
            state.resultado = 0
            state.op = 'no hay operacion'
        }
    }
})

//ahora se exportan para convetir en acciones y reducer
export const {
    sumar,
    restar,
    multiplicar,
    dividir,
    resetear
} = calculadoraSlice.actions

export default calculadoraSlice.reducer