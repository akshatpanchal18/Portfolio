// ScrollToTopButton.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaChevronUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    isVisible && (
        <Wraper>
      <button onClick={scrollToTop} className="scroll-to-top">
        <FaChevronUp/>
      </button>
      </Wraper>
    )
  );
};
const Wraper=styled.section`
.scroll-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 15px;
  font-size: 16px;
  // border:2px solid #5000ca;
  background-color: #dedce0;
  color: #5000ca;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0.9;
  transition: opacity 0.3s;
}

.scroll-to-top:hover {
  opacity: 1;
}

.scroll-to-top:focus {
  outline: none;
}

`
export default ScrollToTopButton;
