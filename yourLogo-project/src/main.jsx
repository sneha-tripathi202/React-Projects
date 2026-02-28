import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Router, RouterProvider, UNSAFE_getTurboStreamSingleFetchDataStrategy } from 'react-router-dom'
import Layout from './layout/Layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/aboutus/AboutUs.jsx'
import Contact from './components/Contact/Contact.jsx'
import { ListGroupItem } from 'react-bootstrap'
import GitHub from './components/github/GitHub.jsx'
 
const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'',
        element:<Home/>
      },
      {
        path:'about',
        element:<About/>
      },{
        path:'contact',
        element:<Contact/>
      },{
        path:'github',
        element:<GitHub/>
      }
    ]
 }])
createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router}/>  </StrictMode>,
)
