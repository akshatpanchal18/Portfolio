import React from "react";
import Reviews from "./Components/Reviews";
import styled from "styled-components";
import TestHeader from "./Components/TestHeader";
import { UpSideWave } from "./Components/Svg";

function Testimonial() {
  return (
    <>
      <Wraper>
        <TestHeader />
        <Reviews />
        <UpSideWave/>
      </Wraper>
    </>
  );
}
const Wraper = styled.div`
  position: relative;
  bottom: -1px;
  svg {
    position: relative;
    top: -1px;
    overflow-clip-margin: content-box;
    overflow: clip;
  }
`;
export default Testimonial;
