import React, { FC } from 'react'
import styled from '@emotion/styled'

import { BackgroundImageContainer } from './styles'
import { Shelf } from '../models'

interface OverlayProps {
  backgroundColor?: string
}

const Overlay = styled.div<OverlayProps>`
  background-color: ${props => props.backgroundColor};
  position: relative;
  top: 8em;
  border-radius: 2em;
  padding: 2em;
  max-width: 40em;
  height: 25em;
`
const DiceTest = styled.img`
  position: relative;
  margin: 1em;
  height: 7em;
  width: 15em;
  margin-left: -8.5em;
  margin-bottom: -8.2em;
  transform: rotate(55deg);
  filter: hue-rotate(90deg);
`

const TextContainer = styled.div`
  margin-left: 3em;
  margin-top: 5em;
`

const Title = styled.h2`
  color: white;
  text-transform: uppercase;
  font-size: 3em;
`

const Text = styled.p`
  color: white;
`

const Button = styled.button`
  background: linear-gradient(to bottom, #b8e356 10%, #a5cc52 100%);
  border-radius: 2em;
  color: white;
  font-weight: bold;
  display: inline-block;
  cursor: pointer;
  font-size: 1em;
  padding: 10px 20px;
  text-shadow: 0px 3px 0px #86ae47;
  box-shadow: inset 0px 1px 0px 0px #d9fbbe;
  border: none;
`

interface ShelfPreviewProps {
  shelf: Shelf;
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
  </BackgroundImageContainer >
)

export default ShelfPreview
