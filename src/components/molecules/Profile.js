import React from 'react';
import styled from 'styled-components';
import { TopNavAnchor } from '../atoms/Anchor';
import { ProfileImg } from '../atoms/ProfileImg';

const StyledProfile = styled.div`
  display: flex;
  align-items: center;
`;

const Profile = ({
  user
}) => {
  return (
    <StyledProfile>
      <ProfileImg user={user}/>
      <TopNavAnchor>{user}</TopNavAnchor>
    </StyledProfile>
  )
}

export default Profile;