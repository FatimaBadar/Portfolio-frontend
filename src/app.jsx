import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.css";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

export function App() {

  return (
    <>
    <Navbar/>
        <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/projects" element={<Projects/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}
