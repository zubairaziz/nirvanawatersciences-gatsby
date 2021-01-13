import React, { useContext, useRef } from 'react'
import { ModalContext } from './Layout'
import { motion } from 'framer-motion'
import { useClickOutside } from '../hooks/useClickOutside'

const variants = {
  open: () => ({
    zIndex: 999,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  }),
  closed: {
    zIndex: -999,
    opacity: 0,
    transition: {
      duration: 0.25,
    },
  },
}

const SiteModal: React.FC = () => {
  const ref: any = useRef()
  const [modalIsOpen, setModalIsOpen] = useContext(ModalContext)
  const handleButtonPress = () => {
    setModalIsOpen(() => (modalIsOpen ? false : true))
  }
  useClickOutside(ref, () => setModalIsOpen(false))

  return (
    <motion.div
      initial={false}
      animate={modalIsOpen ? 'open' : 'closed'}
      exit={{ opacity: 0 }}
      variants={variants}
      className="fixed inset-0 grid w-screen h-screen overflow-hidden place-content-center"
      style={{ backgroundColor: '#4d4d4d99' }}
    >
      <div className="relative w-screen h-full max-w-3xl p-4 bg-transparent max-h-96">
        <div ref={ref} className="relative w-full h-full p-5 bg-white rounded">
          <button
            className="absolute grid w-6 h-6 p-1 text-xl leading-none text-white rounded-full -top-2 -right-2 place-content-center z-25 bg-dark-gray"
            onClick={handleButtonPress}
          >
            <span className="sr-only">Close</span>
            <span>&times;</span>
          </button>
          Hello World
          <div>
            <button onClick={handleButtonPress} className="button button-hollow">
              close
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default SiteModal
