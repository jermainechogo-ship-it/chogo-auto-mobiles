import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";

// Pages
import Signup from './components/Signup';
import Signin from './components/Signin';
import Addproduct from './components/Addproducts';
import Getproducts from './components/Getproducts';
import Makepayment from './components/Makepayment';
import Notfound from './components/Notfound';
import Navbar from "./components/Navbar";
import Luxury from './components/Luxury';
import Offroad from './components/Offroad';
import Classic from './components/Classic';

// ❤️ ADD THIS
import Wishlist from './components/Wishlist';

// Chatbot
import Chatbot from "./components/Chatbot";

function App() {

  const [search, setSearch] = useState("");

  // Dark mode state
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <Router>
      <div className={`App ${darkMode ? "dark-mode" : ""}`}>

        <Navbar
          search={search}
          setSearch={setSearch}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <header className="App-header">
          <h2 className='welcome-text'>
            Welcome to Chogo's Auto Mobiles 🚘
            <br />
            Your mode of transport is our concern
          </h2>
        </header>

        <Routes>
          <Route path='/' element={<Getproducts search={search} />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/addproduct' element={<Addproduct />} />
          <Route path='/makepayment' element={<Makepayment />} />
          <Route path='/Luxury' element={<Luxury />} />
          <Route path='/Offroad' element={<Offroad />} />
          <Route path='/Classic' element={<Classic />} />

          {/* ❤️ WISHLIST ROUTE (THIS WAS MISSING) */}
          <Route path='/wishlist' element={<Wishlist />} />

          <Route path='*' element={<Notfound />} />
        </Routes>

        <Chatbot />

      </div>
    </Router>
  );
}

export default App;