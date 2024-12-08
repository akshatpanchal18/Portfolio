import React from "react";
import styled from "styled-components";

function PortHeader() {
  return (
    <div>
      <Wraper>
        <div className="test-section">
          <h2>Letest Work</h2>
          <img className="img" src="src\assets\man.svg" alt="" />
          <DividerWrapper>
            <HorizontalLine />
            <CenterSquare />
          </DividerWrapper>
          <div className="test-content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </Wraper>
    </div>
  );
}
const Wraper = styled.section`
  .test-section {
    text-align: center;
    padding: 20px;
    color: black;
    background: white;
    padding-top: 80px;
  }

  .test-section h2 {
    font-size: 3.5em;
    margin-bottom: 20px;
    max-width: 350px;
    margin: 10px auto;
    // border-bottom: 2px solid #5000ca;
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
    .img{
    position: absolute;
    width: 100px;
    top: 15%;
    right: 33%;
    }

  @media (max-width: 768px) {
    .test-content {
      flex-direction: column;
      align-items: center;
    }

    .test-content p {
      max-width: 100%;
    }
      .img{
      display:none;
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
  right: 49%;
  width: 60px; /* Adjust width as needed */
  height: 10px; /* Adjust height as needed */
  background-color: #5000ca; /* Adjust color as needed */

  @media (max-width: 768px) {
    right: 47%;
    width: 30px;
  }
`;
export default PortHeader;
