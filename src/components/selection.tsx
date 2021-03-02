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
`;

const StyledSelection = styled.div`
  /* background-color: blue;*/
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  margin: 0 auto;
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
  background-color: goldenrod;
  position: relative;
  justify-content: center;
  border-radius: 2em;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Product = styled.div`
  background-color: white;
  border: double 1em teal;
  margin: 2em;
  padding: 1em;
  font-style: italic;
  max-height: 30em;
  border-radius: 2em;
`;

const BoardGamesNameSelection = styled.li`
  /* background-color: purple;*/
  color: teal;
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
  justify-content: center;
`;

const BoardGamesImgSelection = styled.img`
  /* background-color: blue;*/
  justify-content: center;
  max-height: 20em;
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

  margin: 0 auto;
  padding: 20px;
  margin-bottom: 1em;
`;

const ProductContainerItem = styled.div`
  /*background-color: palegreen;*/
  position: relative;
  font-size: 2em;
  margin-left: 8em;
  bottom: 1.3em;
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
                <FaShoppingBasket color="black" size="30" />
                <FaBookmark size="70" color={product.shelf} />
              </ProductContainerItem>

              <BoardGamesImgSelection src={product.imageUrl} alt="bg"></BoardGamesImgSelection>
              <BoardGamesNameSelection key={product.slug}>{product.name}</BoardGamesNameSelection>
            </Product>
          </>
        ))}
      </BoardGamesSelection>
      <Button>En voir plus</Button>
    </StyledSelection>
  </SelectionContainer>
);

export default Selection;
