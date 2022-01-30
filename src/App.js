import './App.css';
import './Mobile.css';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from 'react'
import HomePage from './Components/HomePage';
import Loading from './Components/Loading';
function App() {
  const [ isLoading, setLoading ] = useState(true)
  window.onload = function(){
    setLoading(false)
  }
  return (
    <div>
      {isLoading ? 
      <Loading/> : 
      <div>
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Router>
      </div>}
    </div>
  );
}

export default App;
