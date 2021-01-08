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
