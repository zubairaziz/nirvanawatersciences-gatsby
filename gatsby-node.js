const path = require(`path`)
const postTemplate = path.resolve('./src/templates/blog-post.js')
const pageTemplate = path.resolve('./src/templates/page.js')
const indexPageTemplate = path.resolve('./src/templates/index.js')
const blogPageTemplate = path.resolve('./src/templates/blog.js')
const productsPageTemplate = path.resolve('./src/templates/products.js')
const aboutPageTemplate = path.resolve('./src/templates/about.js')
const waterPageTemplate = path.resolve('./src/templates/water.js')
const sciencePageTemplate = path.resolve('./src/templates/science.js')
const sustainabilityPageTemplate = path.resolve('./src/templates/sustainability.js')
const contactPageTemplate = path.resolve('./src/templates/contact.js')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data } = await graphql(`
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
  const pages = data.allWpPage.edges
  const posts = data.allWpPost.edges
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
    } else if (page.node.template.templateName === 'Products Page') {
      createPage({
        path: `${page.node.uri}`,
        component: productsPageTemplate,
        context: {
          id: page.node.id,
          slug: page.node.slug,
        },
      })
    } else if (page.node.template.templateName === 'Water Page') {
      createPage({
        path: `${page.node.uri}`,
        component: waterPageTemplate,
        context: {
          id: page.node.id,
          slug: page.node.slug,
        },
      })
    } else if (page.node.template.templateName === 'Science Page') {
      createPage({
        path: `${page.node.uri}`,
        component: sciencePageTemplate,
        context: {
          id: page.node.id,
          slug: page.node.slug,
        },
      })
    } else if (page.node.template.templateName === 'About Page') {
      createPage({
        path: `${page.node.uri}`,
        component: aboutPageTemplate,
        context: {
          id: page.node.id,
          slug: page.node.slug,
        },
      })
    } else if (page.node.template.templateName === 'Contact Page') {
      createPage({
        path: `${page.node.uri}`,
        component: contactPageTemplate,
        context: {
          id: page.node.id,
          slug: page.node.slug,
        },
      })
    } else if (page.node.template.templateName === 'Sustainability Page') {
      createPage({
        path: `${page.node.uri}`,
        component: sustainabilityPageTemplate,
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
}
