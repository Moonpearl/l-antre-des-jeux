import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import React, { FC } from 'react';
import { BackgroundColorContainer, BackgroundImageContainer, Filler, MainContainer, Title } from '../components/styles';
import DownWaves from '../components/styles/waves/down';
import IndexLayout from '../layouts';
import { PagePropsWithData } from '../models';
import { ProductList } from '../components';
import AllWave from '../components/styles/waves';

const Separator = styled.div`
  position: absolute;
  z-index: 1;
  transform: scale(1, 0.5);
  transform-origin: top center;
`;

const ProductListContainer = styled.div`
  background-color: white;
  border-radius: 1em;
  padding: 2em;
  margin-bottom: 2em;
`;

const DownWave = DownWaves[1];

const ShelfPage: FC<PagePropsWithData> = ({ data }) => {
  const { graphCmsShelf: shelf } = data;

  if (typeof shelf === 'undefined') {
    throw new Error('Non-existing shelf');
  }

  return (
    <IndexLayout>
      <BackgroundImageContainer
        backgroundImage={shelf.backgroundImage}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundAttachment="fixed"
      >
        <Filler color={shelf.backgroundColor.css} height="6em" />
        <BackgroundColorContainer color={shelf.backgroundColor.css}>
          <MainContainer>
            <Title level={1} color={shelf.titleColor.css}>
              {shelf.name}
            </Title>
          </MainContainer>
        </BackgroundColorContainer>
        <Separator>
          {/*<AllWave color={shelf.backgroundColor.css || 'rgba(0, 0, 0, 0)'} />*/}
          {/*  <DownWave color={shelf.backgroundColor.css || 'rgba(0, 0, 0, 0)'} />*/}
        </Separator>
        <Filler height="12em" />

        <MainContainer>
          <ProductListContainer>
            <ProductList products={shelf.products} />
          </ProductListContainer>
        </MainContainer>
      </BackgroundImageContainer>
    </IndexLayout>
  );
};

export const query = graphql`
  query ShelfPageQuery($slug: String!) {
    graphCmsShelf(slug: { eq: $slug }) {
      name
      description
      backgroundImage {
        url
      }
      backgroundColor {
        css
      }
      titleColor {
        css
      }
      products {
        slug
        name
        imageUrl
        shelf {
          slug
          name
          backgroundColor {
            css
          }
        }
      }
    }
  }
`;

export default ShelfPage;
