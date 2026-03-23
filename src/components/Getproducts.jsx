import phanton  from "../car-images/phanton.mp4";
import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import { useNavigate } from 'react-router-dom';

const  Getproducts =() => {

  // initialize hook to help you manage the state off your application
  const [products, setProducts] = useState([]); 
  // we use [] because we will be expecting be expecting an arrey or a list of items fetched from the database
  const [loading, setLoadding] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate()

  // Below we spesify the image url
  const img_url = "https://jermaine234.alwaysdata.net/static/images/"

  // create a function that will hepl you fetch the products from  the api
  const fetchProducts = async() =>{
    try{
      // update the loading hook
      setLoadding(true)
      // interact with the end point for fetching the products
      const response = await axios.get("https://jermaine234.alwaysdata.net/api/get_products")

      // update the products with the responce given from the api
      setProducts(response.data)


      // 7 set the loading hook back to default
      setLoadding(false)
    }
    catch(error){
      // if there is an error 
      // set the loading hook back to false
      setLoadding(false)

        // update the error hook witha message
        setError(error.message)
      // 8 update  the content off the catch block
    }
  }

  // we shalluse the useEffect. this hook eNABLES  USE TO AUTOMATICALY RE-RENDER A  NEW FEATURE INCASE OF ANY CCHAANGES
  useEffect(() => {
    fetchProducts()
  }, [])

  // console.log(products)
  return (

    
    <div className='row '>
      <div style={{ backgroundColor: "black", padding: "20px", marginBottom: "20px", borderRadius: "10px" }}>
  <h2 style={{ color: "lime", textAlign: "center", textShadow: "0 0 10px lime" }}>
    Car Video Showcase
  </h2>
  <video
    width="100%"
    controls
    autoPlay
    muted
    loop
    style={{ border: "2px solid lime", borderRadius: "10px", display: "block", margin: "0 auto" }}
  >
    <source src={phanton} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>
      <h2 className="text-info">available Automobiles</h2>
        {loading && <Loader/> }
        <h4 className="text-danger">{error}</h4>

        {/* mapp the products fetched from the api to the user intreface */}

        {products.map((product) => (
                  <div className="col-md-3 justify-content-center mb-3">
          <div className="card shadow">
            <img src={img_url + product.product_photo} alt="productname" className='product_img mt-3'/>
            <div className="card body">
              <h5 className="text-secondary">{product.product_name}</h5>

              <p className="text-dark">{product.product_description.slice(0, 100)}...</p>
              <h5 className="text-info">$  {product.product_cost} </h5>

              <button className='btn btn-outline-info' onClick={() => navigate("/makepayment",{state: {product}})}>Order now</button>
            </div>
          </div>
        </div>
        ))}

    </div>
    
  )
}

export default Getproducts