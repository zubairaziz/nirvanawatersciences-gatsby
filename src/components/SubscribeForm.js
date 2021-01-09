import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import axios from 'axios'

const SubscribeForm = () => {
  const WEBSITE_URL = process.env.GATSBY_WORDPRESS_URL
  const ENDPOINT = process.env.GATSBY_NEWSLETTER_API
  // const CLIENT_KEY = process.env.GATSBY_NEWSLETTER_CLIENT
  // const SECRET_KEY = process.env.GATSBY_NEWSLETTER_SECRET
  // const API_KEY = 'nirvanawatersciencessubscribe'
  const USERNAME = process.env.GATSBY_WORDPRESS_USERNAME
  const PASSWORD = process.env.GATSBY_WORDPRESS_PASSWORD

  const [token, setToken] = useState('')
  const [formMessage, setFormMessage] = useState('')
  const [isSuccessMessage, setIsSuccessMessage] = useState(false)
  const [messageSent, setMessageSent] = useState(false)

  useEffect(() => {
    axios({
      method: 'post',
      url: `${WEBSITE_URL}/wp-json/jwt-auth/v1/token`,
      data: {
        username: USERNAME, // provide a user credential with subscriber role
        password: PASSWORD,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        setToken(response.data.token)
      })
      .catch((error) => {
        throw error
      })
  }, [])

  const { handleChange, isSubmitting, values, handleSubmit } = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: ({ email }, { setSubmitting, resetForm }) => {
      setSubmitting(true)
      const formData = {
        email,
        status: 'confirmed',
        // api_key: API_KEY,
      }

      axios({
        method: 'post',
        url: `${WEBSITE_URL}${ENDPOINT}subscribers`,
        data: formData,
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          resetForm()
          setSubmitting(false)
          setMessageSent(true)
          setFormMessage('You are now subscribed to Nirvana Water Sciences')
          setIsSuccessMessage(true)
        })
        .catch((error) => {
          setSubmitting(false)
          setMessageSent(true)
          setFormMessage('You are already subscribed to Nirvana Water Sciences')
          setIsSuccessMessage(false)
          throw error
        })
    },
  })

  useEffect(() => {
    setTimeout(() => {
      setMessageSent(false)
      setIsSuccessMessage(false)
    }, 3000)
  }, [isSuccessMessage, messageSent])

  return (
    <div className="relative hidden py-4 mb-4 md:py-8 md:mb-8 md:block">
      <form onSubmit={handleSubmit} className="relative flex items-center justify-center w-full gap-x-4">
        <label htmlFor="email">email address</label>
        <input
          className="py-0 border-0 border-b border-dark-gray md:w-96 lg:w-120 focus:ring-0"
          id="email"
          name="email"
          type="email"
          onChange={handleChange}
          value={values.email}
          required
        />
        <button type="submit" className="button button-hollow" disabled={isSubmitting}>
          subscribe
        </button>
      </form>
      {messageSent && isSuccessMessage && (
        <div className="absolute bottom-0 left-0 right-0 block w-full text-center">{formMessage}</div>
      )}
      {messageSent && !isSuccessMessage && (
        <div className="absolute bottom-0 left-0 right-0 block w-full text-center">{formMessage}</div>
      )}
    </div>
  )
}

export default SubscribeForm
