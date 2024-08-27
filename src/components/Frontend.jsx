import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from 'react-router-dom';

function Frontend() {
    return (
        <>
            <Header />
            <main className="container">
                <p>Hola</p>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Frontend
