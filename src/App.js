import React from 'react'
import Home from './Components/Home'
import Privacy from './Components/Privacy'
import Signup from './Components/Signup'
import Contact from './Components/Contact'
import Loginform from './Components/Loginform'  
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "./Components/Navbar"

function App() {
     
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/login" element={<Loginform />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
  
}

export default App;
