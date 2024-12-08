import React, { useState } from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MenuContainer>
      <Logo onClick={toggleDropdown}>+</Logo>
      {isOpen && (
        <Dropdown>
          <SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </SocialLink>
          <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </SocialLink>
          <SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </SocialLink>
          <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </SocialLink>
        </Dropdown>
      )}
    </MenuContainer>
  );
};

// Styled components
const MenuContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const Logo = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #9b27b0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #7a1e90;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 60px; /* Adjust based on logo size */
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  z-index: 10;
`;

const SocialLink = styled.a`
  color: #9b27b0;
  font-size: 24px;
  transition: color 0.3s ease;

  &:hover {
    color: #7a1e90;
  }
`;

export default DropdownMenu;
