import * as React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Layout from '../components/Layout'

const NotFoundPage: React.FC = () => {
  return (
    <Layout
      title={'Page Not Found'}
      metaDesc={'Sorry, we couldn’t find what you were looking for.'}
      seoTitle={'Page Not Found'}
      ogImage={null}
      slug={null}
      canonical={null}
    >
      <main className="container">
        <header className="mt-8 md:mt-16">
          <h1 className="small-header">404</h1>
          <h2 className="large-header">Page not found</h2>
        </header>
        <div className="mt-4 md:mt-8">
          <p>
            Sorry <span aria-hidden="true">😔</span>, we couldn’t find what you were looking for.{' '}
            <AniLink className="underline hover:text-indigo" fade to="/">
              Go home
            </AniLink>
            .
          </p>
        </div>
      </main>
    </Layout>
  )
}

export default NotFoundPage
