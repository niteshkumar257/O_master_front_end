import React, { useEffect, useLayoutEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home.jsx";
import Login from "./pages/Login";
import Register from "./pages/Register.jsx";
import NotFound from "./NotFound.jsx";
import History from "./pages/History.jsx";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const token = localStorage.getItem("token");
  // Initialize based on token presence

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/> 
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path='/history' element={<History/>}/>
        <Route path="*" element={<NotFound />} />

      </Routes>
      <ToastContainer/>
    </BrowserRouter>
  );
};

export default App;
