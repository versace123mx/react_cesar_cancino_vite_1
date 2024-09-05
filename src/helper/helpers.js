import Swal from 'sweetalert2'

const formatearFecha = (fecha) => {
    const fechaNueva = new Date(fecha)
    const opcciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }
    return fechaNueva.toLocaleDateString('es-ES', opcciones)
}

const formatearNumero = (numero) => {
    return new Intl.NumberFormat().format(numero)
}

const acortarTexto = (valor, desde, hasta) => {
    return valor.substring(desde, hasta)
}

const showAlert = (titulo, mensaje, icono) => {
    Swal.fire({
        title: titulo,
        html: mensaje,
        icon: icono
    })
}

const showAlertConfirm = (titulo,mensaje,icono) => {
    return Swal.fire({
        title: titulo,
        text: mensaje,
        icon: icono,
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si!"
    });
}

export {
    formatearFecha,
    formatearNumero,
    acortarTexto,
    showAlert,
    showAlertConfirm
}