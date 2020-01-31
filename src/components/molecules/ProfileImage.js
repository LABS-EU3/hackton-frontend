import React from 'react';
import PropTypes from 'prop-types';
import StyledImage from '../atoms/StyledImage';

const ProfileImage = ({ name, image }) => (
  <StyledImage>
    <div>
      <img src={image} alt="" />
    </div>
    <p>{name}</p>
  </StyledImage>
);
ProfileImage.defaultProps = {
  name: '',
};
ProfileImage.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string.isRequired,
};

export default ProfileImage;