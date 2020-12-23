import * as React from 'react'
import { Link } from 'gatsby'

const FooterSecondaryMenu = () => (
  <div>
    <ul>
      <li>
        <Link to="/contact?become-a-reseller">Become A Reseller</Link>
      </li>
      <li>
        <Link to="/locator">Locator</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/blog?news">Newsroom</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/contact?private-labeling">Private Labeling</Link>
      </li>
    </ul>
  </div>
)

export default FooterSecondaryMenu
