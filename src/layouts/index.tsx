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
import { SeoData } from '../models';
import { GraphcmsGlobalContent } from '../models/graphcms/assets';

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
}

const IndexLayout: React.FC<IndexLayoutProps> = ({ children, seoData }) => (
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
        }
      }
    `}
    render={(data: StaticQueryProps) => (
      <LayoutRoot>
        <GlobalStyles />
        <Helmet
          title={seoData.title}
          meta={[
            { name: 'description', content: seoData.description || data.site.siteMetadata.description },
            { name: 'keywords', content: (seoData.keywords || data.graphCmsGlobalContent.keywords || data.site.siteMetadata.keywords).join(', ') },
            { name: 'siteName', content: seoData.siteName || data.graphCmsGlobalContent.siteName || data.site.siteMetadata.title },
            { property: 'og:image', name: 'openGraphImage', content: seoData.openGraphImage },
            { property: 'og:title', name: 'openGraphTitle', content: seoData.title || data.site.siteMetadata.title },
            { property: 'og:type', name: 'openGraphType', content: seoData.openGraphType || 'website' },
            { property: 'og:url', name: 'openGraphUrl', content: data.site.siteMetadata.siteUrl + seoData.pageUri },
            { property: 'og:locale', name: 'openGraphLocale', content: seoData.openGraphLocale || data.site.siteMetadata.defaultLocale },
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
