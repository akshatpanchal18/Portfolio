import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight } from "react-icons/fa";
import styled from "styled-components";

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
              {/* <img src="src/assets/pen.svg" alt="Logo" /> */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M11 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40974 4.40973 4.7157 4.21799 5.09202C4 5.51985 4 6.0799 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.0799 20 7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V12.5M15.5 5.5L18.3284 8.32843M10.7627 10.2373L17.411 3.58902C18.192 2.80797 19.4584 2.80797 20.2394 3.58902C21.0205 4.37007 21.0205 5.6364 20.2394 6.41745L13.3774 13.2794C12.6158 14.0411 12.235 14.4219 11.8012 14.7247C11.4162 14.9936 11.0009 15.2162 10.564 15.3882C10.0717 15.582 9.54378 15.6885 8.48793 15.9016L8 16L8.04745 15.6678C8.21536 14.4925 8.29932 13.9048 8.49029 13.3561C8.65975 12.8692 8.89125 12.4063 9.17906 11.9786C9.50341 11.4966 9.92319 11.0768 10.7627 10.2373Z"
                    stroke="#5000ca"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
              </svg>
            </div>
            <h1 data-aos="fade-up">Content Writing</h1>
            <p data-aos="fade-up" data-aos-delay="200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              impedit rem, doloremque autem quibusdam blanditiis harum alias hic
              accusantium maxime atque ratione magni repellat?
            </p>
            <button className="btn">
              Learn More
              <span>
                <FaArrowRight />
              </span>
            </button>
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
