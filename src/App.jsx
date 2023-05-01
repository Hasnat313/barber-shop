import React from "react";
import Navbar from "./Components/Pages/NavbarPage/Navbar";
import Home from "./Components/Pages/HomePage/Home";
import ExploreServices from './Components/Pages/HomePage/ExploreServices'
import About from './Components/Pages/HomePage/About'
import Advantages from './Components/Pages/HomePage/Advantages'
import Book from './Components/Pages/HomePage/Book'
import Footer from './Components/Pages/HomePage/Footer'
import FAQ from "./Components/Pages/HomePage/FAQ";
import Reviews from "./Components/Pages/HomePage/Reviews";

const App = () => {
  return (
    <>
    {/* Please refactor homepage components to seprate Homepage, then call it in app, Leaving
    Navbar and Footer
    */}
      <Navbar />
      <Home />
      <ExploreServices />
      <About />



      {/* AR's code */}
      <Advantages />
      <Book />
      {/* There might be issue in Book component */}
      <Reviews/>
      <FAQ/>
      <Footer />






    </>
  );
};

export default App;
