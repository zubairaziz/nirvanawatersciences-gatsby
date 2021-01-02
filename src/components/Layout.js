import React, { useState } from 'react'
import useWhatInput from 'react-use-what-input'

import Navbar from './Navbar'
import SiteMeta from './SiteMeta'
import SiteMenu from './SiteMenu'
import SiteFooter from './SiteFooter'

export const NavigationContext = React.createContext()

const Layout = (props) => {
  const [currentInput, currentIntent] = useWhatInput()
  const [navIsOpen, setNavIsOpen] = useState(false)

  const { title, slug, children, canonical, metaDesc, opengraphSiteName, seoTitle, ogImage } = props
  return (
    <div>
      <SiteMeta
        title={title}
        slug={slug}
        canonical={canonical}
        metaDesc={metaDesc}
        opengraphSiteName={opengraphSiteName}
        seoTitle={seoTitle}
        ogImage={ogImage}
      />
      <a className="border rounded-b-lg outline-none skip-link focus:ring border-indigo" href="#main-content">
        Skip to main content
      </a>
      <div style={{ gridTemplateRows: 'auto 1fr auto' }} className="grid min-h-screen">
        <NavigationContext.Provider value={[navIsOpen, setNavIsOpen]}>
          <SiteMenu />
          <Navbar location={props.location} />
        </NavigationContext.Provider>
        <main id="main-content" className={`${slug}-page`}>
          {children}
        </main>
        <SiteFooter />
      </div>
    </div>
  )
}

export default Layout
