import React, { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [productsCount, setProductsCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  // 📊 mock stats (we simulate for now)
  const [users] = useState(128);
  const [profit] = useState( Math.floor(Math.random() * 50000) + 20000 );

  useEffect(() => {
    // 📦 products from API cache (optional fallback)
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          "https://jermaine234.alwaysdata.net/api/get_products"
        );
        const data = await res.json();
        setProductsCount(data.length);
      } catch (err) {
        setProductsCount(0);
      }
    };

    fetchProducts();

    // ❤️ wishlist from localStorage
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlistCount(wishlist.length);
  }, []);

  return (
    <div style={{ padding: "20px", color: "#fff" }}>

      <h2 style={{ color: "#00d4ff" }}>
        📊 Admin Dashboard
      </h2>

      <p style={{ opacity: 0.7 }}>
        Welcome back, Manager. Here’s your dealership overview 🏎️
      </p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "15px",
        marginTop: "20px"
      }}>

        {/* 📦 Cars */}
        <div style={cardStyle}>
          <h3>📦 Cars Listed</h3>
          <h1>{productsCount}</h1>
        </div>

        {/* ❤️ Wishlist */}
        <div style={cardStyle}>
          <h3>❤️ Wishlist Saves</h3>
          <h1>{wishlistCount}</h1>
        </div>

        {/* 👤 Users */}
        <div style={cardStyle}>
          <h3>👤 Active Users</h3>
          <h1>{users}</h1>
        </div>

        {/* 💰 Profit */}
        <div style={cardStyle}>
          <h3>📈 Estimated Profit</h3>
          <h1>$ {profit}</h1>
        </div>

        

      </div>

      <p style={{ marginTop: "30px", opacity: 0.6 }}>
        System Status: All engines running smoothly 🚀
      </p>

    </div>
  );
};

const cardStyle = {
  background: "#111",
  padding: "15px",
  borderRadius: "10px",
  border: "1px solid #00d4ff",
  textAlign: "center"
};

export default AdminDashboard;