
import App from '../App.jsx'
import Cover from '../components/Cover/Cover.jsx'
import { ErrorElement } from '../components/ErrorElement/ErrorElement.jsx'
import Services from '../components/Services/Services.jsx'



export const routes = [
    {
      path: "/",
      element: <App/>,
      errorElement: <ErrorElement/>
    }
  ]