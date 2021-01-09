import * as React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

// markup
const NotFoundPage = () => {
  return (
    <main>
      <title>Not found</title>
      <h1>Page not found</h1>
      <p>
        Sorry{' '}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{' '}
        we couldn’t find what you were looking for.
        <AniLink fade to="/">
          Go home
        </AniLink>
        .
      </p>
    </main>
  )
}

export default NotFoundPage
