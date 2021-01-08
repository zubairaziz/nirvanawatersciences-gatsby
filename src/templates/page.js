import * as React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

// markup
const BlogPageTemplate = ({ data }) => {
  const page = data.allWpPage.edges[0].node
  const title = page?.title
  const slug = page?.slug
  const canonical = page?.seo?.canonical
  const metaDesc = page?.seo?.metaDesc
  const seoTitle = page?.seo?.title
  const ogImage = page?.seo?.opengraphImage?.localFile?.childImageSharp?.fixed?.src
  return (
    <Layout title={title} slug={slug} canonical={canonical} metaDesc={metaDesc} seoTitle={seoTitle} ogImage={ogImage}>
      <article>
        <h1>{page.title}</h1>
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
export default BlogPageTemplate
