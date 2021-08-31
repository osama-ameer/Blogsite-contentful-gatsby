const dotenv = require('dotenv')

dotenv.config()

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `JAMStack Blog Site`,
    description: `JAMStack Blog site to show experties in area of Gatsby, JAMStack and serverless`,
    author: `@osamaameer`,
  },
  plugins: [
    `gatsby-transformer-remark`,

    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: "qli877ujsryw",
        accessToken: "C0ZAHbvswGGSyeq-5Rt9LPZuPqgPT4b0iqWaRcnUppM",
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

  ],
}