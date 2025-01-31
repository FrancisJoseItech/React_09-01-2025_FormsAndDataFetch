import React, { useEffect, useState } from 'react'
import Header from '../componenets/Header'
import Footer from '../componenets/Footer'
import Productcard from '../componenets/Productcard'

// c- axios imported
import axios from 'axios'
import Loading from '../componenets/Loading'


function Homepage() {

// c- to display product
const[products,setProducts]= useState([])

// c- useeffect is used to render the cards during the loading and will appear in the homepage
// c-installed axios npm i axios

  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products').then((res)=> {
      console.log(res);

      // c-for changing the value in the state
      setProducts(res.data)
    }).catch((err)=>{
      console.log(err);
    })
}, [])

  return (
    <>
    {/* c-if products state exist */}

    {/* c-if products.length >0; 0 is considered as false */}
      {
        products.length? // <div className='homepagecontainer'>
        //   {/* header is called from componenets */}
        //     <Header/>
        //     <div className='content'>
    
        // c- my4 is given for margin
            <div className='container my-4'>
    
              {/* c- row is given for making the card visible as rowws */}
              <div className='row g-3'>
    
                {/* c-mapping to call the below div with each object */}
                  {/* c- basically col md-3 is given to achieve 4 columns; each of the below div will act as columns
                  and the fourth column will come down; this will make it responsive */}
                  
                  {
                    products.map((product) =>(
    
                      // c-unique for prop
                      <div key={product.id} className='col-md-3'>
                        {/* -c item key is used to pass product as props */}
                        <Productcard item={product}/>
                      </div>
                    ))
                  }
                    
    
              </div>

            {/* c- if product state does not exist */}
            </div> : <Loading/>
    
        //     </div>
        //     <Footer/>
        // </div>
      }

    </>
  )
}

export default Homepage