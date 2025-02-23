// src/App.jsx
import React from "react";
import GlobalStyle from "./styles/GlobalStyles";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Footer from "./components/Footer";
import Products from "./sections/Products";


function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Hero />
      <Products />
      <Services />
      <Footer />
    </>
  );
}

export default App;
