import * as React from 'react';


export const query = graphql`
query AboutPagesQuery {
  graphCmsPages {
    description
    openGraphImage {
      id
    }
    title
    slug
  }
}
`
