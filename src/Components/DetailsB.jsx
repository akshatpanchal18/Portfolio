import React from "react";
import styled from "styled-components";
import { WebSvg } from "./Svg";

const DetailsB = () => {
  return (
    <Wrapper>
      <div className="web-dev-details">
        <h1>
          <WebSvg />
          Web Development
        </h1>
        <p>
          Web development is at the core of modern digital presence. It involves
          creating websites and applications that are functional, responsive,
          and visually appealing. Developers utilize a combination of front-end
          and back-end technologies to ensure performance, scalability, and user
          satisfaction.
        </p>

        <section className="development-types">
          <h2>Development Types</h2>
          <div className="type">
            <img
              src="https://midriffinfosolution.org/wp-content/uploads/2022/03/web-development.jpg"
              alt="Front-End Development"
            />
            <h3>Front-End Development</h3>
            <p>
              Front-end development focuses on creating the visual and
              interactive elements of a website. It includes technologies like
              HTML, CSS, JavaScript, and frameworks such as React, Angular, or
              Vue.js.
            </p>
          </div>
          <div className="type">
            <img
              src="https://cdn.prod.website-files.com/606a802fcaa89bc357508cad/611432b386bb6d5c574f91f3_1.png"
              alt="Back-End Development"
            />
            <h3>Back-End Development</h3>
            <p>
              Back-end development handles the server, database, and application
              logic. Popular back-end technologies include Node.js, Python, Ruby
              on Rails, and PHP, often integrated with databases like MongoDB or
              PostgreSQL.
            </p>
          </div>
          <div className="type">
            <img
              src="https://ik.imagekit.io/mdzi40eohii/tsc/Full_Stack_Image_daa0e85929_mkCd6n2su.png?tr=ar-16-9,w-3000,q-75"
              alt="Full-Stack Development"
            />
            <h3>Full-Stack Development</h3>
            <p>
              Full-stack developers are proficient in both front-end and
              back-end technologies, offering end-to-end solutions for web
              application development.
            </p>
          </div>
        </section>

        <section className="pricing">
          <h2>Pricing</h2>
          <p>
            Pricing for web development projects depends on the complexity and
            scale of the work. Below is a general guideline:
          </p>
          <ul>
            <li>
              <strong>Front-End Development:</strong> Starting at $500 for basic
              websites.*
            </li>
            <li>
              <strong>Back-End Development:</strong> Starting at $1,000 for
              server-side logic and database integration.*
            </li>
            <li>
              <strong>Full-Stack Development:</strong> Starting at $2,000 for
              comprehensive solutions.*
            </li>
          </ul>
        </section>

        <section className="features">
          <h2>Features</h2>
          <ul>
            <li>Responsive design for mobile and desktop devices</li>
            <li>Cross-browser compatibility</li>
            <li>Search engine optimization (SEO) integration</li>
            <li>Third-party API integration</li>
            <li>Custom CMS development</li>
            <li>E-commerce platform integration</li>
          </ul>
        </section>

        <section className="contact">
          <h2>Get Started</h2>
          <p>
            Ready to bring your vision to life? Contact us today to discuss your
            web development needs and get a custom quote.
          </p>
          <button className="btn">Contact Us</button>
        </section>
        <small>* prices may vary based on requirements and use of resources</small>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .web-dev-details {
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 100px;
    padding: 20px;
    font-family: Arial, sans-serif;
  }

  .web-dev-details h1 {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .web-dev-details h2 {
    margin-bottom: 1rem;
  }

  .development-types {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 20px;
  }

  .type {
    flex: 1 1 calc(33.33% - 20px);
    text-align: center;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 10px;
  }

  .type img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }

  .pricing ul {
    list-style: none;
    padding: 0;
  }

  .pricing ul li {
    margin: 10px 0;
    font-size: 16px;
  }

  .btn {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .btn:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    .development-types {
      flex-direction: column;
      align-items: center;
    }

    .type {
      flex: 1 1 100%;
      margin-bottom: 20px;
    }

    .web-dev-details h1 {
      font-size: 1.5rem; // Adjust heading size for smaller screens
    }

    .web-dev-details h2 {
      font-size: 1.25rem; // Adjust heading size for smaller screens
    }

    .pricing ul li {
      font-size: 14px; // Adjust font size for smaller screens
    }

    .btn {
      font-size: 14px; // Adjust button font size for smaller screens
      padding: 8px 16px; // Adjust button padding for smaller screens
    }
  }
`;

export default DetailsB;
