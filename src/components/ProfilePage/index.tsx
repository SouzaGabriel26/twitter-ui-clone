import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
 } from './styles';


const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Gabriel Alves</h1>
        <h2>@gabrielsouzalv</h2>

        <p>
          Computer Science Student
        </p>

        <ul>
          <li>
            <LocationIcon /> 
            Espirito Santo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 26 de agosto de 2003
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>56</strong>
          </span>
          <span>
            <strong>212 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
}

export default ProfilePage;