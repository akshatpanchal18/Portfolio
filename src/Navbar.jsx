import React, { useEffect, useState } from "react";
import { Link } from 'react-scroll';
import styled from "styled-components";
import DropdownMenu from "./Components/DropDown";
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease", // Easing for animation
      once: true, // Run the animation only once
      mirror: false, // Disable animations when scrolling back up
      offset: 200,
    });
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
  <nav className="navbar">
    {/* <div className="navbar-logo">
      <img src="/logo.png" alt="" />
    </div> */}
    <div className="navbar-logo" data-aos="slide-up">
    <Link to="home" 
        smooth={true} 
        duration={500}>
  <img src="/logo.png" alt="Logo" />
  </Link>
</div>

    <div className={`navbar-links ${isOpen ? "open" : ""}`}> {/* Corrected here */}
      <Link
        className="link"
        to="home" 
        smooth={true} 
        duration={500} 
        onClick={toggleMenu} 
        data-aos="fade-up"
      >
        Home
      </Link>
      <Link
        className="link"
        to="services"
        smooth={true}
        duration={500}
        onClick={toggleMenu}
        data-aos="fade-up"
      >
        Services
      </Link>
      <Link
        className="link"
        to="testimonial"
        smooth={true}
        duration={500}
        onClick={toggleMenu}
        data-aos="fade-up"
      >
        Testimonial
      </Link>
      <Link
        className="link"
        to="portfolio"
        smooth={true}
        duration={500}
        onClick={toggleMenu}
        data-aos="fade-up"
      >
        Portfolio
      </Link>
      <Link
        className="link"
        to="contact"
        smooth={true}
        duration={500}
        onClick={toggleMenu}
        data-aos="fade-up"
      >
        Contact
      </Link>
      {/* <DropdownMenu/> */}
      {/* <span className="number">+91 12345 67890</span> */}
    </div>
    <div className="navbar-toggle" data-aos="slide-left" onClick={toggleMenu}>
      <span className={`bar ${isOpen ? "bar-1" : ""}`}></span> {/* Corrected here */}
      <span className={`bar ${isOpen ? "bar-2" : ""}`}></span> {/* Corrected here */}
      <span className={`bar ${isOpen ? "bar-3" : ""}`}></span> {/* Corrected here */}
    </div>
  </nav>
</Wrapper>
  );
}
const Wrapper = styled.nav`
.active{
font-weight:bold;
}
  /* Navbar container */
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.5rem;
    // background-color: #0099ff;
    // background-color:#5000ca;
    background-color: rgba(80, 0, 202,0.8);
    backdrop-filter:blur(3px);
    color: #fff;
    height: 90px;
    // position: relative;
    position: fixed; /* Make the Navbar fixed */
    top: 0;          /* Position it at the top */
    width: 100%;     /* Full width */
    z-index: 1000;   /* Ensure it’s above other content */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  }

  /* Logo */
  .navbar-logo img{
    margin-top: 10px;
    width:30%;
    max-width:120%;
  }

  /* Links */
  .navbar-links {
    display: flex;
    gap: 1rem;
  }
  .link {
    text-decoration: none;
    color: #fff;
    font-size: 1.5rem;
    padding: 0.5rem 1rem;
    transition: background-color 0.3s;
    cursor:pointer;
  }

  .navbar-links a:hover {
    // background-color: #555;
    font-weight:bold;
    
  }

  /* Toggle button for small screens */
  .navbar-toggle {
    display: none;
    flex-direction: column;
    cursor: pointer;
    z-index: 10;
  }

  .navbar-toggle .bar {
    width: 25px;
    height: 3px;
    background-color: #fff;
    margin: 4px 0;
    transition: 0.1s;
  }
    .number{
   background-color:black;
   color:white;
   padding:1rem 2rem;
   border-radius:50px;
   
}    

  /* Transform bars into an "X" when the menu is open */
  .navbar-toggle .bar-1 {
    transform: translate(0, 11px) rotate(45deg);
  }

  .navbar-toggle .bar-2 {
    opacity: 0;
  }

  .navbar-toggle .bar-3 {
    transform: translate(0, -11px) rotate(-45deg);
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .navbar-links {
      display: none;
      flex-direction: column;
      gap: 1rem;
      position: absolute;
      top: 0;
      right: 0;
      // background-color: #0099ff;
      background-color: #5000ca;
      // background-color: rgba(80, 0, 202,0.7);
      backdrop-filter:blur(5px);
      width: 60vw; /* Right half of the viewport width */
      height: 100vh; /* Full height of the viewport */
      padding: 2rem 1rem;
      transition: transform 0.3s ease;
      z-index:1000;
    }

    .navbar-links.open {
      display: flex;
    }

    .navbar-toggle {
      display: flex;
      z-index:inherit;
    }
      .navbar-logo img{
    width:30%;
  }
  }
  @media(max-width:480px){
  .navbar-logo img{
    width:50%;
  }
  }
`;
export default Navbar;
