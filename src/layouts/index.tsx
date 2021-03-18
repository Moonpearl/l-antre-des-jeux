import * as React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { Global, css } from '@emotion/core';

import 'modern-normalize';
import '../styles/normalize';

import Header from '../components/Header';
import LayoutRoot from '../components/LayoutRoot';
import LayoutMain from '../components/LayoutMain';
import { Footer } from '../components';

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
}

interface IndexLayoutProps {
  title?: string;
  description?: string;
  keywords?: string[];
  openGraphImage?: string;
  siteName?: string;
  openGraphTitle?: string;
  openGraphType?: string;
  openGraphLocale?: string;
  pageUri: string;
}

const IndexLayout: React.FC<IndexLayoutProps> = ({ children, title, description, keywords, openGraphImage, siteName, openGraphLocale, openGraphType, pageUri }) => (
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
      }
    `}
    render={(data: StaticQueryProps) => (
      <LayoutRoot>
        <GlobalStyles />
        <Helmet
          title={title}
          meta={[
            { name: 'description', content: description || data.site.siteMetadata.description },
            { name: 'keywords', content: (keywords || data.site.siteMetadata.keywords).join(', ') },
            { name: 'siteName', content: siteName || data.site.siteMetadata.title },
            { property: 'og:image', name: 'openGraphImage', content: openGraphImage },
            { property: 'og:title', name: 'openGraphTitle', content: title || data.site.siteMetadata.title },
            { property: 'og:type', name: 'openGraphType', content: openGraphType || 'website' },
            { property: 'og:url', name: 'openGraphUrl', content: data.site.siteMetadata.siteUrl + pageUri },
            { property: 'og:locale', name: 'openGraphLocale', content: openGraphLocale || data.site.siteMetadata.defaultLocale },
          ]}
        />
        <Header />
        <LayoutMain>{children}</LayoutMain>
        <Footer />
      </LayoutRoot>
    )}
  />
);

export default IndexLayout;
