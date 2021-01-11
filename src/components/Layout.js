import React, { useState } from 'react'
import useWhatInput from 'react-use-what-input'

import Navbar from './Navbar'
import SiteMeta from './SiteMeta'
import SiteMenu from './SiteMenu'
import SiteModal from './SiteModal'
import SiteFooter from './SiteFooter'
import SubscribeForm from './SubscribeForm'

export const NavigationContext = React.createContext()
export const ModalContext = React.createContext()

const Layout = (props) => {
  const [currentInput, currentIntent] = useWhatInput()
  // eslint-disable-next-line no-console
  console.log(`input: ${currentInput}, intent: ${currentIntent}`)
  const [navIsOpen, setNavIsOpen] = useState(false)
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const { title, slug, children, canonical, metaDesc, seoTitle, ogImage } = props
  return (
    <div>
      <SiteMeta
        title={title}
        slug={slug}
        canonical={canonical}
        metaDesc={metaDesc}
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
        <ModalContext.Provider value={[modalIsOpen, setModalIsOpen]}>
          <main id="main-content" className={`${slug}-page`}>
            {children}
            <div className="container pt-8 md:pt-20">
              <h3 className="text-3xl text-center md:text-5xl">subscribe to Nirvana Water Sciences</h3>
              <SubscribeForm />
            </div>
          </main>
          <SiteModal />
        </ModalContext.Provider>
        <SiteFooter />
      </div>
    </div>
  )
}

export default Layout
