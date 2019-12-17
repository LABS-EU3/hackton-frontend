import React from 'react';
import styled from 'styled-components';
import * as Fonts from '../variables/fonts';
import * as Colors from '../variables/colors';

const I = styled.input`
  ${Fonts.type.ROBOTO_MONO};
  font-size: 16px;
  font-weight: 500;
  color: ${Colors.Solid.BLACK};
  border: 1px solid ${Colors.Solid.BORDER_GREY};
  border-radius: 6px;
  padding: 10px;
`;

const Input = (props) => {
  const { type, placeholder } = props;
  return <I type={type} placeholder={placeholder} />;
};

export default Input;
