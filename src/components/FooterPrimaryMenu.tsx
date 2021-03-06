import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const SiteMenu = () => (
  <StaticQuery
    query={graphql`
      query {
        allWpMenu(filter: { slug: { eq: "footer-primary-menu" } }) {
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
        <div className="border-white">
          <ul>
            {data &&
              data?.allWpMenu?.edges[0]?.node?.menuItems?.nodes.map((item) => (
                <li className="mb-5" key={item.url}>
                  <AniLink fade className="hover:underline" to={item.url}>
                    {item.label}
                  </AniLink>
                </li>
              ))}
          </ul>
        </div>
      )
    }}
  />
)

export default SiteMenu
