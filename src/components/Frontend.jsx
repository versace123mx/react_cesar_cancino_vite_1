import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from 'react-router-dom';
import { EjemploProvider } from "../context/EjemploProvider";
import { AuthProvider } from "../context/AuthProvider";

function Frontend() {
    return (
        <>
            {/*Comentamos el Ejemplo Provider ya que recordar que solo podemos tener un context */}
            {/*<EjemploProvider>*/}
            <AuthProvider>
                <Header />
                <main className="container">
                    <Outlet />{/*aqui se pinta lo que biene de los componentes del componente Rutas, si se quita esta linea ya no se muestra nada en medio dentre el header y el footer*/}
                </main>
                <Footer />
                </AuthProvider>
            {/*</EjemploProvider>*/}
        </>
    )
}

export default Frontend
