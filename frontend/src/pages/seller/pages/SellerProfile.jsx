import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Paper, Typography, Avatar } from '@mui/material';

const SellerProfile = () => {
  const { currentUser } = useSelector(state => state.user);

  return (
    <ProfileWrapper>
      <ProfileContainer>
        <ProfileHeader elevation={3}>
          <ProfileAvatar>
            <h1>
              {currentUser ? currentUser.name[0].toUpperCase() : ''}
            </h1>
          </ProfileAvatar>
          <ProfileName variant="h4">
            {currentUser ? currentUser.name : ''}
          </ProfileName>
          <ProfileText variant="h6">
            Email : {currentUser ? currentUser.email : ''}
          </ProfileText>
          <ProfileText variant="h6">
            Role : {currentUser ? currentUser.role : ''}
          </ProfileText>
        </ProfileHeader>
      </ProfileContainer>
    </ProfileWrapper>
  );
};

export default SellerProfile;

const ProfileWrapper = styled.div`
  background-color: #2D4059; /* Dark blue background for the entire page */
  min-height: 100vh; /* Full viewport height */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #2D4059; /* Dark blue background for the container */
  border-radius: 12px; /* Optional: Rounded corners for a cleaner look */
`;

const ProfileHeader = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
`;

const ProfileAvatar = styled(Avatar)`
  padding: 30px;
  background-color: black; /* No quotes needed for color */
  margin-bottom: 10px;
`;

const ProfileName = styled(Typography)`
  padding: 20px;
`;

const ProfileText = styled(Typography)`
  margin-bottom: 10px;
`;
