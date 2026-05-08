import { Link } from "react-router-dom";

const Navbar = ({ search, setSearch, darkMode, setDarkMode }) => {

  // ❤️ optional wishlist counter (reads localStorage)
  const wishlistCount =
    JSON.parse(localStorage.getItem("wishlist"))?.length || 0;

  return (
    <nav className={`navbar-container ${darkMode ? "dark" : "light"}`}>

      <h2 className="logo-text">
        🚘 Chogo's Auto Mobiles
      </h2>

      {/* Search */}
      <input
        type="text"
        placeholder="Search cars..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <div className="nav-links">

        <Link className="nav-link" to="/">
          Home
        </Link>

        <Link className="nav-link" to="/signin">
          Signin
        </Link>

        <Link className="nav-link" to="/signup">
          Signup
        </Link>

        <Link className="nav-link" to="/addproduct">
          Add Product
        </Link>

        <Link className="nav-link" to="/luxury">
          Luxury
        </Link>

        <Link className="nav-link" to="/offroad">
          Offroad
        </Link>

        <Link className="nav-link" to="/classic">
          Classic
        </Link>

        {/* ❤️ WISHLIST LINK (NEW FEATURE) */}
        <Link className="nav-link" to="/wishlist">
          ❤️ Wishlist ({wishlistCount})
        </Link>
        <Link className="nav-link" to="/admin">
          Admin 
        </Link>

        {/* Dark Mode Toggle */}
        <button
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>

      </div>
    </nav>
  );
};

export default Navbar;