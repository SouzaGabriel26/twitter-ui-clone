import React from 'react';

import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSugestion from '../FollowSugestion';
import News from '../News';

import { Container, SearchWrapper, SearchInput, SearchIcon, Body } from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter"/>
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List 
            title="Talvez você curta"
            elements={[
              <FollowSugestion name="Luiz Batanero" nickname="@luizbatanero"/>,
              <FollowSugestion name="Luke Morales" nickname="@lukemorales"/>,
              <FollowSugestion name="Camila Magalhães" nickname="@camilaamgl"/>,
            ]}
          />
          <List 
            title="O que está acontecendo"
            elements={[
            <News title="Assuntos do momento no Brasil" description="Brasil Hexa"/>,
            <News title="Assuntos do momento no Brasil" description="Bootcamps da rocketseat"/>,
            <News title="Assuntos do momento no Brasil" description="Cursos acessíveis sobre tecnologia"/>,
            ]}
          />

          <List 
            title="O que está acontecendo"
            elements={[
            <News title="Assuntos do momento sobre programação" description="Estude de graça"/>,
            <News title="Assuntos do momento sobre Futebol" description="Copa do mundo"/>,
            <News title="Assuntos do momento no Brasil" description="Seleção brasileira"/>,
            ]}
          />

          <List 
            title="O que está acontecendo"
            elements={[
            <News title="Assuntos do momento sobre programação" description="Estude de graça"/>,
            <News title="Assuntos do momento sobre Futebol" description="Copa do mundo"/>,
            <News title="Assuntos do momento no Brasil" description="Seleção brasileira"/>,
            ]}
          />
          <List 
            title="O que está acontecendo"
            elements={[
            <News title="Assuntos do momento sobre programação" description="Estude de graça"/>,
            <News title="Assuntos do momento sobre Futebol" description="Copa do mundo"/>,
            <News title="Assuntos do momento no Brasil" description="Seleção brasileira"/>,
            ]}
          />
        </Body>
      </StickyBox>

      
    </Container>
  );
}

export default SideBar;