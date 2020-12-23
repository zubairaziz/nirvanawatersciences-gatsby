import * as React from 'react'
import Helmet from 'react-helmet'

import Navbar from './Navbar'
import SiteMenu from './SiteMenu'
import SiteFooter from './SiteFooter'

const Layout = (props) => {
  const { title, children } = props
  return (
    <div>
      <Helmet title={`${title} | Nirvana`} />
      <SiteMenu />
      <Navbar />
      <main className="container">{children}</main>
      <SiteFooter />
    </div>
  )
}

export default Layout
