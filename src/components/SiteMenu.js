import * as React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

const SiteMenu = () => (
  <StaticQuery
    query={graphql`
      query {
        allWpMenu(filter: { slug: { eq: "site-menu" } }) {
          edges {
            node {
              name
              nodeType
              menuItems {
                nodes {
                  label
                  url
                }
              }
              slug
            }
          }
        }
      }
    `}
    render={(data) => {
      return (
        <div>
          <ul>
            {data &&
              data.allWpMenu &&
              data.allWpMenu.edges &&
              data.allWpMenu.edges[0] &&
              data.allWpMenu.edges[0].node &&
              data.allWpMenu.edges[0].node.menuItems &&
              data.allWpMenu.edges[0].node.menuItems.nodes &&
              data.allWpMenu.edges[0].node.menuItems.nodes.map((item) => (
                <li key={item.url}>
                  <Link to={item.url}>{item.label}</Link>
                </li>
              ))}
          </ul>
        </div>
      )
    }}
  />
)

export default SiteMenu
