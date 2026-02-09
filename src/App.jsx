import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Layout/AppLayout'
import ErrorPage from './Components/ErrorPage'
import Home from './Pages/Home'
import Services from './Pages/Services'
import About from './Pages/About'
import Blog from './Pages/Blog'
import ContPage from './Pages/ContPage'
import PrivacyPg from './Pages/PrivacyPg'
import TermsPg from './Pages/TermsPg'


const App = () => {

  const router=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/services",
          element:<Services/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/blog",
          element:<Blog/>
        },
       
        {
          path:"/contact",
          element:<ContPage/>
        },
        {
          path:"/privacy-policy",
          element:<PrivacyPg/>
        },
        {
          path:"/terms",
          element:<TermsPg/>
        },
       
       
      ]
    }
  ])
  
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App