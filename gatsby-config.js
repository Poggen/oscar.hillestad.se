module.exports = {
  siteMetadata: {
    title: `Oscar Hillestad | Product / Project Manager`,
    description: `I'm Oscar, a product manager who enjoys building digital products.`,
    author: `@poggn`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `oscarhillestad`,
        short_name: `oscar`,
        start_url: `/`,
        background_color: `#fdbb2d`,
        theme_color: `#fdbb2d`,
        display: `minimal-ui`,
        icon: `src/images/oscar.png`,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-preact`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/layout.js"),
        },
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `/assets/icons/`
        }
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
