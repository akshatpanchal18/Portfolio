import React from "react";
import PortHeader from "./Components/PortHeader";
import Work from "./Components/Work";
import styled from "styled-components";
import { DownSideWave } from "./Components/Svg";

function PortFollio() {
  return (
    <div>
      <Wraper>
        <PortHeader />
        <Work />
        <DownSideWave/>
      </Wraper>
    </div>
  );
}
const Wraper = styled.section`
  position: relative;
  bottom: -8px;
`;
export default PortFollio;
