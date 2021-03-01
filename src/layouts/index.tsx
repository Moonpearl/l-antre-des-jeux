import * as React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { Global, css } from '@emotion/core';

import 'modern-normalize';
import '../styles/normalize';

import Header from '../components/Header';
import LayoutRoot from '../components/LayoutRoot';
import LayoutMain from '../components/LayoutMain';

const GlobalStyles: React.FC = () => (
  <Global
    styles={css`
      @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

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
      keywords: string;
    };
  };
}

const IndexLayout: React.FC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query IndexLayoutQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => (
      <LayoutRoot>
        <GlobalStyles />
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: data.site.siteMetadata.keywords },
          ]}
        />
        <Header title={data.site.siteMetadata.title} />
        <LayoutMain>{children}</LayoutMain>
      </LayoutRoot>
    )}
  />
);

export default IndexLayout;
