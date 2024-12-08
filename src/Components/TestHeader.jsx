import React from "react";
import styled from "styled-components";

function TestHeader() {
  return (
    <>
      <Wraper>
        <div className="test-section">
          <h2>Testimonial</h2>
          <DividerWrapper>
            <HorizontalLine />
            <CenterSquare />
          </DividerWrapper>
          <div className="test-content">
            <p>
              <strong>What our clients says </strong>
            </p>
          </div>
        </div>
      </Wraper>
    </>
  );
}
const Wraper = styled.section`
  .test-section {
    text-align: center;
    padding: 20px;
    color: white;
    background: #5000ca;
    padding-top: 80px;
  }

  .test-section h2 {
    font-size: 3.5em;
    margin-bottom: 20px;
    max-width: 350px;
    margin: 10px auto;
    // border-bottom:2px solid #d2bcf5;
  }

  .test-content {
    display: flex;
    justify-content: center;
    gap: 20px;
    max-width: 1000px;
    margin: 0 auto;
    text-align: left;
  }

  .test-content p {
    max-width: 500px;
  }

  @media (max-width: 768px) {
    .test-content {
      flex-direction: column;
      align-items: center;
      border: none;
    }

    .test-content p {
      max-width: 100%;
    }
    .test-section {
      position: relative;
      bottom: -1px;
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
  background-color: #d2bcf5; /* Adjust color as needed */
  position: relative;
`;

const CenterSquare = styled.div`
  position: absolute;
  top: 1px;
  right: 49%;
  width: 60px; /* Adjust width as needed */
  height: 10px; /* Adjust height as needed */
  background-color: #d2bcf5; /* Adjust color as needed */

  @media (max-width: 768px) {
    right: 45%;
    width: 30px;
  }
`;
export default TestHeader;
