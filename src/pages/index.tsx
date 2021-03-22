import React, { FC, useContext } from 'react';
import { graphql } from 'gatsby';
import IndexLayout from '../layouts';
import { Selection, ShelfPreview, PageHeader } from '../components';
import { PagePropsWithData, SeoData } from '../models';
import { Filler, Title } from '../components/styles';
import { Logo as LogoImage } from '../images';
import styled from '@emotion/styled';
import Wave from '../components/styles/wave';
import Invisible from '../components/styles/invisible';
import { ThemeContext } from '../contexts/theme';
import Separator from '../components/separator';

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
      <PageHeader backgroundColor={palette.headerBackgroundColor.css} wavePath={page.wavePath}>
        <styles.Logo src={LogoImage} alt="Logo de l'antre des jeux" />
      </PageHeader>

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
      {/* <Filler height="12em" />*/}
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
//* !SECTION */

// ANCHOR GraphQL query
export const query = graphql`
  query HomePageQuery {
    graphCmsPage(slug: { eq: "home" }) {
      title
      description
      wavePath
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
