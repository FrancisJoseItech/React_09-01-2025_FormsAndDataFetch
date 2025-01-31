import {
    createBrowserRouter
  } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import Aboutpage from "../Pages/Aboutpage";
import Footer from "../componenets/Footer";
import Userlayout from "../layouts/Userlayout";
import ProductDetails, { getProductDetails } from "../Pages/ProductDetails";


// exporting the const route for using it elsewhere
export  const route = createBrowserRouter([
    // {
    //   path: "/",
    //   element: <Homepage/>,
    // },
  
    // {
    //   path: "/about",
    //   element: <Aboutpage/>,
    // },
  
    // {
    //   path: "/profile",
    //   element: <h1>Profile</h1>,
    // },

    // {
    //     path: "/footer",
    //     element: <Footer/>,
    //   }


    // c-here first the userlayout will be rendered
    {
        path: '/',
        element:<Userlayout/>,
        // we will be rendering the other components like Homepage,aboutpage contents as child
        // as there will be many such children or child components we will be giving it as array 
        // and inside the array we will pass them as objects
        
        children:[
            {
                path:'',
                element:<Homepage/>
            },

            {
                path:'about',
                element:<Aboutpage/>
            },

            {
                path:'profile',
                element: <h3>Give your Profile</h3>
            },

            {
                // path:'productdetails/1',
                // c- id is a variable here and it is given to make the store the id dynamically
                // when the route is hit path:'productdetails/:id' we want the function to work; and after getting the response we need to show the
                //  directing element; this productdetails/:id is passed from productcard cpmponent through Link to
                path:'productdetails/:id',
                element:<ProductDetails/>,
                // c-getProductDetails function is imported
                // c- Loader is used to call the getproductDetail function
                // c-only after the loader return the response; then only ProductDetails component is rendered
                loader:getProductDetails
                
                
            }  
            
        ]

    },

// here the userlayout will not be affected as it is outside and it is seperate
    {
        
            path:'login',
            element: <h3>Please login</h3>
        
    }
  
]);