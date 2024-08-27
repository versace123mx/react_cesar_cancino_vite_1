import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Frontend from './components/Frontend'
import Home from './pages/Home'
import SobreNosotros from './pages/SobreNosotros'
import Error404 from './pages/Error404'
import Urls from './pages/Urls'
import RutasPath from './pages/RutasPath'
import RutasQueryString from './pages/RutasQueryString'
import Header from './components/Header'

function Rutas() {
    return (
        <BrowserRouter>
            <Frontend />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre-nosotros" element={<SobreNosotros />} />
                <Route path="/rutas" element={<Urls />} />
                <Route path="/rutas/path/:id?/:slug?" element={<RutasPath />} />
                <Route path="/rutas/query-string" element={<RutasQueryString />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rutas