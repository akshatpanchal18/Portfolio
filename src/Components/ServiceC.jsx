import React, { useEffect } from "react";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';


function ServiceC() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing for the animations
      once: true, // Only animate once when in view
    });
  }, []);

  return (
    <div>
      <Wraper>
      <div className="container">
      <div className="content" data-aos="fade-up">
        <div className="logo" data-aos="zoom-in">
          <img src="src/assets/cloud.svg" alt="Logo" />
        </div>
        <h1 data-aos="fade-up">Web Hosting</h1>
        <p data-aos="fade-up" data-aos-delay="200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, impedit
          rem, doloremque autem quibusdam blanditiis harum alias hic accusantium
          maxime atque ratione magni repellat?
        </p>
        <button className="btn">
          Learn More
          <span>
            <FaArrowRight />
          </span>
        </button>
      </div>
      <div className="image" data-aos="fade-left">
        <img src="/service-3.png" alt="Image" />
      </div>
    </div>
        {/* <img src="src\assets\wave1.svg" alt="" /> */}
      </Wraper>
      
    </div>
  );
}
const Wraper = styled.section`
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
    max-width: 1300px;
    margin: 0 auto;
  }

  /* Style for the content section */
  .content {
    flex: 1;
    max-width: 50%; /* Limits the width to half */
    padding-right: 2rem;
  }

  .content h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #5000ca;
  }

  .content p {
    font-size: 1rem;
    color: #555;
    margin-bottom: 1.5rem;
    line-height: 1.5;
  }

  .logo img {
    width: 50px;
    height: auto;
    margin-bottom: 1rem;
  }

  /* Button styles */
  .btn {
    border: none;
    outline: none;
    display: inline-flex;
    align-items: center;
    padding: 0.5rem 1rem;
    background: #5000ca;
    font-weight: bold;
    color: #fff;
    text-decoration: none;
    border-radius: 50px;
  }
  .btn:hover {
    background: #fff;
    border: 2px solid #5000ca;
    transition: background 0.2s ease-in;
    color: #5000ca;
  }

  .btn span {
    margin-left: 1rem;
    padding: 1rem;
    font-size: 1rem;
    color: #5000ca;
    width: 50px;
    border-radius: 50%;
    background-color: #fff;
  }
  .btn:hover span {
    background: #5000ca;
    color: #fff;
    transition: transform 0.2s ease-in;
    transform: translateX(8px);
  }

  /* Style for the image section */
  .image {
    flex: 1;
    display: flex;
    justify-content: center;
  }

  .image img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    z-index:2;
  }
    .image::after {
    content: "";
    position: relative;
    position: absolute;
    top: -1%;
    right: 59%;
    width: 33%;
    height: 50%;
      background: rgba(237, 250, 52, 0.5);
    // background: rgba(240, 139, 163, 0.3);
    border-radius: 50%;
    z-index: 0;
  }

  .image::before {
    content: "";
    position: absolute;
    top: 50%;
    right: 5%;
    width: 35%;
    height: 200px;
    background: rgba(105, 197, 250, 0.8);
    border-radius: 50%;
    z-index: 0;
  }
  @media (max-width: 768px) {
    .container {
      flex-direction: column; /* Stack items in a column */
      align-items: center;
      text-align: center; /* Center text */
    }

    .content {
      max-width: 100%; /* Full width */
      padding-right: 0; /* Remove right padding */
      margin-top: 1rem; /* Add spacing between image and content */
    }

    .image {
      margin-bottom: 1rem; /* Add spacing below image */
    }

    .content h1 {
      font-size: 2rem; /* Adjust heading size for mobile */
    }

    .content p {
      font-size: 1rem;
    }
      .image::after {
      content: "";
      position: absolute;
      top: 4%;
      right: 71%;
      width: 38%;
      height: 128px;
        background: rgba(237, 250, 52, 0.5);
      // background: rgba(240, 139, 163, 0.5);
      border-radius: 50%;
      z-index: 0;
    }
    .image::before {
      content: "";
      position: absolute;
      top: 60%;
      right: -3%;
      width: 40%;
      height: 120px;
     background: rgba(105, 197, 250, 0.4);
      border-radius: 50%;
      z-index: 0;
    }
  }
    
`;
export default ServiceC;
