import * as React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import ContactForm from '../components/ContactForm'
import { formatPhoneNumber, cleanPhoneNumber } from '../utils/utils.ts'
import Img from 'gatsby-image'

// markup
const IndexPageTemplate = ({ data }) => {
  const page = data.allWpPage.edges[0].node
  const { site } = data
  const { business, addressStreet, addressCity, addressState, addressZip, phone1, phone2 } = site.siteMetadata
  const { title, slug } = page
  const { seo } = page
  const { canonical, metaDesc, seoTitle } = seo
  const { acfPageHeader, acfContactPageContent, acfContactPageHeaderImage } = page
  const { smallHeader, largeHeader } = acfPageHeader

  return (
    <Layout title={title} slug={slug} canonical={canonical} metaDesc={metaDesc} seoTitle={seoTitle} ogImage={null}>
      <article className="w-screen py-8 overflow-x-hidden border-b border-dark-gray">
        <section className="md:min-h-screen">
          <div className="container">
            <header className="flex flex-row pb-16 md:pb-8 flex-nowrap md:items-center">
              <div className="w-8/12 pr-1 md:pr-8 md:w-7/12">
                <h1
                  className="small-header"
                  data-sal="slide-right"
                  data-sal-duration="500"
                  data-sal-easing="easeInOutBack"
                >
                  {smallHeader ? smallHeader : title}
                </h1>
                <h2
                  className="large-header"
                  data-sal="slide-right"
                  data-sal-delay="300"
                  data-sal-duration="500"
                  data-sal-easing="easeInOutBack"
                >
                  {largeHeader}
                </h2>
              </div>
              <div className="w-4/12 md:w-5/12">
                <figure
                  data-sal="slide-left"
                  data-sal-delay="300"
                  data-sal-duration="500"
                  data-sal-easing="easeInOutBack"
                >
                  <Img
                    className="transform scale-150 md:scale-100"
                    alt=""
                    fluid={acfContactPageHeaderImage?.contactPageHeaderImage?.localFile?.childImageSharp?.fluid}
                  />
                </figure>
              </div>
            </header>
          </div>
          {page.content ? <div className="richtext" dangerouslySetInnerHTML={{ __html: page.content }} /> : null}
        </section>

        <section className="md:pb-16">
          <div className="container">
            <div className="lg:flex lg:flex-row lg:flex-nowrap">
              <div className="lg:pr-16 lg:pt-8 lg:w-5/12">
                <p
                  className="pr-4 text-lg leading-none md:text-3xl"
                  data-sal="slide-right"
                  data-sal-duration="500"
                  data-sal-easing="easeInOutBack"
                >
                  {acfContactPageContent.contactPageHeader}
                </p>
                {acfContactPageContent.contactPageContent ? (
                  <div
                    className="pr-4 richtext"
                    dangerouslySetInnerHTML={{ __html: acfContactPageContent.contactPageContent }}
                    data-sal="slide-right"
                    data-sal-duration="500"
                    data-sal-easing="easeInOutBack"
                  />
                ) : null}
                <address className="leading-tight md:mt-8">
                  <div
                    className="font-bold"
                    data-sal="slide-right"
                    data-sal-duration="500"
                    data-sal-easing="easeInOutBack"
                  >
                    {business}
                  </div>
                  <div data-sal="slide-right" data-sal-duration="500" data-sal-easing="easeInOutBack">
                    {addressStreet}
                  </div>
                  <div data-sal="slide-right" data-sal-duration="500" data-sal-easing="easeInOutBack">
                    {addressCity}, {addressState} {addressZip}
                  </div>

                  <div className="mt-6">
                    <a
                      className="text-blue hover:underline"
                      href={`tel:${cleanPhoneNumber(phone1)}`}
                      data-sal="slide-right"
                      data-sal-duration="500"
                      data-sal-easing="easeInOutBack"
                    >
                      {formatPhoneNumber(phone1)}
                    </a>
                  </div>
                  <div className="">
                    <a
                      className="text-indigo hover:underline"
                      href={`tel:${cleanPhoneNumber(phone2)}`}
                      data-sal="slide-right"
                      data-sal-duration="500"
                      data-sal-easing="easeInOutBack"
                    >
                      {formatPhoneNumber(phone2)}
                    </a>
                  </div>
                </address>
              </div>
              <div className="border-black lg:border-l-2 lg:pl-16 lg:w-7/12">
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
    site {
      siteMetadata {
        business
        addressStreet
        addressCity
        addressState
        addressZip
        phone1
        phone2
      }
    }
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
                  fluid(maxWidth: 1200) {
                    ...GatsbyImageSharpFluid
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
