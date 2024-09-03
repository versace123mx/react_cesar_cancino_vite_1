import { useSelector, useDispatch } from 'react-redux'
import { cambiarColombia, cambiarCuba, cambiarAlemania, cambiarChile } from '../redux/feactures/procedenciaSlice'
import { sumar,restar,multiplicar,dividir,resetear } from '../redux/feactures/calculadoraSlice'
function ReduxEjemplo() {
    const procedencia = useSelector((state) => state.procedencia)
    const operacion = useSelector((state) => state.calculadora)
    const dispatch = useDispatch()

    return (
        <>
            <p>Ejemplo Redux</p>
            <p>El pais es: {procedencia.pais}</p>
            <p>La ciudad es: {procedencia.ciudad}</p>
            <div className='my-3'>
                {/*
                    se llama a la funcion de esta forma {() => dispatch(cambiarColombia())}
                    ya que si se se pasa {dispatch(cambiarColombia())} se llama al ejecutar la aplicacion
                */}
                <button onClick={() => dispatch(cambiarColombia())} className='btn btn-info mx-3'>Colombia</button>
                <button onClick={() => dispatch(cambiarCuba())} className='btn btn-info mx-3'>Cuba</button>
                <button onClick={() => dispatch(cambiarAlemania())} className='btn btn-info mx-3'>Alemania</button>
                <button onClick={() => dispatch(cambiarChile())} className='btn btn-info mx-3'>Chile</button>
            </div>
            <div>
                <h1>Calculadora</h1>
                <p>Operacion: {operacion.op}</p>
                <p>Primer valor: {operacion.numero1}</p>
                <p>Segundo valor: {operacion.numero2}</p>
                <p>Resultado:{operacion.resultado}</p>
                <button onClick={() => dispatch(sumar())} className='btn btn-info mx-3'>Sumar</button>
                <button onClick={() => dispatch(restar())} className='btn btn-info mx-3'>Restar</button>
                <button onClick={() => dispatch(multiplicar())} className='btn btn-info mx-3'>Multiplicar</button>
                <button onClick={() => dispatch(dividir())} className='btn btn-info mx-3'>Dividir</button>
                <button onClick={() => dispatch(resetear())} className='btn btn-info mx-3'>Limpiar</button>
            </div>
        </>
    )
}

export default ReduxEjemplo
