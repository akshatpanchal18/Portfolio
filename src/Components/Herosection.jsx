import React, { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function Herosection() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Customize duration if needed
  }, []);
  return (
    <Wraper>
      <>
        <div className="body">
          <div className="home-container">
            <div className="content" data-aos="fade-right">
              <h1>Hey!, I'm Akshat</h1>
              <h2>Web Developer / Freelancer</h2>
              <p>
                I'm a creative and results-driven professional with expertise in
                Web Developing, blending innovative solutions with a keen eye
                for detail. Passionate about web-developing, I thrive on
                delivering impactful projects that drive success and growth.
                Let’s connect and bring ideas to life!{" "}
                <a href="/aboutme">More...</a>
              </p>

              {/* <Link className="btn">
            Get in Touch
            <span>
              <FaArrowRight />
            </span>
          </Link> */}
              <Link className="btn">
                Get in Touch
                <span>
                  <FaArrowRight className="arrow" />
                </span>
              </Link>
            </div>
            <div className="illustration" data-aos="fade-left">
              <img className="img" src="/4759504.webp" alt="Illustration" />
            </div>
          </div>
        </div>
      </>
    </Wraper>
  );
}
const Wraper = styled.section`
  /* Home.css */
  .body {
    background: #5000ca;
    // background: white;
    overflow: hidden;
    padding-top: 90px;
  }

  .home-container {
    overflow: visible;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // padding: 2rem;
    //   background: #0099ff;
    color: white;
    // color:#5000ca ;
    height: 70vh;
    max-width: 1200px;
    margin: 30px auto;
  }

  .content {
    max-width: 600px;
    //   margin:0 auto;
  }

  .content h1 {
    font-size: 4rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  .content h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  .content p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
  .content p a {
    color: white;
  }
  .btn {
    border: none;
    outline: none;
    display: inline-flex;
    align-items: center;
    padding: 0.5rem 1rem;
    background: #fff;
    font-weight: bold;
    color: #5000ca;
    text-decoration: none;
    border-radius: 50px;
  }
  .btn:hover {
    background:#5000ca;
    border: 2px solid #fff;
    transition: background 0.2s ease-in;
    color: #fff;
  }
span .arrow{
position: relative;
    bottom: 0px;

}
  .btn span {
    margin-left: 1rem;
    padding:1rem 1rem;
    font-size: 1rem;
    color: #fff;
    width: 50px;
    border-radius: 50%;
    background-color: #5000ca;
  }
  .btn:hover span {
    background: #fff;
    color: #5000ca;
    transition: transform 0.2s ease-in;
    transform: translateX(8px);
  }

  .illustration {
    position: relative;
    display: inline-block;
  }

  .illustration img {
    width: 100%; /* Ensure image is responsive */
    max-width: 500px; /* Set a max-width to avoid it becoming too large */
    height: auto;
    margin-bottom: 2rem;
    object-fit: contain;
  }
  .img {
    position: relative;
    z-index: 2;
  }

  .illustration::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    z-index: 0;
    top: 10px;
    left: -20px;
    width: 200px; /* Adjust as needed */
    height: 200px;
    // background: rgba(189, 145, 255, 0.5);
    background: rgba(255, 163, 5, 0.5);
  }
  .illustration::before {
    content: "";
    position: absolute;
    border-radius: 50%;
    z-index: 3;
    bottom: 50px;
    right: -20px;
    width: 200px; /* Adjust as needed */
    height: 200px;
    background: rgba(230, 218, 247, 0.2);
    // background: rgba(255, 5, 5, 0.2);
  }

  @media (max-width: 768px) {
    .home-container {
      flex-direction: column;
      text-align: center;
      padding: 1rem;
      height: 100vh;
      margin: 0 auto;
    }
    .img {
      position: relative;
      top: -60px;
      z-index: 2;
    }
    .content {
      margin-top: 5rem;
      max-width: 100%;
    }

    .content h1 {
      font-size: 2.5rem;
    }

    .content p {
      font-size: 1rem;
    }

    .btn {
      font-size: 0.9rem;
      padding: 0.8rem 1.5rem;
    }

    .illustration img {
      width: 90%; /* Adjust image width on smaller screens */
      margin-bottom: 1rem;
    }
    .illustration::after {
      width: 150px;
      height: 150px;
      top: 20px; /* Adjust the position */
      left: 30px;
    }

    .illustration::before {
      width: 150px;
      height: 150px;
      top: 115px;
      right: 15px;
    }
    .body {
      width: 100%;
      margin-bottom: 0; /* Remove any bottom margin */
    }
  }

  /* For mobile screens */
  @media (max-width: 480px) {
    .content h1 {
      font-size: 2rem;
    }

    .content p {
      font-size: 0.9rem;
    }

    .btn {
      font-size: 0.8rem;
      padding: 0.6rem 1.2rem;
    }

    .illustration img {
      width: 80%; /* Adjust image width on mobile */
      margin-top: 1rem;
    }

    .illustration::after {
      width: 100px;
      height: 100px;
      top: 10px;
      left: 30px; /* Adjust the position */
    }

    .illustration::before {
      width: 100px;
      height: 100px;
      top: 80px;
      right: 50px; /* Adjust the position */
    }
  }
`;
export default Herosection;
