import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import IndexLayout from '../layouts';
import { FaHome, FaChevronLeft, FaChevronRight, FaSearch } from 'react-icons/fa';

// EMOTION COMPONENTS ------------------------------------------------ //

const BgColorPage = styled.div`
  background-color: #ece0d4;
`;

const IconsNavigationTopLeft = styled.div`
  background-color: pink;
`;

const LeftSide = styled.div`
  background-color: orange;
  display: flex;
  flex-direction: column;
`;

const LeftSideProductsNumber = styled.p`
  background-color: #ffde59;
`;

const LeftSideMultiSidebar = styled.div`
  background-color: #03989e;
`;

const RightSideShelfContainer = styled.div`
  background-color: grey;
`;

const RightSideShelfTitle = styled.h2`
  background-color: #03989e;
  color: #ffde59;
`;

const ProductContainer = styled.div`
  background-color: white;
`;

const ProductImg = styled.img`
  background-color: yellow;
`;

const ProductTitle = styled.h3`
  background-color: green;
`;

const ProductShoppingBasket = styled.div`
  background-color: pink;
`;

const ShelfPagesButtons = styled.ul`
  background-color: greenyellow;
`;

const ShelfPagesButtonsNumber = styled.li`
  background-color: white;
`;

const SearchBar = styled.div`
  background-color: white;
`;

// SHELF PAGE ----------------------------------------------------- //

const ShelfPage: FC = () => (
  <IndexLayout>
    <BgColorPage>
      <IconsNavigationTopLeft>
        <FaHome />
        <FaChevronLeft />
      </IconsNavigationTopLeft>

      <LeftSide>
        <LeftSideProductsNumber>Nombre de produits dans ce rayon: 150</LeftSideProductsNumber>
        <LeftSideMultiSidebar> Barre multicritères ou image</LeftSideMultiSidebar>
      </LeftSide>

      <RightSideShelfContainer>
        <RightSideShelfTitle>Nom du rayon</RightSideShelfTitle>

        <ProductContainer>
          <ProductImg />
          <ProductTitle>Titre du produit</ProductTitle>
          <ProductShoppingBasket>Panier</ProductShoppingBasket>
        </ProductContainer>

        <ShelfPagesButtons>
          <FaChevronLeft />
          <ShelfPagesButtonsNumber>1</ShelfPagesButtonsNumber>
          <ShelfPagesButtonsNumber>2</ShelfPagesButtonsNumber>
          <ShelfPagesButtonsNumber>3</ShelfPagesButtonsNumber>
          <ShelfPagesButtonsNumber>...</ShelfPagesButtonsNumber>

          <FaChevronRight />
        </ShelfPagesButtons>
      </RightSideShelfContainer>

      <SearchBar>
        <FaSearch />
      </SearchBar>
    </BgColorPage>
  </IndexLayout>
);

export default ShelfPage;
