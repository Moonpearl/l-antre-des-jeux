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
  /* background-color: background-color: #4158D0;
background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
; */
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
const DiceTest = styled.img`
  position: relative;
  margin: 1em;
  height: 7em;
  width: 15em;
  margin-left: -8.5em;
  margin-bottom: -8.2em;
  transform: rotate(55deg);
  filter: hue-rotate(90deg);
`;

const TextContainer = styled.div`
  /*margin-left: 2em;*/
  padding: 1em;
`;

const Title = styled.h2`
  color: white;
  text-transform: uppercase;
  font-size: 3em;
  /* font-family: 'Fredericka the Great', cursive;*/
  /* font-family: 'Sriracha', cursive; */
  font-family: 'Cabin Sketch', cursive;
  /* border-bottom: 3px dotted white; */
`;

const Text = styled.p`
  color: white;
  padding: 0.5em;
  font-family: 'Neucha', cursive;
  /* font-family: 'Architects Daughter', cursive; */
  /* font-family: 'Indie Flower', cursive; */
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
  font-family: 'Patrick Hand SC', cursive;
  /* letter-spacing: 0.2em;
  line-height: 0.7em; */
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
