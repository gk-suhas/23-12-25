import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import LandingPage from './LandingPage'
import Donate from './Donate'
import Check from './Check'
import Data from './Data'
const router=createBrowserRouter([
  {path:'/',element:<LandingPage/>},
  {path:'/check',element:<Check/>},
  {path:'/donate',element:<Donate/>},
  {path:'/data',element:<Data/>}
])
function App(){
  return <RouterProvider router={router}/>
}
export default App