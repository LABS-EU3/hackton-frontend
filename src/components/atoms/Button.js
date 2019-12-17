import React from 'react';
import styled from 'styled-components';

const BTN = styled.button`
  color: #FFFFFF;
  height: 43px;
  padding: 12px 22px;
  border-radius: 6px;
  border: 0;
  background-image: ${(props) => props.color};

  &:hover {
    cursor: pointer;
  }
`;

const Button = ({ children, color, ...props }) => {
  return <BTN type="button" color={color}>{children}</BTN>;
};

export default Button;
