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
      <article className="w-screen py-8 overflow-x-hidden">
        <section className="md:min-h-screen">
          <div className="container">
            <header className="flex flex-row pb-16 flex-nowrap">
              <div className="w-8/12 pr-1">
                <h1 className="small-header">{smallHeader ? smallHeader : title}</h1>
                <h2 className="large-header">{largeHeader}</h2>
              </div>
              <div className="w-4/12">
                <img
                  className="transform scale-150"
                  src={acfContactPageHeaderImage?.contactPageHeaderImage?.localFile?.childImageSharp?.fluid?.src}
                  alt=""
                />
              </div>
            </header>
          </div>
          {page.content ? <div className="richtext" dangerouslySetInnerHTML={{ __html: page.content }} /> : null}
        </section>

        <section className="">
          <div className="banner">
            <div className="container">
              <div>
                <p className="pr-4 text-lg leading-none">{acfContactPageContent.contactPageHeader}</p>
                {acfContactPageContent.contactPageContent ? (
                  <div
                    className="pr-4 richtext"
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
