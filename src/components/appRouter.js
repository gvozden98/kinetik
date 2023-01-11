import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../app";
import Journal from "../journal";
import About from "../about";
import Contact from "../contact";

const appRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default appRouter;
