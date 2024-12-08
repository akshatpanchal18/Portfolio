import React from "react";
import Reviews from "./Components/Reviews";
import styled from "styled-components";
import TestHeader from "./Components/TestHeader";

function Testimonial() {
  return (
    <>
      <Wraper>
        {/* <img className="svg" src="src\assets\wave.svg" alt="" /> */}
        <TestHeader />
        <Reviews />
        <img className="svg" src="src\assets\wave2.svg" alt="" />
      </Wraper>
    </>
  );
}
const Wraper = styled.div`
  position: relative;
  bottom:-1px;
  .svg {
  position: relative;
    top: -1px;
    overflow-clip-margin: content-box;
    overflow: clip;
  }
`;
export default Testimonial;
