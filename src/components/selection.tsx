import React, { FC } from 'react';
import styled from '@emotion/styled';
import { GraphcmsSelection } from '../models/graphcms/assets';
import { FaBookmark } from 'react-icons/fa';
import { MainContainer } from './styles';
import '../models/graphcms/assets/shelf';

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

const ProductList = styled.ol`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  grid-auto-rows: 10rem;
  gap: 2rem;
  border-radius: 2em;
`;

const Product = styled.div`
  position: relative;
  height: 100%;

  &:hover *:first-child {
    opacity: 1;
  }
`;

const ProductName = styled.li`
  color: white;
`;

const ProductImage = styled.img`
  height: 100%;
  margin: 0 auto;
  display: block;
  object-fit: scale-down;
  border-radius: 0.5em;
`;

const Overlay = styled.div`
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.5);
  transition: 0.5s ease;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 0.5em;
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

      <ProductList>
        {selection.products.map(product => (
          <li key={product.slug}>
            <Product>
              <Overlay>
                <ProductName>{product.name}</ProductName>
                <button>Voir</button>
              </Overlay>

              {product.shelf && (
                <ProductShelf>
                  <FaBookmark color={product.shelf.backgroundColor.css} />
                </ProductShelf>
              )}

              <ProductImage src={product.imageUrl} alt={product.name} />
            </Product>
          </li>
        ))}
      </ProductList>
    </StyledSelection>
  </MainContainer>
);

export default Selection;
