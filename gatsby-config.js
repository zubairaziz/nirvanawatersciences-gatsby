const dotenv = require(`dotenv`)
dotenv.config()
const wordpressURL = process.env.WORDPRESS_URL

module.exports = {
  siteMetadata: {
    title: 'Nirvana Water Sciences',
    siteUrl: `https://www.nirvanawatersciences.com`,
  },
  flags: { DEV_SSR: true },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    'gatsby-transformer-sharp',
    'gatsby-plugin-postcss',
    'gatsby-plugin-eslint',
    {
      resolve: 'gatsby-source-wordpress-experimental',
      options: {
        url: `${wordpressURL}/graphql`,
        schema: {
          timeout: 100000,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: '#',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
        name: `Nirvana Water Sciences`,
        short_name: `Nirvana`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
}
