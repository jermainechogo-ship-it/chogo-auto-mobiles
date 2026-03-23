import axios from 'axios'; 
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Signin() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate()

  const handlesubmit = async (e) =>{
    e.preventDefault()

    setLoading("Verifying secure credentials...")

    try{
      const formdata = new FormData()

      formdata.append("email", email);
      formdata.append("password", password)

      const response = await axios.post(
        "https://jermaine234.alwaysdata.net/api/signin",
        formdata
      );

      setLoading("");

      if(response.data.user){
        localStorage.setItem("user", JSON.stringify(response.data.user));
        navigate("/")
      }
      else{
        setError("YOU DETAIL ARE INCORRECT ❌")
      }

    }
    catch(erro){
      setLoading("");
      setError("AUTHENTICATION FAILED ⚠️")
    }
  }

  return (
    <div style={{
      height:"100vh",
      backgroundColor:"black",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      fontFamily:"monospace"
    }}>

      <div style={{
        backgroundColor:"#020202",
        padding:"40px",
        borderRadius:"10px",
        boxShadow:"0 0 25px lime",
        width:"400px"
      }}>

        <h2 style={{
          color:"lime",
          textAlign:"center",
          textShadow:"0 0 10px lime"
        }}>
          SECURE LOGIN TERMINAL
        </h2>

        <p style={{color:"lime"}}>{loading}</p>
        <p style={{color:"lightgreen"}}>{success}</p>
        <p style={{color:"red"}}>{error}</p>

        <form onSubmit={handlesubmit}>

          <input
            type="email"
            placeholder="ENTER EMAIL"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            style={inputStyle}
          />

          <input
            type="password"
            placeholder="ENTER PASSWORD"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            style={inputStyle}
          />

          <button style={btnStyle}>
            AUTHENTICATE
          </button>

        </form>

        <p style={{color:"lime", marginTop:"15px"}}>
          No account? <Link style={{color:"gold"}} to="/signup">REGISTER</Link>
        </p>

      </div>

    </div>
  )
}

const inputStyle = {
  width:"100%",
  padding:"12px",
  marginTop:"15px",
  backgroundColor:"black",
  border:"1px solid lime",
  color:"lime",
  outline:"none",
  boxShadow:"0 0 10px lime"
}

const btnStyle = {
  width:"100%",
  padding:"12px",
  marginTop:"20px",
  backgroundColor:"lime",
  border:"none",
  fontWeight:"bold",
  cursor:"pointer",
  boxShadow:"0 0 15px lime"
}

export default Signin;