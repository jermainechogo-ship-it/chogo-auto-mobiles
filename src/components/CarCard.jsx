import React from "react";
import { motion } from "framer-motion";

// ✨ ADDED (extra animation tools, harmless if unused)
import { AnimatePresence } from "framer-motion";

const CarCard = ({
  image,
  name,
  description,
  price,
  onClick,
  onWishlist,
  isWished
}) => {
  return (
    <motion.div
      style={{
        backgroundColor: "#111",
        color: "white",
        width: "300px",
        borderRadius: "15px",
        overflow: "hidden",
        margin: "15px",
        cursor: "pointer",
        boxShadow: "0 10px 25px rgba(0,0,0,0.35)"
      }}

      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}

      whileHover={{ scale: 1.05, y: -8 }}
    >
      <div style={{ overflow: "hidden" }}>
        <motion.img
          src={image}
          alt={name}
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover"
          }}
          whileHover={{ scale: 1.1 }}
        />
      </div>

      <div style={{ padding: "15px" }}>
        <h3>{name}</h3>

        <p style={{ fontSize: "14px", opacity: 0.8 }}>
          {description?.slice(0, 90)}...
        </p>

        <h4 style={{ color: "#00d4ff" }}>
          ${price}
        </h4>

        <button
          onClick={onClick}
          style={{
            padding: "8px 12px",
            border: "1px solid #00d4ff",
            background: "transparent",
            color: "#00d4ff",
            borderRadius: "5px",
            marginTop: "10px"
          }}

          // ✨ ADDED micro interaction
          onMouseEnter={(e) => (e.target.style.filter = "brightness(1.2)")}
          onMouseLeave={(e) => (e.target.style.filter = "brightness(1)")}

          onMouseDown={(e) => (e.target.style.transform = "scale(0.96)")}
          onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
        >
          Order Now
        </button>

        <button
          onClick={onWishlist}
          style={{
            padding: "8px 12px",
            marginLeft: "10px",
            border: "1px solid red",
            background: isWished ? "red" : "transparent",
            color: isWished ? "white" : "red",
            borderRadius: "5px"
          }}

          // ✨ ADDED glow interaction
          onMouseEnter={(e) =>
            (e.target.style.boxShadow = "0 0 10px red")
          }
          onMouseLeave={(e) =>
            (e.target.style.boxShadow = "none")
          }
        >
          {isWished ? "❤️ Saved" : "🤍 Wishlist"}
        </button>
      </div>
    </motion.div>
  );
};

export default CarCard;