import React, { FC } from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import { Product } from '../models'

interface GraphCmsProductEdge {
  node: Product
}

interface TestPageProps {
  data: {
    allGraphCmsProduct: {
      edges: GraphCmsProductEdge[]
    }
  }
}

const ProductItem = styled.li`
  color: ${props => props.color};
`

const TestPage: FC<TestPageProps> = ({ data }) => {
  return (
    <ul>
      {data.allGraphCmsProduct.edges.map(edge => (
        <ProductItem color="blue">{edge.node.name}</ProductItem>
      ))}
    </ul>
  )
}

export const pageQuery = graphql`
  query MyQuery {
    allGraphCmsProduct(filter: { locale: { eq: en } }) {
      edges {
        node {
          name
          createdAt
          price
          id
        }
      }
    }
  }
`


export default TestPage
