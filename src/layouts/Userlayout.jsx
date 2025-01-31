import React from 'react'
import Header from '../componenets/Header'
import Footer from '../componenets/Footer'

// outlet is bbeing imported from react router dom for displaying specific componets to the layout
import { Outlet } from "react-router-dom";

function Userlayout() {
  return (
    <div className='homepagecontainer'>
    {/* header is called from componenets */}
      <Header/>
        <div className='content'>
            {/* c-this is where we want the components to be rendered in the layout */}
            {/* Homepage,AboutPage  */}
            <Outlet/>

        </div>
        <Footer/>
    </div>
  )
}

export default Userlayout