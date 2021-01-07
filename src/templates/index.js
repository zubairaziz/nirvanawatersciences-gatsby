import * as React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

// markup
const IndexPageTemplate = ({ data }) => {
  const page = data.allWpPage.edges[0].node
  const title = page?.title
  const slug = ''
  const { seo } = page
  const { canonical, metaDesc, seoTitle } = seo
  const { acfPageHeader } = page
  const { smallHeader, largeHeader } = acfPageHeader
  const { acfHomePageCallouts } = page
  const {
    callout1Text,
    callout2Text,
    callout3Text,
    callout4Text,
    callout1Image,
    callout2Image,
    callout3Image,
    callout4Image,
  } = acfHomePageCallouts
  const { acfHomePageBanners } = page
  const { bottomBannerText, topBannerText1, topBannerText2, topBannerText3 } = acfHomePageBanners
  const { acfHomePageBottles } = page
  const {
    hmbContent,
    hmbTitle,
    hmbBottleImage,
    hmbIcon1,
    hmbIcon2,
    hmbIcon3,
    selectContent,
    selectTitle,
    selectBottleImage,
    selectIcon1,
    selectIcon2,
    selectIcon3,
  } = acfHomePageBottles

  return (
    <Layout title={title} slug={slug} canonical={canonical} metaDesc={metaDesc} seoTitle={seoTitle} ogImage={null}>
      <article>
        <section className="min-h-screen">
          <div className="container">
            <h1>{smallHeader ? smallHeader : title}</h1>
            <h2>{largeHeader}</h2>
            <div>
              <div>
                <img src={callout1Image.localFile.publicURL} width="48" height="48" alt="" />
                <span>{callout1Text}</span>
              </div>
              <div>
                <img src={callout2Image.localFile.publicURL} width="48" height="48" alt="" />
                <span>{callout2Text}</span>
              </div>
              <div>
                <img src={callout3Image.localFile.publicURL} width="48" height="48" alt="" />
                <span>{callout3Text}</span>
              </div>
              <div>
                <img src={callout4Image.localFile.publicURL} width="48" height="48" alt="" />
                <span>{callout4Text}</span>
              </div>
            </div>
          </div>
          {page.content ? <div className="richtext" dangerouslySetInnerHTML={{ __html: page.content }} /> : null}
        </section>

        <section className="min-h-screen">
          <div className="top-banner">
            <div className="container">
              <p>{topBannerText1}</p>
              <p>{topBannerText2}</p>
              <p>{topBannerText3}</p>
            </div>
          </div>
          <div className="bottom-banner">
            <div className="container">
              <p>{bottomBannerText}</p>
            </div>
          </div>
        </section>

        <section className="min-h-screen">
          <div className="container">
            <div className="select">
              <div>
                <img src={selectIcon1.localFile.publicURL} width="48" height="48" alt="" />
                <img src={selectIcon2.localFile.publicURL} width="48" height="48" alt="" />
                <img src={selectIcon3.localFile.publicURL} width="48" height="48" alt="" />
              </div>
              <div>
                <img
                  src={selectBottleImage.localFile.childImageSharp.fixed.src}
                  alt=""
                  width={selectBottleImage.localFile.childImageSharp.fixed.width}
                  height={selectBottleImage.localFile.childImageSharp.fixed.height}
                />
                <h4>{selectTitle}</h4>
                <p>{selectContent}</p>
              </div>
            </div>
            <div className="hmb">
              <div>
                <img src={hmbIcon1.localFile.publicURL} width="48" height="48" alt="" />
                <img src={hmbIcon2.localFile.publicURL} width="48" height="48" alt="" />
                <img src={hmbIcon3.localFile.publicURL} width="48" height="48" alt="" />
              </div>
              <div>
                <img
                  src={hmbBottleImage.localFile.childImageSharp.fixed.src}
                  alt=""
                  width={hmbBottleImage.localFile.childImageSharp.fixed.width}
                  height={hmbBottleImage.localFile.childImageSharp.fixed.height}
                />
                <h4>{hmbTitle}</h4>
                <p>{hmbContent}</p>
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
          acfHomePageBanners {
            bottomBannerText
            topBannerText1
            topBannerText2
            topBannerText3
          }
          acfHomePageCallouts {
            callout1Text
            callout2Text
            callout3Text
            callout4Text
            callout1Image {
              localFile {
                publicURL
              }
            }
            callout2Image {
              localFile {
                publicURL
              }
            }
            callout3Image {
              localFile {
                publicURL
              }
            }
            callout4Image {
              localFile {
                publicURL
              }
            }
          }
          acfPageHeader {
            largeHeader
            leadIn
            smallHeader
          }
          acfHomePageBottles {
            hmbContent
            hmbTitle
            hmbBottleImage {
              localFile {
                childImageSharp {
                  fixed {
                    width
                    height
                    src
                    srcWebp
                  }
                }
              }
            }
            hmbIcon1 {
              localFile {
                publicURL
              }
            }
            hmbIcon2 {
              localFile {
                publicURL
              }
            }
            hmbIcon3 {
              localFile {
                publicURL
              }
            }
            selectContent
            selectTitle
            selectBottleImage {
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
            selectIcon1 {
              localFile {
                publicURL
              }
            }
            selectIcon2 {
              localFile {
                publicURL
              }
            }
            selectIcon3 {
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
