import React from 'react';
import styled from 'styled-components';

import * as Colors from './../variables/colors';

const DIV = styled.div`
  max-width: 380px;
  padding: 60px 40px;
  border: 1px solid ${Colors.Solid.BORDER_GREY};
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
`;

const Container = ({ children }) => (
  <DIV>{children}</DIV>
);

export default Container;