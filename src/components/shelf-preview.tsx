import React, { FC } from 'react';
import styled from '@emotion/styled';

import { BackgroundImageContainer, FlexContainer, MainContainer } from './styles';
import { GraphcmsShelf } from '../models/graphcms/assets';

interface ShelfFrameProps {
  backgroundColor?: string;
}

const ShelfFrame = styled.div<ShelfFrameProps>`
  background-color: ${(props): string => props.backgroundColor as string};
  position: relative;
  top: 4em;
  border-radius: 2em;
  padding: 2em;
  max-width: 30em;
`;

interface TitleProps {
  titleColor?: string;
}

const Title = styled.h2<TitleProps>`
  color: ${props => props.titleColor};
  text-transform: uppercase;
  font-size: 2em;
  font-family: 'Oswald', 'sans-serif';
  font-style: italic;
  letter-spacing: 0.1em;
`;

const Text = styled.p`
  color: white;
  padding: 0.5em 0;
  font-family: 'Open Sans', sans-serif;
  text-align: justify;
`;

const Button = styled.button`
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);

  border-radius: 2em;
  color: white;
  font-weight: bold;
  display: inline-block;
  cursor: pointer;
  font-size: 1em;
  padding: 10px 20px;
  text-shadow: 0px 3px 0px #0093e9;
  box-shadow: inset 0px 1px 0px 0px #d9fbbe;
  border: none;
  font-family: 'Ubuntu Condensed', sans-serif;
  font-style: italic;
  letter-spacing: 0.2em;
  line-height: 0.7em;
`;

interface ShelfPreviewProps {
  shelf: GraphcmsShelf;
  even: boolean;
}

const ShelfPreview: FC<ShelfPreviewProps> = ({ shelf, even }) => (
  <BackgroundImageContainer
    backgroundImage={shelf.backgroundImage}
    backgroundSize="cover"
    backgroundPosition="center"
    backgroundAttachment="fixed"
  >
    <MainContainer>
      <FlexContainer reverse={even}>
        <ShelfFrame backgroundColor={shelf.backgroundColor.css}>
          <Title titleColor={shelf.titleColor.css}>{shelf.name}</Title>
          <Text>{shelf.description}</Text>
          <Button>En voir plus</Button>
        </ShelfFrame>
      </FlexContainer>
    </MainContainer>
  </BackgroundImageContainer>
);

export default ShelfPreview;
