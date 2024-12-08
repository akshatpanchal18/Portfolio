import React, { useState } from "react"
import Navbar from "./Navbar"
import Testimonial from "./Testimonial"
import Contact from "./Contact"
import PortFollio from "./PortFollio"
import Home from "./Home"
import Services from "./Services"
import ScrollToTopButton from "./Components/ScrollToTop"
import Footer from "./Footer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AboutMe from "./Components/AboutMe"

function App() {
  return (
    <>
      <Navbar /> 
      <section id="home">
        <Home />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="testimonial">
        <Testimonial />
      </section>
      <section id="portfolio">
        <PortFollio />
      </section>
      <section id="contact">
        <Contact />
      </section>
      {/* <section id="aboutme">
        <AboutMe />
      </section> */}
      {/* <Routes>
        <Route path="#aboutme" element={<AboutMe />} />
      </Routes> */}
      <ScrollToTopButton/>
      <Footer/>
      
    </>
  )
}

export default App
