import React from "react";
import styled from "styled-components";

// style
const StyledFooter = styled.footer`
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    color: #890654;
  }
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <p>
        {new Date().getFullYear()} &copy; All rights reserved &nbsp;
        <span>WebDev I'm</span>
      </p>
    </StyledFooter>
  );
};
