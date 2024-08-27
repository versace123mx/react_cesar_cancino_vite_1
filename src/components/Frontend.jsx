import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from 'react-router-dom';

function Frontend() {
    return (
        <>
            <Header />
            <main className="container">
                <Outlet />{/*aqui se pinta lo que biene de los componentes del componente Rutas*/}
            </main>
            <Footer />
        </>
    )
}

export default Frontend
