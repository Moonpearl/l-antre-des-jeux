import React, { FC } from 'react';
import { graphql } from 'gatsby';
import IndexLayout from '../layouts';
import { Selection, ShelfPreview } from '../components';
import { PagePropsWithData, SeoData } from '../models';
import { Filler, Title } from '../components/styles';
import { Logo as LogoImage } from '../images';
import styled from '@emotion/styled';
import DownWaves from '../components/styles/waves/down';
import { colors } from '../styles/variables';
import Invisible from '../components/styles/invisible';

const HeaderContainer = styled.div`
  position: relative;
`;

const Logo = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 5;
  filter: drop-shadow(5px 5px 5px #333);
`;

const Separator = styled.div`
  position: absolute;
  z-index: 1;
  transform: scale(1, 0.5);
  transform-origin: top center;
`;

const DownWave = DownWaves[0];

const IndexPage: FC<PagePropsWithData> = ({ data }) => {
  const { graphCmsPage: page } = data;

  const seoData: SeoData = {
    pageUri: '/',
    title: page?.title || '',
    description: page?.description,
    openGraphImage: page?.openGraphImage?.url,
  };

  return (
    <IndexLayout seoData={seoData}>
      {/* Website logo */}
      <HeaderContainer>
        <Filler color={colors.ui.dark} height="6em" />
        <Logo src={LogoImage} alt="Logo de l'antre des jeux" />
        <Filler color={colors.ui.dark} height="6em" />
        <Separator>
          <DownWave color={colors.ui.dark} />
        </Separator>
      </HeaderContainer>

      <Invisible>
        <Title level={2}>Rayons</Title>
      </Invisible>
      <ul>
        {data.allGraphCmsShelf?.edges.map(({ node }, index) => (
          <li key={node.slug}>
            <ShelfPreview shelf={node} index={index} />
          </li>
        ))}
      </ul>

      <Invisible>
        <Title level={2}>Sélections</Title>
      </Invisible>
      <Filler height="12em" />
      <ul>
        {data.allGraphCmsSelection?.edges.map(({ node }) => (
          <li key={node.slug}>
            <Selection selection={node} />
          </li>
        ))}
      </ul>
    </IndexLayout>
  );
};

export const query = graphql`
  query HomePageQuery {
    graphCmsPage(slug: { eq: "home" }) {
      title
      description
      openGraphImage {
        url
      }
    }
    allGraphCmsShelf {
      edges {
        node {
          backgroundImage {
            url
          }
          backgroundColor {
            css
          }
          description
          name
          slug
          titleColor {
            css
          }
        }
      }
    }
    allGraphCmsSelection {
      edges {
        node {
          name
          slug
          description
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
    }
  }
`;

export default IndexPage;
