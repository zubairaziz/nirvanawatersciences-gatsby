import * as React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import { PageTemplateProps } from '../types/page-template'

// markup
const PageTemplate: React.FC<PageTemplateProps> = (props) => {
  const { data } = props
  const page = data.allWpPage.edges[0].node
  const title = page?.title
  const slug = page?.slug
  const canonical = page?.seo?.canonical
  const metaDesc = page?.seo?.metaDesc
  const seoTitle = page?.seo?.seoTitle
  const ogImage = null
  return (
    <Layout title={title} slug={slug} canonical={canonical} metaDesc={metaDesc} seoTitle={seoTitle} ogImage={ogImage}>
      <article>
        <h1>{page.title}</h1>
        {page.content ? <div className="richtext" dangerouslySetInnerHTML={{ __html: page.content }} /> : null}
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
export default PageTemplate
