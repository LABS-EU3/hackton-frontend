import React from 'react';

import WideFooter from '../../components/atoms/WideFooter';
import FooterContainer from '../../components/atoms/FooterContainer';
import Group from '../../components/atoms/Group';
import SocialIcon from '../../components/atoms/SocialIcon';
import { FooterNavAnchor } from '../../components/atoms/Anchor';
import Paragraph from '../../components/atoms/Paragraph';

import linkedin from '../../assets/Icon-linkedin.png';
import twitter from '../../assets/Icon-twitter.png';
import facebook from '../../assets/Icon-facebook.png';

const Footer = () => (
  <WideFooter>
    <FooterContainer>
      <Group>
        <SocialIcon src={linkedin} alt="LinkedIn" />
        <SocialIcon src={twitter} alt="Twitter" />
        <SocialIcon src={facebook} alt="Facebook" />
      </Group>

      <Group>
        <FooterNavAnchor href="#">Team</FooterNavAnchor>
        <FooterNavAnchor href="#">Privacy</FooterNavAnchor>
        <FooterNavAnchor href="#">Contacts</FooterNavAnchor>
      </Group>

      <Group>
        <Paragraph>
          International Crafters © 2020
        </Paragraph>
      </Group>
    </FooterContainer>
  </WideFooter>
);

export default Footer;
