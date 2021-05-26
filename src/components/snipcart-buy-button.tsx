import React, { FC, useContext, useState } from 'react';
import { FaCheck, FaShoppingCart } from 'react-icons/fa';
import { ThemeContext } from '../contexts/theme';
import { useSnipcartItemAdded } from '../hooks';
import { Palette } from '../models';
import { GraphcmsProduct } from '../models/graphcms/assets';
import { SnipcartProductItem } from '../models/snipcart';
import { Button } from './styles';

interface SnipcartBuyButtonProps {
  product: GraphcmsProduct;
}

const boughtPalette: Palette = {
  backgroundColor: { css: '#000' },
  headerBackgroundColor: { css: '#000' },
  headerHighlightColor: { css: '#000' },
  headerTextColor: { css: '#000' },
  frameBackgroundColor: { css: '#000' },
  frameTextColor: { css: '#000' },
  textColor: { css: '#000' },
  titleColor: { css: '#4aa54f' },
  titleHighlightColor: { css: 'green' },
};

const SnipcartBuyButton: FC<SnipcartBuyButtonProps> = ({ product }) => {
  const [bought, setBought] = useState(false);
  const { palette } = useContext(ThemeContext);

  useSnipcartItemAdded((productItem: SnipcartProductItem) => {
    if (productItem.id === product.ebpId) {
      setBought(true);
    }
  });

  const hasVariants = product.productVariants && product.productVariants.length > 0;

  return hasVariants ? (
    <span
      className="snipcart-add-item"
      data-item-id={product.ebpId}
      data-item-price={product.price}
      data-item-url={`https://test-l-antre-des-jeux-admin.netlify.app/.netlify/functions/get-product-json?slug=${product.slug}`}
      data-item-description={product.description}
      data-item-image={product.imageUrl}
      data-item-name={product.name}
      data-item-custom1-name="Variante"
      data-item-custom1-options={
        hasVariants &&
        product.productVariants
          ?.map(variant => `${variant.name}${variant.priceModifier !== 0 ? `[${variant.priceModifier}]` : ''}`)
          .join('|')
      }
    >
      <Button
        disabled={bought}
        palette={bought ? boughtPalette : palette}
        className="buy-button"
        onClick={(event): void => {
          if (!bought) {
            event.stopPropagation();
            setBought(true);
          }
        }}
      >
        {bought ? (
          <>
            <FaCheck /> Ajouté
          </>
        ) : (
          <>
            <FaShoppingCart /> Ajouter
          </>
        )}
      </Button>
    </span>
  ) : (
    <span
      className="snipcart-add-item"
      data-item-id={product.ebpId}
      data-item-price={product.price}
      data-item-url={`https://test-l-antre-des-jeux-admin.netlify.app/.netlify/functions/get-product-json?slug=${product.slug}`}
      data-item-description={product.description}
      data-item-image={product.imageUrl}
      data-item-name={product.name}
    >
      <Button
        disabled={bought}
        palette={bought ? boughtPalette : palette}
        className="buy-button"
        onClick={(event): void => {
          if (!bought) {
            event.stopPropagation();
            setBought(true);
          }
        }}
      >
        {bought ? (
          <>
            <FaCheck /> Ajouté
          </>
        ) : (
          <>
            <FaShoppingCart /> Ajouter
          </>
        )}
      </Button>
    </span>
  );
};

export default SnipcartBuyButton;
