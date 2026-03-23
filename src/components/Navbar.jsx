import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <nav style={{
      backgroundColor: "black",
      padding: "15px",
      color: "white",
      display: "flex",
      justifyContent: "space-between"
    }}>
        
      
    
      <h2>Chogo's auto mobiles</h2>

      <div>
        <Link style={{color:"white", marginRight:"20px"}} to="/">
          Home
        </Link>

        <Link style={{color:"white", marginRight:"20px"}} to="/signin">
          Signin
        </Link>

        <Link style={{color:"white", marginRight:"20px"}} to="/signup">
          Signup
        </Link>

        <Link style={{color:"white", marginRight:"20px"}} to="/addproduct">
          Add Product
        </Link>
        <Link style={{color:"white", marginRight:"20px"}} to="/Luxury">
          luxury
        </Link>
        
        <Link style={{color:"white", marginRight:"20px"}} to="/Offroad">
        Offroad
        </Link>

        <Link style={{color:"white", marginRight:"20px"}} to="/Classic">
        Classic
        </Link>


      </div>
    </nav>
  )
}

export default Navbar