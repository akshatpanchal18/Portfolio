import React from "react";
import Herosection from "./Components/Herosection";
import styled from "styled-components";
import AboutMe from "./Components/AboutMe";
import { UpSideWave } from "./Components/Svg";

function Home() {
  return (
    <div>
      <Wraper>
        <Herosection />
        <div>
          <UpSideWave/>
        </div>
      </Wraper>
    </div>
  );
}
const Wraper = styled.section`
  svg {
    position: relative;
    bottom: 10px;
  }
`;
export default Home;
