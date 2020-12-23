import * as React from 'react'

import FooterPrimaryMenu from './FooterPrimaryMenu'
import FooterSecondaryMenu from './FooterSecondaryMenu'

const SiteFooter = ({ children }) => (
  <footer>
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <p>Site Logo</p>
          <p>Social Links</p>
        </div>
        <div className="grid grid-cols-2">
          <FooterPrimaryMenu />
          <FooterSecondaryMenu />
        </div>
      </div>
    </div>
  </footer>
)

export default SiteFooter
