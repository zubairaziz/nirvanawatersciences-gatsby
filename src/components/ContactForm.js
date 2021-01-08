import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import axios from 'axios'

const ContactForm = () => {
  const WEBSITE_URL = 'http://nirvanawatersciences.local'
  const USERNAME = 'admin'
  const PASSWORD = 'password'
  const FORM_ID = '89'

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
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      city: '',
      state: '',
      zip: '',
      reason: '',
      distributor: false,
      message: '',
    },
    onSubmit: (
      { firstName, lastName, email, phone, city, state, zip, reason, distributor, message },
      { setSubmitting, resetForm }
    ) => {
      setSubmitting(true)
      const bodyFormData = new FormData()
      bodyFormData.set('email', firstName)
      bodyFormData.set('email', lastName)
      bodyFormData.set('email', email)
      bodyFormData.set('email', phone)
      bodyFormData.set('email', city)
      bodyFormData.set('email', state)
      bodyFormData.set('email', zip)
      bodyFormData.set('email', reason)
      bodyFormData.set('email', distributor)
      bodyFormData.set('email', message)
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
      <form onSubmit={handleSubmit} className="relative">
        <div>
          <label htmlFor="firstName" className="sr-only">
            first name
          </label>
          <input
            className=""
            id="firstName"
            name="firstName"
            type="text"
            onChange={handleChange}
            value={values.firstName}
            placeholder="first name*"
            required
          />
        </div>
        <div>
          <label className="sr-only" htmlFor="lastName">
            last name
          </label>
          <input
            className=""
            id="lastName"
            name="lastName"
            type="text"
            onChange={handleChange}
            value={values.lastName}
            placeholder="last name*"
            required
          />
        </div>
        <div>
          <label className="sr-only" htmlFor="email">
            email address
          </label>
          <input
            className=""
            id="email"
            name="email"
            type="email"
            onChange={handleChange}
            value={values.email}
            placeholder="email address*"
            required
          />
        </div>
        <div>
          <label className="sr-only" htmlFor="phone">
            phone
          </label>
          <input
            className=""
            id="phone"
            name="phone"
            type="text"
            onChange={handleChange}
            value={values.phone}
            placeholder="phone"
          />
        </div>
        <div>
          <label className="sr-only" htmlFor="city">
            city
          </label>
          <input
            className=""
            id="city"
            name="city"
            type="text"
            onChange={handleChange}
            value={values.city}
            placeholder="city"
          />
        </div>
        <div>
          <label className="sr-only" htmlFor="state">
            state
          </label>
          <input
            className=""
            id="state"
            name="state"
            type="text"
            onChange={handleChange}
            value={values.state}
            placeholder="state"
          />
        </div>
        <div>
          <label className="sr-only" htmlFor="zip">
            zip
          </label>
          <input
            className=""
            id="zip"
            name="zip"
            type="text"
            onChange={handleChange}
            value={values.zip}
            placeholder="zip"
          />
        </div>
        <div>
          <label className="sr-only" htmlFor="reason">
            reason
          </label>
          <input className="" id="reason" name="reason" type="text" onChange={handleChange} value={values.reason} />
        </div>
        <div>
          <label htmlFor="distributor">
            <input type="checkbox" name="distributor" id="distributor" />
            <span>i would like to become a distributor</span>
          </label>
        </div>
        <div>
          <label className="sr-only" htmlFor="message">
            message
          </label>
          <textarea
            className=""
            id="message"
            name="message"
            type="text"
            onChange={handleChange}
            value={values.message}
            placeholder="message"
          />
        </div>
        <button type="submit" className="button-hollow" disabled={isSubmitting}>
          submit
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

export default ContactForm
