import React from "react";

const CarCard = ({ image, name, description, price }) => {
  return (
    <div style={{
      backgroundColor: "#111",
      color: "white",
      width: "300px",
      borderRadius: "10px",
      overflow: "hidden",
      boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
      margin: "15px",
      fontFamily: "Arial, sans-serif"
    }}>
      <img 
        src={image} 
        alt={name} 
        style={{ width: "100%", height: "200px", objectFit: "cover" }} 
      />
      <div style={{ padding: "15px" }}>
        <h3 style={{ marginBottom: "10px" }}>{name}</h3>
        <p style={{ fontSize: "14px", marginBottom: "10px" }}>{description}</p>
        <p style={{ fontWeight: "bold", fontSize: "16px" }}>{price}</p>
        
       
      </div>
    </div>
  );
};

export default CarCard;