import React, { FC } from 'react';
import styled from '@emotion/styled';
import { GraphcmsSelection } from '../models/graphcms/assets';

interface SelectionProps {
  selection: GraphcmsSelection;
}

const SelectionContainer = styled.div`
  background-color: pink;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  position: relative;

  margin: 2em;
  justify-content: space-between;
`;

const StyledSelection = styled.div`
  background-color: blue;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  margin: 0 auto;
`;

const TitleSelection = styled.h3`
  background-color: yellow;
`;

const ImgSelection = styled.div`
  background-color: grey;
  height: 15em;
  width: 15em;

  margin-right: auto;
`;

const BoardGamesSelection = styled.ol`
  background-color: green;
  margin: 1em;
`;

const BoardGamesNameSelection = styled.li`
  background-color: purple;
`;

const Selection: FC<SelectionProps> = ({ selection }) => (
  <SelectionContainer>
    <StyledSelection>
      <TitleSelection>{selection.name}</TitleSelection>
      <ImgSelection />
      <BoardGamesSelection>
        {selection.products.map(product => (
          <BoardGamesNameSelection key={product.slug}>{product.name}</BoardGamesNameSelection>
        ))}
      </BoardGamesSelection>
    </StyledSelection>
  </SelectionContainer>
);

export default Selection;
