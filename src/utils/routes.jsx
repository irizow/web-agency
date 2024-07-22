
import About from '../components/About/About.jsx'
import App from '../App.jsx'
import Cover from '../components/Cover/Cover.jsx'
import { ErrorElement } from '../components/ErrorElement/ErrorElement.jsx'
import Services from '../components/Services/Services.jsx'



export const routes = [
    {
      path: "/",
      element: <Cover/>,
      errorElement: <ErrorElement/>
    },
    {
      path: "/home",
      element: <App/>,
      errorElement: <ErrorElement/>
    },
    {
      path: "/about",
      element: <About/>,
      errorElement: <ErrorElement/>
    },
    {
      path: "/services",
      element: <Services/>,
      errorElement: <ErrorElement/>
    }
  ]