import Swal from 'sweetalert2'

const formatearFecha = (fecha) => {
    const fechaNueva = new Date(fecha)
    const opcciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }
    return fechaNueva.toLocaleDateString('es-ES',opcciones)
}

const formatearNumero = (numero) => {
    return new Intl.NumberFormat().format(numero)
}

const acortarTexto = (valor,desde, hasta) => {
    return valor.substring(desde, hasta)
}

const showAlert = (titulo,mensaje,icono) => {
    Swal.fire({
        title: titulo,
        text: mensaje,
        icon: icono
    })
}
export {
    formatearFecha,
    formatearNumero,
    acortarTexto,
    showAlert
}