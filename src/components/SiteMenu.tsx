import React, { useContext } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { NavigationContext } from './Layout'
import { motion } from 'framer-motion'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const variants = {
  open: () => ({
    height: '100vh',
    zIndex: 999,
    opacity: 1,
    transition: {
      duration: 0.25,
    },
  }),
  closed: {
    zIndex: -999,
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.25,
    },
  },
}

const listVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.3 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

const listItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

const SiteMenu: React.FC = () => {
  const [navIsOpen, setNavIsOpen] = useContext(NavigationContext)
  const handleButtonPress = () => {
    setNavIsOpen(() => (navIsOpen ? false : true))
  }

  return (
    <StaticQuery
      query={graphql`
        query {
          allWpMenu(filter: { slug: { eq: "site-menu" } }) {
            edges {
              node {
                name
                nodeType
                menuItems {
                  nodes {
                    label
                    url
                  }
                }
                slug
              }
            }
          }
        }
      `}
      render={(data) => {
        return (
          <motion.div
            initial={false}
            animate={navIsOpen ? 'open' : 'closed'}
            exit={{ height: 0, opacity: 0 }}
            variants={variants}
            className="fixed inset-0 w-screen p-4 text-white md:p-12 bg-dark-gray"
          >
            <div className="container relative h-full">
              <button
                onClick={handleButtonPress}
                className="absolute z-50 block w-5 h-5 top-8 right-4 md:top-20 md:right-20"
                aria-label="Close"
              >
                <span className="sr-only">Close</span>
                <svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M1.26562 1.45745L21.3082 21.5" stroke="white" strokeWidth="3" />
                  <path d="M21.3086 1.45745L1.26604 21.5" stroke="white" strokeWidth="3" />
                </svg>
              </button>
              <div className="h-full">
                <div className="grid w-full h-full grid-cols-1 md:grid-cols-2 md:pr-4">
                  <nav className="md:grid md:place-content-center md:border-r md:border-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 282 63"
                      className="w-9/12 pt-8 mx-auto md:w-72 md:mx-0 md:pt-0"
                    >
                      <defs />
                      <mask id="a" width="28" height="36" x="1" y="1" maskUnits="userSpaceOnUse">
                        <path fill="#fff" fillRule="evenodd" d="M1 1.159h27.953V36.84H1V1.16z" clipRule="evenodd" />
                      </mask>
                      <g mask="url(#a)">
                        <path
                          fill="#01ADED"
                          fillRule="evenodd"
                          d="M25.389 29.247v-1.111c0-8.19-.002-16.38.002-24.569.001-1.433.367-1.864 1.577-1.923 1.515-.075 1.98.37 1.98 1.91.002 10.4 0 20.801.004 31.203 0 .81.064 1.656-.916 1.974-.982.319-1.687-.078-2.315-.879C19.01 27.29 12.477 18.59 5.888 9.932 5.5 9.422 5.1 8.917 4.541 8.196c-.03.606-.062.962-.062 1.318-.003 8.328-.001 16.656-.003 24.984-.001 1.47-.48 1.927-1.928 1.868-1.114-.046-1.533-.466-1.54-1.615-.013-2.384-.004-4.768-.004-7.153 0-8.155.003-16.31-.003-24.465 0-.78-.053-1.578.91-1.852.926-.264 1.632-.132 2.31.757 6.737 8.848 13.529 17.654 20.306 26.472.206.268.424.527.636.79l.226-.052z"
                          clipRule="evenodd"
                        />
                      </g>
                      <path
                        fill="#02ADED"
                        fillRule="evenodd"
                        d="M226.457 29.644v-1.42c0-8.265-.001-16.53.002-24.796 0-1.531.429-1.961 1.894-1.939 1.255.02 1.637.414 1.637 1.722.002 10.672-.003 21.344.01 32.016.001.756-.073 1.438-.898 1.67-.815.23-1.53.103-2.112-.66-2.989-3.929-6.028-7.817-9.014-11.747-3.954-5.203-7.875-10.432-11.812-15.648-.161-.214-.341-.415-.682-.827V34.653c0 1.457-.381 1.873-1.701 1.873s-1.774-.453-1.774-1.852c-.006-10.602-.002-21.204-.007-31.806 0-.78.086-1.51.968-1.748.867-.235 1.575-.184 2.239.695 6.813 9.012 13.677 17.985 20.528 26.967.165.217.35.418.722.862z"
                        clipRule="evenodd"
                      />
                      <path
                        fill="#03ADED"
                        fillRule="evenodd"
                        d="M74.007 17.99V3.019c0-1.68.283-1.988 1.931-1.97 4.076.047 8.16-.201 12.226.113 4.96.383 8.863 4.05 9.696 8.914.785 4.583-1.79 9.278-6.286 11.255-.908.4-.867.69-.44 1.425 1.918 3.294 3.782 6.619 5.657 9.937.836 1.482.396 2.162-1.288 2.255-1.219.067-1.914-.385-2.49-1.452-2.112-3.918-4.316-7.788-6.486-11.675-1.136-2.036-.882-2.538 1.435-2.832 4.402-.559 7.38-5.018 6.16-9.223-.812-2.8-3.518-5.034-6.514-5.153-3.122-.123-6.25-.051-9.375-.103-.707-.012-.641.39-.642.842-.005 3.203-.024 6.406-.027 9.609-.005 6.002 0 12.004-.002 18.006 0 1.629-.907 2.326-2.51 1.92-.906-.23-1.055-.911-1.052-1.723.014-4.519.007-9.037.007-13.555V17.99zM168.548 7.27c-1.587 3.81-3.135 7.518-4.679 11.228-2.357 5.666-4.711 11.333-7.066 17-.537 1.292-2.06 1.882-3.246 1.242-.783-.424-.589-1.086-.326-1.719.866-2.082 1.748-4.156 2.628-6.231 3.732-8.81 7.468-17.618 11.193-26.43.297-.701.607-1.326 1.465-1.359.919-.034 1.257.61 1.567 1.353 2.729 6.525 5.47 13.044 8.204 19.567 1.769 4.22 3.535 8.441 5.293 12.666.313.75.854 1.587-.206 2.162-.97.526-2.505.104-2.952-.746-.176-.335-.311-.695-.456-1.048l-11.076-26.94c-.089-.217-.195-.425-.343-.744z"
                        clipRule="evenodd"
                      />
                      <mask id="b" width="33" height="36" x="248" y="1" maskUnits="userSpaceOnUse">
                        <path
                          fill="#fff"
                          fillRule="evenodd"
                          d="M248.166 1.074h32.696v35.908h-32.696V1.074z"
                          clipRule="evenodd"
                        />
                      </mask>
                      <g mask="url(#b)">
                        <path
                          fill="#03ADED"
                          fillRule="evenodd"
                          d="M264.609 7.302c-2.058 4.662-4.048 9.157-6.03 13.656-2.152 4.883-4.294 9.77-6.447 14.653-.519 1.177-2.25 1.738-3.403 1.111-.74-.403-.628-1.014-.354-1.632.978-2.198 1.965-4.392 2.949-6.587 3.839-8.562 7.678-17.123 11.52-25.684.171-.381.323-.782.563-1.12.717-1.007 2.103-.763 2.666.486 1.645 3.658 3.269 7.326 4.898 10.991 3.158 7.108 6.312 14.218 9.469 21.326.615 1.386.567 1.926-.2 2.257-1.195.515-2.747.07-3.207-.973-1.645-3.734-3.267-7.478-4.897-11.219l-7.527-17.265z"
                          clipRule="evenodd"
                        />
                      </g>
                      <path
                        fill="#fff"
                        fillRule="evenodd"
                        d="M128.473 30.562l10.036-23.88c.636-1.512 1.26-3.028 1.91-4.533.439-1.016 2.399-1.478 3.21-.757.586.522.363 1.133.108 1.732-2.025 4.75-4.048 9.5-6.075 14.25-2.587 6.062-5.178 12.124-7.768 18.186-.191.447-.341.92-.779 1.198-.834.53-1.631.186-2.132-.997-1.429-3.372-2.835-6.755-4.25-10.133l-9.339-22.302c-.31-.74-.794-1.544.203-2.092 1.009-.554 2.584-.068 2.976.866 1.324 3.152 2.633 6.31 3.944 9.469 2.515 6.058 5.028 12.117 7.544 18.174.091.22.213.426.412.82z"
                        clipRule="evenodd"
                      />
                      <path
                        fill="#00ACED"
                        fillRule="evenodd"
                        d="M49.001 17.863c0-5.005-.001-10.009.001-15.013 0-1.445.442-1.853 1.975-1.85 1.583.004 2.019.38 2.02 1.817.004 10.144.004 20.288 0 30.431-.001 1.32-.5 1.747-1.986 1.752-1.509.005-2.006-.408-2.008-1.719-.005-5.14-.002-10.279-.002-15.418z"
                        clipRule="evenodd"
                      />
                      <path
                        fill="#09AFEE"
                        fillRule="evenodd"
                        d="M26.078 59.196c.9-1.833 1.691-3.499 2.54-5.134.21-.404.215-1.106.912-1.052.631.048.675.69.89 1.118.818 1.62 1.604 3.255 2.493 5.071l2.526-5.795c.094-.217.168-.442.275-.652.19-.376.303-.93.908-.696.625.243.325.724.156 1.107-1.062 2.407-2.137 4.809-3.212 7.21-.136.304-.25.641-.692.627-.397-.014-.48-.34-.608-.6-.801-1.634-1.587-3.277-2.384-4.913-.101-.208-.239-.397-.422-.698-.921 1.865-1.799 3.64-2.673 5.416-.175.355-.26.817-.793.783-.467-.03-.543-.457-.689-.784a1822.06 1822.06 0 01-3.064-6.94c-.173-.392-.478-.871.075-1.142.628-.308.79.263.98.695l2.782 6.38z"
                        clipRule="evenodd"
                      />
                      <path
                        fill="#fff"
                        fillRule="evenodd"
                        d="M129.03 54.062l-.001 6.007c0 .406.073.908-.488.93-.559.022-.541-.457-.541-.881.002-2.394-.001-4.787.004-7.18.001-.365-.073-.799.409-.917.419-.104.649.196.871.51 1.299 1.836 2.602 3.668 3.907 5.5.19.266.397.518.738.96v-3.078c0-1.025.001-2.051-.001-3.077 0-.388-.014-.798.497-.822.581-.027.573.426.573.849.002 2.359.004 4.718-.002 7.077-.001.366.061.784-.387.948-.499.183-.778-.126-1.046-.508a1072.86 1072.86 0 00-3.783-5.342c-.188-.265-.395-.516-.75-.976z"
                        clipRule="evenodd"
                      />
                      <mask id="c" width="9" height="9" x="160" y="52" maskUnits="userSpaceOnUse">
                        <path
                          fill="#fff"
                          fillRule="evenodd"
                          d="M160.145 52.047h8.847V61h-8.847v-8.953z"
                          clipRule="evenodd"
                        />
                      </mask>
                      <g mask="url(#c)">
                        <path
                          fill="#fff"
                          fillRule="evenodd"
                          d="M164.739 60.996c-1.313-.004-2.329-.178-3.265-.647-.537-.268-.948-.63-1.205-1.14-.155-.306-.22-.606.136-.79.358-.184.657-.108.94.24 1.138 1.406 4.127 1.776 5.709.746.491-.32.778-.724.667-1.278-.116-.583-.644-.832-1.197-.914-1.213-.18-2.445-.254-3.662-.419-1.725-.233-2.49-.825-2.574-1.916-.095-1.232.621-2.065 2.183-2.53 1.433-.426 2.87-.389 4.286.044.762.232 1.382.649 1.736 1.328.136.262.222.503-.114.695-.338.194-.6.129-.881-.132-1.262-1.165-3.28-1.519-4.877-.852-.63.263-1.201.628-1.096 1.348.095.661.66.932 1.337 1.014 1.145.137 2.295.246 3.441.373 1.713.19 2.566.815 2.679 1.952.113 1.146-.713 2.132-2.181 2.574-.748.225-1.522.33-2.062.304z"
                          clipRule="evenodd"
                        />
                      </g>
                      <path
                        fill="#fff"
                        fillRule="evenodd"
                        d="M92.577 60.995c-1.262.006-2.338-.178-3.316-.682-.572-.294-1.02-.702-1.212-1.275-.09-.268-.09-.558.286-.669.295-.087.571-.07.817.18 1.4 1.423 3.29 1.831 5.262 1.144.754-.262 1.377-.681 1.3-1.466-.078-.779-.812-.994-1.558-1.086-1.206-.148-2.423-.226-3.624-.394-1.536-.215-2.317-.853-2.44-1.89-.121-1.044.587-1.98 1.93-2.45 1.628-.567 3.28-.522 4.906.013.38.125.77.341 1.029.609.359.371 1.067.821.42 1.335-.61.485-.866-.193-1.203-.513-1.065-1.014-4.322-1.023-5.406-.023-.634.584-.497 1.366.333 1.75.547.254 1.16.308 1.767.36.795.067 1.592.123 2.386.208 1.728.185 2.593.778 2.727 1.844.16 1.276-.673 2.287-2.291 2.727-.728.198-1.482.308-2.113.278z"
                        clipRule="evenodd"
                      />
                      <path
                        fill="#0EB1EE"
                        fillRule="evenodd"
                        d="M72.005 54.865c0 .48.002.961-.001 1.442-.002.3.04.563.404.547 1.026-.041 2.058.124 3.077-.114.843-.197 1.417-.687 1.454-1.654.035-.94-.473-1.534-1.252-1.878-.611-.27-1.262-.212-1.905-.21-1.779.002-1.779 0-1.777 1.867zm3.848 2.983c.587.686 1.169 1.37 1.756 2.05.255.295.5.608.12.962-.341.32-.599.024-.82-.227a184.389 184.389 0 01-1.972-2.274c-.217-.255-.415-.507-.768-.576-1.838-.36-2.159-.085-2.163 1.888v.31c0 .415.055.914-.493.939-.585.027-.506-.492-.507-.897-.004-1.378-.002-2.756-.002-4.133 0-1.034.011-2.067-.004-3.1-.007-.495.13-.796.649-.787 1.194.02 2.394-.05 3.58.062 1.558.146 2.521 1.089 2.725 2.465.22 1.483-.333 2.396-1.897 3.146-.056.027-.1.082-.204.172z"
                        clipRule="evenodd"
                      />
                      <path
                        fill="#fff"
                        fillRule="evenodd"
                        d="M118.007 56.503c0-1.153.015-2.306-.005-3.458-.012-.68.216-1.053.952-1.045 1.765.019 3.531.006 5.296.006.361 0 .758.023.735.507-.023.472-.42.465-.782.464-1.453-.005-2.908.025-4.36-.015-.585-.016-.751.15-.76.752-.033 2.356-.057 2.356 2.276 2.356l2.7.001c.332 0 .654.037.642.481-.012.448-.351.452-.672.452-1.384.002-2.769.022-4.153-.009-.538-.011-.781.08-.794.72-.048 2.267-.077 2.266 2.172 2.266h3.011c.372 0 .739.062.735.527-.005.489-.405.484-.76.484-1.765.001-3.531-.016-5.296.008-.743.01-.958-.357-.943-1.038.024-1.152.006-2.306.006-3.459zM152.013 56.44c0-1.118.031-2.237-.011-3.353-.028-.747.213-1.1.998-1.087 1.735.028 3.47.007 5.205.01.345.001.756-.041.767.469.014.6-.454.5-.823.5-1.457.005-2.915.025-4.372-.01-.54-.012-.696.147-.712.7-.072 2.405-.092 2.404 2.251 2.404.764 0 1.528-.023 2.29.009.407.017 1.056-.228 1.085.445.032.729-.641.464-1.032.473a89.563 89.563 0 01-3.851.004c-.501-.009-.721.093-.745.68-.095 2.3-.121 2.3 2.153 2.3h3.019c.361 0 .737.008.764.49.027.505-.35.524-.715.524-1.804 0-3.608-.005-5.413.002-.609.002-.875-.27-.864-.893.022-1.222.006-2.445.006-3.668z"
                        clipRule="evenodd"
                      />
                      <path
                        fill="#16B3EE"
                        fillRule="evenodd"
                        d="M61.004 56.452c0-1.115.01-2.23-.004-3.345-.008-.713.243-1.116 1.019-1.107 1.721.02 3.443.004 5.164.01.341 0 .763-.032.788.452.03.571-.428.527-.807.527-1.377.004-2.755.028-4.13-.01-.626-.017-.901.098-.9.835.004 2.243-.032 2.243 2.207 2.243.86 0 1.721-.002 2.582 0 .345.002.768-.032.786.45.02.566-.446.515-.822.516-1.308.004-2.617.032-3.924-.011-.635-.021-.814.192-.824.829-.033 2.12-.059 2.12 2.009 2.12 1.033 0 2.066-.004 3.098.003.355.002.733.033.753.51.022.501-.365.523-.72.524-1.79.004-3.58-.006-5.37.002-.679.003-.904-.382-.904-.995v-3.553z"
                        clipRule="evenodd"
                      />
                      <path
                        fill="#0EB1EE"
                        fillRule="evenodd"
                        d="M191.146 56.344c-.009 2.14 1.337 3.61 3.328 3.636 1.979.026 3.418-1.466 3.428-3.554.009-1.991-1.425-3.425-3.428-3.428-2.021-.003-3.321 1.303-3.328 3.346zM194.46 52c2.632.007 4.539 1.854 4.54 4.398.001 2.624-1.929 4.604-4.486 4.602-2.665-.003-4.534-1.931-4.514-4.657.019-2.533 1.886-4.35 4.46-4.343z"
                        clipRule="evenodd"
                      />
                      <path
                        fill="#03ADED"
                        fillRule="evenodd"
                        d="M202.999 54.915c0 .483.006.967-.001 1.45-.005.337.118.523.453.505 1.027-.054 2.061.128 3.084-.124.811-.2 1.366-.69 1.421-1.592.055-.926-.43-1.561-1.209-1.928-.609-.286-1.262-.234-1.907-.233-1.843.003-1.843 0-1.841 1.922zm3.81 2.917c.626.726 1.202 1.375 1.754 2.046.217.263.607.543.204.95-.375.378-.643.057-.889-.227-.68-.785-1.35-1.579-2.032-2.36-.348-.399-2.22-.69-2.64-.432-.25.153-.198.41-.201.641a96.56 96.56 0 00-.008 1.864c.002.368-.145.62-.498.617-.349-.003-.5-.247-.499-.619.004-2.555.003-5.11.003-7.666 0-.513.312-.629.708-.63 1.065-.001 2.132-.042 3.195.01 1.636.082 2.743.99 3.019 2.39.298 1.51-.274 2.46-2.116 3.416z"
                        clipRule="evenodd"
                      />
                      <path
                        fill="#16B3EE"
                        fillRule="evenodd"
                        d="M216.708 57.333c.602-.017 1.204.04 1.795-.169 1.193-.421 1.724-1.518 1.28-2.705-.474-1.264-2.293-1.981-4.241-1.426-.919.263-.235 1.298-.407 1.958-.059.225-.01.48-.01.72 0 1.62 0 1.62 1.583 1.622zm-2.706-.785c-.001-1.207.001-2.414-.002-3.621-.001-.626.235-.953.906-.925.941.037 1.885-.018 2.826.015 1.936.07 3.259 1.383 3.268 3.206.008 1.803-1.238 2.995-3.226 3.083-.134.006-.269-.001-.404.001-.672.013-1.47-.202-1.983.098-.607.355-.172 1.251-.254 1.905-.049.392-.171.697-.583.69-.426-.008-.543-.353-.545-.728-.006-1.241-.002-2.483-.003-3.724z"
                        clipRule="evenodd"
                      />
                      <path
                        fill="#09AFEE"
                        fillRule="evenodd"
                        d="M44.5 57.67l-2.019-4.14-2.019 4.14h4.039zm2.5 2.76c-.009.234-.1.368-.255.452-.223.12-.467.132-.641-.055a1.488 1.488 0 01-.355-.598c-.376-1.425-1.29-1.873-2.648-1.624a3.006 3.006 0 01-1.085 0c-1.481-.283-2.445.25-2.881 1.764-.11.383-.33.819-.853.545-.464-.242-.252-.632-.09-.962 1.203-2.44 2.403-4.883 3.627-7.312.407-.81.885-.855 1.264-.11 1.279 2.514 2.52 5.048 3.776 7.574.059.12.106.245.141.327z"
                        clipRule="evenodd"
                      />
                      <path
                        fill="#fff"
                        fillRule="evenodd"
                        d="M141.21 56.855c.019 1.038.737 2.201 2.292 2.845 1.546.64 2.942.277 4.157-.723.338-.279.66-.68 1.121-.271.542.481-.05.8-.358 1.08-1.481 1.35-4.105 1.605-5.961.609-2.002-1.074-2.941-3.348-2.219-5.378.68-1.914 2.757-3.14 5.068-3.007 1.168.067 2.205.404 3.086 1.105.297.236.585.507.257.854-.313.331-.662.195-.975-.068-.923-.776-2.033-.967-3.251-.834-2.007.22-3.209 1.45-3.217 3.788z"
                        clipRule="evenodd"
                      />
                      <path
                        fill="#0EB1EE"
                        fillRule="evenodd"
                        d="M183.08 61c-2.285-.012-4.25-1.357-4.858-3.217-.646-1.977.146-3.998 1.986-5.068 1.8-1.047 4.462-.934 6.022.275.321.249.854.534.411.98-.412.414-.786.053-1.153-.205-1.622-1.14-4.147-.961-5.436.364-1.267 1.303-1.107 3.63.337 4.89 1.489 1.3 3.671 1.286 5.289-.063.346-.289.657-.663 1.116-.266.484.419.002.756-.292 1.02-.982.877-2.22 1.23-3.422 1.29z"
                        clipRule="evenodd"
                      />
                      <path
                        fill="#fff"
                        fillRule="evenodd"
                        d="M104.092 61c-2.247.014-4.179-1.278-4.844-3.169-.687-1.952.085-4.017 1.903-5.089 1.802-1.063 4.444-.977 6.041.21.334.25.866.537.488.978-.439.512-.834.066-1.22-.205-1.548-1.088-4.09-.916-5.372.348-1.298 1.28-1.183 3.6.243 4.892 1.473 1.335 3.665 1.364 5.295.052.363-.292.713-.776 1.197-.295.465.462-.097.81-.43 1.086-.951.79-2.127 1.123-3.301 1.192z"
                        clipRule="evenodd"
                      />
                      <path
                        fill="#0EB1EE"
                        fillRule="evenodd"
                        d="M53.519 52c1.218 0 2.435-.001 3.653.001.4.001.813.042.828.505.015.483-.4.508-.803.508-.762-.002-1.526.042-2.283-.012-.726-.052-.898.21-.881.824.054 2.026.054 4.054.068 6.081.002.305.071.63-.166.895a.59.59 0 01-.614.175c-.425-.111-.431-.422-.431-.744.003-1.993-.081-3.991.034-5.98.063-1.096-.358-1.38-1.457-1.25-.562.065-1.14.013-1.711.008-.353-.003-.722-.016-.754-.444-.035-.478.333-.563.75-.564 1.255-.004 2.511-.002 3.767-.002z"
                        clipRule="evenodd"
                      />
                      <path
                        fill="#fff"
                        fillRule="evenodd"
                        d="M112 56.418c0-1.237-.001-2.475.001-3.712.001-.34-.017-.706.461-.706.423 0 .535.284.535.664 0 2.542-.002 5.083.003 7.625.001.377-.091.69-.498.71-.523.025-.502-.392-.502-.769v-3.812z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div className="hidden text-2xl md:py-16 md:flex md:flex-col">
                      <address className="mb-4">
                        <a href="https://goo.gl/maps/iT68P42UJZQxQzHE8" className="hover:underline">
                          Nirvana Water Sciences Corp
                          <br /> One Nirvana Plaza Forestport, NY 13338
                        </a>
                      </address>
                      <a href="tel:+13152628192" className="block hover:underline">
                        (315) 262.8192
                      </a>
                      <a href="tel:+18884635675" className="block hover:underline">
                        (888) 463.5675
                      </a>
                    </div>
                  </nav>
                  <nav className="relative flex flex-col justify-around md:grid md:place-content-center">
                    <div className="absolute right-0 z-0 w-full h-full md:right-20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        className="z-0 w-full h-full"
                        viewBox="0 0 908 1002"
                      >
                        <defs />
                        <path
                          fill="#A6A8AB"
                          d="M904.283 15.125C899.326 5.236 886.935.292 874.544.292h-34.695c-17.347 0-29.738 12.36-32.217 22.25L453.248 825.982 101.342 22.541C98.864 12.653 86.473.292 69.126.292H31.952C14.605.292 7.17 7.708 4.692 15.125c-4.956 4.944-7.434 14.833 0 29.665l408.905 931.993c4.956 12.361 17.347 24.717 32.217 24.717h7.434c14.87 0 27.261-9.884 34.695-22.245l416.34-931.992c4.956-12.361 4.956-22.25 0-32.138z"
                          opacity=".048"
                        />
                      </svg>
                    </div>
                    <motion.ul
                      // animate={navIsOpen ? 'open' : 'closed'}
                      variants={listVariants}
                      className="flex flex-col gap-3 py-8 text-center md:py-0 md:text-left"
                    >
                      {data &&
                        data?.allWpMenu?.edges[0]?.node?.menuItems?.nodes.map((item: any, index: number) => (
                          <motion.li
                            key={item.url}
                            initial={false}
                            animate={navIsOpen ? 'open' : 'closed'}
                            variants={listItemVariants}
                            exit={{ opacity: 0 }}
                            transition={{ delay: index * 100 }}
                            className="mb-3"
                          >
                            <AniLink
                              fade
                              className="relative z-50 text-2xl tracking-widest lowercase md:text-3xl hover:underline"
                              to={item.url}
                            >
                              {item.label}
                            </AniLink>
                          </motion.li>
                        ))}
                    </motion.ul>
                    <div className="md:hidden">
                      <address className="mb-4 text-lg">
                        <a href="https://goo.gl/maps/iT68P42UJZQxQzHE8" className="hover:underline">
                          Nirvana Water Sciences Corp
                          <br /> One Nirvana Plaza Forestport, NY 13338
                        </a>
                      </address>
                      <a href="tel:+13152628192" className="block text-2xl hover:underline">
                        (315) 262.8192
                      </a>
                      <a href="tel:+18884635675" className="block text-2xl hover:underline">
                        (888) 463.5675
                      </a>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </motion.div>
        )
      }}
    />
  )
}

export default SiteMenu
