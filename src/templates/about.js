import * as React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

// markup
const IndexPageTemplate = ({ data }) => {
  const page = data.allWpPage.edges[0].node
  const teamMembers = data.allWpTeamMember.edges
  const { title, slug } = page
  const { seo } = page
  const { canonical, metaDesc, seoTitle } = seo
  const { acfPageHeader, acfAboutContent } = page
  const { smallHeader, largeHeader } = acfPageHeader
  const {
    aboutFeaturedImage,
    aboutPanel1Content,
    aboutPanel1Header,
    aboutPanel2Content,
    aboutPanel2Header,
    aboutPanel2Image1,
    aboutPanel2Image2,
    aboutPanel2Image3,
    aboutPanel2Image4,
  } = acfAboutContent

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

        <img src={aboutFeaturedImage.localFile.childImageSharp.fluid.src} alt="" />

        <section className="min-h-screen">
          <div className="container">
            <h3>{aboutPanel1Header}</h3>
            <p>{aboutPanel1Content}</p>
          </div>
        </section>

        <section className="min-h-screen">
          <div className="container">
            <div>
              <h3>{aboutPanel2Header}</h3>
            </div>
            <div>
              <div className="richtext" dangerouslySetInnerHTML={{ __html: aboutPanel2Content }} />
            </div>
          </div>
          <ul>
            <li>
              <img src={aboutPanel2Image1.localFile.childImageSharp.fluid.src} alt="" />
            </li>
            <li>
              <img src={aboutPanel2Image2.localFile.childImageSharp.fluid.src} alt="" />
            </li>
            <li>
              <img src={aboutPanel2Image3.localFile.childImageSharp.fluid.src} alt="" />
            </li>
            <li>
              <img src={aboutPanel2Image4.localFile.childImageSharp.fluid.src} alt="" />
            </li>
          </ul>
        </section>

        <section className="min-h-screen">
          <div className="container">
            <div>
              <h3>our leadership</h3>
            </div>
            <div>
              <ul>
                {teamMembers.map((member) => (
                  <li key={member.node.id}>
                    <div>{member.node.title}</div>
                    <div>{member.node.acfTeamMember.memberRole}</div>
                  </li>
                ))}
              </ul>
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
          acfAboutContent {
            aboutFeaturedImage {
              localFile {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
            aboutPanel1Header
            aboutPanel1Content
            aboutPanel2Header
            aboutPanel2Content
            aboutPanel2Image1 {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1000) {
                    src
                  }
                }
              }
            }
            aboutPanel2Image2 {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1000) {
                    src
                  }
                }
              }
            }
            aboutPanel2Image3 {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1000) {
                    src
                  }
                }
              }
            }
            aboutPanel2Image4 {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1000) {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
    allWpTeamMember(sort: { order: ASC, fields: date }) {
      edges {
        node {
          id
          title
          acfTeamMember {
            memberRole
          }
        }
      }
    }
  }
`
export default IndexPageTemplate
