import { Link } from "react-router-dom"
import Carousel from 'react-bootstrap/Carousel';//https://react-bootstrap.github.io/components/carousel/
import { imagenes } from './../datos/datos';

function UtilesCarrusel() {
    console.log(imagenes)
    return (
        <>
            <nav aria-label="breadcrumb">
                <ul className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/utiles">Home - Utiles</Link></li>
                    <li className="breadcrumb-item active">Carrusel</li>
                </ul>
            </nav>
            <hr />
            <h3>Carrusel</h3>

            <Carousel>
                {imagenes.map((imagen) => (
                    <Carousel.Item key={imagen.id}>
                        <img className="d-block w-100 h-100" src={imagen.nombre} alt={imagen.titulo} />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}

            </Carousel>
        </>
    )
}

export default UtilesCarrusel
