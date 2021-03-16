import React, { FC } from 'react';
import styled from '@emotion/styled';
import { GraphcmsSelection } from '../models/graphcms/assets';
import { FaBookmark } from 'react-icons/fa';
import { MainContainer } from './styles';
import ProductList from './product-list';
import IndexLayout from '../layouts';

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

const SelectionTitle = styled.h3`
  background-color: white;
  position: absolute;
  top: -1.5rem;
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

const ProductShelf = styled.div`
  position: absolute;
  top: -0.5rem;
  right: 0;
  z-index: 6;
  font-size: 3em;
  filter: drop-shadow(4px 4px 2px rgba(96, 96, 96, 0.5));
`;

const SelectionDescription = styled.div`
  text-align: justify;
  margin-bottom: 1em;
`;

interface SelectionProps {
  selection: GraphcmsSelection;
}

const Selection: FC<SelectionProps> = ({ selection }) => (
  <MainContainer>
    <StyledSelection>
      <SelectionTitle>{selection.name}</SelectionTitle>
      <SelectionDescription>{selection.description}</SelectionDescription>
      <ProductList products={selection.products} />
    </StyledSelection>

  </MainContainer >
);

export default Selection;
