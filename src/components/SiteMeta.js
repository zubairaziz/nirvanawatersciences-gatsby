import * as React from 'react'
import Helmet from 'react-helmet'

const SiteMeta = (props) => {
  const { title, slug, canonical, metaDesc, opengraphSiteName, seoTitle, ogImage } = props
  return (
    <Helmet>
      <html lang="en-US" />
      <meta charSet="utf-8" />
      <title>
        {seoTitle ? seoTitle : title} | {opengraphSiteName}
      </title>
      <meta name="description" content={metaDesc} />
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={`${seoTitle ? seoTitle : title} | ${opengraphSiteName}`} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="" />
      <meta name="twitter:title" content={`${seoTitle ? seoTitle : title} | ${opengraphSiteName}`} />
      <meta name="twitter:description" content={metaDesc} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  )
}

export default SiteMeta
