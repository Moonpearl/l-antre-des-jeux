import React, { FC } from 'react';
import styled from '@emotion/styled';
import { GraphcmsProduct } from '../models/graphcms/assets';
import { FaBookmark } from 'react-icons/fa';

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

interface ProductPreviewProps {
  product: GraphcmsProduct;
}

const ProductPreview: FC<ProductPreviewProps> = ({ product }) => (
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
);

export default ProductPreview;
