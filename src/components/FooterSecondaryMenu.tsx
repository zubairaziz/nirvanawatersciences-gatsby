import * as React from 'react'
// import { Link } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const FooterSecondaryMenu = () => (
  <div>
    <ul>
      <li className="mb-5">
        <AniLink fade className="hover:underline" to="/contact?become-a-reseller">
          Become A Reseller
        </AniLink>
      </li>
      <li className="mb-5">
        <AniLink fade className="hover:underline" to="/locator">
          Locator
        </AniLink>
      </li>
      <li className="mb-5">
        <AniLink fade className="hover:underline" to="/contact">
          Contact
        </AniLink>
      </li>
      <li className="mb-5">
        <AniLink fade className="hover:underline" to="/blog?news">
          Newsroom
        </AniLink>
      </li>
      <li className="mb-5">
        <AniLink fade className="hover:underline" to="/blog">
          Blog
        </AniLink>
      </li>
      <li className="mb-5">
        <AniLink fade className="hover:underline" to="/contact?private-labeling">
          Private Labeling
        </AniLink>
      </li>
    </ul>
  </div>
)

export default FooterSecondaryMenu
