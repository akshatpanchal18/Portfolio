import React from "react";
import ServiceA from "./Components/ServiceA";
import ServiceB from "./Components/ServiceB";
import ServiceC from "./Components/ServiceC";
import ServiceHeader from "./Components/ServiceHeader";
import styled from "styled-components";
import { DownSideWave } from "./Components/Svg";

function Services() {
  return (
    <>
      <div>
        <ServiceHeader />
        <ServiceB />
        <ServiceC />
        <ServiceA />
        <Wraper>
          <DownSideWave/>
        </Wraper>
      </div>
    </>
  );
}
const Wraper = styled.section`
  position: relative;
  bottom: -8px;
`;
export default Services;
