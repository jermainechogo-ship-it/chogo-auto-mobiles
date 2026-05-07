import React, { useState } from "react";
import "../css/chatbot.css";

function Chatbot() {
  const [messages, setMessages] = useState([
    {
      type: "text",
      text: "SYSTEM ONLINE... Welcome to Chogo Automobiles Interface. I’m your virtual assistant, ready when you are.",
      sender: "bot"
    }
  ]);

  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [typing, setTyping] = useState(false);

  const options = [
    "Luxury Cars",
    "Offroad Machines",
    "Classic Collection",
    "Help"
  ];

  // 🚗 Demo car data
  const carData = {
    luxury: [
      {
        name: "Mercedes S-Class",
        price: "KES 12M",
        img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d3"
      },
      {
        name: "BMW 7 Series",
        price: "KES 11M",
        img: "https://images.unsplash.com/photo-1555215695-3004980ad54e"
      }
    ],
    offroad: [
      {
        name: "Jeep Wrangler",
        price: "KES 8M",
        img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70"
      },
      {
        name: "Toyota Land Cruiser",
        price: "KES 10M",
        img: "https://images.unsplash.com/photo-1600703136775-02f3a6a1f4b2"
      }
    ],
    classic: [
      {
        name: "Ford Mustang 1967",
        price: "KES 6M",
        img: "https://images.unsplash.com/photo-1542362567-b07e54358753"
      }
    ]
  };

  // 💬 Human + assistant personality responses
 const botReply = (msg) => {
  msg = msg.toLowerCase();

  // small human greeting logic
  const greetings = ["hi", "hello", "hey"];
  if (greetings.some(g => msg.includes(g))) {
    return {
      text: "Hey there 👋 I’m your Chogo Auto assistant. Tell me what you’re looking for and I’ll guide you."
    };
  }

  if (msg.includes("luxury")) {
    return {
      text: "Good choice 👍 Luxury vehicles are all about comfort, power, and presence. Here are some top picks:"
      ,
      cars: carData.luxury
    };
  }

  if (msg.includes("offroad")) {
    return {
      text: "Nice pick 🔥 These are built for rough terrain and real adventure.",
      cars: carData.offroad
    };
  }

  if (msg.includes("classic")) {
    return {
      text: "Respect 👌 Classic cars always carry personality and history.",
      cars: carData.classic
    };
  }

  if (msg.includes("help")) {
    return {
      text: "I’ve got you 👍 You can click a category or just type what you need — I’ll guide you."
    };
  }

  return {
    text: "I’m not fully sure I understood that 🤔 but I’m here to help. Try selecting a category or rephrasing."
  };
};

  const sendMessage = (text) => {
    if (!text.trim()) return;

    setMessages((prev) => [
      ...prev,
      { type: "text", text, sender: "user" }
    ]);

    setInput("");
    setTyping(true);

    setTimeout(() => {
      const response = botReply(text);

      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          text: response.text,
          cars: response.cars || null,
          sender: "bot"
        }
      ]);

      setTyping(false);
    }, 700);
  };

  return (
    <div>

      {/* Floating terminal button */}
      <button className="chat-toggle" onClick={() => setIsOpen(!isOpen)}>
        Terminal
      </button>

      {isOpen && (
        <div className="chat-window">

          {/* Header */}
          <div className="chat-header">
            CHOGO SYSTEM INTERFACE
          </div>

          {/* Messages */}
          <div className="chat-body">

            {messages.map((msg, i) => (
              <div key={i} className={`msg ${msg.sender}`}>

                <div>{msg.text}</div>

                {/* 🚗 Car cards */}
                {msg.cars && (
                  <div className="car-grid">
                    {msg.cars.map((car, index) => (
                      <div key={index} className="car-card">

                        <div className="car-img-wrapper">
                          <img src={car.img} alt={car.name} />
                        </div>

                        <h4>{car.name}</h4>
                        <p>{car.price}</p>

                      </div>
                    ))}
                  </div>
                )}

              </div>
            ))}

            {typing && (
              <div className="typing">
                system is typing...
              </div>
            )}

          </div>

          {/* Buttons */}
          <div className="chat-buttons">
            {options.map((opt, i) => (
              <button key={i} onClick={() => sendMessage(opt)}>
                {opt}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="chat-input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="type command..."
            />
            <button onClick={() => sendMessage(input)}>Send</button>
          </div>

        </div>
      )}

    </div>
  );
}

export default Chatbot;