import * as React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

// markup
const IndexPageTemplate = ({ data }) => {
  const page = data.allWpPage.edges[0].node
  const { title, slug } = page
  const { seo } = page
  const { canonical, metaDesc, seoTitle } = seo
  const { acfPageHeader } = page
  const { smallHeader, largeHeader } = acfPageHeader

  return (
    <Layout title={title} slug={slug} canonical={canonical} metaDesc={metaDesc} seoTitle={seoTitle} ogImage={null}>
      <article>
        <section className="min-h-screen">
          <div className="container">
            <h1>{smallHeader ? smallHeader : title}</h1>
            <h2>{largeHeader}</h2>
          </div>
          {page.content ? <div className="richtext" dangerouslySetInnerHTML={{ __html: page.content }} /> : null}
        </section>

        <section className="min-h-screen">
          <div className="banner">
            <div className="container">
              <p></p>
            </div>
          </div>
        </section>

        <section className="min-h-screen"></section>
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
          }
          acfPageHeader {
            largeHeader
            leadIn
            smallHeader
          }
          acfProductsPageHMB {
            title
            subtitle
            item1
            item2
            item3
            item4
            image {
              localFile {
                childImageSharp {
                  fixed {
                    src
                    srcWebp
                    width
                    height
                  }
                }
              }
            }
            icon1 {
              localFile {
                publicURL
              }
            }
            icon2 {
              localFile {
                publicURL
              }
            }
            icon3 {
              localFile {
                publicURL
              }
            }
            icon4 {
              localFile {
                publicURL
              }
            }
          }
        }
      }
    }
  }
`
export default IndexPageTemplate
