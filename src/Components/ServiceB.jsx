import React, { useEffect } from "react";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function ServiceB() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing for the animations
      once: true, // Only animate once when in view
    });
  }, []);
  return (
    <div>
      <Wraper>
        <div className="container">
          <div className="content" data-aos="fade-up">
            <div className="logo" data-aos="zoom-in">
              {/* <img src="src/assets/code.svg" alt="Logo" /> */}
              <svg
                fill="#5000ce"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 419.931 419.931"
                xmlSpace="preserve"
                stroke="#5000ce"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <g>
                      <path d="M282.895,352.367c-2.176-1.324-4.072-3.099-5.579-5.25c-0.696-0.992-1.284-2.041-1.771-3.125H28.282V100.276h335.624 v159.138c7.165,0.647,13.177,5.353,15.701,11.797c2.235-1.225,4.726-1.982,7.344-2.213c1.771-0.154,3.53-0.044,5.236,0.293 V39.561c0-12.996-10.571-23.569-23.566-23.569H23.568C10.573,15.992,0,26.565,0,39.561v309.146 c0,12.996,10.573,23.568,23.568,23.568h257.179c-2.007-4.064-2.483-8.652-1.302-13.066 C280.126,356.67,281.304,354.354,282.895,352.367z M338.025,55.569c0-4.806,3.896-8.703,8.702-8.703h8.702 c4.807,0,8.702,3.896,8.702,8.703v9.863c0,4.806-3.896,8.702-8.702,8.702h-8.702c-4.807,0-8.702-3.896-8.702-8.702V55.569z M297.56,55.569c0-4.806,3.896-8.703,8.702-8.703h8.703c4.807,0,8.702,3.896,8.702,8.703v9.863c0,4.806-3.896,8.702-8.702,8.702 h-8.703c-4.806,0-8.702-3.896-8.702-8.702V55.569z M257.094,55.569c0-4.806,3.897-8.703,8.702-8.703h8.702 c4.807,0,8.703,3.896,8.703,8.703v9.863c0,4.806-3.896,8.702-8.703,8.702h-8.702c-4.805,0-8.702-3.896-8.702-8.702V55.569z"></path>
                      <path d="M419.875,335.77l-2.615-14.83c-0.353-1.997-2.256-3.331-4.255-2.979l-13.188,2.324c-1.583-3.715-3.605-7.195-6.005-10.38 l8.614-10.268c0.626-0.744,0.931-1.709,0.847-2.68c-0.086-0.971-0.554-1.867-1.3-2.494l-11.534-9.68 c-0.746-0.626-1.713-0.93-2.683-0.845c-0.971,0.085-1.867,0.552-2.493,1.298l-8.606,10.26c-3.533-1.8-7.312-3.188-11.271-4.104 v-13.392c0-2.028-1.645-3.674-3.673-3.674h-15.06c-2.027,0-3.673,1.646-3.673,3.674v13.392 c-3.961,0.915-7.736,2.304-11.271,4.104l-8.608-10.259c-1.304-1.554-3.62-1.756-5.175-0.453l-11.535,9.679 c-0.746,0.627-1.213,1.523-1.299,2.494c-0.084,0.971,0.22,1.937,0.846,2.683l8.615,10.266c-2.396,3.184-4.422,6.666-6.005,10.38 l-13.188-2.325c-1.994-0.351-3.901,0.982-4.255,2.979l-2.614,14.83c-0.169,0.959,0.05,1.945,0.607,2.744 c0.561,0.799,1.41,1.342,2.37,1.511l13.198,2.326c0.215,4.089,0.927,8.045,2.073,11.812l-11.6,6.695 c-0.844,0.485-1.459,1.289-1.712,2.229c-0.252,0.941-0.119,1.943,0.367,2.787l7.529,13.041c0.485,0.844,1.289,1.459,2.229,1.711 c0.313,0.084,0.632,0.125,0.951,0.125c0.639,0,1.272-0.166,1.836-0.492l11.609-6.703c2.73,2.925,5.812,5.517,9.18,7.709 l-4.584,12.593c-0.332,0.916-0.289,1.926,0.123,2.809s1.157,1.566,2.072,1.898l14.148,5.149c0.406,0.148,0.832,0.224,1.257,0.224 c0.53,0,1.063-0.115,1.554-0.345c0.883-0.411,1.564-1.157,1.897-2.073l4.583-12.593c1.965,0.238,3.965,0.361,5.994,0.361 s4.029-0.125,5.994-0.361l4.584,12.593c0.332,0.916,1.016,1.662,1.897,2.073c0.49,0.229,1.021,0.345,1.554,0.345 c0.424,0,0.85-0.074,1.256-0.224l14.15-5.149c0.913-0.332,1.659-1.017,2.07-1.898c0.412-0.883,0.456-1.893,0.123-2.809 l-4.584-12.591c3.365-2.192,6.447-4.786,9.18-7.709l11.609,6.703c0.563,0.324,1.197,0.492,1.836,0.492 c0.318,0,0.64-0.043,0.951-0.125c0.941-0.252,1.743-0.869,2.229-1.711l7.529-13.043c0.486-0.842,0.619-1.846,0.367-2.787 c-0.253-0.938-0.868-1.742-1.712-2.229l-11.598-6.693c1.145-3.771,1.857-7.725,2.073-11.814l13.198-2.326 c0.96-0.169,1.809-0.712,2.37-1.511C419.826,337.715,420.044,336.729,419.875,335.77z"></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <h1 data-aos="fade-up">Web Developing</h1>
            <p data-aos="fade-up" data-aos-delay="200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              impedit rem, doloremque autem quibusdam blanditiis harum alias hic
              accusantium maxime atque ratione magni repellat?
            </p>
            {/* <button className="btn" data-aos="fade-up" data-aos-delay="400"> */}
            <button className="btn">
              Learn More
              <span>
                <FaArrowRight />
              </span>
            </button>
          </div>
          <div className="image" data-aos="fade-right">
            <img src="/service-2.png" alt="Image" />
          </div>
        </div>
      </Wraper>
    </div>
  );
}
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
    width: 37%;
    height: 50%;
    //   background: rgba(255, 255, 255, 0.5);
    background: rgba(119, 250, 105, 0.5);
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
    // background: rgba(252, 180, 86, 0.5);
    background: rgba(243, 52, 250, 0.4);
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
      background: rgba(119, 250, 105, 0.5);
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
      // background: rgba(252, 180, 86, 0.5);
      background: rgba(243, 52, 250, 0.4);
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
      background: rgba(119, 250, 105, 0.5);
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
      background: rgba(243, 52, 250, 0.8);
      // background: rgba(252, 180, 86, 0.4);
      border-radius: 50%;
      z-index: 0;
    }
  }
`;
export default ServiceB;
