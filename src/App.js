import React from "react";
import "./app.css";
import Navbar from "./components/Navbar";
import Header from "./container/header";
import Brand from "./components/brand";
import WhatGPT3 from "./container/whatGPT3";
import Features from "./container/features";
import Possibility from "./container/possibility";
import Cta from "./components/Cta";
import Blog from "./container/blog";
import Footer from "./container/Footer";
// Corrected Import Statement
const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
