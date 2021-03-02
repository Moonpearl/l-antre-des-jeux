import React, { FC } from 'react';
import styled from '@emotion/styled';
import { GraphcmsSelection } from '../models/graphcms/assets';

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
  /* border: 3px teal dashed;*/
  border-radius: 2em;
`;

const StyledSelection = styled.div`
  background-color: blue;
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
  margin-left: 1em;
  margin-bottom: 2em;
  font-size: 2em;
`;

const BoardGamesSelection = styled.ol`
  /*  background-color: green;*/
  margin-left: 1em;

  position: relative;
  justify-content: center;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;

const Product = styled.div`
  /* background-color: paleturquoise;*/
  margin: 1em;
  margin: 0 auto;
  font-style: italic;
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

  margin: 0 auto;
`;

const Selection: FC<SelectionProps> = ({ selection }) => (
  <SelectionContainer>
    <StyledSelection />
    <TitleSelection>{selection.name}</TitleSelection>

    <BoardGamesSelection>
      {selection.products.map(product => (
        <>
          <Product>
            <BoardGamesImgSelection src={product.imageUrl} alt="bg"></BoardGamesImgSelection>
            <BoardGamesNameSelection key={product.slug}>{product.name}</BoardGamesNameSelection>
          </Product>
        </>
      ))}
    </BoardGamesSelection>
  </SelectionContainer>
);

export default Selection;
