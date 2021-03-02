import React, { FC } from 'react';
import styled from '@emotion/styled';
import { GraphcmsSelection } from '../models/graphcms/assets';
import { FaShoppingBasket, FaBookmark } from 'react-icons/fa';
import '../models/graphcms/assets/shelf';

interface SelectionProps {
  selection: GraphcmsSelection;
}

const SelectionContainer = styled.div`
  /*  background-color: pink;*/
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  position: relative;

  margin: 2em;
  border-radius: 2em;
  box-sizing: border-box;
  overflow: hidden;

  @media only screen and (min-width: 268px) (max-width: 600px) {
    max-width: 30em;
    margin: 0 auto;
  }
`;

const StyledSelection = styled.div`
  /* background-color: blue;*/
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;

  @media only screen and (min-width: 268px) (max-width: 600px) {
    max-width: 30em;
    margin: 0 auto;
  }
`;

const TitleSelection = styled.h3`
  /* background-color: yellow;*/
  color: teal;
  font-weight: bold;
  text-transform: uppercase;
  font-style: italic;
  font-size: 2em;
  margin: 0 auto;
  margin-bottom: 0.2em;
`;

const BoardGamesSelection = styled.ol`
  /* background-color: goldenrod;*/
  position: relative;
  justify-content: center;
  border-radius: 2em;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Product = styled.div`
  /* margin: 2em;*/
  padding: 1em;
  font-style: italic;
  max-height: 18em;
  max-width: 22em;
  position: relative;
`;

const BoardGamesNameSelection = styled.li`
  background-color: #4caf50;
  color: white;
  font-size: 16px;
  padding: 16px 32px;
`;

const BoardGamesImgSelection = styled.img`
  /* background-color: blue;*/
  /* justify-content: center;*/
  position: relative;
  /* margin: 0 auto;*/

  max-height: 15em;
  bottom: 70px;
  opacity: 1;
  width: 100%;

  transition: 0.5s ease;
  backface-visibility: hidden;

  max-width: 30em;
  margin: 0 auto;

  &:hover {
    opacity: 0.2;
  }
`;

const Middle = styled.div`
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;

  &:hover {
    opacity: 1;
  }
`;

const Button = styled.button`
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);

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
  font-family: 'Ubuntu Condensed', 'sans - serif';
  font-style: italic;
  letter-spacing: 0.2em;
  line-height: 0.7em;

  margin: 1em auto;
  padding: 20px;
`;

const ProductContainerItem = styled.div`
  /*background-color: palegreen;*/
  position: relative;
  font-size: 2em;
  margin-left: 7.5em;
  /*  bottom: 1.3em;*/
  z-index: 6;
  color: palegreen;
`;

const Selection: FC<SelectionProps> = ({ selection }) => (
  <SelectionContainer>
    <StyledSelection>
      <TitleSelection>{selection.name}</TitleSelection>

      <BoardGamesSelection>
        {selection.products.map(product => (
          <>
            <Product>
              <ProductContainerItem>
                <FaBookmark size="70" color={product.shelf} />
              </ProductContainerItem>

              <BoardGamesImgSelection src={product.imageUrl} alt="bg"></BoardGamesImgSelection>
              <Middle>
                <BoardGamesNameSelection key={product.slug}>{product.name}</BoardGamesNameSelection>
              </Middle>
            </Product>
          </>
        ))}
      </BoardGamesSelection>
      <Button>En voir plus</Button>
    </StyledSelection>
  </SelectionContainer>
);

export default Selection;
