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
        { path:"/hooks/useLoaderData", element:<HookuseLoaderData />},
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
