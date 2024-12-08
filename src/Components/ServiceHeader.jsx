import React from "react";
import styled from "styled-components";

function ServiceHeader() {
  return (
    <div>
      <Wraper>
        <div className="services-section">
          <h2>Our Services</h2>
          <DividerWrapper>
            <HorizontalLine />
            <CenterSquare />
          </DividerWrapper>
          <div className="services-content">
            <p className="border">
              <strong>
                Our Services Range From Initial Design To Deployment Anywhere
                Anytime
              </strong>
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur architecto magni, dicta
              maxime laborum temporibus dolorem esse doloremque illo quas nisi
              enim molestias. Tempore ducimus molestiae in dolore enim.
            </p>
          </div>
        </div>
        {/* <div className="btn-div">
            <Button href='/.pdf'  download>
          Downlod Brochure
          </Button>
          </div> */}
      </Wraper>
    </div>
  );
}
const Button = styled.button`
  padding: 1rem;
  border: none;
  outline: none;
  background: #5000ca;
  color: white;
  font-weight: bold;
  border-radius: 10px;

  &:hover {
    transform: scale(0.9);
    background: white;
    border: 2px solid #5000ca;
    color: #5000ca;
    transition: 0.1s ease-in;
  }
`;
const Wraper = styled.section`
  .services-section {
    text-align: center;
    padding: 20px;
    padding-top: 80px;
  }
  .services-section h2 {
    font-size: 3.5em;
    margin-bottom: 20px;
    max-width: 350px;
    margin: 10px auto;
    // border-bottom:2px solid #5000ce;
  }

  .services-content {
    display: flex;
    justify-content: center;
    gap: 20px;
    max-width: 1000px;
    margin: 0 auto;
    text-align: left;
  }
  .btn-div {
    max-width: 200px;
    margin: 0 auto;
    padding: 1rem;
  }

  .services-content p {
    max-width: 505px;
  }
  .border {
    border-right: 1px solid #636261;
  }
  @media (max-width: 768px) {
    .services-content {
      flex-direction: column;
      align-items: center;
    }
    .border {
      border-right: none;
    }
    .services-content p {
      max-width: 100%;
    }
  }
`;
const DividerWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const HorizontalLine = styled.div`
  width: 30%;
  margin: 0 auto;
  height: 2px;
  background-color: #5000ca; /* Adjust color as needed */
  position: relative;
`;

const CenterSquare = styled.div`
  position: absolute;
  top: 1px;
  right: 50%;
  width: 60px; /* Adjust width as needed */
  height: 10px; /* Adjust height as needed */
  background-color: #5000ca; /* Adjust color as needed */

  @media (max-width: 768px) {
    right: 45%;
    width: 30px;
  }
`;
export default ServiceHeader;
