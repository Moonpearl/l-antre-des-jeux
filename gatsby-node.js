'use strict';

const path = require('path');

const resources = [
  { uri: 'shelf', node: 'allGraphCmsShelf', filename: 'shelf.tsx' },
  { uri: 'product', node: 'allGraphCmsProduct', filename: 'product.tsx' },
];

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  // Sometimes, optional fields tend to get not picked up by the GraphQL
  // interpreter if not a single content uses it. Therefore, we're putting them
  // through `createNodeField` so that the fields still exist and GraphQL won't
  // trip up. An empty string is still required in replacement to `null`.

  switch (node.internal.type) {
    case 'MarkdownRemark': {
      const { permalink, layout } = node.frontmatter;
      const { relativePath } = getNode(node.parent);

      let slug = permalink;

      if (!slug) {
        slug = `/${relativePath.replace('.md', '')}/`;
      }

      // Used to generate URL to view this content.
      createNodeField({
        node,
        name: 'slug',
        value: slug || '',
      });

      // Used to determine a page layout.
      createNodeField({
        node,
        name: 'layout',
        value: layout || '',
      });
    }
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  for (const resource of resources) {
    console.info(`Fetching resources of type '${resource.uri}'`);

    const allAssets = await graphql(`
      {
        ${resource.node}(limit: 1000) {
          edges {
            node {
              slug
            }
          }
        }
      }
    `);

    if (allAssets.errors) {
      console.error(allAssets.errors);
      throw new Error(allAssets.errors);
    }

    allAssets.data[resource.node].edges.forEach(({ node }) => {
      const { slug } = node;

      createPage({
        path: `/${resource.uri}/${slug}`,
        component: path.resolve(`./src/templates/${resource.filename}`),
        context: {
          // Data passed to context is available in page queries as GraphQL variables.
          slug,
        },
      });
    });

    await setTimeout(() => undefined, 1000);
  }
};
