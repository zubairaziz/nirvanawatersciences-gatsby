const path = require(`path`)
const postTemplate = path.resolve('./src/templates/blog-post.js')
const pageTemplate = path.resolve('./src/templates/page.js')
const indexPageTemplate = path.resolve('./src/templates/index.js')
const blogPageTemplate = path.resolve('./src/templates/blog.js')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    query {
      allWpPost {
        edges {
          node {
            template {
              templateName
            }
            slug
            uri
          }
        }
      }
      allWpPage {
        edges {
          node {
            isFrontPage
            isPostsPage
            template {
              templateName
            }
            slug
            uri
          }
        }
      }
    }
  `)
    .then((result) => {
      const posts = result.data.allWpPost.edges
      posts.forEach((post) => {
        createPage({
          path: `/blog${post.node.uri}`,
          component: postTemplate,
          context: {
            id: post.node.id,
            slug: post.node.slug,
          },
        })
      })
      const pages = result.data.allWpPage.edges
      pages.forEach((page) => {
        if (page.node.isFrontPage) {
          createPage({
            path: `${page.node.uri}`,
            component: indexPageTemplate,
            context: {
              id: page.node.id,
              slug: page.node.slug,
            },
          })
        } else if (page.node.isPostsPage) {
          createPage({
            path: `${page.node.uri}`,
            component: blogPageTemplate,
            context: {
              id: page.node.id,
              slug: page.node.slug,
            },
          })
        } else {
          createPage({
            path: `${page.node.uri}`,
            component: pageTemplate,
            context: {
              id: page.node.id,
              slug: page.node.slug,
            },
          })
        }
      })
    })
    .catch((error) => {
      console.log(error)
    })
}
