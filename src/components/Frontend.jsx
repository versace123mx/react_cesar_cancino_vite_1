import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from 'react-router-dom';
import { EjemploProvider } from "../context/EjemploProvider";

function Frontend() {
    return (
        <>
            <EjemploProvider>
                <Header />
                <main className="container">
                    <Outlet />{/*aqui se pinta lo que biene de los componentes del componente Rutas, si se quita esta linea ya no se muestra nada en medio dentre el header y el footer*/}
                </main>
                <Footer />
            </EjemploProvider>
        </>
    )
}

export default Frontend
