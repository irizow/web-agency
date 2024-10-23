
import App from '../App.jsx'
import { ErrorElement } from '../components/ErrorElement/ErrorElement.jsx'




export const routes = [
    {
      path: "/",
      element: <App/>,
      errorElement: <ErrorElement/>
    }
  ]