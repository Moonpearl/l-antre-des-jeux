import React, { FC } from 'react'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import IndexLayout from '../layouts'
import { Shelf } from '../models'
import { ShelfPreview } from '../components'

const ContainerIndex = styled.div`
  background-color: pink;
`

const FooterStyled = styled.footer`
  position: relative;
  text-align: center;
  font-style: italic;
  letter-spacing: 10px;
  margin: 2em;
`

interface ShelfEdge {
  node: Shelf
}
interface IndexPageProps {
  data: {
    allGraphCmsShelf: {
      edges: ShelfEdge[]
    }
  }
}

const IndexPage: FC<IndexPageProps> = ({ data }) => (
  <IndexLayout>
    <ContainerIndex>
      <ul>
        {data.allGraphCmsShelf.edges.map((edge, index) => (
          <ShelfPreview key={index} shelf={edge.node} even={index % 2 === 0} />
        ))}
      </ul>

      <FooterStyled>Copyright 2021 - L'Antre des jeux</FooterStyled>
    </ContainerIndex>
  </IndexLayout>
);

export const query = graphql`
  query HomePageQuery {
    allGraphCmsShelf {
      edges {
        node {
          color {
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
`

export default IndexPage
