import './App.css';
import './Mobile.css';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react'
import HomePage from './Components/HomePage';
import Home from './Components/Home';
function App() {
  return (
    <div>
      <Navbar/>
      {/* <HomePage/> */}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
