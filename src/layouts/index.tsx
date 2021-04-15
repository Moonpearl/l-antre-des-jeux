import React, { ReactNode, useContext, useEffect } from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { Global, css } from '@emotion/core';

import 'modern-normalize';
import '../styles/normalize';

import Header from '../components/Header';
import LayoutRoot from '../components/LayoutRoot';
import LayoutMain from '../components/LayoutMain';
import { Footer } from '../components';
import { SeoData } from '../models';
import { GraphcmsGlobalContent } from '../models/graphcms/assets';
import { Palette, ThemeContext } from '../contexts/theme';

const GlobalStyles: React.FC = () => (
  <Global
    styles={css`
      @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;600&display=swap');

      .wave {
        transform-origin: left center;
        width: 1440px;
      }

      .wave.up {
        position: relative;
        top: 8px;
      }

      @media (min-width: 360px) {
        .wave {
          transform: scale(0.5, 1);
        }
      }

      @media (min-width: 720px) {
        .wave {
          transform: scale(0.75, 1);
        }
      }

      @media (min-width: 1080px) {
        .wave {
          transform: initial;
        }
      }

      @media (min-width: 1440px) {
        .wave {
          transform: scale(1.5, 1);
        }
      }

      @media (min-width: 2160px) {
        .wave {
          transform: scale(2, 1);
        }
      }

      @media (min-width: 2880px) {
        .wave {
          transform: scale(2.5, 1);
        }
      }
    `}
  />
);

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      keywords: string[];
      siteUrl: string;
      defaultLocale: string;
    };
  };
  graphCmsGlobalContent: GraphcmsGlobalContent;
}

interface IndexLayoutProps {
  seoData: SeoData;
  palette?: Palette;
}

const IndexLayout: React.FC<IndexLayoutProps> = ({ children, seoData, palette: pagePalette }) => (
  <StaticQuery
    query={graphql`
      query IndexLayoutQuery {
        site {
          siteMetadata {
            keywords
            title
            description
            siteUrl
            defaultLocale
          }
        }
        graphCmsGlobalContent {
          siteName
          keywords
          defaultPalette {
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
    `}
    render={(data: StaticQueryProps): ReactNode => {
      const description = seoData.description || data.site.siteMetadata.description;
      const keywords = (seoData.keywords || data.graphCmsGlobalContent.keywords || data.site.siteMetadata.keywords).join(', ');
      const siteName = seoData.siteName || data.graphCmsGlobalContent.siteName || data.site.siteMetadata.title;
      const title = `${siteName} - ${seoData.title}`;
      const type = seoData.openGraphType || 'website';
      const image = seoData.openGraphImage;
      const url = data.site.siteMetadata.siteUrl + seoData.pageUri;
      const locale = seoData.openGraphLocale || data.site.siteMetadata.defaultLocale;

      const { palette, setPalette } = useContext(ThemeContext);

      const currentPalette: Palette = pagePalette || data.graphCmsGlobalContent.defaultPalette || palette;

      console.log('pagePalette:', pagePalette);
      console.log('defaultPalette:', data.graphCmsGlobalContent.defaultPalette);
      console.log('contextPalette:', palette);
      console.log('currentPalette', currentPalette);

      useEffect(() => setPalette(currentPalette), [pagePalette]);

      return (
        <LayoutRoot>
          <GlobalStyles />
          <Helmet
            htmlAttributes={{
              lang: 'fr',
            }}
            title={title}
            meta={[
              { name: 'description', content: description },
              { name: 'keywords', content: keywords },
              { name: 'siteName', content: siteName },
              { property: 'og:image', name: 'openGraphImage', content: image },
              { property: 'og:title', name: 'openGraphTitle', content: title },
              { property: 'og:type', name: 'openGraphType', content: type },
              { property: 'og:url', name: 'openGraphUrl', content: url },
              { property: 'og:locale', name: 'openGraphLocale', content: locale },
            ]}
          />
          <Header />
          <LayoutMain>{children}</LayoutMain>
          <Footer />
        </LayoutRoot>
      );
    }}
  />
);

export default IndexLayout;
