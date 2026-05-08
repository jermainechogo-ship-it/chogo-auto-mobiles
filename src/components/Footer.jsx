import React, { useState, useEffect } from "react";
import "../css/footer.css";

function Footer() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [remark, setRemark] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [typedText, setTypedText] = useState("");

  const emojis = ["😡", "😕", "😐", "😊", "🤩"];

  // 💾 localStorage save (no backend needed)
  const handleSubmit = (e) => {
    e.preventDefault();

    const feedback = {
      rating,
      remark,
      time: new Date().toISOString(),
    };

    localStorage.setItem("feedback", JSON.stringify(feedback));

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2500);

    setRemark("");
    setRating(0);
  };

  // ⌨️ typing animation
  useEffect(() => {
    const text = "Leave your feedback...";
    let i = 0;

    const interval = setInterval(() => {
      setTypedText(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="cyber-footer">
      <h2 className="title">Feedback Console</h2>

      {/*  STAR RATING */}
      <div className="stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={star <= (hover || rating) ? "star active" : "star"}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
          >
            ★
          </span>
        ))}
      </div>

      {/* EMOJI REACTIONS */}
      <div className="emoji-row">
        {emojis.map((em, i) => (
          <span
            key={i}
            className={rating === i + 1 ? "emoji active" : "emoji"}
            onClick={() => setRating(i + 1)}
          >
            {em}
          </span>
        ))}
      </div>

      {/* 💬 INPUT */}
      <form onSubmit={handleSubmit}>
        <textarea
          value={remark}
          onChange={(e) => setRemark(e.target.value)}
          placeholder={typedText}
          maxLength={200}
        />

        {/* 📊 CHARACTER COUNTER */}
        <div className="counter">{remark.length}/200</div>

        {/* 🔥 GLASS GLOW BUTTON */}
        <button className="glow-btn" type="submit">
          Submit Feedback
        </button>
      </form>

      {/* 🎉 THANK YOU POPUP */}
      {submitted && (
        <div className="popup">
          Thank you for your feedback ✨
        </div>
      )}
    </footer>
  );
}

export default Footer;