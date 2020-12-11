const dotenv = require('dotenv')

if (process.env.NODE_ENV !='production'){
  dotenv.config()
}





module.exports = {
  siteMetadata: {
    title: `Gatsby Blog Site`,
    description: `bootcamp 2020`,
    author: `M Tauqeer`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `7qqy1yxs9hrf`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken:`t0fP7ELlxqh2VIsocQgfqiJw2DneZ1F6a1o0A4qWdA4`,
        forceFullSync: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
 
  ],
}

