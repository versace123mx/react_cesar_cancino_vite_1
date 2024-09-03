import React from 'react'
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css"
import './index.css'
import './../public/css/blog.css'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

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
import HookuseNavigate from './pages/HookuseNavigate';
import HookuseLocation from './pages/HookuseLocation';
import HookuseRef from './pages/HookuseRef';
import Formularios from './pages/Formularios';
import FormularioSimple from './pages/FormularioSimple';
import FormularioUseActionData, {action as procesarFormularioActionDate} from './pages/FormularioUseActionData';
import FormulariosFormik from './pages/FormulariosFormik';
import FormualriosReactHookForm from './pages/FormualriosReactHookForm';
import FormulariosReactFinalForm from './pages/FormulariosReactFinalForm';
import Utiles from './pages/Utiles';
import UtilesDaysjs from './pages/UtilesDaysjs';
import UtilesMomentjs from './pages/UtilesMomentjs';
import UtilesSpinerjs from './pages/UtilesSpinerjs';
import UtilesSwipeablejs from './pages/UtilesSwipeablejs';
import UtilesWebCamjs from './pages/UtilesWebCamjs';
import UtilesGraficosjs from './pages/UtilesGraficosjs';
import UtilesMapasjs from './pages/UtilesMapasjs';
import UtilesMapasjs2 from './pages/UtilesMapasjs2';
import UtilesModalBootstrap from './pages/UtilesModalBootstrap';
import UtilesCarrusel from './pages/UtilesCarrusel';
import Material from './pages/Material';
import MaterialBotones from './pages/MaterialBotones';
import MaterialList from './pages/MaterialList';
import MaterialMenuDrawer from './pages/MaterialMenuDrawer';
import MaterialTable from './pages/MaterialTable';
import MaterialAcordeon from './pages/MaterialAcordeon';
import MaterialStepper from './pages/MaterialStepper';
import MaterialTabs from './pages/MaterialTabs';
import MaterialDialog from './pages/MaterialDialog';
import MaterialCard from './pages/MaterialCard';
import MaterialAutocomplit from './pages/MaterialAutocomplit';
import MaterialDatePicker from './pages/MaterialDatePicker';
import AlmacenamientoLocal from './pages/AlmacenamientoLocal';
import AlmacenamientoLocalLocalStorage from './pages/AlmacenamientoLocalLocalStorage';
import AlmacenamientoLocalSessionStorage from './pages/AlmacenamientoLocalSessionStorage';
import ContextEjemplo from './pages/ContextEjemplo';
import REduxEjemplo from './pages/REduxEjemplo';


const router = createBrowserRouter
(
  [
    {path:'/', element: <Frontend />,
      children:
      [
        { index: true, element: <Home /> },
        { path:"/sobre-nosotros", element:<SobreNosotros />},
        { path:"/rutas", element:<Urls />},
        { path:"/rutas/path/:id?/:slug?", element:<RutasPath />},
        { path:"/rutas/query-string", element:<RutasQueryString />},
        { path:"/hooks", element:<Hooks />},
        { path:"/hooks/evento-clic", element:<HooksEventoClick />},
        { path:"/hooks/useState", element:<HookUseState />},
        { path:"/hooks/evento-onChange", element:<HookEventoOnChange />},
        { path:"/hooks/eventos-varios", element:<HooksEventosVarios />},
        { path:"/hooks/useEffect", element:<HookUseEffect />},
        { path:"/hooks/custom-hook", element:<HookCustom />},
        { path:"/hooks/useLoaderData", loader:paisesLoader, element:<HookuseLoaderData />},
        { path:"/hooks/useNavigate", element:<HookuseNavigate />},
        { path:"/hooks/useLocation", element:<HookuseLocation />},
        { path:"/hooks/useRef", element:<HookuseRef />},
        { path:"/formularios", element:<Formularios />},
        { path:"/formularios/formulario-simple", element:<FormularioSimple />},
        { path:"/formularios/useActionData", action:procesarFormularioActionDate, element:<FormularioUseActionData />},
        { path:"/formularios/useFormik", element:<FormulariosFormik />},
        { path:"/formularios/reactHookForm", element:<FormualriosReactHookForm />},
        { path:"/formularios/ReactFinalForm", element:<FormulariosReactFinalForm />},
        { path:"/utiles", element:<Utiles />},
        { path:"/utiles/daysjs", element:<UtilesDaysjs />},
        { path:"/utiles/momentjs", element:<UtilesMomentjs />},
        { path:"/utiles/spinner", element:<UtilesSpinerjs />},
        { path:"/utiles/swipeable", element:<UtilesSwipeablejs />},
        { path:"/utiles/reactwebcam", element:<UtilesWebCamjs />},
        { path:"/utiles/graficaspiechart", element:<UtilesGraficosjs />},
        { path:"/utiles/mapas", element:<UtilesMapasjs />},
        { path:"/utiles/mapas2", element:<UtilesMapasjs2 />},
        { path:"/utiles/modalBootstrap", element:<UtilesModalBootstrap />},
        { path:"/utiles/carrusel", element:<UtilesCarrusel />},
        { path:"/material", element:<Material />},
        { path:"/material/materialbotones", element:<MaterialBotones />},
        { path:"/material/materiallist", element:<MaterialList />},
        { path:"/material/materialmenudrawer", element:<MaterialMenuDrawer />},
        { path:"/material/materialtable", element:<MaterialTable />},
        { path:"/material/materialacordeon", element:<MaterialAcordeon />},
        { path:"/material/materialstepper", element:<MaterialStepper />},
        { path:"/material/materialtaps", element:<MaterialTabs />},
        { path:"/material/materialdialog", element:<MaterialDialog />},
        { path:"/material/materialcard", element:<MaterialCard />},
        { path:"/material/materialautocomplete", element:<MaterialAutocomplit />},
        { path:"/material/materialdatepicker", element:<MaterialDatePicker />},
        { path:"/almacenamientoLocal", element:<AlmacenamientoLocal />},
        { path:"/almacenamientoLocal/LocalStorage", element:<AlmacenamientoLocalLocalStorage />},
        { path:"/almacenamientoLocal/sessionStorage", element:<AlmacenamientoLocalSessionStorage />},
        { path:"/conetext", element:<ContextEjemplo />},
        { path:"/redux", element:<REduxEjemplo />},
        { path:"*", element:<Error404 />},
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
