const dotenv = require(`dotenv`)
dotenv.config()
const WORDPRESS_URL = process.env.GATSBY_WORDPRESS_URL

module.exports = {
  siteMetadata: {
    title: `Nirvana Water Sciences`,
    siteUrl: `https://www.nirvanawatersciences.com`,
    business: `Nirvana Water Sciences Corp`,
    addressStreet: `One Nirvana Plaza`,
    addressCity: `Forestport`,
    addressState: `NY`,
    addressZip: `13338`,
    phone1: `3152628192`,
    phone2: `8884635675`,
  },
  flags: { DEV_SSR: true },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-eslint`,
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.75, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations
        selector: `[data-sal]`, // Selector of the elements to be animated
        animateClassName: `sal-animate`, // Class name which triggers animation
        disabledClassName: `sal-disabled`, // Class name which defines the disabled state
        rootMargin: `0% 50%`, // Corresponds to root`s bounding box margin
        enterEventName: `sal:in`, // Enter event name
        exitEventName: `sal:out`, // Exit event name
      },
    },
    {
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        url: `${WORDPRESS_URL}/graphql`,
        schema: {
          timeout: 9999999,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/icon.png`,
        name: `Nirvana Water Sciences`,
        short_name: `Nirvana`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/images/`,
      },
      __key: `images`,
    },
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-offline`,
  ],
}
