import * as React from 'react'
import useWhatInput from 'react-use-what-input'

import Navbar from './Navbar'
import SiteMeta from './SiteMeta'
import SiteMenu from './SiteMenu'
import SiteModal from './SiteModal'
import SiteFooter from './SiteFooter'
import SubscribeForm from './SubscribeForm'

interface LayoutProps {
  title: string | undefined
  slug: string | undefined
  canonical: string | undefined
  metaDesc: string | undefined
  seoTitle: string | undefined
  ogImage?: string
}

export const NavigationContext = React.createContext<[boolean, any]>([false, null])
export const ModalContext = React.createContext<[boolean, any]>([false, null])

const NavigationProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [navIsOpen, setNavIsOpen] = React.useState<boolean>(false)

  return <NavigationContext.Provider value={[navIsOpen, setNavIsOpen]}>{children}</NavigationContext.Provider>
}

const ModalProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [modalIsOpen, setModalIsOpen] = React.useState<boolean>(false)

  return <ModalContext.Provider value={[modalIsOpen, setModalIsOpen]}>{children}</ModalContext.Provider>
}

const Layout: React.FC<LayoutProps> = (props) => {
  const [currentInput, currentIntent] = useWhatInput()
  // eslint-disable-next-line no-console
  console.log(`input: ${currentInput}, intent: ${currentIntent}`)
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
        <NavigationProvider>
          <SiteMenu />
          <Navbar />
        </NavigationProvider>
        <ModalProvider>
          <main id="main-content" className={`${slug}-page`}>
            {children}
            <div className="container pt-8 md:pt-20">
              <h3 className="text-3xl text-center md:text-5xl">subscribe to Nirvana Water Sciences</h3>
              <SubscribeForm />
            </div>
          </main>
          <SiteModal />
        </ModalProvider>
        <SiteFooter />
      </div>
    </div>
  )
}

export default Layout
