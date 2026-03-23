import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'
import Product from './pages/Product.jsx'
import Layout from './layout/Layout.jsx'
import Login from './pages/Login.jsx'
import Men from './pages/Men.jsx'
import Woman from './pages/Woman.jsx'

const router=createBrowserRouter([{
  path:"/",
  element:<Layout/>,
  children:[
    {
      path:"/",
      element:<Home/>
    }, {
      path:"/contact",
      element:<Contact/>
    }, {
      path:"/about",
      element:<About/>
    },
    {
      path:"/product",
      element:<Product/>,
      children:[
     {
      path:"woman",
      element:<Woman/>
    },
     {
      path:"men",
      element:<Men/>
    }
      ]
    }, {
      path:"/login",
      element:<Login/>
    },
  ]
}])
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/> 
  </StrictMode>,
)
