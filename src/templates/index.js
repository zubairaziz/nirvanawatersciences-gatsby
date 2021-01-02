import * as React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

// markup
const IndexPageTemplate = ({ data }) => {
  const page = data.allWpPage.edges[0].node
  const title = page?.title
  const slug = page?.slug
  const canonical = page?.seo?.canonical
  const metaDesc = page?.seo?.metaDesc
  const opengraphSiteName = page?.seo?.opengraphSiteName
  const seoTitle = page?.seo?.title
  const ogImage = page?.seo?.opengraphImage?.localFile?.childImageSharp?.fixed?.src
  return (
    <Layout
      title={title}
      slug={slug}
      canonical={canonical}
      metaDesc={metaDesc}
      opengraphSiteName={opengraphSiteName}
      seoTitle={seoTitle}
      ogImage={ogImage}
    >
      <article>
        <div className="container">
          <h1>{page.title}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sit optio fugit porro non sed nemo natus
            possimus tenetur repudiandae expedita, vel architecto voluptatum, illum eaque quod dolorem voluptas
            similique.
          </p>
          <a href="/" className="button-outline">
            Test Button
          </a>
        </div>

        <div className="richtext" dangerouslySetInnerHTML={{ __html: page.content }} />
      </article>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    allWpPage(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          content
          id
          slug
          seo {
            canonical
            metaDesc
            opengraphSiteName
            title
            opengraphImage {
              link
              localFile {
                childImageSharp {
                  fixed(height: 630, width: 1200) {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
export default IndexPageTemplate
