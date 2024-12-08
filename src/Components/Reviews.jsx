import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const customerReviews = [
  {
    name: "Jane Doe",
    img: "https://t4.ftcdn.net/jpg/04/25/65/97/360_F_425659755_5BaLdNbbCtQbbiz1JNFBikshfiCWI5NE.jpg",
    post: "Product Designer",
    star: 5,
    comment:
      "Absolutely loved the product! The quality is top-notch, and the customer service was excellent.",
    country:
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#fff"></rect><path fill="#be2a2a" d="M31 14L18 14 18 4 14 4 14 14 1 14 1 18 14 18 14 28 18 28 18 18 31 18 31 14z"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path></svg>,
  },
  {
    name: "John Smith",
    img: "https://media.istockphoto.com/id/481098118/photo/my-job-fulfills-me.jpg?s=612x612&w=0&k=20&c=rWqYUEOP3AJrtSfDlWUrybPfYaWUf3JPTuzWwRsshpY=",
    post: "Software Engineer",
    star: 4,
    comment:
      "Great value for money. The product meets all my expectations, though there was a slight delay in shipping.",
    country:
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="#cc2b1d" d="M1 11H31V21H1z"></path><path d="M5,4H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z"></path><path d="M5,20H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z" transform="rotate(180 16 24)" fill="#f8d147"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path></svg>,
  },
  {
    name: "Emily Johnson",
    img: "https://t4.ftcdn.net/jpg/05/58/99/37/360_F_558993708_t144iGxwaXV1URjTUsyQW23HI49Jj6hh.jpg",
    post: "Marketing Specialist",
    star: 5,
    comment:
      "Highly recommend! The team was very responsive and the product is exactly what I needed.",
    country:
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#061b65"></rect><path d="M6.5,13.774v2.226h4v-2.227l3.037,2.227h2.463v-1.241l-3.762-2.759h3.762v-4h-2.74l2.74-2.009v-1.991h-1.441l-4.059,2.977v-2.977H6.5v2.794l-3.257-2.389c-.767,.374-1.389,.983-1.786,1.738l2.532,1.858H1s0,0,0,0v4h3.763l-3.763,2.76v1.24H3.464l3.036-2.226Z" fill="#fff"></path><path d="M1.805,5.589l3.285,2.411h1.364L2.359,4.995c-.204,.18-.39,.377-.554,.594Z" fill="#d22d32"></path><path fill="#d22d32" d="M1 16L6.454 12 6.454 13 2.363 16 1 16z"></path><path id="1705926025352-5861297_Star7" d="M6.838,18.741l.536,1.666,1.636-.62-.968,1.457,1.505,.893-1.743,.152,.24,1.733-1.205-1.268-1.205,1.268,.24-1.733-1.743-.152,1.505-.893-.968-1.457,1.636,.62,.536-1.666Z" fill="#fff"></path><path id="1705926025352-5861297_Star7-2" d="M23.113,21.755l.291,.906,.89-.337-.527,.793,.819,.486-.948,.082,.131,.943-.656-.69-.656,.69,.131-.943-.948-.082,.819-.486-.527-.793,.89,.337,.291-.906Z" fill="#fff"></path><path id="1705926025352-5861297_Star7-3" d="M20.166,13.127l.291,.906,.89-.337-.527,.793,.819,.486-.948,.082,.131,.943-.656-.69-.656,.69,.131-.943-.948-.082,.819-.486-.527-.793,.89,.337,.291-.906Z" fill="#fff"></path><path id="1705926025352-5861297_Star7-4" d="M23.43,7.127l.291,.906,.89-.337-.527,.793,.819,.486-.948,.082,.131,.943-.656-.69-.656,.69,.131-.943-.948-.082,.819-.486-.527-.793,.89,.337,.291-.906Z" fill="#fff"></path><path id="1705926025352-5861297_Star7-5" d="M28.132,10.817l.291,.906,.89-.337-.527,.793,.819,.486-.948,.082,.131,.943-.656-.69-.656,.69,.131-.943-.948-.082,.819-.486-.527-.793,.89,.337,.291-.906Z" fill="#fff"></path><path id="1705926025352-5861297_Star5" d="M25.742,16l.23,.565,.608,.045-.466,.393,.146,.592-.518-.321-.518,.321,.146-.592-.466-.393,.608-.045,.23-.565Z" fill="#fff"></path><path fill="#d22d32" d="M9.5 16L7.5 16 7.5 11 1 11 1 9 7.5 9 7.5 4 9.5 4 9.5 9 16 9 16 11 9.5 11 9.5 16z"></path><path fill="#d22d32" d="M16 15.667L11 12 11 13 15.091 16 16 16 16 15.667z"></path><path fill="#d22d32" d="M16 4L15.752 4 10.291 8.004 11.655 8.004 16 4.818 16 4z"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path></svg>,
  },
  {
    name: "Michael Brown",
    img: "https://img.freepik.com/free-photo/close-up-handsome-professional-man-cross-arms-chest-looking-confident-camera-smiling-determined-standing-against-white-background_176420-53771.jpg?semt=ais_hybrid",
    post: "Business Analyst",
    star: 3,
    comment:
      "The product is good, but I was expecting more features based on the description.",
    country:
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#fff"></rect><path d="M1.638,5.846H30.362c-.711-1.108-1.947-1.846-3.362-1.846H5c-1.414,0-2.65,.738-3.362,1.846Z" fill="#a62842"></path><path d="M2.03,7.692c-.008,.103-.03,.202-.03,.308v1.539H31v-1.539c0-.105-.022-.204-.03-.308H2.03Z" fill="#a62842"></path><path fill="#a62842" d="M2 11.385H31V13.231H2z"></path><path fill="#a62842" d="M2 15.077H31V16.923000000000002H2z"></path><path fill="#a62842" d="M1 18.769H31V20.615H1z"></path><path d="M1,24c0,.105,.023,.204,.031,.308H30.969c.008-.103,.031-.202,.031-.308v-1.539H1v1.539Z" fill="#a62842"></path><path d="M30.362,26.154H1.638c.711,1.108,1.947,1.846,3.362,1.846H27c1.414,0,2.65-.738,3.362-1.846Z" fill="#a62842"></path><path d="M5,4h11v12.923H1V8c0-2.208,1.792-4,4-4Z" fill="#102d5e"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path><path fill="#fff" d="M4.601 7.463L5.193 7.033 4.462 7.033 4.236 6.338 4.01 7.033 3.279 7.033 3.87 7.463 3.644 8.158 4.236 7.729 4.827 8.158 4.601 7.463z"></path><path fill="#fff" d="M7.58 7.463L8.172 7.033 7.441 7.033 7.215 6.338 6.989 7.033 6.258 7.033 6.849 7.463 6.623 8.158 7.215 7.729 7.806 8.158 7.58 7.463z"></path><path fill="#fff" d="M10.56 7.463L11.151 7.033 10.42 7.033 10.194 6.338 9.968 7.033 9.237 7.033 9.828 7.463 9.603 8.158 10.194 7.729 10.785 8.158 10.56 7.463z"></path><path fill="#fff" d="M6.066 9.283L6.658 8.854 5.927 8.854 5.701 8.158 5.475 8.854 4.744 8.854 5.335 9.283 5.109 9.979 5.701 9.549 6.292 9.979 6.066 9.283z"></path><path fill="#fff" d="M9.046 9.283L9.637 8.854 8.906 8.854 8.68 8.158 8.454 8.854 7.723 8.854 8.314 9.283 8.089 9.979 8.68 9.549 9.271 9.979 9.046 9.283z"></path><path fill="#fff" d="M12.025 9.283L12.616 8.854 11.885 8.854 11.659 8.158 11.433 8.854 10.702 8.854 11.294 9.283 11.068 9.979 11.659 9.549 12.251 9.979 12.025 9.283z"></path><path fill="#fff" d="M6.066 12.924L6.658 12.494 5.927 12.494 5.701 11.799 5.475 12.494 4.744 12.494 5.335 12.924 5.109 13.619 5.701 13.19 6.292 13.619 6.066 12.924z"></path><path fill="#fff" d="M9.046 12.924L9.637 12.494 8.906 12.494 8.68 11.799 8.454 12.494 7.723 12.494 8.314 12.924 8.089 13.619 8.68 13.19 9.271 13.619 9.046 12.924z"></path><path fill="#fff" d="M12.025 12.924L12.616 12.494 11.885 12.494 11.659 11.799 11.433 12.494 10.702 12.494 11.294 12.924 11.068 13.619 11.659 13.19 12.251 13.619 12.025 12.924z"></path><path fill="#fff" d="M13.539 7.463L14.13 7.033 13.399 7.033 13.173 6.338 12.947 7.033 12.216 7.033 12.808 7.463 12.582 8.158 13.173 7.729 13.765 8.158 13.539 7.463z"></path><path fill="#fff" d="M4.601 11.104L5.193 10.674 4.462 10.674 4.236 9.979 4.01 10.674 3.279 10.674 3.87 11.104 3.644 11.799 4.236 11.369 4.827 11.799 4.601 11.104z"></path><path fill="#fff" d="M7.58 11.104L8.172 10.674 7.441 10.674 7.215 9.979 6.989 10.674 6.258 10.674 6.849 11.104 6.623 11.799 7.215 11.369 7.806 11.799 7.58 11.104z"></path><path fill="#fff" d="M10.56 11.104L11.151 10.674 10.42 10.674 10.194 9.979 9.968 10.674 9.237 10.674 9.828 11.104 9.603 11.799 10.194 11.369 10.785 11.799 10.56 11.104z"></path><path fill="#fff" d="M13.539 11.104L14.13 10.674 13.399 10.674 13.173 9.979 12.947 10.674 12.216 10.674 12.808 11.104 12.582 11.799 13.173 11.369 13.765 11.799 13.539 11.104z"></path><path fill="#fff" d="M4.601 14.744L5.193 14.315 4.462 14.315 4.236 13.619 4.01 14.315 3.279 14.315 3.87 14.744 3.644 15.44 4.236 15.01 4.827 15.44 4.601 14.744z"></path><path fill="#fff" d="M7.58 14.744L8.172 14.315 7.441 14.315 7.215 13.619 6.989 14.315 6.258 14.315 6.849 14.744 6.623 15.44 7.215 15.01 7.806 15.44 7.58 14.744z"></path><path fill="#fff" d="M10.56 14.744L11.151 14.315 10.42 14.315 10.194 13.619 9.968 14.315 9.237 14.315 9.828 14.744 9.603 15.44 10.194 15.01 10.785 15.44 10.56 14.744z"></path><path fill="#fff" d="M13.539 14.744L14.13 14.315 13.399 14.315 13.173 13.619 12.947 14.315 12.216 14.315 12.808 14.744 12.582 15.44 13.173 15.01 13.765 15.44 13.539 14.744z"></path></svg>,
  },
  {
    name: "Sarah Lee",
    img: "https://img.freepik.com/free-photo/close-up-confident-corporate-woman-professional-entrepreneur-smiling-cross-arms-chest-smiling-enthusiastic-standing-white-background_1258-85600.jpg",
    post: "Graphic Designer",
    star: 4,
    comment:
      "Beautifully designed and very functional. A bit pricey, but worth it for the quality.",
    country:
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#071b65"></rect><path d="M5.101,4h-.101c-1.981,0-3.615,1.444-3.933,3.334L26.899,28h.101c1.981,0,3.615-1.444,3.933-3.334L5.101,4Z" fill="#fff"></path><path d="M22.25,19h-2.5l9.934,7.947c.387-.353,.704-.777,.929-1.257l-8.363-6.691Z" fill="#b92932"></path><path d="M1.387,6.309l8.363,6.691h2.5L2.316,5.053c-.387,.353-.704,.777-.929,1.257Z" fill="#b92932"></path><path d="M5,28h.101L30.933,7.334c-.318-1.891-1.952-3.334-3.933-3.334h-.101L1.067,24.666c.318,1.891,1.952,3.334,3.933,3.334Z" fill="#fff"></path><rect x="13" y="4" width="6" height="24" fill="#fff"></rect><rect x="1" y="13" width="30" height="6" fill="#fff"></rect><rect x="14" y="4" width="4" height="24" fill="#b92932"></rect><rect x="14" y="1" width="4" height="30" transform="translate(32) rotate(90)" fill="#b92932"></rect><path d="M28.222,4.21l-9.222,7.376v1.414h.75l9.943-7.94c-.419-.384-.918-.671-1.471-.85Z" fill="#b92932"></path><path d="M2.328,26.957c.414,.374,.904,.656,1.447,.832l9.225-7.38v-1.408h-.75L2.328,26.957Z" fill="#b92932"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path></svg>,
  },
];
function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalTestimonials = customerReviews.length;
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  // Function to change the current index of the slider
  const moveSlide = (step) => {
    let newIndex = currentIndex + step;
    if (newIndex < 0) {
      newIndex = totalTestimonials - 1; // Loop back to the last item
    } else if (newIndex >= totalTestimonials) {
      newIndex = 0; // Loop back to the first item
    }
    setCurrentIndex(newIndex);
  };

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      moveSlide(1);
    }, 3000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [currentIndex]);

  return (
    <div>
      <Wraper>
        {/* <img src="src\assets\wave1.svg" alt="" /> */}
        <div className="body">
          <div className="testimonial-container">
            <div
              className="testimonial-slider"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                transition: "transform 0.5s ease",
              }}
            >
              {customerReviews.map((review, index) => {
                const starRating =
                  "★".repeat(review.star) + "☆".repeat(5 - review.star);
                return (
                  <div
                    key={index}
                    className="testimonial-item"
                    data-aos="fade-up"
                    data-aos-delay={`${index * 100}`}
                  >
                    <div className="testimonial-details">
                      <p className="testimonial-comment">
                        <img
                          className="quotes"
                          src="src/assets/q1.svg"
                          alt=""
                        />
                        {review.comment}
                        <img
                          className="quotes"
                          src="src/assets/q2.svg"
                          alt=""
                        />
                      </p>

                      <div className="testimonial-stars">{starRating}</div>
                    </div>
                    <div className="data-b">
                      <img
                        src={review.img}
                        alt={review.name}
                        className="testimonial-img"
                        data-aos="zoom-in"
                      />
                      <div className="testimonial-name">{review.name}</div>
                      <div className="testimonial-post">{review.post}</div>
                      <div>{review.country}</div>
                    </div>
                  </div>
                );
              })}
            </div>
            <button
              className="testimonial-prev"
              onClick={() => moveSlide(-1)}
              data-aos="fade-right"
            >
              <FaChevronLeft />
            </button>
            <button
              className="testimonial-next"
              onClick={() => moveSlide(1)}
              data-aos="fade-left"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </Wraper>
    </div>
  );
}
const Wraper = styled.div`
  .body {
    margin: 0;
    padding: 0;
    background: #5000ca;
  }
  .testimonial-container {
    position: relative;
    // max-width: 1200px;
    max-width: 100%;
    height: 50vh;
    margin: 0 auto;
    overflow: hidden;
  }
  .quotes {
    width: 30px;
  }
  .testimonial-slider {
    display: flex;
    flex-direction: row;
  }
  .data-b {
    // padding:1em;
    max-width: 30%;
    margin: 20px auto;
    position: relative;
    top: -14%;
  }
  .testimonial-item {
    min-width: 100%;
    padding: 20px;
    box-sizing: border-box;
    text-align: center;
  }

  .testimonial-comment {
    font-size: 1.5em;
    font-style: italic;
    color: white;
  }

  .testimonial-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    padding: 1em;
    background: #d2bcf5;
    border-radius: 10px;
    max-width: 900px;
    margin: 0 auto;
    height: 150px;
    z-index: 0;
  }

  .testimonial-stars {
    color: #5000ce;
    font-size: 1.5em;
  }

  .testimonial-img {
    border-radius: 50%;
    border: 5px solid #c09afc;
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin-top: 10px;
    z-index: 1;
  }

  .testimonial-name {
    font-size: 2rem;
    font-weight: bold;
    margin-top: 10px;
    color: white;
  }

  .testimonial-post {
    font-size: 0.9em;
    color: white;
  }

  .testimonial-prev,
  .testimonial-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 2em;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: #fff;
    padding: 10px;
    z-index: 10;
  }

  .testimonial-prev {
    left: 10px;
  }

  .testimonial-next {
    right: 10px;
  }

  .testimonial-prev:hover,
  .testimonial-next:hover {
    color: #ffd700;
  }
  @media (max-width: 768px) {
    .testimonial-item {
      // padding-top: 40px; /* Reduce space for smaller screens */
    }

    .testimonial-comment {
      font-size: 1.1em; /* Slightly smaller comment text */
    }

    .testimonial-stars {
      font-size: 1.3em; /* Adjust star size */
    }

    .testimonial-img-container {
      position: relative;
      top: -40px; /* Reduce image overlap */
      width: 80px; /* Reduce image size */
      height: 80px; /* Adjust height */
      margin-bottom: 15px;
    }

    .testimonial-img {
      width: 30%;
      height: -1%;
      border-radius: 50%;
      object-fit: cover;
    }

    .testimonial-name {
      font-size: 1.1em; /* Slightly larger name font on mobile */
    }

    .testimonial-post {
      font-size: 0.9em; /* Keep post size readable on mobile */
    }

    .testimonial-prev,
    .testimonial-next {
      font-size: 1.5em; /* Smaller navigation buttons */
      padding: 8px;
    }
    .data-b {
      top: -19%;
      max-width: 50%;
    }
  }

  /* Extra small mobile screens */
  @media (max-width: 480px) {
    .testimonial-img-container {
      width: 70px;
      height: 70px; /* Further reduce image size for very small screens */
      top: -30px; /* Slight adjustment to image overlap */
    }

    .testimonial-comment {
      font-size: 1em; /* Further reduce font size for very small screens */
    }

    .testimonial-stars {
      font-size: 1.2em; /* Further adjust stars for smaller screens */
    }

    .testimonial-name {
      font-size: 1em; /* Adjust name font size */
    }

    .testimonial-post {
      font-size: 0.8em; /* Adjust post font size */
    }

    .testimonial-prev,
    .testimonial-next {
      font-size: 1.3em; /* Further reduce button size */
      padding: 6px;
    }
    .data-b {
      top: -14%;
      max-width: 100%;
    }
  }
`;
export default Reviews;
