import React, { FC, useContext } from 'react';
import styled from '@emotion/styled';
import { GraphcmsSelection } from '../models/graphcms/assets';
import { MainContainer } from './styles';
import ProductList from './product-list';
import { ThemeContext } from '../contexts/theme';

const SelectionDescription = styled.div`
  text-align: justify;
  margin: 1em 0;
`;

interface SelectionProps {
  selection: GraphcmsSelection;
}

const Selection: FC<SelectionProps> = ({ selection }) => {
  const { palette } = useContext(ThemeContext);

  const styles = {
    StyledSelection: styled.div`
      position: relative;
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      padding: 2rem;
      border: 4px solid ${palette.titleColor.css};
      border-radius: 1em;
      margin-bottom: 4rem;
    `,
    SelectionTitleContainer: styled.div`
      position: relative;
      bottom: 3rem;
      display: flex;
      margin-bottom: -3rem;
    `,
    SelectionTitle: styled.h3`
      background-color: white;
      text-align: center;
      font-family: 'Oswald', sans-serif;
      letter-spacing: 0.05em;
      color: ${palette.titleColor.css};
      font-weight: bold;
      text-transform: uppercase;
      font-style: italic;
      font-size: 2em;
      margin: 0;
      padding: 0 0.5em;
    `,
  };

  return (
    <MainContainer>
      <styles.StyledSelection>
        <styles.SelectionTitleContainer>
          <styles.SelectionTitle>{selection.name}</styles.SelectionTitle>
        </styles.SelectionTitleContainer>
        <SelectionDescription>{selection.description}</SelectionDescription>
        {selection.products && <ProductList products={selection.products} />}
      </styles.StyledSelection>
    </MainContainer>
  );
};

export default Selection;
