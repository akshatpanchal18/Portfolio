import React from "react";
import styled from "styled-components";
import { PenSvg } from "./Svg";

const DetailsA = () => {
  return (
    <Wrapper>
      <div className="content-writing-details">
        <h1>
          <PenSvg />
          Content Writing Services
        </h1>
        <p>
          Quality content is the backbone of any successful website. Our content
          writing services provide compelling, SEO-friendly, and engaging content
          that resonates with your target audience. Whether you need blog posts,
          website copy, or product descriptions, our team of skilled writers is
          here to help you create content that drives results.
        </p>

        <section className="writing-services">
          <h2>Our Services</h2>
          <div className="service">
            <img
              src='https://www.eslecollege.com/wp-content/uploads/2022/06/blog-post.png'
              alt="Blog Post Writing"
            />
            <h3>Blog Post Writing</h3>
            <p>
              Regularly updated blogs can help establish your authority in your
              industry. We create well-researched and engaging blog posts tailored
              to your audience.
            </p>
            <p>
              <strong>Starting at $50/post</strong>
            </p>
          </div>
          <div className="service">
            <img
              src='https://cdn.prod.website-files.com/60ef088dd8fef99352abb434/647cf2356b59fedae87535bd_what%20is%20seo%20writing.webp'
              alt="SEO Content Writing"
            />
            <h3>SEO Content Writing</h3>
            <p>
              Optimize your website's visibility with our SEO content writing
              services. We use keyword research to create content that ranks well
              on search engines.
            </p>
            <p>
              <strong>Starting at $100/page</strong>
            </p>
          </div>
          <div className="service">
            <img
              src='https://careertraining.cmich.edu/common/images/2/23106/Persuasive-Copywriting935x572.jpg'
              alt="Copywriting"
            />
            <h3>Copywriting</h3>
            <p>
              Persuasive copy is crucial for converting visitors into customers.
              Our copywriting services focus on creating compelling content that
              drives action.
            </p>
            <p>
              <strong>Starting at $75/page</strong>
            </p>
          </div>
        </section>

        <section className="features">
          <h2>Features of Our Writing Services</h2>
          <ul>
            <li>High-quality, original content tailored to your brand voice</li>
            <li>SEO optimization to improve search engine rankings</li>
            <li>Timely delivery and adherence to deadlines</li>
            <li>Unlimited revisions until you’re satisfied</li>
            <li>Content that engages and converts readers</li>
          </ul>
        </section>

        <section className="pricing">
          <h2>Pricing Plans</h2>
          <p>
            Our pricing is designed to fit different needs and budgets. Here’s a
            brief overview:
          </p>
          <ul>
            <li>
              <strong>Basic Plan:</strong> $50/post (Blog Posts, up to 800 words)
            </li>
            <li>
              <strong>Standard Plan:</strong> $100/page (SEO Content, up to 1000 words)
            </li>
            <li>
              <strong>Premium Plan:</strong> $75/page (Copywriting, tailored content)
            </li>
          </ul>
        </section>

        <section className="why-choose-us">
          <h2>Why Choose Our Content Writing Services?</h2>
          <ul>
            <li>Experienced writers with expertise in various industries</li>
            <li>In-depth research to provide accurate and informative content</li>
            <li>Strong focus on client satisfaction and feedback</li>
            <li>Flexible content strategies to meet your goals</li>
            <li>Commitment to creating content that connects with your audience</li>
          </ul>
        </section>

        <section className="get-started">
          <h2>Get Started with Quality Content</h2>
          <p>
            Ready to elevate your website with professional content? Contact us
            today to discuss your requirements and get a custom quote!
          </p>
          <button className="btn">Request a Quote</button>
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .content-writing-details {
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 100px;
    padding: 20px;
    font-family: Arial, sans-serif;
  }

  .content-writing-details h1 {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }
  
  .content-writing-details h2 {
    margin-bottom: 1rem;
  }

  .writing-services {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 20px;
  }

  .service {
    flex: 1 1 calc(33.33% - 20px);
    text-align: center;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 10px;
  }

  .service img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }

  .features ul,
  .why-choose-us ul {
    list-style: none;
    padding: 0;
  }

  .features ul li,
  .why-choose-us ul li {
    margin: 10px 0;
    font-size: 16px;
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
    .writing-services {
      flex-direction: column;
      align-items: center;
    }

    .service {
      flex: 1 1 100%;
      margin-bottom: 20px;
    }

    .content-writing-details h1 {
      font-size: 1.5rem; // Adjust heading size for smaller screens
    }

    .content-writing-details h2 {
      font-size: 1.25rem; // Adjust heading size for smaller screens
    }

    .features ul li,
    .why-choose-us ul li,
    .pricing ul li {
      font-size: 14px; // Adjust font size for smaller screens
    }

    .btn {
      font-size: 14px; // Adjust button font size for smaller screens
      padding: 8px 16px; // Adjust button padding for smaller screens
    }
  }
`;

export default DetailsA;
