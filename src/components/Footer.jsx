import React, { useState } from "react";

function Footer() {

  const [rating, setRating] = useState(0);
  const [remark, setRemark] = useState("");

  return (
    <div
      style={{
        background: "black",
        color: "white",
        padding: "40px",
        marginTop: "40px"
      }}
    >

      <div className="row">

        {/* ⭐ SECTION 1 ABOUT */}
        <div className="col-md-4">
          <h4 style={{
            color: "purple",
            textShadow: "0 0 10px darkviolet"
          }}>
            About Us
          </h4>

          <p>
            Jermaine AutoMarket is committed to providing high quality automobiles,
            trusted services and seamless purchasing experience.
            Our goal is to connect drivers with performance, reliability and innovation.
          </p>
        </div>

        {/* ⭐ SECTION 2 RATING */}
        <div className="col-md-4">
          <h4 style={{
            color: "purple",
            textShadow: "0 0 10px darkviolet"
          }}>
            Rate Our Service
          </h4>

          <div>
            {[1,2,3,4,5].map((star)=>(
              <span
                key={star}
                onClick={()=>setRating(star)}
                style={{
                  fontSize:"30px",
                  cursor:"pointer",
                  color: star <= rating ? "gold" : "gray"
                }}
              >
                ★
              </span>
            ))}
          </div>

          <textarea
            placeholder="Send us your remarks..."
            className="form-control mt-2"
            value={remark}
            onChange={(e)=>setRemark(e.target.value)}
          />

          <button className="btn btn-outline-light mt-2">
            Submit Feedback
          </button>

        </div>

        {/* ⭐ SECTION 3 CONTACT */}
        <div className="col-md-4">
          <h4 style={{
            color: "purple",
            textShadow: "0 0 10px darkviolet"
          }}>
            Contact Us
          </h4>

          <p>Email: support@jermaineautomarket.com</p>
          <p>Phone: +254 700 000 000</p>
          <p>Location: Nairobi, Kenya</p>

        </div>

      </div>

      <hr style={{borderColor:"purple"}}/>

      <div style={{textAlign:"center"}}>
        © 2026 Jermaine AutoMarket — All Rights Reserved
      </div>

    </div>
  );
}

export default Footer;