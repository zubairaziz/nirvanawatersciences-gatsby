import React, { useState } from 'react'
import Helmet from 'react-helmet'

import Navbar from './Navbar'
import SiteMenu from './SiteMenu'
import SiteFooter from './SiteFooter'

export const NavigationContext = React.createContext()

const Layout = (props) => {
  const [navIsOpen, setNavIsOpen] = useState(false)

  const { title, children } = props
  return (
    <div>
      <Helmet title={`${title} | Nirvana`} />
      <div style={{ gridTemplateRows: 'auto 1fr auto' }} className="grid min-h-screen">
        <NavigationContext.Provider value={[navIsOpen, setNavIsOpen]}>
          <SiteMenu />
          <Navbar location={props.location} />
        </NavigationContext.Provider>
        <main id="main-content">{children}</main>
        <SiteFooter />
      </div>
    </div>
  )
}

export default Layout
