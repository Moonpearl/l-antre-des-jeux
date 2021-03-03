import React, { FC } from 'react';
import styled from '@emotion/styled';
import { GraphcmsProduct } from '../models/graphcms/assets';
import ProductPreview from './product-preview';

const ProductListStyled = styled.ol`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  grid-auto-rows: 10rem;
  gap: 2rem;
  border-radius: 2em;
`;

interface ProductListProps {
  products: GraphcmsProduct[];
}

const ProductList: FC<ProductListProps> = ({ products }) => (
  <ProductListStyled>
    {products.map(product => (
      <li key={product.slug}>
        <ProductPreview product={product} />
      </li>
    ))}
  </ProductListStyled>
);

export default ProductList;
