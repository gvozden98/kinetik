import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import "./style/style.css";
import Carousel from "./components/carousel";
import Home from "./home";
import Journal from "./journal";
import About from "./about";
import Contact from "./contact";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      {/* NE ZABORAVI DA PROMENIS LINKOVE U HEADERU U LINK KOMPONENTE */}
      {/* Menja se samo ono sto je u routes delu, ostalo ostaje na ekranu */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
