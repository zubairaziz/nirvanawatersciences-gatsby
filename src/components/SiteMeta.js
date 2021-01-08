import * as React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const SiteMeta = (props) => {
  const { title, slug, canonical, metaDesc, seoTitle, ogImage } = props
  const { site, wp } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            description
            siteUrl
            title
          }
        }
        wp {
          seo {
            openGraph {
              defaultImage {
                id
                localFile {
                  childImageSharp {
                    fixed(width: 1200, height: 630) {
                      src
                    }
                  }
                }
              }
            }
            schema {
              companyName
              companyOrPerson
              inLanguage
              personName
              siteName
              siteUrl
              wordpressSiteName
            }
            social {
              facebook {
                url
              }
              linkedIn {
                url
              }
              twitter {
                cardType
                username
              }
            }
          }
        }
      }
    `
  )

  const canonicalLink = `${site.siteMetadata.siteUrl}/${slug}`
  const metaTitle = seoTitle ? seoTitle : title
  const siteName = site.siteMetadata.title
  const siteImage = ogImage ? ogImage : wp.seo.openGraph.defaultImage.localFile.childImageSharp.fixed.src
  const facebook = wp.seo.social.facebook.url
  const linkedin = wp.seo.social.linkedIn.url
  const twitter = `https://twitter.com/${wp.seo.social.twitter.username}`
  const applicationJSON = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${site.siteMetadata.siteUrl}#organization`,
        name: siteName,
        url: site.siteMetadata.siteUrl,
        sameAs: [facebook, linkedin, twitter],
        logo: {
          '@type': 'ImageObject',
          '@id': `${site.siteMetadata.siteUrl}#logo`,
          url: 'siteImage',
          caption: siteName,
        },
        image: { '@id': `${site.siteMetadata.siteUrl}#logo` },
      },
      {
        '@type': 'WebSite',
        '@id': `${site.siteMetadata.siteUrl}#website`,
        url: site.siteMetadata.siteUrl,
        name: siteName,
        publisher: { '@id': `${site.siteMetadata.siteUrl}#organization` },
        // potentialAction: {
        //   '@type': 'SearchAction',
        //   target: 'https://yoast.com/?s={search_term_string}',
        //   'query-input': 'required name=search_term_string',
        // },
      },
      {
        '@type': 'WebPage',
        '@id': `${canonicalLink}#webpage`,
        url: `${canonicalLink}`,
        inLanguage: 'en-US',
        name: metaTitle,
        isPartOf: { '@id': `${site.siteMetadata.siteUrl}#website` },
        image: {
          '@type': 'ImageObject',
          '@id': `${canonicalLink}#primaryimage`,
          url: `https://yoast.com/app/uploads/2008/04/WordPress_SEO_definitive_guide_FI.png`,
          caption: siteName,
        },
        primaryImageOfPage: { '@id': `${canonicalLink}#primaryimage` },
        // datePublished: '2019-03-28T14:05:01+00:00',
        // dateModified: '2019-04-11T12:24:14+00:00',
        description: metaDesc,
        // breadcrumb: { '@id': '${canonicalLink}#breadcrumb' },
      },
    ],
  }
  return (
    <Helmet>
      <html lang="en-US" />
      <meta charSet="utf-8" />
      <title>
        {metaTitle} | {siteName}
      </title>
      <meta name="description" content={metaDesc} />
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={`${metaTitle} | ${siteName}`} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:url" content={canonicalLink} />
      <meta property="og:image" content={siteImage} />
      <meta property="og:site_name" content={siteName} />

      <meta name="twitter:card" content={wp.seo.social.twitter.cardType} />
      <meta name="twitter:site" content={wp.seo.social.twitter.username} />
      <meta name="twitter:title" content={`${metaTitle} | ${siteName}`} />
      <meta name="twitter:description" content={metaDesc} />
      <meta name="twitter:image" content={siteImage} />

      <script type="application/ld+json">{JSON.stringify(applicationJSON)}</script>
    </Helmet>
  )
}

export default SiteMeta
