import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";
import { BsFillSendFill } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

function ContactInfo() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing for animations
      once: true, // Only animate once when in view
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace these values with your actual values from EmailJS
    const serviceID = "service_081tz4n";
    const templateID = "template_8cgrft2";
    const userID = "kPHaX83M8qEY-EZuB";

    emailjs.send(serviceID, templateID, formData, userID).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setIsSent(true);
        setFormData({ name: "", email: "", message: "" }); // Clear form
      },
      (error) => {
        console.log("FAILED...", error);
        setError("Failed to send the message. Please try again later.");
      }
    );
  };
  return (
    <div>
      <Wraper>
        <div className="contact-container">
          <div className="contact-info" data-aos="fade-right">
            <h1>100% Satisfaction Guaranteed</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aperiam
              alias optio minima, tempore architecto sint ipsam dolore tempora
              facere laboriosam corrupti!
            </p>
            <h3>What will be the next step?</h3>
            <ul>
              <li>✔ We'll prepare the proposal.</li>
              <li>✔ we'll discuss it together.</li>
              <li>✔ let's start the discussion.</li>
            </ul>
          </div>

          <div className="contact-form" data-aos="fade-left">
            <h2>Start Your Project</h2>
            {isSent && (
              <p style={{ color: "green" }}>
                Your message has been sent successfully!
              </p>
            )}
            {error && <p style={{ color: "red" }}>{error}</p>}
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <button type="submit">
                Submit <BsFillSendFill className="icon" />
              </button>
            </form>
          </div>
        </div>
      </Wraper>
    </div>
  );
}
const Wraper = styled.section`
  background: #5000ca;
  .svg {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: middle;
  }
  .contact-container {
    display: flex;
    justify-content: space-between;
    padding: 50px;
    max-width: 1200px;
    margin: 0 auto;
    background-color: #5000ca;
  }

  .contact-info {
    width: 45%;
    color: white;
  }

  .contact-info h1 {
    font-size: 2.5rem;
    font-weight: bold;
  }

  .contact-info p {
    font-size: 1rem;
    margin-top: 10px;
  }

  .contact-info h3 {
    margin-top: 30px;
    font-size: 1.5rem;
  }

  .contact-info ul {
    list-style-type: none;
    padding-left: 0;
  }

  .contact-info li {
    font-size: 1rem;
    margin-bottom: 10px;
  }

  .contact-form {
    width: 45%;
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  }

  .contact-form h2 {
    font-size: 2rem;
    font-weight: bold;
    color: #5000ca;
  }

  .contact-form input,
  .contact-form textarea {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  .contact-form textarea {
    height: 150px;
  }

  .contact-form button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 10px;
    background-color: #5000ca;
    color: white;
    font-size: 1.1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .contact-form button:hover {
    background-color: #230352;
  }
  .icon {
    font-size: 2rem;
    margin-left: 10px;
    color: white;
  }
  .contact-form button i {
    margin-left: 10px;
  }
  @media (max-width: 768px) {
    .svg {
      margin: 0;
      padding: 0;
      border: 0;
      vertical-align: middle;
      overflow: clip;
      overflow-clip-margin: contant-box;
    }
    .contact-container {
      flex-direction: column;
      align-items: center;
      padding: 20px;
    }

    .contact-info,
    .contact-form {
      width: 100%;
      margin-bottom: 20px;
    }

    .contact-info h1 {
      font-size: 2rem;
    }

    .contact-info p {
      font-size: 0.9rem;
    }

    .contact-info h3 {
      font-size: 1.2rem;
    }

    .contact-form h2 {
      font-size: 1.6rem;
    }

    .contact-form input,
    .contact-form textarea {
      font-size: 1rem;
    }

    .contact-form button {
      font-size: 1rem;
    }
  }

  /* Smaller screens (e.g., smartphones) */
  @media (max-width: 480px) {
    .contact-info h1 {
      font-size: 1.8rem;
    }

    .contact-info p {
      font-size: 0.8rem;
    }

    .contact-info h3 {
      font-size: 1rem;
    }

    .contact-form h2 {
      font-size: 1.4rem;
    }

    .contact-form input,
    .contact-form textarea {
      font-size: 0.9rem;
    }

    .contact-form button {
      font-size: 0.9rem;
    }
  }
`;
export default ContactInfo;
