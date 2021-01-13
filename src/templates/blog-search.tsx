import * as React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import SubscribeForm from '../components/SubscribeForm'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { PageTemplateProps } from '../types/page-template'

// markup
const BlogPageTemplate: React.FC<PageTemplateProps> = (props) => {
  const { data, pageContext } = props
  const page = data.allWpPage.edges[0].node
  const posts = data.allWpPost.edges
  const { title, slug, seo } = page
  const { canonical, metaDesc, seoTitle } = seo
  const ogImage = null
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

  return (
    <Layout title={title} slug={slug} canonical={canonical} metaDesc={metaDesc} seoTitle={seoTitle} ogImage={ogImage}>
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
          <SubscribeForm />
          <ol className="grid grid-cols-1 md:grid-cols-2">
            <li className="w-full" key={posts[0]?.node?.id}>
              <AniLink fade to={`/blog/${posts[0]?.node?.slug}`}>
                <Img
                  className="w-full aspect-w-16 aspect-h-9"
                  fluid={posts[0]?.node?.acfFeaturedImage?.featuredImage?.localFile?.childImageSharp.fluid}
                  Tag="figure"
                  imgStyle={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                />
              </AniLink>
              <AniLink fade to={`/blog/${posts[0]?.node?.slug}`}>
                {posts[0]?.node?.title}
              </AniLink>
            </li>
            <li key={posts[1]?.node?.id}>
              <AniLink fade to={`/blog/${posts[1]?.node?.slug}`}>
                <Img
                  className="w-full aspect-w-16 aspect-h-9"
                  fluid={posts[1]?.node?.acfFeaturedImage?.featuredImage?.localFile?.childImageSharp.fluid}
                  Tag="figure"
                  imgStyle={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                />
              </AniLink>
              <AniLink fade to={`/blog/${posts[1]?.node?.slug}`}>
                {posts[1]?.node?.title}
              </AniLink>
            </li>
          </ol>
          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <li key={post.node.id}>
                <AniLink fade to={`/blog/${post?.node?.slug}`}>
                  <Img
                    className="w-full aspect-w-16 aspect-h-9"
                    fluid={post?.node?.acfFeaturedImage?.featuredImage?.localFile?.childImageSharp.fluid}
                    Tag="figure"
                    imgStyle={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                  />
                </AniLink>
                <AniLink fade to={`/blog/${post?.node?.slug}`}>
                  {post?.node?.title}
                </AniLink>
              </li>
            ))}
          </ol>
        </div>
      </article>
      {!isFirst && (
        <AniLink fade to={prevPage} rel="prev">
          previous
        </AniLink>
      )}
      {Array.from({ length: numPages }, (_, i) => (
        <AniLink fade key={`pagination-number${i + 1}`} to={`/${i === 0 ? '' : i + 1}`}>
          {i + 1}
        </AniLink>
      ))}
      {!isLast && (
        <AniLink fade to={nextPage} rel="next">
          next
        </AniLink>
      )}
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!, $skip: Int!, $limit: Int!) {
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
    allWpPost(filter: { status: { eq: "publish" } }, sort: { fields: date }, limit: $limit, skip: $skip) {
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
