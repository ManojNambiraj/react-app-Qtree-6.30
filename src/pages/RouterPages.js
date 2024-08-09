import React from "react";
import Navbar from "../Components/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Home";
import About from "./About";
import Blog from "./Blog";
import Contacts from "./Contacts";

function RouterPages() {
  return (
    <BrowserRouter>
      <Navbar />
      <hr/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/contacts" element={<Contacts />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default RouterPages;
