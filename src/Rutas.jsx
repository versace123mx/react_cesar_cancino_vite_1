import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Frontend from './components/Frontend'
import Home from './pages/Home'
import SobreNosotros from './pages/SobreNosotros'
import Error404 from './pages/Error404'
import Urls from './pages/Urls'
import RutasPath from './pages/RutasPath'
import RutasQueryString from './pages/RutasQueryString'
import Hooks from './pages/Hooks'
import HooksEventoClick from './pages/HooksEventoClick'
import HookUseState from './pages/HookUseState'

function Rutas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Frontend />}>{/*Este es el componente padre*/}
                    <Route index element={<Home />} />
                    <Route path="/sobre-nosotros" element={<SobreNosotros />} />
                    <Route path="/rutas" element={<Urls />} />
                    <Route path="/rutas/path/:id?/:slug?" element={<RutasPath />} />
                    <Route path="/rutas/query-string" element={<RutasQueryString />} />
                    <Route path="/hooks" element={<Hooks />} />
                    <Route path="/hooks/evento-clic" element={<HooksEventoClick />} />
                    <Route path="/hooks/useState" element={<HookUseState />} />
                    <Route path="*" element={<Error404 />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Rutas