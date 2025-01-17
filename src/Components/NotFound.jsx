// NotFound.js
import React from "react";
import styled from "styled-components";

const NotFound = () => {
  return (
    <Wrapper>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <a href="/">Go back to Home</a>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;

  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  a {
    font-size: 1.2rem;
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default NotFound;
