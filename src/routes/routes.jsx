import { createBrowserRouter } from 'react-router-dom'
import Layout from '../Layout'
import Home from '../pages/Home/Home.jsx'
import Products from '../pages/Product/Products'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/products', element: <Products /> },
    ],
  },
])
