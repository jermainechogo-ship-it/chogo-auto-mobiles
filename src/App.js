import './App.css';
import { BrowserRouter as  Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react"; // ⭐ ADDED

import Signup from './components/Signup';
import Signin from './components/Signin';
import Addproduct from './components/Addproducts';
import Getproducts from './components/Getproducts';
import Makepayment from './components/Makepayment';
import Notfound from './components/Notfound';
import Navbar from "./components/Navbar"
import Luxury from './components/Luxury';
import Offroad from "./components/Offroad"
import Classic from './components/Classic';

function App() {

  // ⭐ ADDED SEARCH STATE
  const [search, setSearch] = useState("");

  return (
    <Router>
      <div className="App">

        {/* ⭐ UPDATED NAVBAR */}
        <Navbar search={search} setSearch={setSearch} />
      
        <header className="App-header">
          <h2 className='text-info'>
            welcome to Chogo's Auto mobilse where your mode of transport is our concern
          </h2>
        </header>

        <Routes>
          {/* ⭐ PASSED SEARCH */}
          <Route path='/' element={<Getproducts search={search} />} />

          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/addproduct' element={<Addproduct />} />
          <Route path='*' element={<Notfound/>} />
          <Route path='/makepayment' element={<Makepayment />} />
          <Route path='/Luxury' element={<Luxury/>} />
          <Route path='/Offroad' element={<Offroad/>} />
          <Route path='/Classic' element={<Classic/>} />  
        </Routes>

      </div>
    </Router>
  );
}

export default App;