import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import Markdown from 'markdown-to-jsx';
import React, { FC, useContext } from 'react';
import { BackgroundImageContainer, Filler, MainContainer, Title } from '../components/styles';
import IndexLayout from '../layouts';
import { GiAges } from 'react-icons/gi';
import { GrClock, GrDocumentText } from 'react-icons/gr';
import { IconType } from 'react-icons';
import { FaCog, FaStar, FaUsers } from 'react-icons/fa';
import { PagePropsWithData, SeoData } from '../models';
import { ThemeContext } from '../contexts/theme';
import PageHeader from '../components/page-header';


const ProductImage = styled.img`
  grid-area: im;
`;

const ProductPrice = styled.div`
  grid-area: pr;
  font-size: 2em;
`;

const ProductDescription = styled.div`
  grid-area: ds;
  text-align: justify;

  & p {
    margin-bottom: 0.5em;
  }
`;

const ProductIcons = styled.ul`
  grid-area: ic;
`;

const ProductRelationships = styled.div`
  grid-area: rl;
`;

const SectionTitle = styled.h2`
  font-size: 1.25em;
  margin: 1em 0 0.25em;
`;


interface ProductIconProps {
  Icon: IconType;
  caption: string;
}

const ProductIcon: FC<ProductIconProps> = ({ Icon, caption }) => (
  <li>
    <Icon />
    &nbsp;{caption}
  </li>
);

interface ProductRelationshipProps {
  Icon: IconType;
  title: string;
  assets?: { slug: string; name: string }[];
}

const ProductRelationship: FC<ProductRelationshipProps> = ({ Icon, title, assets }) => {
  if (!assets || assets.length === 0) {
    return null;
  }

  return (
    <>
      <SectionTitle>
        <Icon />
        &nbsp;
        {title}
      </SectionTitle>
      <ul>
        {assets.map(category => (
          <li key={category.slug}>{category.name}</li>
        ))}
      </ul>
    </>
  );
};

const ProductPage: FC<PagePropsWithData> = ({ data }) => {
  const { palette } = useContext(ThemeContext);
  const { graphCmsProduct: product } = data;

  if (typeof product === 'undefined') {
    throw new Error('Non-existing shelf');
  }

  const seoData: SeoData = {
    pageUri: `/product/${product.slug}`,
    title: product.name,
    description: product.description,
    openGraphImage: product.imageUrl,
    openGraphType: 'product',
  };

  const currentPalette = product.shelf?.palette || palette;

  const styles = {
    ProductContainer: styled.div`
      background-color: ${currentPalette.backgroundColor.css};
      border-radius: 1em;
      padding: 2em;
      margin-bottom: 2em;

      @media (min-width: 640px) {
        display: grid;
        gap: 2em;
        grid-template-columns: repeat(3, 1fr);
        grid-template-areas:
          'im ds ds'
          'im pr rl'
          'im ic rl';
      }
    `,
  };

  return (
    <IndexLayout seoData={seoData} palette={product.shelf?.palette}>
      <BackgroundImageContainer
        backgroundImage={product.shelf?.backgroundImage || { url: '' }}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundAttachment="fixed"
      >
        <PageHeader backgroundColor={currentPalette.headerBackgroundColor.css} wavePath={product.shelf?.wavePath || ''}>
          <MainContainer>
            <Title level={1} color={currentPalette.headerTextColor.css}>
              {product.name}
            </Title>
          </MainContainer>
        </PageHeader>

        <Filler height="12em" />

        <MainContainer>
          <styles.ProductContainer>
            <ProductImage src={product.imageUrl} />
            <ProductPrice>Prix: {product.price.toFixed(2)} &euro;</ProductPrice>
            <ProductDescription>
              <Markdown>{product.description || ''}</Markdown>
            </ProductDescription>
            <ProductIcons>
              <SectionTitle>
                <GrDocumentText />
                &nbsp;Fiche technique
              </SectionTitle>
              <ProductIcon Icon={GiAges} caption={`${product.minAge} ans`} />
              <ProductIcon
                Icon={GrClock}
                caption={
                  `${product.minPlaytime} min` +
                  (product.maxPlaytime && product.maxPlaytime !== product.minPlaytime ? ` - ${product.maxPlaytime} min` : '')
                }
              />
              <ProductIcon
                Icon={FaUsers}
                caption={
                  `${product.minPlayers} joueurs` +
                  (product.maxPlayers && product.maxPlayers !== product.minPlayers ? ` - ${product.maxPlayers} joueurs` : '')
                }
              />
            </ProductIcons>
            <ProductRelationships>
              <ProductRelationship Icon={FaStar} title="Catégories" assets={product.categories} />
              <ProductRelationship Icon={FaCog} title="Mécaniques" assets={product.mechanics} />
            </ProductRelationships>
          </styles.ProductContainer>
        </MainContainer>
      </BackgroundImageContainer >
    </IndexLayout >
  );
};

export const query = graphql`
  query ProductPageQuery($slug: String!) {
    graphCmsProduct(slug: { eq: $slug }) {
      name
      description
      price
      imageUrl
      minPlaytime
      maxPlaytime
      minPlayers
      maxPlayers
      minAge
      slug
      shelf {
        name
        slug
        backgroundColor {
          css
        }
        titleColor {
          css
        }
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
      }
      mechanics {
        slug
        name
      }
      categories {
        slug
        name
      }
    }
  }
`;

export default ProductPage;
