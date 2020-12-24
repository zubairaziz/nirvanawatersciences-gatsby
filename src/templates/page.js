import * as React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

// markup
const PageTemplate = ({ data }) => {
  const page = data.allWpPage.edges[0].node
  return (
    <Layout title={page.title}>
      <article>
        <h1>{page.title}</h1>
        <div className="richtext" dangerouslySetInnerHTML={{ __html: page.content }} />
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
        }
      }
    }
  }
`
export default PageTemplate
