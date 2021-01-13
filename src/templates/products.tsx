import * as React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import { PageTemplateProps } from '../types/page-template'

// markup
const ProductsPageTemplate: React.FC<PageTemplateProps> = (props) => {
  const { data } = props
  const page = data.allWpPage.edges[0].node
  const { title, slug } = page
  const { seo } = page
  const { canonical, metaDesc, seoTitle } = seo
  const {
    acfPageHeader,
    acfProductsPageHMB,
    acfProductsPageSparkling,
    acfProductsPageSelect,
    acfProductsPageBanner,
    acfProductsPageCallouts,
  } = page
  const { smallHeader, largeHeader } = acfPageHeader

  return (
    <Layout title={title} slug={slug} canonical={canonical} metaDesc={metaDesc} seoTitle={seoTitle} ogImage={null}>
      <article>
        <section className="min-h-screen">
          <div className="container">
            <div>
              <h1>{smallHeader ? smallHeader : title}</h1>
              <h2>{largeHeader}</h2>
            </div>
            <div>
              <div>
                <div>
                  <img
                    src={acfProductsPageHMB?.hmbImage?.localFile?.childImageSharp?.fixed?.src}
                    alt=""
                    width={acfProductsPageHMB?.hmbImage?.localFile?.childImageSharp?.fixed?.width}
                    height={acfProductsPageHMB?.hmbImage?.localFile?.childImageSharp?.fixed?.height}
                  />
                  <h3>{acfProductsPageHMB?.hmbTitle}</h3>
                </div>
                <div>
                  <h4>{acfProductsPageHMB?.hmbTitle}</h4>
                  <ul>
                    <li>
                      <img src={acfProductsPageHMB?.hmbIcon1?.localFile?.publicURL} alt="" width="40" height="40" />
                      <span>{acfProductsPageHMB?.hmbItem1}</span>
                    </li>
                    <li>
                      <img src={acfProductsPageHMB?.hmbIcon2?.localFile?.publicURL} alt="" width="40" height="40" />
                      <span>{acfProductsPageHMB?.hmbItem2}</span>
                    </li>
                    <li>
                      <img src={acfProductsPageHMB?.hmbIcon3?.localFile?.publicURL} alt="" width="40" height="40" />
                      <span>{acfProductsPageHMB?.hmbItem3}</span>
                    </li>
                    <li>
                      <img src={acfProductsPageHMB?.hmbIcon4?.localFile?.publicURL} alt="" width="40" height="40" />
                      <span>{acfProductsPageHMB?.hmbItem4}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div>
                  <img
                    src={acfProductsPageSelect?.selectImage?.localFile?.childImageSharp?.fixed?.src}
                    alt=""
                    width={acfProductsPageSelect?.selectImage?.localFile?.childImageSharp?.fixed?.width}
                    height={acfProductsPageSelect?.selectImage?.localFile?.childImageSharp?.fixed?.height}
                  />
                  <h3>{acfProductsPageSelect?.selectTitle}</h3>
                </div>
                <div>
                  <h4>{acfProductsPageSelect?.selectTitle}</h4>
                  <ul>
                    <li>
                      <img
                        src={acfProductsPageSelect?.selectIcon1?.localFile?.publicURL}
                        alt=""
                        width="40"
                        height="40"
                      />
                      <span>{acfProductsPageSelect?.selectItem1}</span>
                    </li>
                    <li>
                      <img
                        src={acfProductsPageSelect?.selectIcon2?.localFile?.publicURL}
                        alt=""
                        width="40"
                        height="40"
                      />
                      <span>{acfProductsPageSelect?.selectItem2}</span>
                    </li>
                    <li>
                      <img
                        src={acfProductsPageSelect?.selectIcon3?.localFile?.publicURL}
                        alt=""
                        width="40"
                        height="40"
                      />
                      <span>{acfProductsPageSelect?.selectItem3}</span>
                    </li>
                    <li>
                      <img
                        src={acfProductsPageSelect?.selectIcon4?.localFile?.publicURL}
                        alt=""
                        width="40"
                        height="40"
                      />
                      <span>{acfProductsPageSelect?.selectItem4}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div>
                  <img
                    src={acfProductsPageSparkling?.sparklingImage?.localFile?.childImageSharp?.fixed?.src}
                    alt=""
                    width={acfProductsPageSparkling?.sparklingImage?.localFile?.childImageSharp?.fixed?.width}
                    height={acfProductsPageSparkling?.sparklingImage?.localFile?.childImageSharp?.fixed?.height}
                  />
                  <h3>{acfProductsPageSparkling?.sparklingTitle}</h3>
                </div>
                <div>
                  <h4>{acfProductsPageSparkling?.sparklingTitle}</h4>
                  <ul>
                    <li>
                      <img
                        src={acfProductsPageSparkling?.sparklingIcon1?.localFile?.publicURL}
                        alt=""
                        width="40"
                        height="40"
                      />
                      <span>{acfProductsPageSparkling?.sparklingItem1}</span>
                    </li>
                    <li>
                      <img
                        src={acfProductsPageSparkling?.sparklingIcon2?.localFile?.publicURL}
                        alt=""
                        width="40"
                        height="40"
                      />
                      <span>{acfProductsPageSparkling?.sparklingItem2}</span>
                    </li>
                    <li>
                      <img
                        src={acfProductsPageSparkling?.sparklingIcon3?.localFile?.publicURL}
                        alt=""
                        width="40"
                        height="40"
                      />
                      <span>{acfProductsPageSparkling?.sparklingItem3}</span>
                    </li>
                    <li>
                      <img
                        src={acfProductsPageSparkling?.sparklingIcon4?.localFile?.publicURL}
                        alt=""
                        width="40"
                        height="40"
                      />
                      <span>{acfProductsPageSparkling?.sparklingItem4}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {page.content ? <div className="richtext" dangerouslySetInnerHTML={{ __html: page.content }} /> : null}
        </section>

        <section className="min-h-screen">
          <div className="banner">
            <div className="container">
              <p>{acfProductsPageBanner.bannerText}</p>
            </div>
          </div>
          <div>
            <ul>
              <li>
                <img src={acfProductsPageCallouts?.productsCallout1Image?.localFile?.publicURL} alt="" />
                <span>{acfProductsPageCallouts?.productsCallout1Text}</span>
              </li>
              <li>
                <img src={acfProductsPageCallouts?.productsCallout2Image?.localFile?.publicURL} alt="" />
                <span>{acfProductsPageCallouts?.productsCallout2Text}</span>
              </li>
              <li>
                <img src={acfProductsPageCallouts?.productsCallout3Image?.localFile?.publicURL} alt="" />
                <span>{acfProductsPageCallouts?.productsCallout3Text}</span>
              </li>
              <li>
                <img src={acfProductsPageCallouts?.productsCallout4Image?.localFile?.publicURL} alt="" />
                <span>{acfProductsPageCallouts?.productsCallout4Text}</span>
              </li>
            </ul>
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
            hmbTitle
            hmbSubtitle
            hmbItem1
            hmbItem2
            hmbItem3
            hmbItem4
            hmbImage {
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
            hmbIcon4 {
              localFile {
                publicURL
              }
            }
          }
          acfProductsPageSparkling {
            sparklingTitle
            sparklingSubtitle
            sparklingItem1
            sparklingItem2
            sparklingItem3
            sparklingItem4
            sparklingImage {
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
            sparklingIcon1 {
              localFile {
                publicURL
              }
            }
            sparklingIcon2 {
              localFile {
                publicURL
              }
            }
            sparklingIcon3 {
              localFile {
                publicURL
              }
            }
            sparklingIcon4 {
              localFile {
                publicURL
              }
            }
          }
          acfProductsPageSelect {
            selectTitle
            selectSubtitle
            selectItem1
            selectItem2
            selectItem3
            selectItem4
            selectImage {
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
            selectIcon4 {
              localFile {
                publicURL
              }
            }
          }
          acfProductsPageBanner {
            bannerText
          }
          acfProductsPageCallouts {
            productsCallout1Text
            productsCallout2Text
            productsCallout3Text
            productsCallout4Text
            productsCta {
              target
              title
              url
            }
            productsCallout1Image {
              localFile {
                publicURL
              }
            }
            productsCallout2Image {
              localFile {
                publicURL
              }
            }
            productsCallout3Image {
              localFile {
                publicURL
              }
            }
            productsCallout4Image {
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
export default ProductsPageTemplate
