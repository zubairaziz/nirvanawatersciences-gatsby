const path = require(`path`)
const postTemplate = path.resolve('./src/templates/blog-post.tsx')
const pageTemplate = path.resolve('./src/templates/page.tsx')
const indexPageTemplate = path.resolve('./src/templates/index.tsx')
const blogPageTemplate = path.resolve('./src/templates/blog.tsx')
const blogCategoryPageTemplate = path.resolve('./src/templates/blog-category.tsx')
const productsPageTemplate = path.resolve('./src/templates/products.tsx')
const aboutPageTemplate = path.resolve('./src/templates/about.tsx')
const waterPageTemplate = path.resolve('./src/templates/water.tsx')
const sciencePageTemplate = path.resolve('./src/templates/science.tsx')
const sustainabilityPageTemplate = path.resolve('./src/templates/sustainability.tsx')
const contactPageTemplate = path.resolve('./src/templates/contact.tsx')
const kebabCase = require('lodash.kebabcase')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data } = await graphql(`
    query {
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
      allWpPost(sort: { fields: date, order: DESC }) {
        edges {
          node {
            template {
              templateName
            }
            slug
            uri
            categories {
              nodes {
                slug
                name
              }
            }
          }
        }
      }
    }
  `)
  const pages = data.allWpPage.edges
  const posts = data.allWpPost.edges
  const categories = []
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
    } else if (page.node.isPostsPage) {
      // Do nothing
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
  const postsPerPage = 9
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog/` : `/blog/${i + 1}/`,
      component: blogPageTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
        slug: `blog`,
      },
    })
  })
  posts.forEach((post, index, array) => {
    post.node.categories.nodes.forEach((category) => categories.push(category.name))
    const prev = array[index - 1]
    const next = array[index + 1]
    createPage({
      path: `/blog${post.node.uri}`,
      component: postTemplate,
      context: {
        id: post.node.id,
        slug: post.node.slug,
        prev: prev,
        next: next,
      },
    })
  })

  const countCategories = categories.reduce((prev, curr) => {
    prev[curr] = (prev[curr] || 0) + 1
    return prev
  }, {})

  const allCategories = Object.keys(countCategories)

  allCategories.forEach((category) => {
    const link = `/blog/category/${kebabCase(category)}`

    Array.from({
      length: Math.ceil(countCategories[category] / postsPerPage),
    }).forEach((_, i) => {
      createPage({
        path: i === 0 ? link : `${link}/${i + 1}`,
        component: blogCategoryPageTemplate,
        context: {
          allCategories: allCategories,
          category: category.name,
          limit: postsPerPage,
          skip: i * postsPerPage,
          currentPage: i + 1,
          numPages: Math.ceil(countCategories[category] / postsPerPage),
          slug: `blog`,
        },
      })
    })
  })
}
