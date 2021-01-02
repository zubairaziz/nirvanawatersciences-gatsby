import React, { useState } from 'react'
import Helmet from 'react-helmet'
import useWhatInput from 'react-use-what-input'

import Navbar from './Navbar'
import SiteMenu from './SiteMenu'
import SiteFooter from './SiteFooter'

export const NavigationContext = React.createContext()

const Layout = (props) => {
  const [currentInput, currentIntent] = useWhatInput()
  const [navIsOpen, setNavIsOpen] = useState(false)

  const { title, slug, children } = props
  return (
    <div>
      <Helmet title={`${title} | Nirvana`} />
      <a className="border rounded-b-lg outline-none skip-link focus:ring border-indigo" href="#main-content">
        Skip to main content
      </a>
      <div style={{ gridTemplateRows: 'auto 1fr auto' }} className="grid min-h-screen">
        <NavigationContext.Provider value={[navIsOpen, setNavIsOpen]}>
          <SiteMenu />
          <Navbar location={props.location} />
        </NavigationContext.Provider>
        <main id="main-content" className={`${slug}`}>
          {children}
        </main>
        <SiteFooter />
      </div>
    </div>
  )
}

export default Layout
