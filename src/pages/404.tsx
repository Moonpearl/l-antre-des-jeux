import React, { FC } from 'react';
import { Link } from 'gatsby';

import Page from '../components/Page';
import Container from '../components/Container';
import IndexLayout from '../layouts';
import styled from '@emotion/styled';


const Bg = styled.div`
background-color: #154360;
`;

const ContainerText = styled.div`
justify-content: center;
vertical-align: center;
margin: 15em auto;
color: white;

`;

const Title = styled.h1`
text-align: center;
font-weight: bold;
font-size: 6em;
color: #2980B9;
margin-bottom: 0.2em;
font-family: 'Oswald', sans-serif;


`;

const Text = styled.p`
text-align: center;
letter-spacing: 0.2em;
font-size: 1em;
font-family: 'Oswald', sans-serif;
`;

const LinkStyled = styled.p`
color: #2980B9;
font-weight: bold;
font-style: italic;
letter-spacing: 0.2em;
margin-top: 2em;
border: 1px solid;
padding: 1em;
transition: background-color 0.3s ease;
font-family: 'Oswald', sans-serif;
border-radius: 2em;

&:hover{
  background-color: #2980B9;
  color: white;
}
`;



const NotFoundPage: FC = () => (
  <IndexLayout>
    <Bg>
      <Page>

        <Container>

          <ContainerText>
            <Title>Oups !</Title>
            <Text>Cette page n'existe pas.</Text>
            <Text>Veuillez relancer votre dé et ...</Text>
            <Text> <LinkStyled><Link to="/">Revenir à la case départ</Link></LinkStyled></Text>
          </ContainerText>

        </Container>

      </Page>
    </Bg>
  </IndexLayout >
);

export default NotFoundPage;
