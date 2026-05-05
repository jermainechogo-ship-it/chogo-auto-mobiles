import phanton from "../car-images/phanton.mp4"; 
import rtgt from "../car-images/rtgt.mp4";
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useNavigate } from 'react-router-dom';

const Getproducts = ({ search }) => {

  // State management
  const [products, setProducts] = useState([]); 
  const [loading, setLoadding] = useState(false);
  const [error, setError] = useState("");

  // ⭐ Category filter state
  const [category, setCategory] = useState("all");

  // Video showcase
  const videos = [phanton, rtgt, phanton];
  const [videoIndex, setVideoIndex] = useState(0);

  const nextVideo = () => {
    setVideoIndex((videoIndex + 1) % videos.length);
  };

  const prevVideo = () => {
    setVideoIndex((videoIndex - 1 + videos.length) % videos.length);
  };

  const navigate = useNavigate()

  const img_url = "https://jermaine234.alwaysdata.net/static/images/"

  // Fetch products
  const fetchProducts = async () => {
    try {
      setLoadding(true)
      const response = await axios.get("https://jermaine234.alwaysdata.net/api/get_products")
      setProducts(response.data)
      setLoadding(false)
    } catch (error) {
      setLoadding(false)
      setError(error.message)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  // ⭐ Filter logic
  const filteredProducts = category === "all"
    ? products
    : products.filter(product => product.category === category);

  return (
    <>
      <Navbar />

      <div className='row'>

        {/* Video Section */}
        <div style={{ backgroundColor: "black", padding: "20px", marginBottom: "20px", borderRadius: "10px" }}>
          <h2 style={{ color: "lime", textAlign: "center", textShadow: "0 0 10px lime" }}>
            Car Video Showcase
          </h2>

          <video
            key={videoIndex}
            width="100%"
            controls
            autoPlay
            muted
            loop
            style={{ border: "2px solid lime", borderRadius: "10px", display: "block", margin: "0 auto" }}
          >
            <source src={videos[videoIndex]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div style={{ textAlign: "center", marginTop: "10px" }}>
            <button className="btn btn-outline-success me-2" onClick={prevVideo}>Prev</button>
            <button className="btn btn-outline-success" onClick={nextVideo}>Next</button>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-info">Available Automobiles</h2>

        {/* ⭐ Category Filter Buttons */}
        <div className="mb-3">
          <button 
            className={`btn me-2 ${category === "all" ? "btn-primary" : "btn-outline-primary"}`} 
            onClick={() => setCategory("all")}
          >
            All
          </button>

          <button 
            className={`btn me-2 ${category === "luxury" ? "btn-primary" : "btn-outline-primary"}`} 
            onClick={() => setCategory("luxury")}
          >
            Luxury
          </button>

          <button 
            className={`btn me-2 ${category === "classic" ? "btn-primary" : "btn-outline-primary"}`} 
            onClick={() => setCategory("classic")}
          >
            Classic
          </button>

          <button 
            className={`btn ${category === "offroad" ? "btn-primary" : "btn-outline-primary"}`} 
            onClick={() => setCategory("offroad")}
          >
            Offroad
          </button>
        </div>               

        {/* Loading + Error */}
        {loading && <Loader />}
        <h4 className="text-danger">{error}</h4>

        {/* Products */}
        {filteredProducts.map((product) => (
          <div className="col-md-3 justify-content-center mb-3" key={product.product_id}>
            <div className="card shadow">
              <img 
                src={img_url + product.product_photo} 
                alt={product.product_name} 
                className='product_img mt-3'
              />

              <div className="card-body">
                <h5 className="text-secondary">{product.product_name}</h5>

                <p className="text-dark">
                  {product.product_description.slice(0, 100)}...
                </p>

                <h5 className="text-info">$ {product.product_cost}</h5>

                <button 
                  className='btn btn-outline-info' 
                  onClick={() => navigate("/makepayment", { state: { product } })}
                >
                  Order now
                </button>
              </div>
            </div>
          </div>
        ))}

      </div>

      <Footer />
    </>
  )
}

export default Getproducts