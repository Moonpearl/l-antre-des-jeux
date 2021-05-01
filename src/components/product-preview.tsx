import React, { FC, useContext } from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { GraphcmsProduct } from '../models/graphcms/assets';
import { FaBookmark } from 'react-icons/fa';
import { Title } from './styles';
import { ThemeContext } from '../contexts/theme';
import { Palette } from '../models';
import { SnipcartBuyButton } from '.';

interface ProductPreviewProps {
  product: GraphcmsProduct;
}

const ProductPreview: FC<ProductPreviewProps> = ({ product }) => {
  const { palette } = useContext(ThemeContext);

  const shelfPalette: Palette = product?.shelf?.palette || palette;

  const styles = {
    Product: styled.div`
      position: relative;
      height: 100%;

      &:hover > *:first-child {
        opacity: 1;
      }
    `,
    ProductImage: styled.img`
      height: 100%;
      margin: 0 auto;
      display: block;
      object-fit: scale-down;
      border-radius: 0.5em;
    `,
    Overlay: styled.div`
      opacity: 0;
      background-color: rgba(0, 0, 0, 0.75);
      transition: 0.5s ease;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: 1;
      display: flex;
      justify-content: center;
      border-radius: 0.5em;
    `,
    Info: styled.div`
      color: white;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      row-gap: 1em;
      margin: 0 2.5rem;
    `,
    ProductShelf: styled.div`
      position: absolute;
      top: -0.5rem;
      right: 0;
      z-index: 6;
      font-size: 3em;
      filter: drop-shadow(4px 4px 2px rgba(96, 96, 96, 0.5));
      color: ${shelfPalette.headerBackgroundColor.css};
      transition: color 0.3s ease;

      &:hover {
        color: ${shelfPalette.headerHighlightColor.css};
      }
    `,
  };

  return (
    <Link to={`/product/${product.slug}`}>
      <styles.Product>
        <styles.Overlay>
          <styles.Info>
            <Title level={3} size={0.8}>
              {product.name}
            </Title>
            <div>
              Prix:&nbsp;
              <span>{product.price.toFixed(2)} &euro;</span>
            </div>
            <SnipcartBuyButton product={product} />
          </styles.Info>
        </styles.Overlay>

        {product.shelf && (
          <Link to={`/shelf/${product.shelf.slug}`}>
            <styles.ProductShelf>
              <FaBookmark />
            </styles.ProductShelf>
          </Link>
        )}

        <styles.ProductImage src={product.imageUrl} alt={product.name} />
      </styles.Product>
    </Link>
  );
};

export default ProductPreview;
