import axios from 'axios'; 
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  // initiolize the hooks
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handlesubmit =async(e) =>{
    e.preventDefault()

    setLoading("please wait as registration is in work...")
    
    try{
      const formdata = new FormData();

      formdata.append("username", username)
      formdata.append("email", email)
      formdata.append("password", password)
      formdata.append("phone", phone)

      const response =await axios.post("https://jermaine234.alwaysdata.net/api/signup", formdata)

      setLoading("");
      setSuccess(response.data.message)

      setUsername("")
      setEmail("")
      setPassword("")
      setPhone("")

    }
    catch(error){
      setLoading("")
      setError(error.message)
    }
  }

  return (

    // fullscreen container styling
    // makes background BLACK and centers the signup card vertically and horizontally
    <div style={{
      height:"100vh",
      backgroundColor:"black",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      fontFamily:"monospace"
    }}>

      {/*glowing card */}
      {/* adds neon green glow + dark terminal look */}
      <div style={{
        width:"500px",
        backgroundColor:"#020202",
        padding:"40px",
        borderRadius:"10px",
        boxShadow:"0 0 25px lime"
      }}>

        {/* glowing  title */}
        <h1 style={{
          color:"lime",
          textAlign:"center",
          textShadow:"0 0 10px lime"
        }}>
          sign up
        </h1>

        <h4 style={{color:"lime"}}>{loading}</h4>
        <h3 style={{color:"lightgreen"}}>{success}</h3>
        <h4 style={{color:"red"}}>{error}</h4>

        <form onSubmit={handlesubmit}>

          {/* input styling → neon borders + dark background */}
          <input type="text"
          placeholder='enter the user name'
          style={inputStyle}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required/> <br />

          <input type="email"
          placeholder='enter your email'
          style={inputStyle}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required /> <br />

          <input type="password"
          placeholder='enter your pass word'
          style={inputStyle}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required /> <br />

          <input type="number"
          placeholder='enter your mobile phone number'
          style={inputStyle}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required/> <br />

          {/* glowing button */}
          <input 
          type="submit" 
          value="signup" 
          style={btnStyle}
          /> <br /> <br />

          <span style={{color:"lime"}}>
            Already have an account? 
            <Link style={{color:"gold"}} to={'/signin'}>signin</Link>
          </span>

        </form>
      </div>
    </div>
  )
}

//  reusable  input styling object
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

// glowing button styling
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

export default Signup