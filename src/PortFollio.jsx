import React from "react";
import PortHeader from "./Components/PortHeader";
import Work from "./Components/Work";
import styled from "styled-components";

function PortFollio() {
  return (
    <div>
      <Wraper>
        <PortHeader />
        <Work />
        {/* <img className='svg' src="src\assets\wave.svg" alt="" /> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="auto"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#5000ca"
            fillOpacity="1"
            d="M0,160L48,138.7C96,117,192,75,288,101.3C384,128,480,224,576,245.3C672,267,768,213,864,165.3C960,117,1056,75,1152,74.7C1248,75,1344,117,1392,138.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </Wraper>
    </div>
  );
}
const Wraper = styled.section`
  position: relative;
  bottom: -8px;
`;
export default PortFollio;
