import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//bootstrap css
{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';

// for router
import {
  // createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { route } from './routes/router.jsx';
// import Homepage from './Pages/Homepage.jsx';
// import Aboutpage from './Pages/Aboutpage.jsx';

// This the functionality provided from react router dom
// each rout will be stored as object
//element is where the rendering or display of route happen
//path is for identification of the running path

// const route = createBrowserRouter([
//   {
//     path: "/",
//     element: <Homepage/>,
//   },

//   {
//     path: "/about",
//     element: <Aboutpage/>,
//   },

//   {
//     path: "/profile",
//     element: <h1>Profile</h1>,
//   }
// ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* this home from the package for routing */}
    {/* this for providing routes in the app */}
    {/* route here is the const route above */}
    {/* <RouterProvider router={route} /> */}

{/* c- this is imported from the router jsx */}
    {/* <RouterProvider router={route} /> */}
    <App/>
  </StrictMode>,
)

// -c Basically first triggering will happen with Router provider Router;
// So here basically first router provider router will call the const route and trigger based on the given path
//  the creteBrowserRouter function on identification of the path it will render the element