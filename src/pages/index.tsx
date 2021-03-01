import React, { FC } from 'react';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import IndexLayout from '../layouts';
import { ShelfPreview } from '../components';
import { PagePropsWithData } from '../models';

const ContainerIndex = styled.div`
  background-color: #555455;
`;

const FooterStyled = styled.footer`
  z-index: 0;
  position: relative;
  text-align: center;
  font-style: italic;
  font-weight: bold;
  font-size: 1.2em;
  letter-spacing: 5px;
  margin: 2em;
  color: #989898;
  font-family: 'Ubuntu Condensed', sans-serif;
`;

const PostFooter = styled.div`
  background-attachment: fixed;
  background-color: #555455;
  height: 5em;
`;

const IndexPage: FC<PagePropsWithData> = ({ data }) => (
  <IndexLayout>
    <ContainerIndex>
      <ul>
        {data.allGraphCmsShelf?.edges.map(({ node }, index) => (
          <li key={node.id}>
            <ShelfPreview shelf={node} even={index % 2 === 0} />
          </li>
        ))}
      </ul>
      <PostFooter />
      <FooterStyled>Copyright 2021 - L&apos;Antre des jeux</FooterStyled>
    </ContainerIndex>
  </IndexLayout>
);

export const query = graphql`
  query HomePageQuery {
    allGraphCmsShelf {
      edges {
        node {
          backgroundColor {
            css
          }
          titleColor {
            css
          }
          description
          name
          slug
          backgroundImage {
            url
          }
        }
      }
    }
  }
`;

export default IndexPage;
