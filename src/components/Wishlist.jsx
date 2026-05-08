import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(saved);
  }, []);

  const removeItem = (id) => {
    const updated = wishlist.filter((item) => item.product_id !== id);
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  return (
    <div style={{ padding: "20px", color: "#fff" }}>

      {/* Header */}
      <h2 style={{ color: "#00d4ff" }}>
        ❤️ My Wishlist Garage
      </h2>

      <p style={{ opacity: 0.7 }}>
        These machines didn’t just get saved — they got *selected*.  
        A refined taste in motion, if I may say so 😌🚗
      </p>

      {/* Empty state */}
      {wishlist.length === 0 ? (
        <div style={{ marginTop: "30px" }}>
          <h3 style={{ color: "gray" }}>
            Your garage is currently empty…
          </h3>
          <p style={{ opacity: 0.7 }}>
            Even legends start with an empty driveway. Go find your first ride 🏁
          </p>
        </div>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {wishlist.map((car) => (
            <div
              key={car.product_id}
              style={{
                background: "#111",
                margin: "10px",
                padding: "15px",
                width: "260px",
                borderRadius: "12px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.4)"
              }}
            >
              <h4 style={{ color: "#fff" }}>
                {car.product_name}
              </h4>

              <p style={{ color: "#00d4ff" }}>
                ${car.product_cost}
              </p>

              <p style={{ fontSize: "13px", opacity: 0.7 }}>
                A solid choice — this one clearly caught your eye for a reason 👀✨
              </p>

              <button
                onClick={() => removeItem(car.product_id)}
                style={{
                  background: "red",
                  color: "white",
                  border: "none",
                  padding: "6px 10px",
                  marginRight: "10px",
                  borderRadius: "6px",
                  cursor: "pointer"
                }}
              >
                Remove
              </button>

              <button
                onClick={() =>
                  navigate("/makepayment", { state: { product: car } })
                }
                style={{
                  background: "#00d4ff",
                  color: "black",
                  border: "none",
                  padding: "6px 10px",
                  borderRadius: "6px",
                  cursor: "pointer"
                }}
              >
                Continue Journey
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Footer compliment */}
      {wishlist.length > 0 && (
        <p style={{ marginTop: "30px", opacity: 0.6 }}>
          You’ve got good taste. Not everyone curates a garage like this 🏎️💎
        </p>
      )}
    </div>
  );
};

export default Wishlist;