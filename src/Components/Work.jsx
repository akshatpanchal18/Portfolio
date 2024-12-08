import React, { useEffect } from 'react'
import styled from 'styled-components'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Work() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations
      easing: 'ease-in-out', // Easing type
      once: true, // Animation occurs only once when scrolling into view
    });
  }, []);
  return (
    <div>
        <Wraper>
        <div className="card-grid">
      <div className="card" data-aos="fade-up" data-aos-delay="100">
        <div className="card-image" style={{ backgroundImage: `url(/ecom1.jpg)` }}></div>
        <a href="https://reacte-com-myshop.netlify.app/" target="_blank" rel="noopener noreferrer">
          <div className="card-info">
            <h3 className="card-title">MyShop</h3>
            <p className="card-category">E-commerce</p>
          </div>
        </a>
      </div>
      
      <div className="card" data-aos="fade-up" data-aos-delay="200">
        <div className="card-image" style={{ backgroundImage: `url(/ecom2.jpg)` }}></div>
        <a href="https://mystore-xyz.netlify.app/" target="_blank" rel="noopener noreferrer">
          <div className="card-info">
            <h3 className="card-title">My-Store</h3>
            <p className="card-category">E-commerce</p>
          </div>
        </a>
      </div>
      
      <div className="card" data-aos="fade-up" data-aos-delay="300">
        <div className="card-image" style={{ backgroundImage: `url(/temp.jpg)` }}></div>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <div className="card-info">
            <h3 className="card-title">Temp Mail</h3>
            <p className="card-category">Service</p>
          </div>
        </a>
      </div>
        {/* <div className="card">
          <div className="card-image" style={{ backgroundImage: `url(https://placehold.co/400)` }}></div>
          <a href="http://" target='_blank'>
          <div className="card-info">
            <h3 className="card-title">Temp Mail</h3>
            <p className="card-category">Service</p>
          </div>
          </a>
        </div> */}
    </div>
        </Wraper>
    </div>
  )
}
const Wraper = styled.section`
.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  // padding: 20px;
  padding: 2rem;
  max-width:1200px;
  margin:0 auto;
}

.card {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-top: 5px solid #5000ca;
  border-bottom:5px solid #5000ca;
}

.card-image {
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;
  object-fit:cover;
  transition: transform 0.3s ease, filter 0.3s ease;
}

.card:hover .card-image {
  transform: scale(1.1);
  filter: blur(5px) saturate(0.3); /* Apply blur and reduce saturation */
}

.card-info {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  // color: #5000ca;
  // color: #ff05ff;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.card:hover .card-info {
  opacity: 1;
}

.card-title {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.card-category {
  font-size: 1rem;
//   background-color: rgba(0, 0, 0, 0.5);
  padding: 5px;
  border-radius: 5px;
}

/* Mobile responsiveness */
@media screen and (max-width: 768px) {
  .card-grid {
  max-width:60%;
margin:0 auto;
    grid-template-columns: 1fr; /* Single column layout */
    gap: 15px;
    padding: 10px;
  }
  .card {
    height: 250px; /* Adjust card height for mobile */
    // max-width:50%;
    // margin:0 auto;
  }
  .card-title {
    font-size: 1.2rem; /* Adjust font size for mobile */
  }
  .card-category {
    font-size: 0.9rem; /* Adjust font size for mobile */
  }
}

@media screen and (max-width: 480px) {
.card-grid{
max-width:80%;
margin:0 auto;
}
  .card-title {
    font-size: 1rem; /* Further reduce title size for very small screens */
  }

  .card-category {
    font-size: 0.8rem; /* Further reduce category size for very small screens */
  }
}

` 
export default Work