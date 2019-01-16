module.exports = {
  siteMetadata: {
    title: `Yodacom`,
    description: `Yodacom builds blazing fast, secure, SEO optimized websites and landing pages to get your product, personality or promotions supercharged`,
    author: `@Jeremy Black - yoda from yodacom`,
    siteUrl: 'https://silly-fermi-bf850c.netlify.com'
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

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
        name: `Yodacom Blog`,
        short_name: `Yodacom`,
        start_url: `/`,
        background_color: `#524763`,
        theme_color: `#524763`,
        display: `minimal-ui`,
        icon: `src/images/yodacomLogo180x180.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: `posts`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`
      }
    },
    'gatsby-transformer-remark',
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-netlify`, // keep this as last in the plugin array!
  ],
}
