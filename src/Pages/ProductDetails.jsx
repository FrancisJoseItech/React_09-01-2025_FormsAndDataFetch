import axios from 'axios';
import React, { useEffect, useState } from 'react'

// c- useaparams is imported from react-router-dom
// c- useLoaderData is imported from react-router-dom
import { useLoaderData, useParams } from 'react-router-dom'

// c-using async await for doing the api call
// c- exporting this function to make it available in the router
//c-res.data and similar is product.data as the object comes in that key
// c-params in the browser is passed to the function; params is a variable here
export  async function getProductDetails(params){
    try{
        //c- api hit will happen and the value and the object get stored in product
        // c-params value is accessed here ${params.id}
        const product= await axios.get(`https://fakestoreapi.com/products/${params.id}`)

            console.log(product.data,"product returned");

        // c- return product to make the product available outside the function
        return product.data
    }catch(error){
        console.log(err)

    }
// async function getProductDetails(){
//     const product= await axios.get(`https://fakestoreapi.com/products/1`)
// }

}   

function ProductDetails() {

    // // c-here inside the useState object is defined as we will be assessing an object here
    // const[product,setProduct]= useState({})

    // // c- useParams is used to get the product id in the browser; this can be seen the browser when each cards button is clicked
    // // const productId= useParams()
    // // console.log(productId,"productId");

    // // c- this will be same like taking the id from router; accessing directly like the props
    // const {id}=useParams()
    // console.log(id,"productId");

    // // c- Useeffect is used to render a new update or page by hitting api based on the id
    //     useEffect(()=>{
    //         // c-back slash is used; since axious is already instaled it is imported here
    //         //c- ${id} is given to make it dynamic; it is the same id obtained through useParams
    //         axios.get(`https://fakestoreapi.com/products/${id}`).then((res)=>{
    //             //c-response in the object comes in the data key
    //             console.log(res.data);
    //             //c- here the state is updated with the response data using setproduct
    //             setProduct(res.data)
                

    //         }).catch((err)=>{
    //             console.log(err);
    //         })
    //     })


// c-useLoaderdata is used to access the product returned from getProductDetails and to make it accessible in the component ProductDetails
const product= useLoaderData()
console.log(product,"product data loader");
  return (
    <div>
        {/* c-if the state product exist */}
        <img src={product?.image} alt="" className='productImage'/>
        <p>{product?.description}</p>

    </div>
  )
}

export default ProductDetails

// c- from the router the function getProductdetails get triggered and this function will return a product;
// this return product should be accessed inside the componenet div for displaying