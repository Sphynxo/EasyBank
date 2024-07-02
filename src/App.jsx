import React from "react";
import GlobalStyle from "./GlobalStyle";
import Header from "./Components/Header";
import Hero from "./Components/Hero"
import Features from "./Components/Features";
import Articles from "./Components/Articles";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <Features />
      <Articles />
      <Footer />
    </>
  );
}

export default App;
