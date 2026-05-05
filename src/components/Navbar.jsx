import { Link } from "react-router-dom";

const Navbar = ({ search, setSearch }) => {
  return (
    <nav style={{
      backgroundColor: "black",
      padding: "15px",
      color: "white",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>

      <h2>Chogo's auto mobiles</h2>

      {/* Search */}
      <input
        type="text"
        placeholder="Search cars..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "5px",
          borderRadius: "5px",
          border: "1px solid gray",
          width: "200px"
        }}
      />

      <div>

        <Link style={{ color: "white", marginRight: "20px" }} to="/">
          Home
        </Link>

        <Link style={{ color: "white", marginRight: "20px" }} to="/signin">
          Signin
        </Link>

        <Link style={{ color: "white", marginRight: "20px" }} to="/signup">
          Signup
        </Link>

        <Link style={{ color: "white", marginRight: "20px" }} to="/addproduct">
          Add Product
        </Link>

        {/* ✅ FIXED ROUTES (IMPORTANT) */}
        <Link style={{ color: "white", marginRight: "20px" }} to="/luxury">
          Luxury
        </Link>

        <Link style={{ color: "white", marginRight: "20px" }} to="/offroad">
          Offroad
        </Link>

        <Link style={{ color: "white", marginRight: "20px" }} to="/classic">
          Classic
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;