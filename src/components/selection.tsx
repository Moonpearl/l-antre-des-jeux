import React, { FC } from 'react';
import styled from '@emotion/styled';
import { GraphcmsSelection } from '../models/graphcms/assets';
import { MainContainer } from './styles';
import ProductList from './product-list';

const StyledSelection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  padding: 2rem;
  border: 4px solid teal;
  border-radius: 1em;
  margin-bottom: 4rem;
`;

const SelectionTitleContainer = styled.div`
  position: relative;
  bottom: 3rem;
  display: flex;
  margin-bottom: -3rem;
`;

const SelectionTitle = styled.h3`
  background-color: white;
  text-align: center;
  font-family: 'Oswald', sans-serif;
  letter-spacing: 0.05em;
  color: teal;
  font-weight: bold;
  text-transform: uppercase;
  font-style: italic;
  font-size: 2em;
  margin: 0;
  padding: 0 0.5em;
`;

const SelectionDescription = styled.div`
  text-align: justify;
  margin: 1em 0;
`;

interface SelectionProps {
  selection: GraphcmsSelection;
}

const Selection: FC<SelectionProps> = ({ selection }) => (
  <MainContainer>
    <StyledSelection>
      <SelectionTitleContainer>
        <SelectionTitle>{selection.name}</SelectionTitle>
      </SelectionTitleContainer>
      <SelectionDescription>{selection.description}</SelectionDescription>
      <ProductList products={selection.products} />
    </StyledSelection>
  </MainContainer>
);

export default Selection;
