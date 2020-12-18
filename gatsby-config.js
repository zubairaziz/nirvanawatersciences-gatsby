module.exports = {
    siteMetadata: {
        title: 'Nirvana Water Sciences',
    },
    plugins: [
        {
            resolve: 'gatsby-source-wordpress-experimental',
            options: {
                url: 'http://nirvanawatersciences.local/graphql',
            },
        },
        'gatsby-plugin-postcss',
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: '#',
            },
        },
        'gatsby-plugin-sharp',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sitemap',
        'gatsby-plugin-offline',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/images/icon.png',
            },
        },
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/images/',
            },
            __key: 'images',
        },
    ],
};
