import React from 'react';
import styled from 'styled-components';
import { Solid } from '../variables/colors';
import { h1FontSize } from '../variables/fonts';

const IMG = styled.img`
  margin: 0 15px 0 0;
`;

export const Social = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 0.5rem;
  a {
    color: ${Solid.SlateGrey};
    padding: 0;
    margin: 20px 15px 0 15px;
    font-size: ${h1FontSize};
    display: inline-block;
    cursor: pointer;
    i {
      font-size: 5rem;
      transition: transform 0.25s ease-in;
      margin: 0 auto;
    }
    &:hover i {
      color: ${Solid.BLUE};
    }
  }
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem;
  margin-top: 3rem;
  text-transform: uppercase;
  color: ${Solid.White};
  font-weight: 500;
  line-height: 1.4rem;

  .dividerContainer {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    font-weight: 50;
    font-size: 10px;
    p{
      width: 40%;
    }
    .divider {
      padding: 1rem;
      width: 47%;
    }
  }
`;
const SocialIcon = ({ src, alt }) => (
  <IMG src={src} alt={alt} />
);

export default SocialIcon;
