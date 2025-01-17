import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { QuoteDown, QuoteUp } from "./Svg";

const customerReviews = [
  {
    name: "Jane Doe",
    img: "https://t4.ftcdn.net/jpg/04/25/65/97/360_F_425659755_5BaLdNbbCtQbbiz1JNFBikshfiCWI5NE.jpg",
    post: "Product Designer",
    star: 5,
    comment:
      "Absolutely loved the product! The quality is top-notch, and the customer service was excellent.",
    country: '- Russia'
  },
  {
    name: "John Smith",
    img: "https://media.istockphoto.com/id/481098118/photo/my-job-fulfills-me.jpg?s=612x612&w=0&k=20&c=rWqYUEOP3AJrtSfDlWUrybPfYaWUf3JPTuzWwRsshpY=",
    post: "Software Engineer",
    star: 4,
    comment:
      "Great value for money. The product meets all my expectations, though there was a slight delay in shipping.",
    country: '- Switzerland'
  },
  {
    name: "Emily Johnson",
    img: "https://t4.ftcdn.net/jpg/05/58/99/37/360_F_558993708_t144iGxwaXV1URjTUsyQW23HI49Jj6hh.jpg",
    post: "Marketing Specialist",
    star: 5,
    comment:
      "Highly recommend! The team was very responsive and the product is exactly what I needed.",
    country: '- UK'
  },
  {
    name: "Michael Brown",
    img: "https://img.freepik.com/free-photo/close-up-handsome-professional-man-cross-arms-chest-looking-confident-camera-smiling-determined-standing-against-white-background_176420-53771.jpg?semt=ais_hybrid",
    post: "Business Analyst",
    star: 3,
    comment:
      "The product is good, but I was expecting more features based on the description.",
    country: '- USA'
  },
  {
    name: "Sarah Lee",
    img: "https://img.freepik.com/free-photo/close-up-confident-corporate-woman-professional-entrepreneur-smiling-cross-arms-chest-smiling-enthusiastic-standing-white-background_1258-85600.jpg",
    post: "Graphic Designer",
    star: 4,
    comment:
      "Beautifully designed and very functional. A bit pricey, but worth it for the quality.",
    country: '- Germany'
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
                        <QuoteUp/>
                        {review.comment}
                        <QuoteDown/>
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
                      <div style={{color:"white"}}>{review.country}</div>
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
  
  svg {
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
    font-size: 1.6em;
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
