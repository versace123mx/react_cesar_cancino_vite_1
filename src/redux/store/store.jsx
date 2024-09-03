import { configureStore } from '@reduxjs/toolkit'
import procedenciaReducer from './../feactures/procedenciaSlice'
import calculadoraReducer from './../feactures/calculadoraSlice'

export const store = configureStore({
    reducer:{
        procedencia: procedenciaReducer,
        calculadora:calculadoraReducer
    }
})