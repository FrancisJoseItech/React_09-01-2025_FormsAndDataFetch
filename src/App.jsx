import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Homepage from './Pages/Homepage'
import Aboutpage from './Pages/Aboutpage'
import { route } from './routes/router'

//importing router provider
import {
  
  RouterProvider
} from "react-router-dom";


function App() {
 

  return (
    <>
    {/* route here is being imported from router.jsx which is imported here */}
       <RouterProvider router={route} />
       
      
    </>
  )
}

export default App

// c- routerprovide router will go to the const rout and identify the path given for routing