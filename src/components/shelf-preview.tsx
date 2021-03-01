import React, { FC } from 'react';
import styled from '@emotion/styled';

import { BackgroundImageContainer, Filler, FlexContainer, MainContainer } from './styles';
import { GraphcmsShelf } from '../models/graphcms/assets';
import UpWaves from './styles/waves/up';
import DownWaves from './styles/waves/down';

interface ShelfFrameProps {
  backgroundColor?: string;
  reverse: boolean;
}

const ShelfFrame = styled.div<ShelfFrameProps>`
  background-color: ${(props): string => props.backgroundColor as string};
  position: relative;
  top: 4em;
  border-radius: 2em;
  margin-top: 16em;
  padding: 2em;
  max-width: 30em;
  z-index: 2;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  transform-origin: ${(props): string => (props.reverse ? 'left' : 'right')} center;
  transform: perspective(1200px) rotateY(0);
  &:hover {
    -webkit-box-shadow: ${(props): string => (props.reverse ? '' : '-')}20px 0px 20px 10px rgba(0, 0, 0, 0.1);
    box-shadow: ${(props): string => (props.reverse ? '' : '-')}20px 0px 20px 10px rgba(0, 0, 0, 0.1);
    transform: perspective(1200px) rotateY(${(props): string => (props.reverse ? '-' : '')}10deg);
  }
`;

interface TitleProps {
  titleColor?: string;
}

const Title = styled.h2<TitleProps>`
  color: ${(props): string => props.titleColor || 'rgba(0, 0, 0, 0)'};
  text-transform: uppercase;
  font-size: 2em;
  font-family: 'Oswald', 'sans-serif';
  font-style: italic;
  letter-spacing: 0.1em;
`;

const Text = styled.p`
  color: white;
  padding: 0.5em 0;
  font-family: 'Open Sans', sans - serif;
  text-align: justify;
`;

const Button = styled.button`
  background-color: #0093e9;
  background-image: linear - gradient(160deg, #0093e9 0%, #80d0c7 100%);

  border-radius: 2em;
  color: white;
  font-weight: bold;
  display: inline - block;
  cursor: pointer;
  font-size: 1em;
  padding: 10px 20px;
  text-shadow: 0px 3px 0px #0093e9;
  box-shadow: inset 0px 1px 0px 0px #d9fbbe;
  border: none;
  font-family: 'Ubuntu Condensed', sans - serif;
  font-style: italic;
  letter-spacing: 0.2em;
  line-height: 0.7em;
`;

const Separator = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: -24em;
  transform: scale(1, 0.25);
  z-index: 1;
`;

interface ShelfPreviewProps {
  shelf: GraphcmsShelf;
  index: number;
}

const ShelfPreview: FC<ShelfPreviewProps> = ({ shelf, index }) => {
  const UpWave = UpWaves[(index + 1) % UpWaves.length];
  const DownWave = DownWaves[(index + 1) % DownWaves.length];

  return (
    <BackgroundImageContainer
      backgroundImage={shelf.backgroundImage}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundAttachment="fixed"
    >
      <MainContainer>
        <FlexContainer reverse={index % 2 === 0}>
          <ShelfFrame backgroundColor={shelf.backgroundColor.css} reverse={index % 2 === 0}>
            <Title titleColor={shelf.titleColor.css}>{shelf.name}</Title>
            <Text>{shelf.description}</Text>
            <Button>En voir plus</Button>
          </ShelfFrame>
        </FlexContainer>
      </MainContainer>
      <Separator>
        <UpWave color={shelf.backgroundColor.css || '#000'} />
        <Filler color={shelf.backgroundColor.css} height="8em" />
        <DownWave color={shelf.backgroundColor.css || '#000'} />
      </Separator>
    </BackgroundImageContainer>
  );
};

export default ShelfPreview;
