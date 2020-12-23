import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

// markup
const PostTemplate = ({ data }) => {
  const post = data.allWpPost.edges[0].node
  return (
    <Layout title={post.title}>
      <main>
        <h1>{post.title}</h1>
        <div className="richtext" dangerouslySetInnerHTML={{ __html: post.content }} />
      </main>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
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
export default PostTemplate
