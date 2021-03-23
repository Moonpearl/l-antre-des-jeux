import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import React, { FC, useContext } from 'react';
import { BackgroundImageContainer, Filler, MainContainer, Title, } from '../components/styles';
import IndexLayout from '../layouts';
import { ProductList, PageHeader } from '../components';
import { PagePropsWithData, Palette, SeoData } from '../models';
import { ThemeContext } from '../contexts/theme';



const ShelfPage: FC<PagePropsWithData> = ({ data }) => {
  const { palette } = useContext(ThemeContext);
  const { graphCmsShelf: shelf } = data;

  if (typeof shelf === 'undefined') {
    throw new Error('Non-existing shelf');
  }

  const seoData: SeoData = {
    pageUri: `/shelf/${shelf.slug}`,
    title: shelf.name,
    description: shelf.description,
    openGraphImage: shelf.backgroundImage.url,
  };

  const currentPalette: Palette = shelf.palette || palette;

  const styles = {
    ProductListContainer: styled.div`
      background-color: ${currentPalette.backgroundColor.css};
      border-radius: 1em;
      padding: 2em;
      margin-bottom: 2em;
    `,
  };

  return (
    <IndexLayout seoData={seoData} palette={shelf.palette}>
      <BackgroundImageContainer
        backgroundImage={shelf.backgroundImage}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundAttachment="fixed"
      >
        <PageHeader wavePath={shelf.wavePath} backgroundColor={currentPalette.headerBackgroundColor.css}>
          <MainContainer>
            <Title level={1} color={currentPalette.headerTextColor.css}>
              {shelf.name}
            </Title>

          </MainContainer>
        </PageHeader>



        <Filler height="12em" />


        <MainContainer>
          <styles.ProductListContainer>{shelf.products && <ProductList products={shelf.products} />}</styles.ProductListContainer>
        </MainContainer>
      </BackgroundImageContainer>
    </IndexLayout >
  );
};



export const query = graphql`
  query ShelfPageQuery($slug: String!) {
    graphCmsShelf(slug: { eq: $slug }) {
      name
      slug
      description
      backgroundImage {
        url
      }
      palette {
        backgroundColor {
          css
        }
        frameBackgroundColor {
          css
        }
        frameTextColor {
          css
        }
        headerBackgroundColor {
          css
        }
        headerHighlightColor {
          css
        }
        headerTextColor {
          css
        }
        textColor {
          css
        }
        titleColor {
          css
        }
        titleHighlightColor {
          css
        }
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
      wavePath
    }
  }
`;

export default ShelfPage;
