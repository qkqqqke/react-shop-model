import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './routes/root'
import Catalog,
{
  loader as catalogLoader
}
from './routes/catalog'
import ItemPage,{loader as ItemPageLoader} from './routes/itemPage'
import ErrorPage from './error-page'
import About from './routes/about'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        index: true,
        element: <Catalog />,
        loader: catalogLoader
      },
      {
        path: 'catalog',
        element: <Catalog />,
        loader: catalogLoader
      },
      {
        path: '/:itemName',
        element: <ItemPage />,
        loader: ItemPageLoader
      }
      ,
      {
        path: '/about',
        element: <About/>,

      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
