import React from "react";
import styled from "styled-components";
import { CloudSvg } from "./Svg";

const DetailsC = () => {
  return (
    <Wrapper>
      <div className="web-hosting-details">
        <h1>
          <CloudSvg />
          Web Hosting
        </h1>
        <p>
          Web hosting provides the infrastructure to make your website
          accessible online. Whether you’re launching a small personal blog, a
          growing business website, or a high-traffic e-commerce platform,
          choosing the right hosting solution is crucial to ensuring speed,
          reliability, and security for your site.
        </p>

        <section className="hosting-types">
          <h2>Types of Hosting</h2>
          <div className="type">
            <img
              src="https://webcomkenya.com/wp-content/uploads/2022/03/webcom-shared-hosting-848x440.jpg"
              alt="Shared Hosting"
            />
            <h3>Shared Hosting</h3>
            <p>
              A cost-effective solution where multiple websites share server
              resources. Ideal for small websites or beginners.
            </p>
            <p>
              <strong>Starting at $5/month</strong>
            </p>
          </div>
          <div className="type">
            <img
              src="https://www.cloudoye.com/images/blog/vps-hosting-plan-india.jpg"
              alt="VPS Hosting"
            />
            <h3>VPS Hosting</h3>
            <p>
              Virtual Private Server (VPS) hosting offers dedicated resources on
              a shared server, ensuring better performance and scalability for
              medium-sized businesses.
            </p>
            <p>
              <strong>Starting at $20/month</strong>
            </p>
          </div>
          <div className="type">
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2024/6/428456731/ZE/ZV/DC/221715126/dedicated-server-hosting-service-500x500.jpg"
              alt="Dedicated Hosting"
            />
            <h3>Dedicated Hosting</h3>
            <p>
              A premium solution with an entire server dedicated to your
              website. Perfect for high-traffic websites and custom
              configurations.
            </p>
            <p>
              <strong>Starting at $100/month</strong>
            </p>
          </div>
        </section>

        <section className="features">
          <h2>Features</h2>
          <ul>
            <li>99.9% uptime guarantee</li>
            <li>Unlimited bandwidth and storage</li>
            <li>Free SSL certificates for enhanced security</li>
            <li>One-click app installations (e.g., WordPress, Joomla)</li>
            <li>24/7 customer support</li>
            <li>Daily backups and disaster recovery</li>
            <li>Scalable resources for growing websites</li>
          </ul>
        </section>

        <section className="pricing">
          <h2>Pricing Plans</h2>
          <p>
            Web hosting plans are designed to suit different needs and budgets.
            Below is a summary of our offerings:
          </p>
          <ul>
            <li>
              <strong>Basic Plan:</strong> $5/month (Shared Hosting, ideal for
              personal blogs)
            </li>
            <li>
              <strong>Standard Plan:</strong> $20/month (VPS Hosting, best for
              small businesses)
            </li>
            <li>
              <strong>Premium Plan:</strong> $100/month (Dedicated Hosting, for
              high-traffic sites)
            </li>
          </ul>
        </section>

        <section className="why-choose-us">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>State-of-the-art data centers</li>
            <li>Affordable pricing with no hidden fees</li>
            <li>24/7 expert support team</li>
            <li>Seamless integration with domain registration</li>
            <li>Easy-to-use control panel (cPanel/Plesk)</li>
          </ul>
        </section>

        <section className="get-started">
          <h2>Get Started Today</h2>
          <p>
            Ready to host your website? Select the plan that fits your needs and
            get online in minutes.
          </p>
          <button className="btn">Choose a Plan</button>
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .web-hosting-details {
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 100px;
    padding: 20px;
    font-family: Arial, sans-serif;
  }

  .web-hosting-details h1 {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }
  
  .web-hosting-details h2 {
    margin-bottom: 1rem;
  }

  .hosting-types {
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
    .hosting-types {
      flex-direction: column;
      align-items: center;
    }

    .type {
      flex: 1 1 100%;
      margin-bottom: 20px;
    }

    .web-hosting-details h1 {
      font-size: 1.5rem; // Adjust heading size for smaller screens
    }

    .web-hosting-details h2 {
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

export default DetailsC;
