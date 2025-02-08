import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Paper, Typography, Avatar, Container } from '@mui/material';
import ShippingPage from '../components/ShippingPage';

const Profile = () => {
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
            Email: {currentUser ? currentUser.email : ''}
          </ProfileText>
          <ProfileText variant="h6">
            Role: {currentUser ? currentUser.role : ''}
          </ProfileText>
        </ProfileHeader>
      </ProfileContainer>
      <Container component="main" maxWidth="sm" sx={{ mb: 4, backgroundColor: '#2d4059' }}>
        <ProfileHeader variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <ShippingPage profile="Profile" />
        </ProfileHeader>
      </Container>
    </ProfileWrapper>
  );
};

export default Profile;

const ProfileWrapper = styled.div`
  background-color: #2d4059; /* Dark blue background */
  min-height: 100vh;
  padding: 20px 0;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 16px; /* Reduced border radius */
  background-color: #2d4059; /* Ensures background is consistent */
`;

const ProfileHeader = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: black;
  background-color: #ff9a3c; /* Orange shade */
  border-radius: 12px; /* Rounded corners for header */
`;

const ProfileAvatar = styled(Avatar)`
  padding: 30px;
  background-color: #3f51b5; /* Indigo shade */
  color: #ffffff;
  font-size: 2rem;
  margin-bottom: 10px;
`;

const ProfileName = styled(Typography)`
  padding: 20px;
  color: black; /* Black text color */
`;

const ProfileText = styled(Typography)`
  margin-bottom: 10px;
  color: black; /* Black text color */
`;
