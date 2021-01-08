import * as React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import ContactForm from '../components/ContactForm'

// markup
const IndexPageTemplate = ({ data }) => {
  const page = data.allWpPage.edges[0].node
  const { title, slug } = page
  const { seo } = page
  const { canonical, metaDesc, seoTitle } = seo
  const { acfPageHeader, acfContactPageContent, acfContactPageHeaderImage } = page
  const { smallHeader, largeHeader } = acfPageHeader

  return (
    <Layout title={title} slug={slug} canonical={canonical} metaDesc={metaDesc} seoTitle={seoTitle} ogImage={null}>
      <article>
        <section className="min-h-screen">
          <div className="container">
            <h1>{smallHeader ? smallHeader : title}</h1>
            <h2>{largeHeader}</h2>
            <div>
              <img
                src={acfContactPageHeaderImage?.contactPageHeaderImage?.localFile?.childImageSharp?.fluid?.src}
                alt=""
              />
            </div>
          </div>
          {page.content ? <div className="richtext" dangerouslySetInnerHTML={{ __html: page.content }} /> : null}
        </section>

        <section className="min-h-screen">
          <div className="banner">
            <div className="container">
              <div>
                <div>{acfContactPageContent.contactPageHeader}</div>
                {acfContactPageContent.contactPageContent ? (
                  <div
                    className="richtext"
                    dangerouslySetInnerHTML={{ __html: acfContactPageContent.contactPageContent }}
                  />
                ) : null}
              </div>
              <div>
                <ContactForm />
              </div>
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
          acfContactPageContent {
            contactPageContent
            contactPageHeader
          }
          acfContactPageHeaderImage {
            contactPageHeaderImage {
              localFile {
                childImageSharp {
                  fluid {
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
