import React from 'react';
import styled from 'styled-components';

const StyledHeroImage = styled.img`
  width: 100%;
  max-width: 535px;
`;

const HeroImage = ({ src, alt }) => (
  <StyledHeroImage src={src} alt={alt} />
);

export default HeroImage;
