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
import HookEventoOnChange from './pages/HookEventoOnChange'
import HooksEventosVarios from './pages/HooksEventosVarios'
import HookUseEffect from './pages/HookUseEffect'
import HookCustom from './pages/HookCustom'
import HookuseLoaderData, {loader as paisesLoader} from './pages/HookuseLoaderData'

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
                    <Route path="/hooks/evento-onChange" element={<HookEventoOnChange />} />
                    <Route path="/hooks/eventos-varios" element={<HooksEventosVarios />} />
                    <Route path="/hooks/useEffect" element={<HookUseEffect />} />
                    <Route path="/hooks/custom-hook" element={<HookCustom />} />
                    <Route path="/hooks/useLoaderData" element={<HookuseLoaderData />} loader:paisesLoader/>
                    <Route path="*" element={<Error404 />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Rutas