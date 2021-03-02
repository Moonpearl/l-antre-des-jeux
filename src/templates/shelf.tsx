import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import React, { FC } from 'react';
import { FaHome, FaChevronLeft, FaChevronRight, FaSearch } from 'react-icons/fa';
import IndexLayout from '../layouts';
import { PagePropsWithData } from '../models';

const BgColorPage = styled.div`
  background-color: #ece0d4;
  overflow: hidden;
`;

const ContainerShelfPageAll = styled.div`
  margin: 2em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const IconsNavigationTopLeft = styled.div`
  color: #03989e;
`;

const LeftSide = styled.div`
  margin-right: auto;
  width: 30em;
  margin-right: 3em;
`;

const LeftSideProductsNumber = styled.p`
  background-color: #ffde59;
  color: #03989e;
  border-radius: 1em;
  margin-top: 5em;
  padding: 1em;
  margin: 1em;
  text-align: center;
  font-size: 1em;
`;

const LeftSideMultiSidebar = styled.div`
  background-color: #03989e;
  text-align: center;
  height: 42em;
  margin: 1em;

  clip-path: polygon(11% 0, 90% 0, 100% 12%, 100% 92%, 89% 100%, 10% 100%, 0 92%, 0 14%);
`;

const RightSideShelfContainer = styled.div`
  background-color: white;
  border-radius: 2em;
  display: flex;
  flex-direction: column;
  /* width: 1000px;*/
  margin-top: 3em;
  margin-right: 2em;
`;

const RightSideShelfTitle = styled.h2`
  background-color: #03989e;
  color: #ffde59;
  position: relative;
  bottom: 2em;
  left: 1em;
  text-transform: uppercase;
  text-align: center;
  margin: 0.2em;
  padding: 1em;
  border-radius: 0.3em;
  margin-left: auto;
  font-style: italic;
  font-family: 'Oswald', 'sans-serif';
`;

const DisplayProductsContainer = styled.div`
  /*  background-color: orange;*/
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`;

const ProductContainer = styled.div`
  /*  background-color: paleturquoise;*/
  border-radius: 1em;
  margin: 1em;
  height: 15em;
  width: 15em;
  border: 3px #03989e dashed;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;

const ProductImg = styled.div`
  background-color: grey;
  width: 12em;
  height: 10em;
  margin: 0 auto;
`;

const ProductTitle = styled.h3`
  color: #03989e;
  margin: 0.3em;
  text-align: center;
  margin-bottom: auto;
`;

const ProductShoppingBasket = styled.div`
  /*  background-color: pink;*/
  margin-left: auto;
  position: relative;
`;

const ShelfPagesButtons = styled.ul`
  /* background-color: greenyellow;*/
  margin-top: auto;
  display: flex;
  justify-content: center;
  margin-top: 0.2em;
  font-size: 2em;
`;

const ShelfPagesButtonsNumber = styled.li`
  background-color: paleturquoise;
  border-radius: 0.2em;
  margin-left: 0.2em;
  width: 2em;
  text-align: center;
`;

const SearchBar = styled.div`
  background-color: grey;
  color: white;
  text-align: center;
  margin-top: auto;
  margin-left: auto;
  width: 4em;
  padding: 1em;
  border-radius: 1em;
`;

const ShelfPage: FC<PagePropsWithData> = ({ data }) => {
  const { graphCmsShelf: shelf } = data;

  if (typeof shelf === 'undefined') {
    throw new Error('Non-existing shelf');
  }

  return (
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
            <RightSideShelfTitle>{shelf.name}</RightSideShelfTitle>

            <DisplayProductsContainer>
              <ProductContainer>
                <ProductShoppingBasket>Panier</ProductShoppingBasket>
                <ProductImg></ProductImg>
                <ProductTitle>Titre du produit</ProductTitle>
              </ProductContainer>

              <ProductContainer>
                <ProductShoppingBasket>Panier</ProductShoppingBasket>
                <ProductImg></ProductImg>
                <ProductTitle>Titre du produit</ProductTitle>
              </ProductContainer>

              <ProductContainer>
                <ProductShoppingBasket>Panier</ProductShoppingBasket>
                <ProductImg></ProductImg>
                <ProductTitle>Titre du produit</ProductTitle>
              </ProductContainer>

              <ProductContainer>
                <ProductShoppingBasket>Panier</ProductShoppingBasket>
                <ProductImg></ProductImg>
                <ProductTitle>Titre du produit</ProductTitle>
              </ProductContainer>

              <ProductContainer>
                <ProductShoppingBasket>Panier</ProductShoppingBasket>
                <ProductImg></ProductImg>
                <ProductTitle>Titre du produit</ProductTitle>
              </ProductContainer>

              <ProductContainer>
                <ProductShoppingBasket>Panier</ProductShoppingBasket>
                <ProductImg></ProductImg>
                <ProductTitle>Titre du produit</ProductTitle>
              </ProductContainer>

              <ProductContainer>
                <ProductShoppingBasket>Panier</ProductShoppingBasket>
                <ProductImg></ProductImg>
                <ProductTitle>Titre du produit</ProductTitle>
              </ProductContainer>
            </DisplayProductsContainer>

            <ShelfPagesButtons>
              <FaChevronLeft color="#03989e" />
              <ShelfPagesButtonsNumber>1</ShelfPagesButtonsNumber>
              <ShelfPagesButtonsNumber>2</ShelfPagesButtonsNumber>
              <ShelfPagesButtonsNumber>3</ShelfPagesButtonsNumber>
              <ShelfPagesButtonsNumber>...</ShelfPagesButtonsNumber>

              <FaChevronRight color="#03989e" />
            </ShelfPagesButtons>
            <SearchBar>
              <FaSearch />
            </SearchBar>
          </RightSideShelfContainer>
        </ContainerShelfPageAll>
      </BgColorPage>
    </IndexLayout>
  );
};

export const query = graphql`
  query ShelfPageQuery($slug: String!) {
    graphCmsShelf(slug: { eq: $slug }) {
      name
    }
  }
`;

export default ShelfPage;
