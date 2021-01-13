import * as React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import { PageTemplateProps } from '../types/page-template'

// markup
const WaterPageTemplate: React.FC<PageTemplateProps> = (props) => {
  const { data } = props
  const page = data.allWpPage.edges[0].node
  const { title, slug, seo } = page
  const { canonical, metaDesc, seoTitle } = seo
  const {
    acfPageHeader,
    acfWaterPageCallouts,
    acfWaterPageTopBanner,
    acfWaterPagePanel1,
    acfWaterPagePanel2,
    acfWaterPagePanel3,
    acfWaterPageBottomBanner,
  } = page
  const { smallHeader, largeHeader, leadIn } = acfPageHeader
  const {
    waterCallout1Text,
    waterCallout1Image,
    waterCallout2Text,
    waterCallout2Image,
    waterCallout3Text,
    waterCallout3Image,
    waterCallout4Text,
    waterCallout4Image,
  } = acfWaterPageCallouts
  const {
    waterBannerTitle,
    waterBannerText1,
    waterBannerValue1,
    waterBannerIcon1,
    waterBannerText2,
    waterBannerValue2,
    waterBannerIcon2,
    waterBannerText3,
    waterBannerValue3,
    waterBannerIcon3,
  } = acfWaterPageTopBanner
  const {
    waterPanel1Title,
    waterPanel1Subtitle,
    waterPanel1Content,
    waterPanel1FeaturedImage,
    waterPanel1Icon,
  } = acfWaterPagePanel1
  const {
    waterPanel2Title,
    waterPanel2Subtitle,
    waterPanel2Content,
    waterPanel2FeaturedImage,
    waterPanel2Icon,
  } = acfWaterPagePanel2
  const {
    waterPanel3Title,
    waterPanel3Subtitle,
    waterPanel3Content,
    waterPanel3FeaturedImage,
    waterPanel3Icon,
  } = acfWaterPagePanel3
  const {
    waterBottomBannerTitle,
    waterBottomBannerText,
    waterBottomBannerCta,
    waterBottomBannerIcon,
  } = acfWaterPageBottomBanner

  return (
    <Layout title={title} slug={slug} canonical={canonical} metaDesc={metaDesc} seoTitle={seoTitle} ogImage={null}>
      <article>
        <section className="min-h-screen">
          <div className="container">
            <h1>{smallHeader ? smallHeader : title}</h1>
            <h2>{largeHeader}</h2>
            {leadIn ? <div className="richtext" dangerouslySetInnerHTML={{ __html: leadIn }} /> : null}
            <div>
              <ul>
                <li>
                  <img src={waterCallout1Image?.localFile.publicURL} alt="" />
                  <span>{waterCallout1Text}</span>
                </li>
                <li>
                  <img src={waterCallout2Image?.localFile.publicURL} alt="" />
                  <span>{waterCallout2Text}</span>
                </li>
                <li>
                  <img src={waterCallout3Image?.localFile.publicURL} alt="" />
                  <span>{waterCallout3Text}</span>
                </li>
                <li>
                  <img src={waterCallout4Image?.localFile.publicURL} alt="" />
                  <span>{waterCallout4Text}</span>
                </li>
              </ul>
            </div>
          </div>
          {page.content ? <div className="richtext" dangerouslySetInnerHTML={{ __html: page.content }} /> : null}
        </section>

        <section className="">
          <div className="banner">
            <div className="container">
              <h3>{waterBannerTitle}</h3>
              <div>
                <ul>
                  <li>
                    <img src={waterBannerIcon1?.localFile.publicURL} alt="" />
                    <div>{waterBannerText1}</div>
                    <div>{waterBannerValue1}</div>
                  </li>
                  <li>
                    <img src={waterBannerIcon2?.localFile.publicURL} alt="" />
                    <div>{waterBannerText2}</div>
                    <div>{waterBannerValue2}</div>
                  </li>
                  <li>
                    <img src={waterBannerIcon3?.localFile.publicURL} alt="" />
                    <div>{waterBannerText3}</div>
                    <div>{waterBannerValue3}</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="min-h-screen">
          <div>
            <img src={waterPanel1FeaturedImage?.localFile.childImageSharp.fluid.src} alt="" />
            <img src={waterPanel1Icon?.localFile.publicURL} alt="" />
            <h3>{waterPanel1Title}</h3>
            <h4>{waterPanel1Subtitle}</h4>
            {waterPanel1Content ? (
              <div className="richtext" dangerouslySetInnerHTML={{ __html: waterPanel1Content }} />
            ) : null}
          </div>
          <div>
            <img src={waterPanel2FeaturedImage?.localFile.childImageSharp.fluid.src} alt="" />
            <img src={waterPanel2Icon?.localFile.publicURL} alt="" />
            <h3>{waterPanel2Title}</h3>
            <h4>{waterPanel2Subtitle}</h4>
            {waterPanel2Content ? (
              <div className="richtext" dangerouslySetInnerHTML={{ __html: waterPanel2Content }} />
            ) : null}
          </div>
          <div>
            <img src={waterPanel3FeaturedImage?.localFile.childImageSharp.fluid.src} alt="" />
            <img src={waterPanel3Icon?.localFile.publicURL} alt="" />
            <h3>{waterPanel3Title}</h3>
            <h4>{waterPanel3Subtitle}</h4>
            {waterPanel3Content ? (
              <div className="richtext" dangerouslySetInnerHTML={{ __html: waterPanel3Content }} />
            ) : null}
          </div>
        </section>

        <section className="">
          <img src={waterBottomBannerIcon?.localFile.publicURL} alt="" />
          <h3>{waterBottomBannerTitle}</h3>
          <div>{waterBottomBannerText}</div>
          <a href={waterBottomBannerCta.url}>{waterBottomBannerCta.title}</a>
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
          acfWaterPageCallouts {
            waterCallout1Text
            waterCallout1Image {
              localFile {
                publicURL
              }
            }
            waterCallout2Text
            waterCallout2Image {
              localFile {
                publicURL
              }
            }
            waterCallout3Text
            waterCallout3Image {
              localFile {
                publicURL
              }
            }
            waterCallout4Text
            waterCallout4Image {
              localFile {
                publicURL
              }
            }
          }
          acfWaterPageTopBanner {
            waterBannerTitle
            waterBannerText1
            waterBannerValue1
            waterBannerIcon1 {
              localFile {
                publicURL
              }
            }
            waterBannerText2
            waterBannerValue2
            waterBannerIcon2 {
              localFile {
                publicURL
              }
            }
            waterBannerText3
            waterBannerValue3
            waterBannerIcon3 {
              localFile {
                publicURL
              }
            }
          }
          acfWaterPagePanel1 {
            waterPanel1Title
            waterPanel1Subtitle
            waterPanel1Content
            waterPanel1FeaturedImage {
              localFile {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
            waterPanel1Icon {
              localFile {
                publicURL
              }
            }
          }
          acfWaterPagePanel2 {
            waterPanel2Title
            waterPanel2Subtitle
            waterPanel2Content
            waterPanel2FeaturedImage {
              localFile {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
            waterPanel2Icon {
              localFile {
                publicURL
              }
            }
          }
          acfWaterPagePanel3 {
            waterPanel3Title
            waterPanel3Subtitle
            waterPanel3Content
            waterPanel3FeaturedImage {
              localFile {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
            waterPanel3Icon {
              localFile {
                publicURL
              }
            }
          }
          acfWaterPageBottomBanner {
            waterBottomBannerTitle
            waterBottomBannerText
            waterBottomBannerCta {
              title
              url
            }
            waterBottomBannerIcon {
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
export default WaterPageTemplate
