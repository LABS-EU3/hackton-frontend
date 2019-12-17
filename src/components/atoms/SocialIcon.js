import React from 'react';
import styled from 'styled-components';

const IMG = styled.img`
  margin: 0 15px 0 0;
`;

const SocialIcon = ({ src, alt }) => (
  <IMG src={src} alt={alt} />
);

export default SocialIcon;
