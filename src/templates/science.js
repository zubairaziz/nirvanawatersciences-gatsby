import * as React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

// markup
const IndexPageTemplate = ({ data }) => {
  const page = data.allWpPage.edges[0].node
  const { title, slug } = page
  const { seo, acfPageHeader, acfScienceContent } = page
  const { canonical, metaDesc, seoTitle } = seo
  const { smallHeader, largeHeader, leadIn } = acfPageHeader
  const {
    scienceHeaderVideo,
    sciencePanel1Title,
    sciencePanel1Content,
    sciencePanel1Image,
    sciencePanel2Quote,
    sciencePanel2Quotee,
    sciencePanel3Icon,
    sciencePanel3Image,
    sciencePanel3LargeTitle,
    sciencePanel3SmallTitle,
    sciencePanel3Content,
    scienceBottomBanner,
    sciencePanel4Title,
    sciencePanel4Content,
    sciencePanel4Image1,
    sciencePanel4Image2,
    sciencePanel4Image3,
  } = acfScienceContent

  return (
    <Layout title={title} slug={slug} canonical={canonical} metaDesc={metaDesc} seoTitle={seoTitle} ogImage={null}>
      <article>
        <section className="min-h-screen">
          <div className="container">
            <h1>
              {smallHeader ? smallHeader : title} <span>{largeHeader}</span>
            </h1>
            <div className="richtext" dangerouslySetInnerHTML={{ __html: leadIn }} />
            <a href={scienceHeaderVideo}>Video</a>
          </div>
          {page.content ? <div className="richtext" dangerouslySetInnerHTML={{ __html: page.content }} /> : null}
        </section>

        <section className="min-h-screen">
          <div className="container">
            <img src={sciencePanel1Image.localFile.childImageSharp.fixed.src} alt="" />
            <h2>{sciencePanel1Title}</h2>
            <div className="richtext" dangerouslySetInnerHTML={{ __html: sciencePanel1Content }} />
          </div>
        </section>

        <section className="min-h-screen">
          <div className="container">
            <div>{sciencePanel2Quote}</div>
            <div>{sciencePanel2Quotee}</div>
          </div>
        </section>

        <section className="min-h-screen">
          <div className="container">
            <img src={sciencePanel3Icon.localFile.publicURL} alt="" />
            <h2>
              <span>{sciencePanel3SmallTitle}</span>
              <span> {sciencePanel3LargeTitle}</span>
            </h2>
            <div className="richtext" dangerouslySetInnerHTML={{ __html: sciencePanel3Content }} />
            <img src={sciencePanel3Image.localFile.childImageSharp.fluid.src} alt="" />
          </div>
        </section>

        <section className="min-h-screen">
          <div className="banner">
            <div className="container">
              <p>{scienceBottomBanner}</p>
            </div>
          </div>
        </section>

        <section className="min-h-screen">
          <div className="container">
            <img src={sciencePanel3Icon.localFile.publicURL} alt="" />
            <h2>
              <span>{sciencePanel3SmallTitle}</span>
              <span> {sciencePanel3LargeTitle}</span>
            </h2>
            <div className="richtext" dangerouslySetInnerHTML={{ __html: sciencePanel3Content }} />
            <img src={sciencePanel3Image.localFile.childImageSharp.fluid.src} alt="" />
          </div>
        </section>

        <section className="min-h-screen">
          <h2>{sciencePanel4Title}</h2>
          <div className="richtext" dangerouslySetInnerHTML={{ __html: sciencePanel4Content }} />
          <ul>
            <li>
              <img src={sciencePanel4Image1.localFile.childImageSharp.fixed.src} alt="" />
            </li>
            <li>
              <img src={sciencePanel4Image2.localFile.childImageSharp.fixed.src} alt="" />
            </li>
            <li>
              <img src={sciencePanel4Image3.localFile.childImageSharp.fixed.src} alt="" />
            </li>
          </ul>
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
          acfScienceContent {
            scienceBottomBanner
            scienceHeaderVideo
            sciencePanel1Title
            sciencePanel1Content
            sciencePanel1Image {
              localFile {
                childImageSharp {
                  fixed {
                    src
                  }
                }
              }
            }
            sciencePanel2Quote
            sciencePanel2Quotee
            sciencePanel3Content
            sciencePanel3Icon {
              localFile {
                publicURL
              }
            }
            sciencePanel3LargeTitle
            sciencePanel3SmallTitle
            sciencePanel3Image {
              localFile {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
            sciencePanel4Title
            sciencePanel4Content
            sciencePanel4Image1 {
              localFile {
                childImageSharp {
                  fixed {
                    src
                  }
                }
              }
            }
            sciencePanel4Image2 {
              localFile {
                childImageSharp {
                  fixed {
                    src
                  }
                }
              }
            }
            sciencePanel4Image3 {
              localFile {
                childImageSharp {
                  fixed {
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
