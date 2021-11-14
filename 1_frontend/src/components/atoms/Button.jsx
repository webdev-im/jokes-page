import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// style
const StyledButton = styled.button`
  width: 20rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  background-color: rgba(255, 255, 255, 0.4);
  color: #ffffff;
  border: 1px solid white;
  cursor: pointer;
  z-index: 5;
  text-transform: uppercase;
  font-weight: 600;
  :hover {
    background-color: rgba(0, 0, 0, 0.4);
    color: #ffffff;
    border: 1px solid white;
  }
`;

const Button = ({ action, text, type }) => {
  return (
    <StyledButton onClick={action} type={type}>
      {text}
    </StyledButton>
  );
};

Button.propTypes = {
  action: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
export default Button;
