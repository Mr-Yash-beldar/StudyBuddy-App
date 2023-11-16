import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";

const App = () => {
  const [isLoggedIn ,setIsLoggedIn]=useState(false);
  return (
    <div class="w-screen min-h-screen bg-gray-950 flex flex-col font-inter">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About/>}   /> 
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
       
      </Routes>
    </div>
  );
};

export default App;
