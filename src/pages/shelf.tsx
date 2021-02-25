import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import IndexLayout from '../layouts';
import { FaHome, FaChevronLeft, FaChevronRight, FaSearch } from 'react-icons/fa';

// EMOTION COMPONENTS ------------------------------------------------ //

const BgColorPage = styled.div`
  background-color: #ece0d4;
`;

const ContainerShelfPageAll = styled.div`
  margin: 1em;
  display: flex;
`;

const IconsNavigationTopLeft = styled.div`
  /* background-color: pink; */
  color: #03989e;
`;

const LeftSide = styled.div`
  /* background-color: orange; */
`;

const LeftSideProductsNumber = styled.p`
  background-color: #ffde59;
  color: #03989e;
  border-radius: 1em;
  max-width: 15em;
  margin-top: 5em;
  padding: 1em;
  margin: 1em;
`;

const LeftSideMultiSidebar = styled.div`
  background-color: #03989e;
  height: 25em;
  margin: 1em;

  clip-path: polygon(11% 0, 90% 0, 100% 12%, 100% 92%, 89% 100%, 10% 100%, 0 92%, 0 14%);
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
      <ContainerShelfPageAll>
        <LeftSide>
          <IconsNavigationTopLeft>
            <FaHome size="30" />
            <FaChevronLeft size="30" />
          </IconsNavigationTopLeft>
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

          <SearchBar>
            <FaSearch />
          </SearchBar>
        </RightSideShelfContainer>
      </ContainerShelfPageAll>
    </BgColorPage>
  </IndexLayout>
);

export default ShelfPage;
