import React, { FC } from 'react';
import styled from '@emotion/styled';

import { BackgroundImageContainer } from './styles';
import { GraphcmsShelf } from '../models/graphcms/assets';

interface OverlayProps {
  backgroundColor?: string;
  height: string;
}

const Overlay = styled.div<OverlayProps>`
  background-color: ${props => props.backgroundColor};
  position: relative;
  top: 8em;
  border-radius: 2em;
  /* border-top-left-radius: 1em;
  border-bottom-right-radius: 1em; */
  /* border: white 10px double; */
  padding: 1em;
  max-width: 40em;
  z-index: 2;
  /* filter: hue-rotate(-30deg); */
  transition: 1s;

  &:hover {
    filter: hue-rotate(0deg);
  }
`;

const TextContainer = styled.div`
  /*margin-left: 2em;*/
  padding: 1em;
`;

interface TitleProps {
  color: string;
}

const Title = styled.h2<TitleProps>`
  color: orange;
  text-transform: uppercase;
  font-size: 2em;
  /* font-family: 'Cabin Sketch', cursive;*/
  font-family: 'Oswald', 'sans-serif';
  /* font-family: 'Bebas Neue', cursive;*/
  /* font-family: 'Candal', sans-serif;*/

  font-style: italic;
  letter-spacing: 0.2em;
`;

const Text = styled.p`
  color: white;
  padding: 0.5em;
  font-family: 'Ubuntu Condensed', sans-serif;
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
    reverse={even}
  >
    <Overlay backgroundColor={shelf.color.css}>
      <TextContainer>
        <Title>{shelf.name}</Title>
        <Text>{shelf.description}</Text>
        <Button>En voir plus</Button>
      </TextContainer>
      {/* <DiceTest src={Dice} alt="de" /> */}
    </Overlay>
  </BackgroundImageContainer>
);

export default ShelfPreview;
