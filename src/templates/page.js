import * as React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

// markup
const BlogPageTemplate = ({ data }) => {
  const page = data.allWpPage.edges[0].node
  return (
    <Layout title={page.title} slug={`${page.slug}`}>
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
            opengraphSiteName
            opengraphPublisher
            opengraphPublishedTime
            title
            twitterDescription
            twitterTitle
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
