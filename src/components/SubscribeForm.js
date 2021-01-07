import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import axios from 'axios'

const SubscribeForm = () => {
  const WEBSITE_URL = 'http://nirvanawatersciences.local'
  const USERNAME = 'admin'
  const PASSWORD = 'password'
  const FORM_ID = '139'

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
        // console.error('Error', error)
      })
  }, [])

  const { handleChange, isSubmitting, values, handleSubmit } = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: ({ email }, { setSubmitting, resetForm }) => {
      setSubmitting(true)
      const bodyFormData = new FormData()
      bodyFormData.set('email', email)

      axios({
        method: 'post',
        url: `${WEBSITE_URL}/wp-json/contact-form-7/v1/contact-forms/${FORM_ID}/feedback`,
        data: bodyFormData,
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      })
        .then((response) => {
          // actions taken when submission goes OK
          resetForm()
          setSubmitting(false)
          setMessageSent(true)
          if (response.data.invalid_fields) {
            setFormMessage(response.data?.invalid_fields[0]?.message)
          } else {
            setFormMessage(response.data.message)
          }
          setIsSuccessMessage(true)
        })
        .catch((error) => {
          // actions taken when submission goes wrong
          setSubmitting(false)
          setMessageSent(true)
          if (error.invalid_fields) {
            setFormMessage(error?.invalid_fields[0]?.message)
          } else {
            setFormMessage(error.message)
          }
          setIsSuccessMessage(false)
        })
    },
  })

  useEffect(() => {
    // set timeout 3 seconds to remove error/success message.
    setTimeout(() => {
      // this will reset messageSent and isSuccessMessage state
      setMessageSent(false)
      setIsSuccessMessage(false)
    }, 3000)
    // this effect function will be dispatched when isSuccessMessage or messageSent changes its state
  }, [isSuccessMessage, messageSent])

  return (
    <div className="relative py-4 mb-4 md:py-8 md:mb-8">
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
        <button type="submit" className="button-hollow" disabled={isSubmitting}>
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
