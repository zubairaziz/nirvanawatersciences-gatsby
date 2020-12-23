import * as React from 'react'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'

// markup
const BlogPageTemplate = ({ data }) => {
  const page = data.allWpPage.edges[0].node
  const posts = data.allWpPost.edges
  return (
    <Layout title={page.title}>
      <main>
        <h1>{page.title}</h1>
        <ol>
          {posts.map((post) => (
            <li key={post.node.id}>
              <Link to={`/blog${post.node.uri}`}>{post.node.title}</Link>
            </li>
          ))}
        </ol>
        <div className="richtext" dangerouslySetInnerHTML={{ __html: page.content }} />
      </main>
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
    allWpPost {
      edges {
        node {
          id
          date
          uri
          title
        }
      }
    }
  }
`
export default BlogPageTemplate
