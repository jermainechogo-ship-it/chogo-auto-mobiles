import React, { useState } from "react";
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

  // 💸 FIXED: safer price extraction (handles strings like "$50,000" or "KES 12M")
  const numericPrice =
    typeof price === "number"
      ? price
      : Number(String(price).replace(/[^0-9.]/g, "")) || 0;

  const [downPayment, setDownPayment] = useState(Math.round(numericPrice * 0.2));
  const [years, setYears] = useState(5 + Math.floor(numericPrice / 50000));
  const [interestRate, setInterestRate] = useState(7 + Math.random());

  // 🧠 CREDIT SCORE SIMULATION (NEW ADDITION)
  const creditScore = 550 + Math.floor(Math.random() * 250);

  // 🏦 BANK APPROVAL LOGIC (NEW ADDITION)
  const approvalStatus =
    creditScore >= 750
      ? "APPROVED 🟢"
      : creditScore >= 650
      ? "PENDING 🟡"
      : "REJECTED 🔴";

  // 💸 ADJUST INTEREST BASED ON CREDIT SCORE (NEW ADDITION)
  const adjustedInterestRate =
    creditScore >= 750
      ? interestRate - 2
      : creditScore >= 650
      ? interestRate
      : interestRate + 3;

  // 💸 FINANCING CALCULATION (now truly per-card correct)
  const loanAmount = Math.max(numericPrice - downPayment, 0);

  const monthlyInterest = adjustedInterestRate / 100 / 12;

  const numberOfPayments = years * 12;

  const monthlyPayment =
    loanAmount > 0
      ? (
          (loanAmount *
            monthlyInterest *
            Math.pow(1 + monthlyInterest, numberOfPayments)) /
          (Math.pow(1 + monthlyInterest, numberOfPayments) - 1)
        ).toFixed(2)
      : "0.00";

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

        {/* 💸 FIXED DISPLAY */}
        <h4 style={{ color: "#00d4ff" }}>
          ${numericPrice}
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

          onMouseEnter={(e) =>
            (e.target.style.boxShadow = "0 0 10px red")
          }
          onMouseLeave={(e) =>
            (e.target.style.boxShadow = "none")
          }
        >
          {isWished ? "❤️ Saved" : "🤍 Wishlist"}
        </button>

        {/* 🏦 BANK INFO (NEW ADDITION UI) */}
        <div style={{ marginTop: "10px", fontSize: "12px" }}>
          <p>Bank Decision: <strong>{approvalStatus}</strong></p>
          <p>Credit Score: {creditScore}</p>
        </div>

        {/* 💸 FINANCING CALCULATOR */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            marginTop: "20px",
            padding: "12px",
            background: "#1a1a1a",
            borderRadius: "10px",
            border: "1px solid #333"
          }}
        >

          <h5 style={{ color: "#00d4ff" }}>
            💸 Financing Calculator
          </h5>

          <p style={{ fontSize: "12px", opacity: 0.7 }}>
            A machine like this deserves a smart payment plan 😌🏎️
          </p>

          <label style={{ fontSize: "12px" }}>
            Down Payment
          </label>

          <input
            type="number"
            value={downPayment}
            onChange={(e) => setDownPayment(Number(e.target.value))}
            style={{
              width: "100%",
              marginBottom: "10px",
              padding: "6px",
              borderRadius: "5px",
              border: "none"
            }}
          />

          <label style={{ fontSize: "12px" }}>
            Loan Years
          </label>

          <input
            type="number"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            style={{
              width: "100%",
              marginBottom: "10px",
              padding: "6px",
              borderRadius: "5px",
              border: "none"
            }}
          />

          <label style={{ fontSize: "12px" }}>
            Interest Rate %
          </label>

          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            style={{
              width: "100%",
              marginBottom: "10px",
              padding: "6px",
              borderRadius: "5px",
              border: "none"
            }}
          />

          <motion.div
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 0.4 }}
            style={{
              background: "#000",
              padding: "10px",
              borderRadius: "8px",
              marginTop: "10px",
              border: "1px solid #00d4ff"
            }}
          >
            <p style={{ margin: 0, opacity: 0.7 }}>
              Estimated Monthly Payment
            </p>

            <h4 style={{ color: "#00ff99", marginTop: "5px" }}>
              ${monthlyPayment}/month
            </h4>

            <p style={{ fontSize: "12px", opacity: 0.6 }}>
              Clean choice. This build has excellent taste written all over it ✨
            </p>
          </motion.div>

        </motion.div>
      </div>
    </motion.div>
  );
};

export default CarCard;