import * as React from 'react'
import styled from '@emotion/styled'
import { transparentize, padding } from 'polished'
import { relative } from 'path'
import IndexLayout from '../layouts'
import { heights, dimensions, colors } from '../styles/variables'

import './welcome-page.css'
import './reset.css'

import Img01 from '../images/societe.jpg'
import Img02 from '../images/enfants.jpg'
import Img03 from '../images/figurines.jpg'
import Img04 from '../images/roleplayer.jpg'
import Img05 from '../images/history.jpg'
import Img06 from '../images/cards.jpg'
import Img07 from '../images/classic.jpg'
import Img08 from '../images/accessory.jpg'

import Dice from '../images/dice.png'
import { Shelf } from '../models'

const ContainerWelcome = styled.div`
  background-color: pink;
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

interface ShelfStyledProps {
  backgroundImage: {
    url: string
  };
};

const ShelfStyled = styled.li<ShelfStyledProps>`
  background-color: red;
  padding: 4em;
  background-image: url(${props => props.backgroundImage.url});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  &:nth-child(odd) {
    display: flex;
    flex-direction: row-reverse;
  }
`

interface OverlayProps {
  backgroundColor?: string;
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

const FooterStyled = styled.footer`
  position: relative;
  text-align: center;
  font-style: italic;
  letter-spacing: 10px;
  margin: 2em;
`
const shelves: Shelf[] = [
  {
    name: 'Jeux de stratégie',
    slug: 'jeuxdestrategie',
    description:
      ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam sit adipisci placeat ea numquam eaque cupiditate dicta',
    products: [],
    backgroundImage: {
      url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-board-games-adults-1585587217.jpg?crop=1.00xw:0.770xh;0,0.00750xh&resize=980:*'
    },
    color: {
      css: 'rgb(228, 28, 184)',
    }
  },
  {
    name: 'Jeux enfants',
    slug: 'jeuxenfants',
    description:
      ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam sit adipisci placeat ea numquam eaque cupiditate dicta',
    products: [],
    backgroundImage: {
      url: 'https://cdn.cheapism.com/images/Clue_mqATAxw.2e16d0ba.fill-1440x605.jpg'
    },
    color: {
      css: 'rgb(215, 148, 93)',
    }
  },
  {
    name: "Jeux d'ambiance",
    slug: 'jeux-d-ambiance',
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam sit adipisci placeat ea numquam eaque cupiditate dicta
      assumenda? Accusamus, molestias! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam sit adipisci placeat ea
      numquam eaque cupiditate dicta assumenda? Accusamus, molestias! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Aperiam sit adipisci placeat ea numquam eaque cupiditate dicta assumenda? Accusamus, molestias! Lorem, ipsum dolor sit amet
      consectetur adipisicing elit. Aperiam sit adipisci placeat ea numquam eaque cupiditate dicta assumenda? Accusamus,
      molestias!`,
    products: [],
    backgroundImage: {
      url: 'https://media.graphcms.com/oSGuMvARd6hAmn8QoZfA'
    },
    color: {
      css: 'rgb(85, 210, 124)',
    }
  }
]

const welcomePage = () => (
  <IndexLayout>
    <ContainerWelcome>
      <ul>
        {shelves.map(shelf => (
          <ShelfStyled backgroundImage={shelf.backgroundImage}>
            <Overlay backgroundColor={shelf.color.css}>
              <TextContainer>
                <Title>{shelf.name}</Title>
                <Text>{shelf.description}</Text>
                <Button>En voir plus</Button>
              </TextContainer>
              <DiceTest src={Dice} alt="de" />
            </Overlay>
          </ShelfStyled>
        ))}
      </ul>

      <FooterStyled>Copyright 2021 - L'Antre des jeux</FooterStyled>
    </ContainerWelcome>
  </IndexLayout>
)

export default welcomePage;
