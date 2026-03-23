import React, { useState } from 'react'
import Loader from './Loader';
import axios from 'axios';


// introduce hooks


const Addproduct = () => {

const[product_name, setProductName] = useState("");
const[product_decsription, setProductDescription] = useState("");
const[product_cost, setProductCost] = useState("");
const[product_photo, setProductPhoto] = useState("");
// declare the additional hooks to manage the state of the application
const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState("");
const [error, setError] =useState("");

// create afunction that will handle the submit function
const handleSubmit = async (e) =>{
  // prevent the site from reloading
  e.preventDefault()
  // set loading hook with a message(activate it)
  setLoading(true)

  try{
    // create a form data
    const formdata = new FormData()

    // appen the etails 
    formdata.append("product_name", product_name);
    formdata.append("product_description", product_decsription);
    formdata.append("product_cost", product_cost);
    formdata.append("product_photo", product_photo);

    //  interact with axios to help you use the method post
    const response = await axios.post("https://jermaine234.alwaysdata.net/api/add_products", formdata)


    // set the loading hook back to default
    setLoading(false)

    // update the success hook with a message
    setSuccess(response.data.message)
    // clearing the hooks(setting them back to default)
    setProductName("");
    setProductDescription("");
    setProductCost("");
    setProductPhoto("");

    e.target.reset()


    setTimeout(() => {
        setSuccess("");
      }, 5000);
  }
  catch(error){
    // set loading back to default
    setLoading(false)

    // u
    setError(error.message)

  }
}

  
    return (

  //  terminal background
  // makes the whole page dark and centers the add product panel
  <div style={{
    height:"100vh",
    backgroundColor:"black",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    fontFamily:"monospace"
  }}>

    {/*  admin panel */}
    {/* neon green glow makes it feel like secure system upload terminal */}
    <div style={{
      width:"500px",
      backgroundColor:"#020202",
      padding:"40px",
      borderRadius:"10px",
      boxShadow:"0 0 25px lime"
    }}>

        <h3 style={{
          color:"lime",
          textAlign:"center",
          textShadow:"0 0 10px lime"
        }}>
          Welcom Add your custom car
        </h3>

        {loading && <Loader />}
        <h3 style={{color:"lightgreen"}}>{success}</h3>
        <h4 style={{color:"red"}}>{error}</h4>

        <form onSubmit={handleSubmit}>

          {/* neon input */}
          <input type="text"
          placeholder='Enter the car name'
          style={inputStyle}
          required
          value={product_name}
          onChange={(e) => setProductName(e.target.value)} /> <br /> 


          <input type="text"
          placeholder='car description'
          style={inputStyle}
          required 
          value={product_decsription}
          onChange={(e) => setProductDescription(e.target.value)}/> <br />


          <input type="number"
          placeholder='car price'
          style={inputStyle}
          required
          value={product_cost}
          onChange={(e) => setProductCost(e.target.value)} /> <br />


          {/*  label */}
          <label style={{color:"lime"}}>Car photo</label>

          <input type="file"
          style={inputStyle}
          required
          accept='images/*'
          onChange={(e) => setProductPhoto(e.target.files[0])} /> <br />

          {/* action button */}
          <input type="submit"
          value="add Car"
          style={btnStyle} />
        </form>

      </div>

  </div>
)
  
}

//  input styling object
// used for all form inputs to give neon border + dark system feel
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

//  button styling
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

export default Addproduct