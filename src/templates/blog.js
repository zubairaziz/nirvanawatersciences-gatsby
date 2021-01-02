import * as React from 'react'
import Layout from '../components/Layout'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

// markup
const BlogPageTemplate = ({ data }) => {
  const page = data.allWpPage.edges[0].node
  const posts = data.allWpPost.edges
  return (
    <Layout title={page.title} slug={`${page.slug}-page`}>
      <article>
        <div className="container">
          <header className="pt-4 text-center text-dark-gray md:pt-48">
            <h1 className="text-3xl md:text-5xl">
              {page?.acfPageHeader?.smallHeader ? page?.acfPageHeader?.smallHeader : page?.title}
            </h1>
            {page?.acfPageHeader?.largeHeader ? (
              <h2 className="text-5xl md:text-7xl">{page?.acfPageHeader?.largeHeader}</h2>
            ) : null}
          </header>
          {page?.content && <div className="richtext" dangerouslySetInnerHTML={{ __html: page.content }} />}
          <form action="/subscribe" className="flex justify-center w-full py-16 gap-x-4">
            <label htmlFor="email">
              email address
              <input className="border-b border-dark-gray md:w-96" type="email" name="email" id="email" />
            </label>
            <button type="submit" className="button-outline">
              subscribe
            </button>
          </form>
          <ol className="grid grid-cols-1 md:grid-cols-2">
            <li className="w-full" key={posts[0]?.node?.id}>
              <Link to={`/blog/${posts[0]?.node?.slug}`}>
                <Img
                  className="w-full aspect-w-16 aspect-h-9"
                  fluid={posts[0]?.node?.acfFeaturedImage?.featuredImage?.localFile?.childImageSharp.fluid}
                  objectFit="cover"
                  Tag="figure"
                  imgStyle={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                />
              </Link>
              <Link to={`/blog/${posts[0]?.node?.slug}`}>{posts[0]?.node?.title}</Link>
            </li>
            <li key={posts[1]?.node?.id}>
              <Link to={`/blog/${posts[1]?.node?.slug}`}>
                <Img
                  className="w-full aspect-w-16 aspect-h-9"
                  fluid={posts[1]?.node?.acfFeaturedImage?.featuredImage?.localFile?.childImageSharp.fluid}
                  objectFit="cover"
                  Tag="figure"
                  imgStyle={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                />
              </Link>
              <Link to={`/blog/${posts[1]?.node?.slug}`}>{posts[1]?.node?.title}</Link>
            </li>
          </ol>
          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <li key={post.node.id}>
                <Link to={`/blog/${post?.node?.slug}`}>
                  <Img
                    className="w-full aspect-w-16 aspect-h-9"
                    fluid={post?.node?.acfFeaturedImage?.featuredImage?.localFile?.childImageSharp.fluid}
                    objectFit="cover"
                    Tag="figure"
                    imgStyle={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                  />
                </Link>
                <Link to={`/blog/${post?.node?.slug}`}>{post?.node?.title}</Link>
              </li>
            ))}
          </ol>
        </div>
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
          acfPageHeader {
            largeHeader
            leadIn
            smallHeader
          }
        }
      }
    }
    allWpPost(filter: { status: { eq: "publish" } }, sort: { fields: date }) {
      edges {
        node {
          id
          title
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
        }
      }
    }
  }
`
export default BlogPageTemplate
