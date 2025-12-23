import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import LandingPage from './LandingPage'
import Donate from './Donate'
import Check from './Check'

const router=createBrowserRouter([
  {path:'/',element:<LandingPage/>},
  {path:'/check/:id',element:<Check/>},
  {path:'/donate',element:<Donate/>}
])
function App(){
  return <RouterProvider router={router}/>
}
export default App