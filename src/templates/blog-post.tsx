import * as React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import { PageTemplateProps } from '../types/page-template'

// markup
const PostTemplate: React.FC<PageTemplateProps> = (props) => {
  const { data } = props
  const post = data.allWpPost.edges[0].node
  const title = post?.title
  const slug = `blog/${post?.slug}`
  const canonical = post?.seo?.canonical
  const metaDesc = post?.seo?.metaDesc
  const seoTitle = post?.seo?.seoTitle
  const ogImage = post?.seo?.opengraphImage?.localFile?.childImageSharp?.fixed?.src
  return (
    <Layout title={title} slug={slug} canonical={canonical} metaDesc={metaDesc} seoTitle={seoTitle} ogImage={ogImage}>
      <article>
        <h1>{post.title}</h1>
        {post?.content && <div className="richtext" dangerouslySetInnerHTML={{ __html: post.content }} />}
      </article>
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
          categories {
            nodes {
              name
            }
          }
          acfFeaturedImage {
            featuredImage {
              localFile {
                childImageSharp {
                  fluid(srcSetBreakpoints: [480, 640, 768, 1024, 1280, 1536], fit: COVER) {
                    srcSet
                    srcSetWebp
                  }
                }
              }
            }
          }
          seo {
            canonical
            metaDesc
            title
            opengraphImage {
              link
              localFile {
                childImageSharp {
                  fixed(height: 630, width: 1200) {
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
export default PostTemplate
