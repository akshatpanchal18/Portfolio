import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight } from "react-icons/fa";
import styled from "styled-components";
import { PenSvg } from "./Svg";
import { NavLink } from "react-router-dom";

const ServiceA = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing for the animations
      once: true, // Only animate once when in view
    });
  }, []);

  return (
    <>
      <Wraper>
        <div className="container">
          <div className="content" data-aos="fade-up">
            <div className="logo" data-aos="zoom-in">
              <PenSvg/>
            </div>
            <h1 data-aos="fade-up">Content Writing</h1>
            <p data-aos="fade-up" data-aos-delay="200">
              Content writing is the art of creating engaging, informative, and
              persuasive text tailored to your audience. Whether it’s for blogs,
              websites, or marketing campaigns, good content captivates readers,
              builds trust, and delivers value. With the right tone, style, and
              focus on quality, content writing helps brands connect with their
              audience and drive meaningful engagement.
            </p>
            <NavLink to='/content-writting' className="btn">
              Learn More
              <span>
                <FaArrowRight />
              </span>
            </NavLink>
          </div>
          <div className="image" data-aos="fade-left">
            <img src="/servic.webp" alt="Image" />
          </div>
        </div>
      </Wraper>
    </>
  );
};
const Wraper = styled.section`
  .container {
    display: flex;
    flex-direction: row-reverse;
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

  .logo svg {
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
    z-index: 2;
  }
  .image::after {
    content: "";
    position: relative;
    position: absolute;
    top: -1%;
    right: 69%;
    width: 35%;
    height: 50%;
    //   background: rgba(255, 255, 255, 0.5);
    background: rgba(240, 139, 163, 0.5);
    border-radius: 50%;
    z-index: 0;
  }

  .image::before {
    content: "";
    position: absolute;
    top: 60%;
    right: 5%;
    width: 35%;
    height: 200px;
    background: rgba(252, 180, 86, 0.8);
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
      width: 40%;
      height: 200px;
      //   background: rgba(255, 255, 255, 0.5);
      background: rgba(240, 139, 163, 0.5);
      border-radius: 50%;
      z-index: 0;
    }
    .image::before {
      content: "";
      position: absolute;
      top: 60%;
      right: -3%;
      width: 40%;
      height: 200px;
      background: rgba(252, 180, 86, 0.4);
      border-radius: 50%;
      z-index: 0;
    }
  }
  @media (max-width: 480px) {
    .image::after {
      content: "";
      position: absolute;
      top: 4%;
      right: 71%;
      width: 38%;
      height: 128px;
      //   background: rgba(255, 255, 255, 0.5);
      background: rgba(240, 139, 163, 0.5);
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
      background: rgba(252, 180, 86, 0.4);
      border-radius: 50%;
      z-index: 0;
    }
  }
`;
export default ServiceA;
