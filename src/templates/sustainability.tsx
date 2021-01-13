import * as React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import { PageTemplateProps } from '../types/page-template'

// markup
const SustainabilityPageTemplate: React.FC<PageTemplateProps> = (props) => {
  const { data } = props
  const page = data.allWpPage.edges[0].node
  const { title, slug } = page
  const { seo, acfPageHeader, acfSustainabilityContent } = page
  const { canonical, metaDesc, seoTitle } = seo
  const { smallHeader, largeHeader, leadIn } = acfPageHeader
  const {
    sustainabilityHeaderLargeImage,
    sustainabilityHeaderSmallImage,
    sustainabilityPanel1Image,
    sustainabilityPanel1Title,
    sustainabilityPanel1Subhead,
    sustainabilityPanel1Content,
    sustainabilityPanel2Icon,
    sustainabilityPanel2Image,
    sustainabilityPanel2Title,
    sustainabilityPanel2Subhead,
    sustainabilityPanel2Content,
    sustainabilityPanel3Title,
    sustainabilityPanel3Subhead,
    sustainabilityPanel3Content,
    sustainabilityPanel3Icon,
    sustainabilityPanel3Image,
  } = acfSustainabilityContent

  return (
    <Layout title={title} slug={slug} canonical={canonical} metaDesc={metaDesc} seoTitle={seoTitle} ogImage={null}>
      <article>
        <section className="min-h-screen">
          <div className="container">
            <h1>
              {smallHeader ? smallHeader : title}
              <span>{largeHeader}</span>
            </h1>
            {leadIn ? <div className="richtext" dangerouslySetInnerHTML={{ __html: leadIn }} /> : null}
          </div>
          <img src={sustainabilityHeaderLargeImage?.localFile.childImageSharp.fluid.src} alt="" />
          <img src={sustainabilityHeaderSmallImage?.localFile.childImageSharp.fluid.src} alt="" />
          {page.content ? <div className="richtext" dangerouslySetInnerHTML={{ __html: page.content }} /> : null}
        </section>

        <section className="min-h-screen">
          <img src={sustainabilityPanel1Image?.localFile.childImageSharp.fluid.src} alt="" />
          <div className="container">
            <h2>{sustainabilityPanel1Title}</h2>
            <h3>{sustainabilityPanel1Subhead}</h3>
            {sustainabilityPanel1Content ? (
              <div className="richtext" dangerouslySetInnerHTML={{ __html: sustainabilityPanel1Content }} />
            ) : null}
          </div>
        </section>

        <section className="min-h-screen">
          <img src={sustainabilityPanel2Icon?.localFile.publicURL} alt="" />
          <img src={sustainabilityPanel2Image?.localFile.childImageSharp.fluid.src} alt="" />
          <div className="container">
            <h2>{sustainabilityPanel2Title}</h2>
            <h3>{sustainabilityPanel2Subhead}</h3>
            {sustainabilityPanel2Content ? (
              <div className="richtext" dangerouslySetInnerHTML={{ __html: sustainabilityPanel2Content }} />
            ) : null}
          </div>
        </section>

        <section className="min-h-screen">
          <img src={sustainabilityPanel3Icon?.localFile.publicURL} alt="" />
          <img src={sustainabilityPanel3Image?.localFile.childImageSharp.fluid.src} alt="" />
          <div className="container">
            <h2>{sustainabilityPanel3Title}</h2>
            <h3>{sustainabilityPanel3Subhead}</h3>
            {sustainabilityPanel3Content ? (
              <div className="richtext" dangerouslySetInnerHTML={{ __html: sustainabilityPanel3Content }} />
            ) : null}
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
            smallHeader
            largeHeader
            leadIn
          }
          acfSustainabilityContent {
            sustainabilityHeaderLargeImage {
              localFile {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
            sustainabilityHeaderSmallImage {
              localFile {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
            sustainabilityPanel1Image {
              localFile {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
            sustainabilityPanel1Subhead
            sustainabilityPanel1Title
            sustainabilityPanel1Content
            sustainabilityPanel2Icon {
              localFile {
                publicURL
              }
            }
            sustainabilityPanel2Image {
              localFile {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
            sustainabilityPanel2Content
            sustainabilityPanel2Subhead
            sustainabilityPanel2Title
            sustainabilityPanel3Title
            sustainabilityPanel3Subhead
            sustainabilityPanel3Content
            sustainabilityPanel3Icon {
              localFile {
                publicURL
              }
            }
            sustainabilityPanel3Image {
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
export default SustainabilityPageTemplate
