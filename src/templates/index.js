import * as React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

// markup
const IndexPageTemplate = ({ data }) => {
  const page = data.allWpPage.edges[0].node
  return (
    <Layout title={page.title} slug={`${page.slug}-page`}>
      <article>
        <div className="container">
          <h1>{page.title}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sit optio fugit porro non sed nemo natus
            possimus tenetur repudiandae expedita, vel architecto voluptatum, illum eaque quod dolorem voluptas
            similique.
          </p>
          <a href="/" className="button-outline">
            Test Button
          </a>
        </div>

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
export default IndexPageTemplate
