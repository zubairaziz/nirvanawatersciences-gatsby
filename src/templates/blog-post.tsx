import * as React from 'react'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import { PageTemplateProps } from '../types/page-template'

// markup
const PostTemplate: React.FC<PageTemplateProps> = (props) => {
  const { data, pageContext } = props
  const { previous, next } = pageContext
  const post = data.allWpPost.edges[0].node
  const { title, slug, seo, categories, acfFeaturedImage } = post
  const { canonical, metaDesc, seoTitle, opengraphImage } = seo
  const ogImage = opengraphImage?.localFile?.childImageSharp?.fixed?.src
  return (
    <Layout title={title} slug={slug} canonical={canonical} metaDesc={metaDesc} seoTitle={seoTitle} ogImage={ogImage}>
      <article>
        <header className="py-4 pt-8">
          <div className="container flex flex-col leading-none">
            <span className="text-lg text-center md:text-left">
              {categories.nodes.map((category) => (
                <span>{category.name}</span>
              ))}
            </span>
            <h1 className="text-2xl leading-tight text-center md:text-left">{post.title}</h1>
            <span className="mt-2 text-sm text-center text-gray-400 uppercase md:text-left">{post?.date}</span>
            <ul className="flex mt-6 place-content-center">
              <li className="mx-3">
                <a
                  href={`https://twitter.com/intent/tweet?url=https://www.nirvanawatersciences.com/blog/${slug}&text=${post.title}`}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <svg className="w-5 h-5" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M16.1367 4.59375C16.8398 4.06641 17.4727 3.43359 17.9648 2.69531C17.332 2.97656 16.5938 3.1875 15.8555 3.25781C16.6289 2.80078 17.1914 2.09766 17.4727 1.21875C16.7695 1.64062 15.9609 1.95703 15.1523 2.13281C14.4492 1.39453 13.5 0.972656 12.4453 0.972656C10.4062 0.972656 8.75391 2.625 8.75391 4.66406C8.75391 4.94531 8.78906 5.22656 8.85938 5.50781C5.80078 5.33203 3.05859 3.85547 1.23047 1.64062C0.914062 2.16797 0.738281 2.80078 0.738281 3.50391C0.738281 4.76953 1.37109 5.89453 2.39062 6.5625C1.79297 6.52734 1.19531 6.38672 0.703125 6.10547V6.14062C0.703125 7.93359 1.96875 9.41016 3.65625 9.76172C3.375 9.83203 3.02344 9.90234 2.70703 9.90234C2.46094 9.90234 2.25 9.86719 2.00391 9.83203C2.46094 11.3086 3.83203 12.3633 5.44922 12.3984C4.18359 13.3828 2.60156 13.9805 0.878906 13.9805C0.5625 13.9805 0.28125 13.9453 0 13.9102C1.61719 14.9648 3.55078 15.5625 5.66016 15.5625C12.4453 15.5625 16.1367 9.97266 16.1367 5.08594C16.1367 4.91016 16.1367 4.76953 16.1367 4.59375Z"
                      fill="black"
                    />
                  </svg>
                </a>
              </li>
              <li className="mx-3">
                <a
                  href={`https://www.linkedin.com/shareArticle?url=https://www.nirvanawatersciences.com/blog/${slug}&title=${post.title}`}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <svg className="w-5 h-5" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14.625 0.375H1.08984C0.492188 0.375 0 0.902344 0 1.53516V15C0 15.6328 0.492188 16.125 1.08984 16.125H14.625C15.2227 16.125 15.75 15.6328 15.75 15V1.53516C15.75 0.902344 15.2227 0.375 14.625 0.375ZM4.74609 13.875H2.42578V6.38672H4.74609V13.875ZM3.58594 5.33203C2.8125 5.33203 2.21484 4.73438 2.21484 3.99609C2.21484 3.25781 2.8125 2.625 3.58594 2.625C4.32422 2.625 4.92188 3.25781 4.92188 3.99609C4.92188 4.73438 4.32422 5.33203 3.58594 5.33203ZM13.5 13.875H11.1445V10.2188C11.1445 9.375 11.1445 8.25 9.94922 8.25C8.71875 8.25 8.54297 9.19922 8.54297 10.1836V13.875H6.22266V6.38672H8.4375V7.40625H8.47266C8.78906 6.80859 9.5625 6.17578 10.6875 6.17578C13.043 6.17578 13.5 7.75781 13.5 9.76172V13.875Z"
                      fill="black"
                    />
                  </svg>
                </a>
              </li>
              <li className="mx-3">
                <a
                  href={`https://www.facebook.com/sharer.php?u=https://www.nirvanawatersciences.com/blog/${slug}`}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <svg className="w-5 h-5" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M17.7188 9.25C17.7188 4.43359 13.8164 0.53125 9 0.53125C4.18359 0.53125 0.28125 4.43359 0.28125 9.25C0.28125 13.6094 3.44531 17.2305 7.62891 17.8633V11.7812H5.41406V9.25H7.62891V7.35156C7.62891 5.17188 8.92969 3.94141 10.8984 3.94141C11.8828 3.94141 12.8672 4.11719 12.8672 4.11719V6.26172H11.7773C10.6875 6.26172 10.3359 6.92969 10.3359 7.63281V9.25H12.7617L12.375 11.7812H10.3359V17.8633C14.5195 17.2305 17.7188 13.6094 17.7188 9.25Z"
                      fill="black"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <Img
            className="w-full mt-8 aspect-w-8 aspect-h-3 wave-mask"
            fluid={acfFeaturedImage?.featuredImage?.localFile?.childImageSharp.fluid}
            Tag="figure"
            imgStyle={{ width: '100%', height: 'auto', objectFit: 'cover' }}
          />
        </header>
        <div className="container">
          {post?.content && <div className="richtext" dangerouslySetInnerHTML={{ __html: post.content }} />}
        </div>
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
