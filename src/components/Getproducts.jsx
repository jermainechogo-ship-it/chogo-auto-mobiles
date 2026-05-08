import phanton from "../car-images/phanton.mp4";
import rtgt from "../car-images/rtgt.mp4";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import Footer from "./Footer";
import CarCard from "./CarCard";
import { useNavigate } from "react-router-dom";

// ✨ ADDED
import { motion } from "framer-motion";

const Getproducts = ({ search }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoadding] = useState(false);
  const [error, setError] = useState("");

  const [category, setCategory] = useState("all");

  const [wishlist, setWishlist] = useState(() => {
    return JSON.parse(localStorage.getItem("wishlist")) || [];
  });

  const [toast, setToast] = useState("");

  // 🎥 VIDEO CAROUSEL ADDED BACK
  const videos = [phanton, rtgt, phanton];

  const [videoIndex, setVideoIndex] = useState(0);

  const nextVideo = () => {
    setVideoIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setVideoIndex((prev) =>
      prev === 0 ? videos.length - 1 : prev - 1
    );
  };

  const navigate = useNavigate();
  const img_url = "https://jermaine234.alwaysdata.net/static/images/";

  const fetchProducts = async () => {
    try {
      setLoadding(true);
      const response = await axios.get(
        "https://jermaine234.alwaysdata.net/api/get_products"
      );
      setProducts(response.data);
      setLoadding(false);
    } catch (error) {
      setLoadding(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const toggleWishlist = (product) => {
    const exists = wishlist.some(
      (item) => item.product_id === product.product_id
    );

    let updated;

    if (exists) {
      updated = wishlist.filter(
        (item) => item.product_id !== product.product_id
      );
      setToast("Removed from wishlist ❌");
    } else {
      updated = [...wishlist, product];
      setToast("Added to wishlist ❤️");
    }

    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));

    setTimeout(() => setToast(""), 2000);
  };

  const filteredProducts =
    category === "all"
      ? products
      : products.filter((p) => p.category === category);

  // ✨ ADDED ANIMATION VARIANTS
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <>
      {/* 🔔 TOAST */}
      {toast && (
        <div
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            background: "#111",
            color: "#fff",
            padding: "10px 15px",
            borderRadius: "8px",
            border: "1px solid #00d4ff",
            zIndex: 9999
          }}
        >
          {toast}
        </div>
      )}

      <div className="row">

        {/* 🎥 VIDEO CAROUSEL RESTORED */}
        <div
          style={{
            backgroundColor: "#000",
            padding: "20px",
            marginBottom: "20px",
            borderRadius: "12px"
          }}
        >
          <h2
            style={{
              color: "#00d4ff",
              textAlign: "center",
              marginBottom: "15px"
            }}
          >
            🚘 Car Video Showcase
          </h2>

          <motion.video
            key={videoIndex}
            width="100%"
            controls
            autoPlay
            muted
            loop
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              borderRadius: "12px",
              border: "2px solid #00d4ff"
            }}
          >
            <source src={videos[videoIndex]} type="video/mp4" />
          </motion.video>

          <div style={{ textAlign: "center", marginTop: "15px" }}>
            <button
              className="btn btn-outline-info me-2"
              onClick={prevVideo}
            >
              ⬅ Prev
            </button>

            <button
              className="btn btn-outline-info"
              onClick={nextVideo}
            >
              Next ➡
            </button>
          </div>
        </div>

        <div className="mb-3">
          {["all", "luxury", "classic", "offroad"].map((cat) => (
            <button
              key={cat}
              className={`btn me-2 ${
                category === cat ? "btn-primary" : "btn-outline-primary"
              }`}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {loading && <Loader />}
        <h4 className="text-danger">{error}</h4>

        {/* ✨ ANIMATED CONTAINER ADDED */}
        <motion.div
          style={{ display: "flex", flexWrap: "wrap" }}
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {filteredProducts.map((product) => (
            <motion.div key={product.product_id} variants={cardVariants}>

              <CarCard
                image={img_url + product.product_photo}
                name={product.product_name}
                description={product.product_description}
                price={product.product_cost}
                onClick={() =>
                  navigate("/makepayment", { state: { product } })
                }
                onWishlist={() => toggleWishlist(product)}
                isWished={wishlist.some(
                  (item) => item.product_id === product.product_id
                )}
              />

            </motion.div>
          ))}
        </motion.div>

      </div>

      <Footer />
    </>
  );
};

export default Getproducts;