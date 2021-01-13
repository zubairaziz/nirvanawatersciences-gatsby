import * as React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import SubscribeForm from '../components/SubscribeForm'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { PageTemplateProps } from '../types/page-template'
import { kebabCase } from 'lodash'

// markup
const BlogPageTemplate: React.FC<PageTemplateProps> = (props) => {
  const { data, pageContext } = props
  const page = data.allWpPage.edges[0].node
  const posts = data.allWpPost.edges
  const categories = data.allWpCategory.edges
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
            <h1 className="text-lg leading-none md:text-3xl lg:text-5xl">
              {page?.acfPageHeader?.smallHeader ? page?.acfPageHeader?.smallHeader : page?.title}
            </h1>
            {page?.acfPageHeader?.largeHeader ? (
              <h2 className="text-2xl md:text-5xl lg:text-7xl">{page?.acfPageHeader?.largeHeader}</h2>
            ) : null}
          </header>
          {page?.content && <div className="richtext" dangerouslySetInnerHTML={{ __html: page.content }} />}
          <SubscribeForm />
          <div className="w-full py-4 mx-auto my-4 md:w-3/4 lg:w-1/2 xl:w-1/3 md:py-6m md:my-8">
            <div className="flex justify-end">
              <ul className="justify-center hidden w-full leading-none md:flex">
                <li className="mx-4 border-b md:mx-5 border-dark-gray">all</li>
                {categories.map((category) => (
                  <li key={category.node.id} className="mx-4 md:mx-5">
                    <AniLink
                      fade
                      to={`/blog/category/${kebabCase(category.node.name)}`}
                      className="border-b border-opacity-0 border-dark-gray hover:border-opacity-100"
                    >
                      {category.node.name}
                    </AniLink>
                  </li>
                ))}
              </ul>
              <div className="flex justify-self-end">
                <button className="mx-2 md:hidden">
                  <svg className="w-6 h-6" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.89501 17.5714V10.8309L0.0576897 0.644571C-0.0180978 0.511714 -0.0197819 0.348 0.0560055 0.215143C0.131793 0.0822857 0.270737 0 0.421469 0H15.579C15.7297 0 15.8678 0.0822857 15.9436 0.215143C16.0194 0.348 16.0185 0.511714 15.9427 0.644571L10.1054 10.8309V15.8571C10.1054 16.0191 10.0153 16.1674 9.873 16.2403L6.50467 17.9546C6.44489 17.9846 6.38089 18 6.31605 18C6.23942 18 6.16195 17.9786 6.09458 17.9357C5.97079 17.8577 5.89501 17.7197 5.89501 17.5714ZM9.31976 10.4983L14.8455 0.857143H1.15492L6.67983 10.4983C6.68193 10.5026 6.68299 10.5069 6.68404 10.5111C6.68509 10.5154 6.68614 10.5197 6.68825 10.524C6.70013 10.5482 6.7068 10.5731 6.71386 10.5996L6.7152 10.6046C6.72277 10.632 6.73035 10.6594 6.73204 10.6877C6.73204 10.6924 6.7333 10.6967 6.73456 10.701C6.73583 10.7053 6.73709 10.7096 6.73709 10.7143V16.878L9.26334 15.5923V10.7143C9.26334 10.7099 9.26443 10.7059 9.26551 10.7019C9.26676 10.6973 9.268 10.6928 9.26755 10.6877C9.26912 10.6613 9.27581 10.6365 9.28285 10.6103C9.28336 10.6084 9.28388 10.6065 9.28439 10.6046C9.28484 10.6029 9.28528 10.6012 9.28573 10.5996C9.29279 10.5731 9.29945 10.5482 9.31134 10.524C9.31339 10.5198 9.31444 10.5154 9.31547 10.5111C9.31655 10.5066 9.3176 10.5022 9.31976 10.4983Z"
                      fill="#4d4d4d"
                    />
                  </svg>
                </button>
                <button className="mx-2">
                  <svg className="w-6 h-6" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M17.0579 16.0345L22.7883 21.7653C23.0706 22.0475 23.0706 22.5064 22.7883 22.7887C22.6465 22.9305 22.4612 23 22.2759 23C22.0921 23 21.9068 22.9305 21.765 22.7887L16.0346 17.0579C14.2745 18.5793 12.0556 19.4159 9.70501 19.4159C7.11122 19.4159 4.67375 18.4056 2.83985 16.5716C-0.946618 12.7863 -0.946618 6.62566 2.83985 2.83895C6.62488 -0.946316 12.7866 -0.946316 16.5716 2.83895C20.1844 6.4534 20.3407 12.2232 17.0579 16.0345ZM9.70501 17.9684C11.9123 17.9684 13.9879 17.1086 15.5483 15.5482C18.7703 12.326 18.7703 7.08452 15.5483 3.86234C13.9373 2.2527 11.8211 1.44643 9.70501 1.44643C7.58887 1.44643 5.47417 2.25126 3.86319 3.86234C0.641211 7.08452 0.641211 12.326 3.86319 15.5482C5.42351 17.1086 7.49768 17.9684 9.70501 17.9684Z"
                      fill="#4d4d4d"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <ol className="blog-grid">
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
                <div className="mt-4 text-xs text-gray-400 uppercase">
                  {post?.node?.categories?.nodes.map((category) => (
                    <span>{category.name}</span>
                  ))}
                  <span className="ml-2">{post?.node?.date}</span>
                </div>
                <AniLink fade to={`/blog/${post?.node?.slug}`} className="text-2xl leading-tight">
                  {post?.node?.title}
                </AniLink>
              </li>
            ))}
          </ol>
        </div>
      </article>
      {numPages > 1 ? (
        <aside>
          <div className="container">
            <nav className="flex items-center justify-center w-full pt-4 mt-4 border-t-2 border-dark-gray md:mt-8">
              <div className="flex items-center justify-start w-1/3">
                {!isFirst && (
                  <AniLink fade to={prevPage} rel="prev">
                    previous
                  </AniLink>
                )}
              </div>
              <div className="flex items-center justify-center w-1/3">
                {Array.from({ length: numPages }, (_, i) => (
                  <AniLink fade key={`pagination-number${i + 1}`} to={`/${i === 0 ? '' : i + 1}`}>
                    {i + 1}
                  </AniLink>
                ))}
              </div>
              <div className="flex items-center justify-end w-1/3">
                {!isLast && (
                  <AniLink fade to={nextPage} rel="next">
                    next
                  </AniLink>
                )}
              </div>
            </nav>
          </div>
        </aside>
      ) : null}
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
          date(locale: "en_US", formatString: "D/M/YYYY")
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
    allWpCategory(filter: { count: { gt: 0 } }) {
      edges {
        node {
          name
          id
        }
      }
    }
  }
`
export default BlogPageTemplate
