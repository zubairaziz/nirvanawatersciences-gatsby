import React, { useEffect, useState } from 'react'
import { useFormik, withFormik } from 'formik'
import axios from 'axios'
import Select from 'react-select'
import * as Yup from 'yup'
import { states, reasons } from '../data/formData'

const formikEnhancer = withFormik({
  validationSchema: Yup.object().shape({
    firstName: Yup.string().required('first name is required'),
    lastName: Yup.string().required('last name is required'),
    email: Yup.string().email('invalid email address').required('email is required'),
    // phone: ,
    // city: ,
    // state: ,
    // zip: ,
    // reason: ,
    // distributor: ,
    // message: ,
  }),
  displayName: 'Contact Form',
})

const ContactForm = () => {
  const WEBSITE_URL = process.env.GATSBY_WORDPRESS_URL
  const USERNAME = 'admin'
  const PASSWORD = 'password'
  const FORM_ID = '89'

  const [token, setToken] = useState('')
  const [formMessage, setFormMessage] = useState('')
  const [isSuccessMessage, setIsSuccessMessage] = useState(false)
  const [messageSent, setMessageSent] = useState(false)

  const dropDownStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? 'white' : '#4D4D4D',
      borderBottom: '1px solid #E5E7EB',
    }),
    control: () => ({
      display: 'flex',
      width: '100%',
      border: 'none',
      color: '#4D4D4D',
      borderBottom: '1px solid #4D4D4D',
    }),
  }

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

  const { isSubmitting, values, errors, handleChange, handleSubmit, setFieldValue, setFieldTouched } = useFormik({
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
      bodyFormData.set('first-name', firstName)
      bodyFormData.set('last-name', lastName)
      bodyFormData.set('email', email)
      bodyFormData.set('phone', phone)
      bodyFormData.set('city', city)
      bodyFormData.set('state', state.value)
      bodyFormData.set('zip', zip)
      bodyFormData.set('reason', reason.value)
      bodyFormData.set('distributor', distributor)
      bodyFormData.set('message', message)
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
    setTimeout(() => {
      setMessageSent(false)
      setIsSuccessMessage(false)
    }, 3000)
  }, [isSuccessMessage, messageSent])

  useEffect(() => {
    if (errors) {
      // eslint-disable-next-line no-console
      console.log('Errors', errors)
    }
  }, [errors])

  return (
    <div className="relative py-4 mb-4 md:py-8 md:mb-8">
      <p className="pb-4 md:pl-2">(*) indicates required fields</p>
      <form onSubmit={handleSubmit} className="relative" noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div
            className="w-full py-2 md:p-2"
            data-sal="slide-up"
            data-sal-duration="500"
            data-sal-easing="easeInOutBack"
          >
            <label htmlFor="firstName" className="sr-only">
              first name
            </label>
            <input
              className="w-full border-0 border-b rounded-0 focus:ring-0"
              id="firstName"
              name="firstName"
              type="text"
              onChange={handleChange}
              value={values.firstName}
              placeholder="first name*"
              required
            />
          </div>
          <div
            className="w-full py-2 md:p-2"
            data-sal="slide-up"
            data-sal-duration="500"
            data-sal-easing="easeInOutBack"
          >
            <label className="sr-only" htmlFor="lastName">
              last name
            </label>
            <input
              className="w-full border-0 border-b rounded-0 focus:ring-0"
              id="lastName"
              name="lastName"
              type="text"
              onChange={handleChange}
              value={values.lastName}
              placeholder="last name*"
              required
            />
          </div>
          <div
            className="w-full py-2 md:p-2"
            data-sal="slide-up"
            data-sal-duration="500"
            data-sal-easing="easeInOutBack"
          >
            <label className="sr-only" htmlFor="email">
              email address
            </label>
            <input
              className="w-full border-0 border-b rounded-0 focus:ring-0"
              id="email"
              name="email"
              type="email"
              onChange={handleChange}
              value={values.email}
              placeholder="email address*"
              required
            />
          </div>
          <div
            className="w-full py-2 md:p-2"
            data-sal="slide-up"
            data-sal-duration="500"
            data-sal-easing="easeInOutBack"
          >
            <label className="sr-only" htmlFor="phone">
              phone
            </label>
            <input
              className="w-full border-0 border-b rounded-0 focus:ring-0"
              id="phone"
              name="phone"
              type="text"
              onChange={handleChange}
              value={values.phone}
              placeholder="phone"
            />
          </div>
          <div
            className="w-full py-2 md:p-2"
            data-sal="slide-up"
            data-sal-duration="500"
            data-sal-easing="easeInOutBack"
          >
            <label className="sr-only" htmlFor="city">
              city
            </label>
            <input
              className="w-full border-0 border-b rounded-0 focus:ring-0"
              id="city"
              name="city"
              type="text"
              onChange={handleChange}
              value={values.city}
              placeholder="city"
            />
          </div>
          <div className="grid w-full grid-cols-1 md:grid-cols-2">
            <div
              className="w-full py-2 md:p-2"
              data-sal="slide-up"
              data-sal-duration="500"
              data-sal-easing="easeInOutBack"
            >
              <label className="sr-only" htmlFor="state">
                state
              </label>
              <Select
                onChange={(value) => setFieldValue('state', value)}
                onBlur={() => setFieldTouched('state', true)}
                value={values.state}
                placeholder="state"
                id="state"
                name="state"
                options={states}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 0,
                  colors: {
                    ...theme.colors,
                    primary25: '#F3F4F6',
                    primary: '#2F3392',
                  },
                })}
                styles={dropDownStyles}
              />
            </div>
            <div
              className="w-full py-2 md:p-2"
              data-sal="slide-up"
              data-sal-duration="500"
              data-sal-easing="easeInOutBack"
            >
              <label className="sr-only" htmlFor="zip">
                zip
              </label>
              <input
                className="w-full border-0 border-b rounded-0 focus:ring-0"
                id="zip"
                name="zip"
                type="text"
                onChange={handleChange}
                value={values.zip}
                placeholder="zip"
              />
            </div>
          </div>
        </div>
        <div className="w-full py-2 md:p-2" data-sal="slide-up" data-sal-duration="500" data-sal-easing="easeInOutBack">
          <label className="sr-only" htmlFor="reason">
            reason
          </label>
          <Select
            onChange={(value) => setFieldValue('reason', value)}
            onBlur={() => setFieldTouched('reason', true)}
            value={values.reason}
            id="reason"
            name="reason"
            placeholder="how can we help you"
            options={reasons}
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary25: '#F3F4F6',
                primary: '#2F3392',
              },
            })}
            styles={dropDownStyles}
          />
        </div>
        <div className="w-full py-2 md:p-2" data-sal="slide-up" data-sal-duration="500" data-sal-easing="easeInOutBack">
          <label htmlFor="distributor">
            <input
              type="checkbox"
              name="distributor"
              id="distributor"
              onChange={handleChange}
              value={values.distributor}
            />
            <span className="ml-3">i would like to become a distributor</span>
          </label>
          <p></p>
        </div>
        <div className="w-full py-2 md:p-2" data-sal="slide-up" data-sal-duration="500" data-sal-easing="easeInOutBack">
          <label className="sr-only" htmlFor="message">
            message
          </label>
          <textarea
            className="w-full border-0 border-b rounded-0 focus:ring-0"
            id="message"
            name="message"
            type="text"
            onChange={handleChange}
            value={values.message}
            placeholder="message"
            rows={5}
          />
        </div>
        <div className="md:pl-2 md:pt-2">
          <button
            type="submit"
            className="button button-hollow"
            disabled={isSubmitting}
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-duration="500"
            data-sal-easing="easeInOutBack"
          >
            submit
          </button>
        </div>
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

const EnhancedForm = formikEnhancer(ContactForm)

export default EnhancedForm
