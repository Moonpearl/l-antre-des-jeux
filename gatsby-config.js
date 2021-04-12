'use strict';

require('dotenv').config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: "L'Antre des jeux",
    description: 'Magasin de jeux de sociétés situé en région ?',
    keywords: ['gatsbyjs', 'gatsby', 'javascript', 'sample', 'something'],
    siteUrl: 'https://l-antre-des-jeux.netlify.app/',
    defaultLocale: 'fr',
    author: {
      name: 'Resi Respati',
      url: 'https://twitter.com/resir014',
      email: 'resir014@gmail.com',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-graphcms',
      options: {
        // Your GraphCMS API endpoint. Available from your project settings.
        endpoint: process.env.GRAPHCMS_ENDPOINT,
        // A PAT (Permanent Auth Token) for your project. Required if your project is not available publicly, or you want to scope access to a specific content stage (i.e. draft content).
        // token: process.env.GRAPHCMS_TOKEN
        buildMarkdownNodes: true,
        locales: ['fr_FR', 'en'],
      },
    },
    {
      resolve: 'gatsby-plugin-snipcart-advanced',
      options: {
        version: '3.0.29',
        publicApiKey: process.env.SNIPCART_API_KEY,
        defaultLang: 'fr',
        currency: 'eur',
        openCartOnAdd: true,
        useSideCart: true,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://gatsby-starter-typescript-plus.netlify.com',
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
  ],
};
