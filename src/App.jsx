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
import DetailsB from "./Components/DetailsB"
import DetailsC from "./Components/DetailsC"
import DetailsA from "./Components/DetailsA"
import NotFound from "./Components/NotFound"

function App() {
  return (
    <>
      <Navbar /> 
      <Routes>
  <Route path="/" element={
    <>
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
    </>
  } />
  <Route path="/about-me" element={<AboutMe/>} />
  <Route path="/content-writting" element={<DetailsA/>} />
  <Route path="/web-devlopment" element={<DetailsB/>} />
  <Route path="/web-hosting" element={<DetailsC/>} />
  <Route path="*" element={<NotFound/>} />
</Routes>

      <ScrollToTopButton/>
      <Footer/>
      
    </>
  )
}

export default App
