import * as React from 'react'
import { Link } from 'gatsby'

const FooterSecondaryMenu = () => (
  <div>
    <ul>
      <li className="mb-5">
        <Link className="hover:underline" to="/contact?become-a-reseller">
          Become A Reseller
        </Link>
      </li>
      <li className="mb-5">
        <Link className="hover:underline" to="/locator">
          Locator
        </Link>
      </li>
      <li className="mb-5">
        <Link className="hover:underline" to="/contact">
          Contact
        </Link>
      </li>
      <li className="mb-5">
        <Link className="hover:underline" to="/blog?news">
          Newsroom
        </Link>
      </li>
      <li className="mb-5">
        <Link className="hover:underline" to="/blog">
          Blog
        </Link>
      </li>
      <li className="mb-5">
        <Link className="hover:underline" to="/contact?private-labeling">
          Private Labeling
        </Link>
      </li>
    </ul>
  </div>
)

export default FooterSecondaryMenu
