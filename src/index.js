import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Footer from "./components/footer";
import "./style/style.css";
import CarouselImg from "./components/carousel";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Header />
    <CarouselImg />
    <Footer />
  </div>
);
