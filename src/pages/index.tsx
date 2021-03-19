import React, { FC, useContext } from 'react';
import { graphql } from 'gatsby';
import IndexLayout from '../layouts';
import { Selection, ShelfPreview } from '../components';
import { PagePropsWithData, SeoData } from '../models';
import { Filler, Title } from '../components/styles';
import { Logo as LogoImage } from '../images';
import styled from '@emotion/styled';
import DownWaves from '../components/styles/waves/down';
import AllWave from '../components/styles/waves';
import Invisible from '../components/styles/invisible';
import { ThemeContext } from '../contexts/theme';

const DownWave = DownWaves[0];

// SECTION Main component
const IndexPage: FC<PagePropsWithData> = ({ data }) => {
  const { palette } = useContext(ThemeContext);

  const { graphCmsPage: page } = data;

  // ANCHOR SEO parameters
  const seoData: SeoData = {
    pageUri: '/',
    title: page?.title || '',
    description: page?.description,
    openGraphImage: page?.openGraphImage?.url,
  };

  // ANCHOR Styles
  const styles = {
    HeaderContainer: styled.div`
      position: relative;
    `,
    Logo: styled.img`
      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;
      z-index: 5;
      filter: drop-shadow(5px 5px 5px #333);
    `,
    Separator: styled.div`
      position: absolute;
      z-index: 1;
      transform: scale(1, 0.5);
      transform-origin: top center;
    `,
  };

  // ANCHOR Template
  return (
    <IndexLayout seoData={seoData} palette={page?.palette}>
      {/* Website logo */}
      <styles.HeaderContainer>
        <Filler color={palette.headerBackgroundColor.css} height="6em" />
        <styles.Logo src={LogoImage} alt="Logo de l'antre des jeux" />
        <Filler color={palette.headerBackgroundColor.css} height="6em" />
        <styles.Separator>
          <DownWave color={palette.headerBackgroundColor.css} />
        </styles.Separator>
      </styles.HeaderContainer>

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
// !SECTION

// ANCHOR GraphQL query
export const query = graphql`
  query HomePageQuery {
    graphCmsPage(slug: { eq: "home" }) {
      title
      description
      openGraphImage {
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
    allGraphCmsShelf {
      edges {
        node {
          backgroundImage {
            url
          }
          description
          name
          slug
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
          }
        }
      }
    }
  }
`;

// ANCHOR Exports
export default IndexPage;
